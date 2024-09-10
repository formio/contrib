import { expect } from 'chai';
import { Utils, Components, Displays } from '@formio/js';
const { cloneDeep, get } = require('lodash');
const sinon = require('sinon');
const sandbox = sinon.createSandbox();

import DynamicWizard from './DynamicWizard';
import Wizard from '../../Wizard';
import wizardWithNestedWizard from './fixtures/wizardWithNestedWizard';
import webformWithNestedWizard from './fixtures/webformWithNestedWizard';
import nestedWizardForm from './fixtures/nestedWizard';
import wizardWithDynamicWizardUnderCondition from './fixtures/wizardWithDynamicWizardUnderCondition';
import wizardWithDisabledDynamicWizard from './fixtures/wizardWithDisabledDynamicWizard';
import wizardWithDynamicWizard from './fixtures/wizardWithDynamicWizard';
import wizardWithDynamicWizardOnInit from './fixtures/wizardWithDynamicWizardOnInit';
import wizardWithDynamicWizardValidation from './fixtures/wizardWithDynamicWizardValidation';
import wizardWithDynamicWizardLogic from './fixtures/wizardWithDynamicWizardLogic';
import simpleDynamicWizardChild from './fixtures/simpleDynamicWizardChild';
import wizardSecondPageNestedDynamicWizard from './fixtures/wizardSecondPageNestedDw';
import wizardWithRequiredDW from './fixtures/wizardWithRequiredDW';
import dynamicWizardWithMinMaxValidation from './fixtures/dynamicWizardWithMinMaxValidation';
import dynamicWizardInsideWizard from './fixtures/dynamicWizardInsideWizard';
import wizardWithEmptyDynamicWizard from './fixtures/wizardWithEmptyDynamicWizard';

