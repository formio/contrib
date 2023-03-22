Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<table class="' +
((__t = ( ctx.tableClass )) == null ? '' : __t) +
'">\n    <tbody>\n        ';
 for (let i = 0; i < ctx.component.numRows; i++) { ;
__p += '\n            <tr>\n                ';
 for (let j = 0; j < ctx.component.numCols; j++) { ;
__p += '\n                    <td>\n                        <div class="form-check">\n                            <input ref="' +
((__t = ( ctx.component.key )) == null ? '' : __t) +
'-' +
((__t = ( i )) == null ? '' : __t) +
'-' +
((__t = ( j )) == null ? '' : __t) +
'" class="form-check-input" type="checkbox">\n                        </div>\n                    </td>\n                ';
 } ;
__p += '\n            </tr>\n        ';
 } ;
__p += '\n    </tbody>\n</table>\n';
return __p
}