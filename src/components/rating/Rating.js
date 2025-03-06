import {Formio} from "@formio/js";
import editForm from './Rating.form.js'

const Field = Formio.Components.components.field;

export default class Rating extends Field {
  static editForm = editForm

  static schema(...extend) {
    return Field.schema({
      type: 'rating',
      label: 'rating',
      key: 'rating',
      icon: 'bi bi-star',
      iconSize: '2rem',
      color: 'blue',
      numberOfIcons: 5,
    }, ...extend);
  }

  static get builderInfo() {
    return {
      title: 'Rating',
      icon: 'star',
      group: 'basic',
      documentation: '/userguide/#rating',
      weight: 0,
      schema: Rating.schema()
    };
  }

  constructor(component, options, data) {
    super(component, options, data);
  }

  render() {
    return super.render(this.renderTemplate('rating', {
      numberOfIcons: this.component.numberOfIcons,
      filledIcons: Number(this.dataValue?.split('/')[0])
    }))
  }

  attachIcon(icons, index) {
    const icon = icons.item(index);
    icon.addEventListener('click', () => {
      if(!this.component.disabled) {
        this.setValue(`${index + 1}/${this.component.numberOfIcons}`);
      }
    })
  }

  attachIcons() {
    const icons = this.refs.icon;
    for (let i = 0; i < icons.length; i++) {
      this.attachIcon(icons, i);
    }
  }

  attach(element) {
    this.loadRefs(element, {
      rating: 'single',
      icon: 'multiple'
    });
    this.attachIcons();
    return super.attach(element);
  }

  get defaultSchema() {
    return Rating.schema();
  }

  setValue(value){
    const changed = super.setValue(value);
    this.redraw();
    return changed;
  }
}
