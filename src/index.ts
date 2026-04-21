import components from './components';
import templates from './templates';

export default {
  // Declare a "Custom Components" group in the form builder sidebar.
  // Components that set `group: 'custom'` in their builderInfo (e.g.
  // CardComponent) will appear under this category.
  options: {
    builder: {
      builder: {
        custom: {
          title: 'Custom Components',
          weight: 10,
          components: {},
        },
      },
    },
  },
  components,
  templates,
};
