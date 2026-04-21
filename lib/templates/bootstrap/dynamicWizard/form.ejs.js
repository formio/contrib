Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<div class="dynamicWizard-listgroup list-group\r\n    ' +
((__t = ( ctx.component.striped ? 'table-striped' : '')) == null ? '' : __t) +
'\r\n    ' +
((__t = ( ctx.component.bordered ? 'table-bordered' : '')) == null ? '' : __t) +
'\r\n    ' +
((__t = ( ctx.component.hover ? 'table-hover' : '')) == null ? '' : __t) +
'\r\n    ' +
((__t = ( ctx.component.condensed ? 'table-sm' : '')) == null ? '' : __t) +
'\r\n    "\r\n    role="grid"\r\n    aria-labelledby="l-' +
((__t = (ctx.instance.id)) == null ? '' : __t) +
'-' +
((__t = (ctx.component.key)) == null ? '' : __t) +
' \r\n    ';
 if (ctx.component.description) { ;
__p += 'd-' +
((__t = (ctx.instance.id)) == null ? '' : __t) +
'-' +
((__t = (ctx.component.key)) == null ? '' : __t);
 } ;
__p += '"\r\n>\r\n  ';
 if (ctx.readOnly || !ctx.isChangingMode || ctx.isDisabled) { ;
__p += '\r\n  ';
 if (ctx.header) { ;
__p += '\r\n  <div role="presentation" class="list-group-item list-group-header">\r\n    ' +
((__t = (ctx.header)) == null ? '' : __t) +
'\r\n  </div>\r\n  ';
 } ;
__p += '\r\n  ';
 ctx.rows.forEach(function(row, rowIndex) { ;
__p += '\r\n  <div role="presentation" class="list-group-card" ref="' +
((__t = (ctx.ref.row)) == null ? '' : __t) +
'">\r\n    ' +
((__t = (row)) == null ? '' : __t) +
'\r\n    <div class="has-error">\r\n      <div class="dynamicWizard-row-error help-block">\r\n        ' +
((__t = (ctx.errors[rowIndex])) == null ? '' : __t) +
'\r\n      </div>\r\n    </div>\r\n  </div>\r\n  ';
 }) ;
__p += '\r\n  ';
 if (ctx.footer) { ;
__p += '\r\n  <div class="list-group-item list-group-footer">\r\n    ' +
((__t = (ctx.footer)) == null ? '' : __t) +
'\r\n  </div>\r\n  ';
 } ;
__p += '\r\n  ';
 } else { ;
__p += '\r\n  <div class="list-group-field" ref="' +
((__t = (ctx.ref.row)) == null ? '' : __t) +
'">\r\n    ' +
((__t = ( ctx.currentComponent )) == null ? '' : __t) +
'\r\n  </div>\r\n  ';
 } ;
__p += '\r\n</div>\r\n';
 if (!ctx.readOnly && !ctx.isBlocking) { ;
__p += '\r\n';
 if (!ctx.isChangingMode) { ;
__p += '\r\n';
 if (ctx.hasAddButton) { ;
__p += '\r\n  <p>Would you like to add another?</p>\r\n  <button class="btn btn-primary"\r\n    ref="' +
((__t = (ctx.ref.agreeButton)) == null ? '' : __t) +
'"\r\n    aria-label="Add Another Entry"\r\n  >\r\n    ' +
((__t = (ctx.t('Add another'))) == null ? '' : __t) +
'\r\n  </button>\r\n';
 } ;
__p += '\r\n';
 } else { ;
__p += '\r\n<div class="list-inline" id="' +
((__t = ( ctx.dynamicWizardKey )) == null ? '' : __t) +
'-nav">\r\n  ';
 if (ctx.buttons.cancel) { ;
__p += '\r\n  <div class="list-inline-item">\r\n    <button class="btn btn-secondary btn-wizard-nav-cancel"\r\n      aria-label="Cancel button. Click to reset entry"\r\n      ref="' +
((__t = (ctx.dynamicWizardKey)) == null ? '' : __t) +
'-cancel"\r\n    >\r\n    ' +
((__t = (ctx.t('cancel'))) == null ? '' : __t) +
'\r\n    </button>\r\n  </div>\r\n  ';
 } ;
__p += '\r\n  ';
 if (ctx.buttons.previous) { ;
__p += '\r\n  <div class="list-inline-item">\r\n    <button class="btn btn-primary btn-wizard-nav-previous"\r\n      aria-label="Previous button. Click to go back to the previous component"\r\n      ref="' +
((__t = (ctx.dynamicWizardKey)) == null ? '' : __t) +
'-previous"\r\n    >\r\n      ' +
((__t = (ctx.t('previous'))) == null ? '' : __t) +
'\r\n    </button>\r\n  </div>\r\n  ';
 } ;
__p += '\r\n  ';
 if (ctx.buttons.next) { ;
__p += '\r\n  <div class="list-inline-item">\r\n    <button class="btn btn-primary btn-wizard-nav-next" \r\n      ref="' +
((__t = (ctx.dynamicWizardKey)) == null ? '' : __t) +
'-next"\r\n      aria-label="Next button. Click to go to the next component"\r\n    >\r\n      ' +
((__t = (ctx.t('next'))) == null ? '' : __t) +
'\r\n    </button>\r\n  </div>\r\n  ';
 } ;
__p += '\r\n</div>\r\n';
 } ;
__p += '\r\n';
 } ;
__p += '\r\n';
 if (ctx.options.vpat) { ;
__p += '\r\n<span class="sr-only" aria-live="assertive" ref="dWizardLiveRegion"></span>\r\n';
 } ;

return __p
}