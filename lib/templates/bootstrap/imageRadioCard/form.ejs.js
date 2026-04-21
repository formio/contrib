Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<div class="irc-grid irc-grid--cols-' +
((__t = ( ctx.cardColumnsSmall )) == null ? '' : __t) +
'"\n     ref="cardGrid"\n     data-cols="' +
((__t = ( ctx.cardColumns )) == null ? '' : __t) +
'"\n     data-cols-small="' +
((__t = ( ctx.cardColumnsSmall )) == null ? '' : __t) +
'"\n     data-image-fit="' +
((__t = ( ctx.imageFit )) == null ? '' : __t) +
'">\n  ';
 ctx.items.forEach(function(item) {
       var selected = ctx.isSelected(item.value);
       var hasImage = !!item.imageUrl;
       var serialized = ctx.serializeValue(item.value);
       var label = item.label || '';
  ;
__p += '\n    <div class="irc-card';
 if (selected) { ;
__p += ' irc-card--selected';
 } ;

 if (!hasImage) { ;
__p += ' irc-card--text-only';
 } ;
__p += '"\n         ref="wrapper"\n         data-value="' +
((__t = ( serialized )) == null ? '' : __t) +
'">\n      <input type="radio"\n             ref="input"\n             class="irc-card__input"\n             ' +
((__t = ( ctx.inputAttrs )) == null ? '' : __t) +
'\n             value="' +
((__t = ( serialized )) == null ? '' : __t) +
'"\n             id="' +
((__t = ( ctx.instanceId )) == null ? '' : __t) +
'-' +
((__t = ( ctx.componentKey )) == null ? '' : __t) +
'-' +
((__t = ( serialized )) == null ? '' : __t) +
'"\n             ';
 if (selected) { ;
__p += 'checked';
 } ;
__p += '\n             role="radio">\n      ';
 if (hasImage) { ;
__p += '\n        <div class="irc-card__image-wrap">\n          <img src="' +
((__t = ( item.imageUrl )) == null ? '' : __t) +
'" alt="' +
((__t = ( label )) == null ? '' : __t) +
'">\n        </div>\n      ';
 } ;
__p += '\n      <div class="irc-card__label">' +
((__t = ( label )) == null ? '' : __t) +
'</div>\n    </div>\n  ';
 }); ;
__p += '\n</div>\n\n';
 if (ctx.totalPages > 1) { ;
__p += '\n  <div class="irc-pagination">\n    <button type="button" ref="prevButton"';
 if (ctx.currentPage <= 0) { ;
__p += ' disabled';
 } ;
__p += '>\n      ' +
((__t = ( ctx.chevronLeft )) == null ? '' : __t) +
'Prev\n    </button>\n    <span class="irc-pagination__indicator" ref="pageIndicator">\n      ' +
((__t = ( ctx.currentPage + 1 )) == null ? '' : __t) +
' / ' +
((__t = ( ctx.totalPages )) == null ? '' : __t) +
'\n    </span>\n    <button type="button" ref="nextButton"';
 if (ctx.currentPage >= ctx.totalPages - 1) { ;
__p += ' disabled';
 } ;
__p += '>\n      Next' +
((__t = ( ctx.chevronRight )) == null ? '' : __t) +
'\n    </button>\n  </div>\n';
 } ;
__p += '\n';
return __p
}