describe('DynamicWizard', () => {
  before(() => {
    Components.setComponent('dynamicWizard', DynamicWizard);
  });
  it('rootWizard should be correct for the DynamicWizard inside the wizard nested in the wizard', (done) => {
    const formElement = document.createElement('div');
    const wizard = new Wizard(formElement);
    const nestedWizard = cloneDeep(nestedWizardForm);

    wizard.setForm(wizardWithNestedWizard)?.then(() => {
      const nestedWizardComp = wizard.getComponent('wizardNested');

      nestedWizardComp.loadSubForm = () => {
        nestedWizardComp.formObj = nestedWizard;
        nestedWizardComp.subFormLoading = false;

        return new Promise((resolve) => resolve(nestedWizard));
      };

      nestedWizardComp.createSubForm();

      setTimeout(() => {
        const dynamicWizard = wizard.getComponent('dynamicWizard');

        expect(wizard.id).to.equal(dynamicWizard.rootWizard.id);

        done();
      }, 200);
    }).catch((err) => done(err));;
  });

  it('rootWizard should be correct for the DynamicWizard inside the wizard nested in the webform', (done) => {
    const formElement = document.createElement('div');
    const Webform = Displays.displays.webform;
    const webform = new Webform(formElement);
    const nestedWizard = cloneDeep(nestedWizardForm);

    webform.setForm(webformWithNestedWizard).then(() => {
      const nestedWizardComp = webform.getComponent('wizardNested');

      nestedWizardComp.loadSubForm = () => {
        nestedWizardComp.formObj = nestedWizard;
        nestedWizardComp.subFormLoading = false;

        return new Promise((resolve) => resolve(nestedWizard));
      };

      nestedWizardComp.createSubForm();

      setTimeout(() => {
        const dynamicWizard = webform.getComponent('dynamicWizard');
        expect(nestedWizardComp.subForm.id).to.equal(dynamicWizard.rootWizard.id);

        done();
      }, 200);
    }).catch((err) => done(err));;
  });

  it('Should change prevVisibility value properly when conditions are satisfied', (done) => {
    const formElement = document.createElement('div');
    const wizard = new Wizard(formElement);
    const form = cloneDeep(wizardWithDynamicWizardUnderCondition);

    wizard.setForm(form)?.then(() => {
      const dynamicWizard = wizard.getComponent('dynamicWizard');
      const textFieldnotDW = wizard.getComponent('textFieldnotDW');
      const conditionalValue = 'up';
      const nonConditionalValue = 'wrong value';

      textFieldnotDW.setValue(conditionalValue)

      setTimeout(() => {
        expect(dynamicWizard.prevVisibility).to.be.true;

        textFieldnotDW.setValue(nonConditionalValue)

        setTimeout(() => {
          expect(dynamicWizard.prevVisibility).to.be.false;

          done();
        }, 300);
      }, 300);
    });
  });

  it('Should call addRow method when conditions are satisfied', (done) => {
    const formElement = document.createElement('div');
    const wizard = new Wizard(formElement);
    const form = cloneDeep(wizardWithDynamicWizardUnderCondition);

    wizard.setForm(form)?.then(() => {
      const dynamicWizard = wizard.getComponent('dynamicWizard');
      const textFieldnotDW = wizard.getComponent('textFieldnotDW');
      const conditionalValue = 'up';
      const spy = sandbox.spy(dynamicWizard, 'addRow');

      textFieldnotDW.setValue(conditionalValue)

      setTimeout(() => {
        expect(spy.calledOnce).to.be.true;

        done();
      }, 500);
    });
  });

  it('Should change prevBlocking and isChangingMode property to "false" when component is no longer disabled', (done) => {
    const formElement = document.createElement('div');
    const wizard = new Wizard(formElement);
    const form = cloneDeep(wizardWithDisabledDynamicWizard);

    wizard.setForm(form)?.then(() => {
      const dynamicWizard = wizard.getComponent('dynamicWizard');
      const numberField = wizard.getComponent('number');
      const valueToTriggerAction = 2;

      numberField.setValue(valueToTriggerAction);

      setTimeout(() => {
        expect(dynamicWizard.prevBlocking).to.be.false;
        expect(dynamicWizard.isChangingMode).to.be.false;

        done();
      }, 500);
    });
  });

  it('Should call redraw method on rootWizard when component is no longer disabled', (done) => {
    const formElement = document.createElement('div');
    const wizard = new Wizard(formElement);
    const form = cloneDeep(wizardWithDisabledDynamicWizard);

    wizard.setForm(form)?.then(() => {
      const dynamicWizard = wizard.getComponent('dynamicWizard');
      const numberField = wizard.getComponent('number');
      const valueToTriggerAction = 2;
      const spy = sandbox.spy(dynamicWizard.rootWizard, 'redraw');

      numberField.setValue(valueToTriggerAction);

      setTimeout(() => {
        expect(spy.calledOnce).to.be.true;

        done();
      }, 500);
    });
  });

  it('Should render dynamicWizard in changingMode after init', () => {
    const formElement = document.createElement('div');
    const wizard = new Wizard(formElement);
    const form = cloneDeep(wizardWithDynamicWizardOnInit);

    wizard.setForm(form)?.then(() => {
      const dynamicWizard = wizard.getComponent('dynamicWizard');
      const dynamicWizardInput = dynamicWizard.components[0];
      const editRowsInput = dynamicWizard.editRows[0].components[0];

      expect(wizard.element.className).to.equal('dynamicWizard-changingMode');
      expect(dynamicWizard.isChangingMode).to.be.true;
      expect(dynamicWizardInput).to.equal(editRowsInput);
    });
  });

  it('Should render dynamicWizard in changingMode after set new page', (done) => {
    const formElement = document.createElement('div');
    const wizard = new Wizard(formElement);
    const form = cloneDeep(wizardWithDynamicWizard);

    wizard.setForm(form)?.then(() => {
      const dynamicWizard = wizard.getComponent('dynamicWizard');

      expect(dynamicWizard.editRows).to.have.lengthOf(0);

      const secondPageBtn = wizard.refs[`${wizard.wizardKey}-link`][1];
      const clickEvent = new Event('click');

      secondPageBtn.dispatchEvent(clickEvent);

      setTimeout(() => {
        const dynamicWizardInput = dynamicWizard.components[0];
        const editRowsInput = dynamicWizard.editRows[0].components[0];

        expect(dynamicWizard.isChangingMode).to.be.true;
        expect(wizard.element.className).to.equal('dynamicWizard-changingMode');
        expect(dynamicWizardInput).to.equal(editRowsInput);

        done()
      }, 200);
    });
  });

  it('Should cancel a row and clear the data correctly', (done) => {
    const formElement = document.createElement('div');
    const wizard = new Wizard(formElement);
    const form = cloneDeep(wizardWithDynamicWizardOnInit);

    wizard.setForm(form)?.then(() => {
      const dynamicWizard = wizard.getComponent('dynamicWizard');

      expect(dynamicWizard.editRows.length).to.equal(1);
      expect(dynamicWizard.data).to.deep.equal({ dynamicWizard: [] });

      wizard.getComponent('dynamicWizard[0].textField').setValue('text');

      setTimeout(() => {
        dynamicWizard.nextPage();

        setTimeout(() => {
          expect(dynamicWizard.data).to.deep.equal({ dynamicWizard: [{ textField: 'text', textField1: '' }] });
          dynamicWizard.cancelRow();

          setTimeout(() => {
            expect(dynamicWizard.editRows.length).to.equal(0);
            expect(dynamicWizard.data).to.deep.equal({ dynamicWizard: [] });
            expect(dynamicWizard.isChangingMode).to.be.false;
            expect(wizard.element.className).not.equal('dynamicWizard-changingMode');
            done()
          }, 200);
        }, 200);
      }, 200);
    });
  });

  it('Should edit/save a row correctly', (done) => {
    const formElement = document.createElement('div');
    const wizard = new Wizard(formElement);
    const form = cloneDeep(wizardWithDynamicWizardOnInit);

    wizard.setForm(form)?.then(() => {
      const dynamicWizard = wizard.getComponent('dynamicWizard');

      expect(dynamicWizard.editRows.length).to.equal(1);
      expect(dynamicWizard.data).to.deep.equal({ dynamicWizard: [] });

      wizard.getComponent('dynamicWizard[0].textField').setValue('text');

      setTimeout(() => {
        dynamicWizard.nextPage();

        setTimeout(() => {
          expect(dynamicWizard.data).to.deep.equal({ dynamicWizard: [{ textField: 'text', textField1: '' }] });

          wizard.getComponent('dynamicWizard[0].textField1').setValue('text1');

          setTimeout(() => {
            dynamicWizard.saveRow();

            setTimeout(() => {
              expect(dynamicWizard.editRows.length).to.equal(1);
              expect(dynamicWizard.editRows[0].state).to.equal('saved');
              expect(dynamicWizard.data).to.deep.equal({ dynamicWizard: [{ textField: 'text', textField1: 'text1' }] });
              expect(dynamicWizard.isChangingMode).to.be.false;
              expect(wizard.element.className).not.equal('dynamicWizard-changingMode');

              setTimeout(() => {
                dynamicWizard.editRow(0);

                setTimeout(() => {
                  expect(dynamicWizard.editRows.length).to.equal(1);
                  expect(dynamicWizard.editRows[0].state).to.equal('editing');
                  expect(dynamicWizard.isChangingMode).to.be.true;
                  expect(wizard.element.className).to.equal('dynamicWizard-changingMode');

                  wizard.getComponent('dynamicWizard[0].textField').setValue('changedText');

                  setTimeout(() => {
                    dynamicWizard.nextPage();

                    setTimeout(() => {
                      expect(dynamicWizard.data).to.deep.equal({ dynamicWizard: [{ textField: 'changedText', textField1: 'text1' }] });

                      dynamicWizard.cancelRow();

                      setTimeout(() => {
                        expect(dynamicWizard.editRows.length).to.equal(1);
                        expect(dynamicWizard.editRows[0].state).to.equal('saved');
                        expect(dynamicWizard.data).to.deep.equal({ dynamicWizard: [{ textField: 'text', textField1: 'text1' }] });
                        expect(dynamicWizard.isChangingMode).to.be.false;
                        expect(wizard.element.className).not.equal('dynamicWizard-changingMode');

                        done()
                      }, 100);
                    }, 100);
                  }, 100);
                }, 100);
              }, 100);
            }, 100);
          }, 100);
        }, 100);
      }, 100);
    });
  });
  it('Should cancel a row and clear the data correctly', (done) => {
    const formElement = document.createElement('div');
    const wizard = new Wizard(formElement);
    const form = cloneDeep(wizardWithDynamicWizardValidation);

    wizard.setForm(form)?.then(() => {
      const dynamicWizard = wizard.getComponent('dynamicWizard');
      expect(dynamicWizard.step).to.equal(0);
      expect(dynamicWizard.errors.length).to.equal(0);

      dynamicWizard.nextPage();
      setTimeout(() => {
        expect(dynamicWizard.step).to.equal(0);
        expect(dynamicWizard.errors[0].message).to.equal('Text Field is required');

        wizard.getComponent('dynamicWizard[0].textField').setValue('text');
        setTimeout(() => {
          dynamicWizard.nextPage();

          setTimeout(() => {
            expect(dynamicWizard.step).to.equal(1);
            expect(dynamicWizard.errors.length).to.equal(0);

            done()
          }, 200);
        }, 200);
      }, 200);
    });
  })
  it('Should not cause infinite redraw method on changing the value set by logic', (done) => {
    const formElement = document.createElement('div');
    const wizard = new Wizard(formElement);
    const form = cloneDeep(wizardWithDynamicWizardLogic);

    wizard.setForm(form)?.then(() => {
      const dynamicWizard = wizard.getComponent('dynamicWizard');
      const textField = wizard.getComponent('textField');
      const textArea = wizard.getComponent('textArea');

      textField.setValue('yes');

      setTimeout(() => {
        dynamicWizard.nextPage();
        const renderSpy = sandbox.spy(dynamicWizard, 'render');
        const beforeFocusSpy = sandbox.spy(dynamicWizard, 'beforeFocus');

        setTimeout(() => {
          expect(dynamicWizard.data).to.deep.equal({ dynamicWizard: [{ textField: 'yes', textArea: 'definitely' }] });
          textArea.focus();
          textArea.setValue('random');

          setTimeout(() => {
            expect(dynamicWizard.data).to.deep.equal({ dynamicWizard: [{ textField: 'yes', textArea: 'definitely' }] });
            expect(renderSpy.notCalled).to.be.equal(true);
            expect(beforeFocusSpy.calledOnce).to.be.equal(true);
            done()
          }, 200);
        }, 200);
      }, 200);
    });
  });

  it('Should have components in nested Dynamic Wizard', (done) => {
    const formElement = document.createElement('div');
    const wizard = new Wizard(formElement);
    const form = cloneDeep(wizardSecondPageNestedDynamicWizard);
    const nestedForm = cloneDeep(simpleDynamicWizardChild);

    wizard.setForm(form)?.then(() => {

      const nestedWizardComp = wizard.getComponent('wizardNested');
      nestedWizardComp.loadSubForm = () => {
        nestedWizardComp.formObj = nestedForm;
        nestedWizardComp.subFormLoading = false;

        return new Promise((resolve) => resolve(nestedForm));
      };
      nestedWizardComp.createSubForm()

      setTimeout(() => {
        const dynamicWizard = wizard.getComponent('dynamicWizard');

        const clickWizardBtn = (pathPart, clickError) => {
          const btn = get(wizard.refs, clickError ? pathPart : `${wizard.wizardKey}-${pathPart}`);
          const clickEvent = new Event('click');
          btn.dispatchEvent(clickEvent);
        };

        clickWizardBtn('link[1]', null);

        setTimeout(() => {
          expect(dynamicWizard.components).to.have.lengthOf(1);
          expect(dynamicWizard.editRows).to.have.lengthOf(1);
          expect(dynamicWizard.changingRowIndex).to.equal(0);
          done()
        }, 200)
      }, 200)
    })
  });

  it('Should call triggerChange on proper component', (done) => {
    const formElement = document.createElement('div');
    const wizard = new Wizard(formElement);
    const form = cloneDeep(simpleDynamicWizardChild);

    wizard.setForm(form)?.then(() => {
      const checkbox = wizard.getComponent('checkbox');
      const onChangeSpy = sandbox.spy(checkbox, 'onChange');
      const triggerChangeSpy = sandbox.spy(checkbox, 'triggerRootChange');
      checkbox.setValue(true);
      wizard.render();

      setTimeout(() => {
        expect(onChangeSpy.calledOnce).to.be.equal(true);
        expect(triggerChangeSpy.calledOnce).to.be.equal(true);
        expect(checkbox.root.id).to.be.equal(wizard.id);
        done();
      }, 200)
    });
  });

  it('Should work in edit mode', (done) => {
    const formElement = document.createElement('div');
    const wizard = new Wizard(formElement);
    const form = cloneDeep(wizardWithDynamicWizardOnInit);
    const submission = {
      "_id": "608fb38c4b356614a4d73db2",
      "data": {
        "dynamicWizard": [
          {
            "textField": "text1",
            "textField1": "text2"
          }
        ]
      },
  };

    wizard.setForm(form)?.then(() => {
      wizard.setValue(submission, {}, false);
      const dynamicWizard = wizard.getComponent('dynamicWizard');
      dynamicWizard.redraw().then(() => {
        expect(dynamicWizard.editRows.length).to.equal(1);
        expect(dynamicWizard.editRows[0].state).to.equal('saved');
        expect(dynamicWizard.isChangingMode).to.be.false;
        expect(wizard.element.className).not.equal('dynamicWizard-changingMode');

        done();
      }).catch((err) => done(err));
    })
  }).timeout(10000)

  it('Should display components near DW in edit mode while clicking on the error in the Error list', (done) => {
    const formElement = document.createElement('div');
    const wizard = new Wizard(formElement);
    const form = cloneDeep(wizardWithRequiredDW);
    const clickEvent = new Event('click');

    wizard.setForm(form)?.then(() => {
      const clickWizardBtn = (pathPart, clickError) => {
        const btn = get(wizard.refs, clickError ? pathPart : `${wizard.wizardKey}-${pathPart}`);
        btn.dispatchEvent(clickEvent);
      };

      clickWizardBtn('link[2]', null);

      setTimeout(() => {
        clickWizardBtn('submit', null);

        setTimeout(() => {
          expect(wizard.errors.length).to.equal(4);
          expect((wizard.refs as any).errorRef.length).to.equal(4);

          const secondListErrorBtn = (wizard.refs as any).errorRef[1];
          secondListErrorBtn.dispatchEvent(clickEvent);

          setTimeout(() => {
            expect(wizard.page).to.equal(1);
            expect(wizard.element.className).to.equal('dynamicWizard-changingMode');

            const firstListErrorBtn = (wizard.refs as any).errorRef[0];
            firstListErrorBtn.dispatchEvent(clickEvent);

            setTimeout(() => {
              expect(wizard.page).to.equal(0);
              expect(wizard.element.className).not.equal('dynamicWizard-changingMode');
              done()
            }, 200);
          }, 200);
        }, 200);
      }, 200);
    });
  });

  it('Should hide "Delete"/"Yes" buttons when there are min-max number of data entries display', (done) => {
    const formElement = document.createElement('div');
    const wizard = new Wizard(formElement);
    const form = cloneDeep(dynamicWizardWithMinMaxValidation);

    wizard.setForm(form)?.then(() => {
      const dynamicWizard = wizard.getComponent('dynamicWizard');
      expect(dynamicWizard.isChangingMode).to.equal(true);
      dynamicWizard.nextPage();
      setTimeout(() => {
        expect(dynamicWizard.isChangingMode).to.equal(false);
        dynamicWizard.removeRow(0);
        setTimeout(() => {
          dynamicWizard.addRow();
          setTimeout(() => {
            expect(dynamicWizard.isChangingMode).to.equal(true);
            done();
          }, 200);
        }, 200)
      }, 200);
    });
  });

  it('getComponentPath should return correct path', (done) => {
    const formElement = document.createElement('div');
    const Webform = Displays.displays.webform;
    const webform = new Webform(formElement);

    webform.setForm(dynamicWizardInsideWizard).then(() => {
      const wizardComp = webform.getComponent('dynamicWizard');
      const nestedWizardComp = webform.getComponent('nestedDynamicWizard');

      expect(Utils.getComponentPath(wizardComp)).to.equal('dynamicWizard');
      expect(Utils.getComponentPath(nestedWizardComp)).to.equal('dynamicWizard.nestedDynamicWizard');

      done();

    }).catch((err) => done(err));;
  });

  it('Navigation buttons should render correctly if there are no components inside', (done) => {
    const formElement = document.createElement('div');
    const wizard = new Wizard(formElement);
    const form = cloneDeep(wizardWithEmptyDynamicWizard);

    wizard.setForm(form)?.then(() => {
      const dynamicWizard = wizard.getComponent('dynamicWizard');
      const buttons = {
        cancel: { name: 'cancel', method: 'cancel' },
        submit: { name: 'submit', method: 'submit' }
      }
      expect(dynamicWizard.editRows).to.have.lengthOf(0);
      expect(dynamicWizard.buttons).to.deep.equal({});
      expect(wizard.buttons).to.deep.equal(buttons);

      done();
    }).catch((err) => done(err));
  });
});
