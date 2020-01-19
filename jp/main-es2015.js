(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--The content below is only a placeholder and can be replaced.-->\r\n\r\n<aside [mdcDrawerContainer]=\"temporary\" [(open)]=\"drawerOpen\">\r\n  <nav mdcDrawer (click)=\"toggleDrawer()\">\r\n    <!-- <div mdcDrawerToolbarSpacer>\r\n      <a mdcToolbarTitle class=\"router-active\" routerLink=\"/\">明日方舟工具箱</a>\r\n    </div> -->\r\n    <div mdcDrawerHeader>\r\n      <div mdcDrawerHeaderContent>\r\n        <div fxLayout=\"row\" class=\"drawer-header\">\r\n          <a href=\"/\"><img class=\"img-header\" src=\"../assets/icons/android-chrome-192x192.png\" /></a>\r\n          <div fxLayout=\"column\" fxLayoutAlign=\"space-around end\">\r\n            <div>\r\n              <a i18n mdcToolbarTitle class=\"router-active\" routerLink=\"/\">明日方舟工具箱</a><br />\r\n            </div>\r\n            <div>\r\n              <a i18n mdcToolbarTitle class=\"router-active small\">by 一只灰猫</a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div mdcDrawerContent mdcListGroup>\r\n      <nav mdcList>\r\n        <a mdcListItem routerLink=\"/hr\">\r\n          <i mdcListItemGraphic class=\"material-icons\" aria-hidden=\"true\">person_add</i>\r\n          <ng-container i18n>公开招募</ng-container> \r\n        </a>\r\n        <a mdcListItem routerLink=\"/lvlup\">\r\n          <i mdcListItemGraphic class=\"material-icons\" aria-hidden=\"true\">trending_up</i>\r\n          <ng-container i18n>升级计算</ng-container>\r\n        </a>\r\n        <a mdcListItem routerLink=\"/material\">\r\n          <i mdcListItemGraphic class=\"material-icons\" aria-hidden=\"true\">add_shopping_cart</i>\r\n          <ng-container i18n>精英材料</ng-container>\r\n        </a>\r\n        <a mdcListItem routerLink=\"/charmat\">\r\n          <i mdcListItemGraphic class=\"material-icons\" aria-hidden=\"true\">nature_people</i>\r\n          <ng-container i18n>干员材料</ng-container>\r\n        </a>\r\n        <a mdcListItem routerLink=\"/autodetecthash\">\r\n          <i mdcListItemGraphic class=\"material-icons\" aria-hidden=\"true\">search</i>\r\n          <ng-container i18n>自动导入(hash)</ng-container>\r\n        </a>\r\n      </nav>\r\n      <hr mdcListDivider>\r\n      <nav mdcList>\r\n        <a mdcListItem href=\"https://github.com/graueneko/\">\r\n          <i mdcListItemGraphic class=\"material-icons\" aria-hidden=\"true\">email</i>\r\n          <ng-container i18n>联系作者</ng-container>\r\n        </a>\r\n        <a mdcListItem href=\"https://github.com/graueneko/aktools/\">\r\n          <i mdcListItemGraphic class=\"material-icons\" aria-hidden=\"true\">people</i>\r\n          <ng-container i18n>加入我们</ng-container>\r\n        </a>\r\n      </nav>\r\n    </div>\r\n    <img id=\"aside-logo\" src=\"https://ak.hypergryph.com/assets/index/images/ak/sp/faction/1.png\" width=\"60%\" />\r\n  </nav>\r\n</aside>\r\n<header mdcToolbar *ngIf=\"showNavbar\">\r\n  <div mdcToolbarRow>\r\n    <section mdcToolbarSection alignStart shrinkToFit>\r\n      <div mdcToolbarRow>\r\n        <a mdcToolbarIcon class=\"material-icons\" (click)=\"toggleDrawer()\">menu</a>\r\n        <a href=\"/\">\r\n          <div class=\"toolbar-titles\"><img class=\"img-title\" src=\"../assets/icons/android-chrome-192x192.png\" /></div>\r\n        </a>\r\n        <div fxLayout=\"row\" fxShow=\"false\" fxShow.gt-md=\"true\" class=\"toolbar-titles\">\r\n          <span><a i18n mdcToolbarTitle routerLink=\"/hr\" routerLinkActive=\"router-active\">公开招募</a></span>\r\n          <span><a i18n mdcToolbarTitle routerLink=\"/lvlup\" routerLinkActive=\"router-active\">升级计算</a></span>\r\n          <span><a i18n mdcToolbarTitle routerLink=\"/material\" routerLinkActive=\"router-active\">精英材料</a></span>\r\n          <span><a i18n mdcToolbarTitle routerLink=\"/charmat\" routerLinkActive=\"router-active\">干员材料</a></span>\r\n          <span><a i18n mdcToolbarTitle routerLink=\"/autodetecthash\" routerLinkActive=\"router-active\">自动导入(hash)</a></span>\r\n        </div>\r\n      </div>\r\n    </section>\r\n    <section mdcToolbarSection alignEnd>\r\n      <a mdcToolbarIcon class=\"material-icons\" aria-label=\"Theme\" alt=\"Theme\" i18n-title title=\"主题\"\r\n        (click)=\"toggleTheme()\">brightness_2</a>\r\n      <a mdcToolbarIcon class=\"material-icons\" *ngIf=\"nav.share\" aria-label=\"Share\" alt=\"Share\" i18n-title title=\"分享\"\r\n        (click)=\"doShare()\">share</a>\r\n      <a mdcToolbarIcon class=\"material-icons\" *ngIf=\"!nav.share\" aria-label=\"Copy\" alt=\"Copy\" i18n-title title=\"分享\" ngxClipboard\r\n        [cbContent]=\"'明日方舟工具箱 - '+baseUrl\" (cbOnSuccess)=\"showSnackBar('链接已复制~','好的')\">content_copy</a>\r\n      <a mdcToolbarIcon class=\"material-icons\" aria-label=\"Update\" alt=\"Update\" title=\"更新\"\r\n        (click)=\"doUpdate()\">update</a>\r\n      <a mdcToolbarIcon class=\"material-icons\" routerLink=\"/help\" aria-label=\"Help\" alt=\"Help\" i18n-title title=\"帮助\">help</a>\r\n      <a mdcToolbarIcon class=\"material-icons\" routerLink=\"/settings\" aria-label=\"Settings\" alt=\"Settings\"\r\n        title=\"设置\">settings</a>\r\n    </section>\r\n  </div>\r\n</header>\r\n<div class=\"container\">\r\n  <router-outlet></router-outlet>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/auto-detect-hash/auto-detect-hash.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auto-detect-hash/auto-detect-hash.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"ad-containr\" fxLayout=\"column\">\r\n\r\n  <div mdcCard class=\"card-title\" fxLayout=\"row wrap\" fxLayoutAlign=\"center center\">\r\n    <button mdcButton raised dense type=\"button\" (click)=\"fileInput.click()\">\r\n      选择仓库图片\r\n    </button>\r\n    <input #fileInput type=\"file\" id=\"test-image-file\" name=\"test\" accept=\"image/gif, image/jpeg, image/png, image/jpg\"\r\n      (change)=\"choiceImage($event)\" style=\"display:none;\">\r\n    <button mdcButton raised dense [disabled]=\"!ImageLoaded||ButtonLock\" (click)=\"objectRegonition()\">开始识别</button><br>\r\n  </div>\r\n  <div mdcCard fxLayout=\"row wrap\">\r\n    <div mdcCardActions fullBleed fxFlex=\"100\">\r\n      <a mdcButton (click)=\"toMaterialCalc()\">\r\n        保存并导入材料计算器 <i class=\"material-icons\" aria-hidden=\"true\">arrow_forward</i>\r\n      </a>\r\n    </div>\r\n  </div>\r\n  <div mdcCard>\r\n    <p style=\"text-align:center;margin:5px auto;\">{{InfoText}}</p>\r\n  </div>\r\n  <div mdcLinearProgress [progressValue]=\"progress\" bufferValue=\"1\"></div>\r\n  <canvas style=\"margin:0 auto;\" (click)=\"ModifyData(dialog,$event)\">浏览器不支持Canvas 建议您换用最新版的Chrome/Firefox浏览器</canvas>\r\n  <aside #dialog=\"mdcDialog\" mdcDialog mdcFocusTrap>\r\n    <div mdcDialogSurface>\r\n      <header mdcDialogHeader>\r\n        <h2 mdcDialogHeaderTitle>修改数据</h2>\r\n      </header>\r\n      <section mdcDialogBody>\r\n        <div id=\"headImage\" style=\"text-align: center;\">\r\n          <img [src]=\"ItemImage||''\" style=\"margin: 0 auto;\" width=\"100\" />\r\n        </div>\r\n        <div id=\"DataChange\" style=\"text-align: center;\">\r\n          <ng-container *ngIf=\"ModifyingItem!==null\">\r\n            <div mdcSelect style=\"width:80%;\">\r\n              <select mdcSelectControl [(ngModel)]=\"ModifyBuffer.name\" [disabled]='ModifyBuffer.delete'>\r\n                <option *ngFor=\"let item of ModifyingItem.item; let i=index\" [value]=\"item.name\" [selected]=\"i === 0\">\r\n                  {{item.name}}</option>\r\n              </select>\r\n              <label mdcFloatingLabel></label>\r\n            </div>\r\n          </ng-container>\r\n          <ng-container *ngIf=\"ModifyingItem!==null\">\r\n              <div mdcTextField dense class=\"input-field\" style=\"width:80%;\">\r\n                  <span>\r\n                    <button mdcButton dense [disabled]='ModifyBuffer.delete'>\r\n                      <i mdcButtonIcon class=\"material-icons\" (click)=\"ModifyBuffer.have=ModifyBuffer.have-(ModifyBuffer.have>0?1:0)\">remove</i>\r\n                    </button>\r\n                  </span>\r\n                  <span style=\"width:100%;\">\r\n                    <input mdcTextFieldInput type=\"number\" [(ngModel)]=\"ModifyBuffer.have\" [disabled]='ModifyBuffer.delete'>\r\n                    <label mdcFloatingLabel class=\"mdc-floating-label--float-above\">识别结果</label>\r\n                  </span>\r\n                  <span>\r\n                    <button mdcButton dense [disabled]='ModifyBuffer.delete'>\r\n                      <i mdcButtonIcon class=\"material-icons\" (click)=\"ModifyBuffer.have=ModifyBuffer.have+1\">add</i>\r\n                    </button>\r\n                  </span>\r\n                </div>\r\n          </ng-container>\r\n          <p *ngIf=\"ModifyingItem!==null&&ModifyBuffer.delete\">该材料已被删除</p>\r\n        </div>\r\n      </section>\r\n      <footer mdcDialogFooter>\r\n        <button mdcButton mdcDialogCancel (click)=\"fixNumberHash(fixNumber)\">校准数字识别数据</button>\r\n        <button mdcButton *ngIf=\"ModifyingItem!==null\" (click)=\"toggleItem()\">{{ModifyBuffer.delete ? \"恢复该材料\" : \"删除该材料\"}}</button>\r\n        <button mdcButton mdcDialogCancel>取消</button>\r\n        <button mdcButton mdcDialogAccept (click)=\"AcceptModify()\">确定</button>\r\n      </footer>\r\n    </div>\r\n    <div mdcDialogBackdrop></div>\r\n  </aside>\r\n  <aside #fixNumber=\"mdcDialog\" mdcDialog mdcFocusTrap>\r\n      <div mdcDialogSurface>\r\n        <header mdcDialogHeader>\r\n          <h2 mdcDialogHeaderTitle>校准数字识别数据</h2>\r\n        </header>\r\n        <section mdcDialogBody>\r\n          <div id=\"headImage\" style=\"text-align: center;\">\r\n            <img *ngFor=\"let item of FixingNumberData; let i=index\" [src]=\"item.src\" style=\"margin: 0 5px;\" height=\"30\" width=\"20\" (click)=\"FixingNumberIndex=i\" [class.select]=\"i==FixingNumberIndex\"/>\r\n          </div>\r\n          <div id=\"DataChange\" style=\"text-align: center;\">\r\n              <div *ngIf=\"FixingNumberData[FixingNumberIndex]\" mdcTextField class=\"input-field\" style=\"width:80%;\">\r\n                  <input mdcTextFieldInput [(ngModel)]=\"FixingNumberData[FixingNumberIndex].realData\">\r\n                  <label mdcFloatingLabel class=\"mdc-floating-label--float-above\">在此输入你选择的那个数字(或万)</label>\r\n              </div>\r\n          </div>\r\n          <div>\r\n            <p>通过对数字进行标记可以提升数字的识别准确度</p>\r\n            <p>你可以在这里对识别不准确的数字进行标记</p>\r\n            <p>程序会自动存储下你标记的数字数据以用于下次识别</p>\r\n            <p>点击识别错误的数字，然后在输入框填写你看到的文字</p>\r\n          </div>\r\n        </section>\r\n        <footer mdcDialogFooter>\r\n          <button mdcButton mdcDialogCancel>取消</button>\r\n          <button mdcButton mdcDialogAccept (click)=\"AcceptFixNumber()\">确定</button>\r\n        </footer>\r\n      </div>\r\n      <div mdcDialogBackdrop></div>\r\n    </aside>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/auto-detect/auto-detect.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auto-detect/auto-detect.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"ad-container\" fxLayout=\"column\">\r\n\r\n  <div mdcCard class=\"card-title\" fxLayout=\"row wrap\" fxLayoutAlign=\"center center\">\r\n    <button mdcButton raised dense type=\"button\" (click)=\"fileInput.click()\">\r\n      选择仓库图片\r\n    </button>\r\n    <input #fileInput type=\"file\" id=\"test-image-file\" name=\"test\" accept=\"image/gif, image/jpeg, image/png, image/jpg\"\r\n      (change)=\"previewImage($event)\" style=\"display:none;\">\r\n    <button mdcButton raised dense [disabled]=\"!imageSrc\" (click)=\"objectRegonition()\">开始识别</button><br>\r\n    <a href=\"https://github.com/Luke-lujunxian/aktools/blob/auto-fillin/HOWTOHELP.md\"><small>识别率低/识别出错？</small></a>\r\n  </div>\r\n  <div mdcCard fxLayout=\"row wrap\">\r\n    <div mdcCardActions fullBleed fxFlex=\"100\">\r\n      <a mdcButton (click)=\"toMaterialCalc()\">\r\n        保存并导入材料计算器 <i class=\"material-icons\" aria-hidden=\"true\">arrow_forward</i>\r\n      </a>\r\n    </div>\r\n\r\n    <ng-container *ngFor=\"let m of detectedItemList\">\r\n      <div class=\"matcard-item\" fxFlex=\"25\" fxFlex.gt-xs=\"16\" fxLayout=\"column\" fxLayoutAlign=\"space-between center\">\r\n        <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n          <div class=\"matcard-item-image\">\r\n            <img class=\"mat-icon\" src=\"../../assets/img/material/{{m[0]}}.png\" />\r\n          </div>\r\n          <div class=\"mat-card-item-title\">\r\n            <p>{{this.getMaterialInfo(m[0])}}</p>\r\n          </div>\r\n        </div>\r\n        <div>\r\n          <div mdcTextField dense class=\"input-field\">\r\n            <span>\r\n              <button mdcButton dense (click)=\"m[1]=m[1]-(m[1]>0?1:0)\">\r\n                <i mdcButtonIcon class=\"material-icons\">remove</i>\r\n              </button>\r\n            </span>\r\n            <span>\r\n              <input mdcTextFieldInput #input1=\"ngModel\" type=\"number\" [(ngModel)]=\"m[1]\">\r\n              <label mdcFloatingLabel class=\"mdc-floating-label--float-above\">识别结果</label>\r\n            </span>\r\n            <span>\r\n              <button mdcButton dense (click)=\"m[1]=m[1]+1\">\r\n                <i mdcButtonIcon class=\"material-icons\">add</i>\r\n              </button>\r\n            </span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </ng-container>\r\n\r\n  </div>\r\n\r\n\r\n  <img fxHide=false style=\"width: 100%; height: 100%\" [src]=\"imageSrc||''\" id=\"display\" alt=\"等待上传\">\r\n\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/char-mat-charcard/char-mat-charcard.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/char-mat-charcard/char-mat-charcard.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div mdcCard class=\"ch-lvl-{{char.rarity}}\">\r\n  <div fxLayout=\"row wrap\" fxLayoutAlign=\"start center\">\r\n    <div fxFlex=\"50\" fxFlex.gt-md=\"33\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n      <div mdcInputField><button mdcIconButton class=\"material-icons\" (click)=\"emitRemove()\">close</button></div>\r\n      <div class=\"card-heading\">{{char.name}}</div>\r\n    </div>\r\n    <div fxFlex=\"50\" fxFlex.gt-md=\"33\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n      <!-- 精英化 -->\r\n      <div mdcFormField>\r\n        <button mdcButton class=\"btnTitle\">精英化</button>\r\n      </div>\r\n      <div mdcTextField dense class=\"input-field\">\r\n        <span>\r\n          <button *ngIf=\"!isExsm\" mdcButton dense (click)=\"onEvolveClick(false,false)\" [attr.disabled]=\"data.ce>0?null:''\">\r\n            <i mdcButtonIcon class=\"material-icons\">remove</i>\r\n          </button>\r\n        </span>\r\n        <span>\r\n          <input mdcTextFieldInput #input1=\"ngModel\" type=\"number\" (change)=\"onInputChange()\" [(ngModel)]=\"data.ce\">\r\n          <label mdcFloatingLabel class=\"mdc-floating-label--float-above\">当前</label>\r\n        </span>\r\n        <span>\r\n          <button *ngIf=\"!isExsm\" mdcButton dense (click)=\"onEvolveClick(false,true)\"\r\n            [attr.disabled]=\"data.ce>=limits.maxEvolve?'':null\">\r\n            <i mdcButtonIcon class=\"material-icons\">add</i>\r\n          </button>\r\n        </span>\r\n      </div>\r\n      <div mdcTextField dense class=\"input-field\">\r\n        <span>\r\n          <button *ngIf=\"!isExsm\" mdcButton dense (click)=\"onEvolveClick(true,false)\" [attr.disabled]=\"data.te>0?null:''\">\r\n            <i mdcButtonIcon class=\"material-icons\">remove</i>\r\n          </button>\r\n        </span>\r\n        <span>\r\n          <input mdcTextFieldInput #input1=\"ngModel\" type=\"number\" (change)=\"onInputChange()\" [(ngModel)]=\"data.te\">\r\n          <label mdcFloatingLabel class=\"mdc-floating-label--float-above\">目标</label>\r\n        </span>\r\n        <span>\r\n          <button *ngIf=\"!isExsm\" mdcButton dense (click)=\"onEvolveClick(true,true)\"\r\n            [attr.disabled]=\"data.te>=limits.maxEvolve?'':null\">\r\n            <i mdcButtonIcon class=\"material-icons\">add</i>\r\n          </button>\r\n        </span>\r\n      </div>\r\n    </div>\r\n    <div fxFlex=\"50\" fxFlex.gt-md=\"33\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n      <!-- 通用技能 -->\r\n      <div mdcFormField>\r\n        <button mdcButton class=\"btnTitle\">全技能</button>\r\n      </div>\r\n      <div mdcTextField dense class=\"input-field\">\r\n        <span>\r\n          <button *ngIf=\"!isExsm\" mdcButton dense (click)=\"onSkillClick(false,false)\" [attr.disabled]=\"data.cs>1?null:''\">\r\n            <i mdcButtonIcon class=\"material-icons\">remove</i>\r\n          </button>\r\n        </span>\r\n        <span>\r\n          <input mdcTextFieldInput #input1=\"ngModel\" type=\"number\" (change)=\"onInputChange()\" [(ngModel)]=\"data.cs\">\r\n          <label mdcFloatingLabel class=\"mdc-floating-label--float-above\">当前</label>\r\n        </span>\r\n        <span>\r\n          <button *ngIf=\"!isExsm\" mdcButton dense (click)=\"onSkillClick(false,true)\" [attr.disabled]=\"data.cs>=limits.maxSkill?'':null\">\r\n            <i mdcButtonIcon class=\"material-icons\">add</i>\r\n          </button>\r\n        </span>\r\n      </div>\r\n      <div mdcTextField dense class=\"input-field\">\r\n        <span>\r\n          <button *ngIf=\"!isExsm\" mdcButton dense (click)=\"onSkillClick(true,false)\" [attr.disabled]=\"data.ts>1?null:''\">\r\n            <i mdcButtonIcon class=\"material-icons\">remove</i>\r\n          </button>\r\n        </span>\r\n        <span>\r\n          <input mdcTextFieldInput #input1=\"ngModel\" type=\"number\" (change)=\"onInputChange()\" [(ngModel)]=\"data.ts\">\r\n          <label mdcFloatingLabel class=\"mdc-floating-label--float-above\">目标</label>\r\n        </span>\r\n        <span>\r\n          <button *ngIf=\"!isExsm\" mdcButton dense (click)=\"onSkillClick(true,true)\" [attr.disabled]=\"data.ts>=limits.maxSkill?'':null\">\r\n            <i mdcButtonIcon class=\"material-icons\">add</i>\r\n          </button>\r\n        </span>\r\n      </div>\r\n    </div>\r\n    <div fxFlex=\"50\" fxFlex.gt-md=\"33\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\"\r\n      *ngFor=\"let idx of data.specials\">\r\n      <!-- 专精技能 -->\r\n      <div mdcFormField>\r\n        <button mdcButton class=\"btnTitle\">{{char.sskillCosts[idx].skillName}}</button>\r\n      </div>\r\n      <div mdcTextField dense class=\"input-field\">\r\n        <span>\r\n          <button *ngIf=\"!isExsm\" mdcButton dense (click)=\"onSpecialClick(idx,false,false)\" [attr.disabled]=\"data.css[idx]>0?null:''\">\r\n            <i mdcButtonIcon class=\"material-icons\">remove</i>\r\n          </button>\r\n        </span>\r\n        <span>\r\n          <input mdcTextFieldInput #input1=\"ngModel\" type=\"number\" (change)=\"onInputChange()\" [(ngModel)]=\"data.css[idx]\">\r\n          <label mdcFloatingLabel class=\"mdc-floating-label--float-above\">当前</label>\r\n        </span>\r\n        <span>\r\n          <button *ngIf=\"!isExsm\" mdcButton dense (click)=\"onSpecialClick(idx,false,true)\"\r\n            [attr.disabled]=\"data.css[idx]>=limits.maxSpecial[idx]?'':null\">\r\n            <i mdcButtonIcon class=\"material-icons\">add</i>\r\n          </button>\r\n        </span>\r\n      </div>\r\n      <div mdcTextField dense class=\"input-field\">\r\n        <span>\r\n          <button *ngIf=\"!isExsm\" mdcButton dense (click)=\"onSpecialClick(idx,true,false)\" [attr.disabled]=\"data.tss[idx]>0?null:''\">\r\n            <i mdcButtonIcon class=\"material-icons\">remove</i>\r\n          </button>\r\n        </span>\r\n        <span>\r\n          <input mdcTextFieldInput #input1=\"ngModel\" type=\"number\" (change)=\"onInputChange()\" [(ngModel)]=\"data.tss[idx]\">\r\n          <label mdcFloatingLabel class=\"mdc-floating-label--float-above\">目标</label>\r\n        </span>\r\n        <span>\r\n          <button *ngIf=\"!isExsm\" mdcButton dense (click)=\"onSpecialClick(idx,true,true)\"\r\n            [attr.disabled]=\"data.tss[idx]>=limits.maxSpecial[idx]?'':null\">\r\n            <i mdcButtonIcon class=\"material-icons\">add</i>\r\n          </button>\r\n        </span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/char-mat-matcard/char-mat-matcard.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/char-mat-matcard/char-mat-matcard.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div mdcCard fxLayout=\"row wrap\">\r\n  <div mdcCardActions fullBleed fxFlex=\"100\">\r\n    <a mdcButton (click)=\"toMaterialCalc()\">\r\n      保存并导入材料计算器 <i class=\"material-icons\" aria-hidden=\"true\">arrow_forward</i>\r\n    </a>\r\n  </div>\r\n  <div class=\"matcard-item place-holder\" fxFlex=\"100\"></div>\r\n  <ng-container *ngFor=\"let m of smats\">\r\n    <div class=\"matcard-item m-lvl-{{allmats[m.id].rarity}}\" fxFlex=\"45\" fxFlex.gt-xs=\"31\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n      <div class=\"matcard-item-image\">\r\n        <img src=\"../../assets/img/material/{{allmats[m.id].icon}}.png\" />\r\n      </div>\r\n      <div class=\"mat-card-item-title\">\r\n        <p>{{allmats[m.id].name}}</p>\r\n      </div>\r\n      <div class=\"mat-card-item-need\">\r\n        <p>{{m.count}}</p>\r\n      </div>\r\n    </div>\r\n  </ng-container>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/char-mat/char-mat.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/char-mat/char-mat.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div fxLayout=\"row wrap\">\r\n  <div fxFlex=\"100\" fxFlex.gt-sm=\"50%\" ngClass.gt-sm=\"padding-x-1\" fxLayout=\"row wrap\" fxLayoutAlign=\"space-between start\">\r\n    <div fxFlex=\"26\">\r\n      <div mdcSelect class=\"input-field\">\r\n        <select mdcSelectControl [(ngModel)]=\"star\" (change)=\"onFilterChange()\">\r\n          <option value=\"0\" class=\"tpob\" selected>全部</option>\r\n          <option value=\"6\" class=\"tpob\">6★</option>\r\n          <option value=\"5\" class=\"tpob\">5★</option>\r\n          <option value=\"4\" class=\"tpob\">4★</option>\r\n          <option value=\"3\" class=\"tpob\">3★</option>\r\n          <option value=\"2\" class=\"tpob\">2★</option>\r\n          <option value=\"1\" class=\"tpob\">1★</option>\r\n        </select>\r\n        <label mdcFloatingLabel class=\"mdc-floating-label--float-above\">星级</label>\r\n      </div>\r\n    </div>\r\n    <div fxFlex=\"26\">\r\n      <div mdcSelect class=\"input-field\">\r\n        <select mdcSelectControl [(ngModel)]=\"prof\" (change)=\"onFilterChange()\">\r\n          <option value=\"全部\" class=\"tpob\" selected>全部</option>\r\n          <option value=\"辅助\" class=\"tpob\">辅助</option>\r\n          <option value=\"近卫\" class=\"tpob\">近卫</option>\r\n          <option value=\"先锋\" class=\"tpob\">先锋</option>\r\n          <option value=\"特种\" class=\"tpob\">特种</option>\r\n          <option value=\"重装\" class=\"tpob\">重装</option>\r\n          <option value=\"术师\" class=\"tpob\">术师</option>\r\n          <option value=\"狙击\" class=\"tpob\">狙击</option>\r\n          <option value=\"医疗\" class=\"tpob\">医疗</option>\r\n        </select>\r\n        <label mdcFloatingLabel class=\"mdc-floating-label--float-above\">职业</label>\r\n      </div>\r\n    </div>\r\n    <div fxFlex=\"26\">\r\n      <div mdcSelect class=\"input-field\">\r\n        <select mdcSelectControl [(ngModel)]=\"char\">\r\n          <option value=\"{{ch}}\" class=\"tpob\" *ngFor=\"let ch of joindChars\">{{ch}}</option>\r\n        </select>\r\n        <label mdcFloatingLabel class=\"mdc-floating-label--float-above\">干员</label>\r\n      </div>\r\n    </div>\r\n    <div>\r\n      <div mdcInputField>\r\n        <button mdcIconButton class=\"material-icons\" (click)=\"onCharAdd()\">add</button>\r\n      </div>\r\n    </div>\r\n    <div fxFlex=\"100\">\r\n      <div *ngFor=\"let chn of selectedChars\">\r\n        <app-char-mat-charcard [char]=\"cmMap[chn]\" (reportRemove)=\"onCharRemove($event)\"\r\n          (reportMats)=\"onMatReport($event)\"></app-char-mat-charcard>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div fxFlex=\"100\" fxFlex.gt-sm=\"50%\" ngClass.gt-sm=\"padding-x-1\" fxLayout=\"row\" fxLayoutAlign=\"center start\">\r\n    <app-char-mat-matcard [allmats]=\"mats\" [smats]=\"summarizedMats\"></app-char-mat-matcard>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/help/help.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/help/help.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"help-container\">\r\n    <h2>目录</h2>\r\n    <ul>\r\n        <li><a href=\"javascript:void(0)\" (click)=\"scrollToAnchor(iconstr)\"><strong>右上角图标说明</strong></a></li>\r\n        <li><a href=\"javascript:void(0)\" (click)=\"scrollToAnchor(homescreen)\"><strong>添加到主屏幕</strong></a></li>\r\n        <ul>\r\n            <li><a href=\"javascript:void(0)\" (click)=\"scrollToAnchor(homescreeni)\">添加到主屏幕(iOS)</a></li>\r\n            <li><a href=\"javascript:void(0)\" (click)=\"scrollToAnchor(homescreena)\">添加到主屏幕(Android)</a></li>\r\n        </ul>\r\n    </ul>\r\n    \r\n    <h2 #iconstr>右上角图标说明</h2>\r\n    <p>右上角图标根据浏览器不同可能会有不同的显示，但每个位置功能相同：</p>\r\n    <img src=\"../../assets/img/help/iconstr1.jpg\" /><br />\r\n    <img src=\"../../assets/img/help/iconstr2.jpg\" />\r\n    <p>依次为：复制或分享，更新，帮助，清空</p>\r\n    <ul>\r\n        <li><i class=\"material-icons\">content_copy</i><strong>复制</strong> 或<i class=\"material-icons\">share</i><strong>分享</strong> 按钮可以帮您快速分享或者保存本工具链接。</li>\r\n        <li><i class=\"material-icons\">update</i><strong>更新</strong> 按钮可以强制更新本App，由于更新速度较快，请时常点击一下。</li>\r\n        <li><i class=\"material-icons\">help</i><strong>帮助</strong> 按钮带您回到本页面。</li>\r\n        <li><i class=\"material-icons\">delete</i><strong>清空</strong> 按钮可以清除本地的输入数据信息，这并不会影响到下次应用加载速度，也不会强制更新。</li>\r\n    </ul>\r\n    \r\n    \r\n    <h2 #homescreen>添加到主屏幕教程</h2>\r\n    <p>本工具箱以移动设备优先，添加到主屏幕后可以获得原生App体验：</p>\r\n    <p>首次加载后，后续使用加载飞快，可以离线使用，自动更新。</p>\r\n    \r\n    <h4 #homescreeni>iOS 11及以上</h4>\r\n    <p>1. 使用Safari浏览器打开本站任意页面；</p>\r\n    <img src=\"../../assets/img/help/add-to-homescreen-04.jpg\" />\r\n    <p>2. 点击底部分享按钮；</p>\r\n    <img src=\"../../assets/img/help/add-to-homescreen-01.jpg\" />\r\n    <p>3. 选择“添加到主屏幕”；</p>\r\n    <img src=\"../../assets/img/help/add-to-homescreen-02.jpg\" />\r\n    <p>4. 若图标未加载出来，请稍等或者稍后重试；</p>\r\n    <img src=\"../../assets/img/help/add-to-homescreen-03.jpg\" />\r\n    <p>5. 现在可以在主屏幕使用，无需安装。</p>\r\n    \r\n    <h4 #homescreena>Android 4.1以及上</h4>\r\n\t  <p>1. 使用Chrome浏览器打开本站任意页面；</p>\r\n\t  <img src=\"../../assets/img/help/add-to-homescreena-01.jpg\" />\r\n\t  <p>2. 点击底部添加按钮；</p>\r\n\t  <img src=\"../../assets/img/help/add-to-homescreena-02.jpg\" />\r\n    <p>3. 若按钮未加载出来，可以到菜单栏选择“添加到主屏幕”；</p>\r\n\t  <img src=\"../../assets/img/help/add-to-homescreena-03.jpg\" />\r\n    <p>4. 点击“添加”；</p>\r\n\t  <img src=\"../../assets/img/help/add-to-homescreena-04.jpg\" />\r\n    <p>5. 现在可以在主屏幕使用，无需安装。</p>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/hr-comb/hr-comb.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/hr-comb/hr-comb.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngIf=\"option===0\">\r\n  <div mdcCard class=\"inline-block\" *ngFor=\"let comb of hrcombs; trackBy: trackComb\">\r\n    <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" [ngClass]=\"{'gap-row': true}\">\r\n      <div class=\"p-25\">\r\n        <button mdcButton outlined class=\"btn-tag\" *ngFor=\"let tag of comb.tags\">{{tag}}</button>\r\n      </div>\r\n    </div>\r\n    <hr mdcListDivider>\r\n    <div class=\"p-25\">\r\n      <button mdcButton raised (click)=\"onNameClick(char.name)\" class=\"char-lvl-{{char.level}}\"\r\n        [ngClass]=\"{'char-hl': char.name===charSelected}\" *ngFor=\"let char of comb.possible\">{{char.name}}</button>\r\n    </div>\r\n  </div>\r\n</ng-container>\r\n\r\n<ng-container *ngIf=\"option===1\">\r\n  <div *ngFor=\"let comb of hrcombs; trackBy: trackComb\">\r\n    <div mdcCard class=\"inline-block\">\r\n      <div class=\"p-25 inline-block gap-row\">\r\n        <button mdcButton outlined class=\"btn-tag\" *ngFor=\"let tag of comb.tags\">{{tag}}</button> </div>\r\n      <span class=\"p-25\">\r\n        <button mdcButton raised (click)=\"onNameClick(char.name)\" class=\"char-lvl-{{char.level}}\"\r\n          [ngClass]=\"{'char-hl': char.name===charSelected}\" *ngFor=\"let char of comb.possible\">{{char.name}}</button>\r\n      </span>\r\n    </div>\r\n  </div>\r\n</ng-container>\r\n\r\n<ng-container *ngIf=\"option===2\">\r\n  <div class=\"table-container\">\r\n    <table>\r\n      <tr *ngFor=\"let comb of hrcombs; trackBy: trackComb; let even=even\" [ngClass]=\"{'gap-row': even}\">\r\n        <td>\r\n          <button mdcButton raised class=\"btn-tag\" *ngFor=\"let tag of comb.tags\">{{tag}}</button>\r\n        </td>\r\n        <td>\r\n          <button mdcButton raised (click)=\"onNameClick(char.name)\" class=\"char-lvl-{{char.level}}\"\r\n            [ngClass]=\"{'char-hl': char.name===charSelected}\" *ngFor=\"let char of comb.possible\">{{char.name}}</button>\r\n        </td>\r\n      </tr>\r\n    </table>\r\n  </div>\r\n</ng-container>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/hr-tags/hr-tags.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/hr-tags/hr-tags.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <div fxLayout=\"row inline\">\r\n  <div><button mdcButton raised id=\"btnClear\" (click)=\"clearTags()\">清空</button></div>\r\n  <div fxShow=\"false\" fxShow.lt-sm=\"false\">\r\n    <button mdcButton outlined raised>名称</button>\r\n    <button mdcButton outlined>图片</button>\r\n    <button mdcButton outlined>小</button>\r\n    <button mdcButton outlined>中</button>\r\n    <button mdcButton outlined>大</button>\r\n    <button mdcButton outlined>特大</button>\r\n  </div>\r\n</div> -->\r\n\r\n<div class=\"no-padding btnStarGroup\">\r\n  <button mdcButton outlined dense [raised]=\"selectedStars[0]\" (click)=\"onStarBtnClick(0)\">\r\n    ALL\r\n  </button>\r\n  <button mdcButton outlined dense [raised]=\"selectedStars[6]\" (click)=\"onStarBtnClick(6)\">\r\n    <i mdcButtonIcon class=\"material-icons\">star</i>6\r\n  </button>\r\n  <button mdcButton outlined dense [raised]=\"selectedStars[5]\" (click)=\"onStarBtnClick(5)\">\r\n    <i mdcButtonIcon class=\"material-icons\">star</i>5\r\n  </button>\r\n  <button mdcButton outlined dense [raised]=\"selectedStars[4]\" (click)=\"onStarBtnClick(4)\">\r\n    <i mdcButtonIcon class=\"material-icons\">star</i>4\r\n  </button>\r\n  <button mdcButton outlined dense [raised]=\"selectedStars[3]\" (click)=\"onStarBtnClick(3)\">\r\n    <i mdcButtonIcon class=\"material-icons\">star</i>3\r\n  </button>\r\n  <button mdcButton outlined dense [raised]=\"selectedStars[2]\" (click)=\"onStarBtnClick(2)\">\r\n    <i mdcButtonIcon class=\"material-icons\">star</i>2\r\n  </button>\r\n  <button mdcButton outlined dense [raised]=\"selectedStars[1]\" (click)=\"onStarBtnClick(1)\">\r\n    <i mdcButtonIcon class=\"material-icons\">star</i>1\r\n  </button>\r\n</div>\r\n\r\n<table>\r\n  <tbody>\r\n    <tr [ngClass]=\"{'even-row': even}\" *ngFor=\" let tagrow of tagrows; let even=even\">\r\n      <td>\r\n        <button mdcButton class=\"btnRowTitle\">{{tagrow.title}}</button>\r\n      </td>\r\n      <td>\r\n        <button mdcButton outlined [raised]=\"selectedTags.includes(tag)\" (click)=\"onTagClick(tag)\"\r\n          *ngFor=\"let tag of tagrow.tags\">{{tag}}</button>\r\n      </td>\r\n    </tr>\r\n  </tbody>\r\n</table>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/hr/hr.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/hr/hr.component.html ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div fxLayout=\"row wrap\" class=\"hr-viewport\">\r\n  <div *ngIf=\"showTags\" fxFlex=\"100%\" fxFlex.gt-sm=\"39%\" [ngClass.gt-sm]=\"{'float-box': true}\">\r\n    <div [ngClass.gt-sm]=\"{'tagrows-container':true}\">\r\n      <app-hr-tags [tagrows]=\"hrdata.tagrows\" (reportSelectedTags)=\"onSelectTagChanged($event)\"\r\n        (reportSelectedStars)=\"onSelectStarChanged($event)\"></app-hr-tags>\r\n      <div fxLayout=\"row inline\">\r\n        <div ><button mdcButton raised id=\"btnClear\" (click)=\"clearTags()\">清空</button></div>\r\n        <div><button mdcButton raised [ngClass]=\"'option-'+option\" id=\"btnOption\"\r\n            (click)=\"toggleOption()\">切换TAG位置</button></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div fxFlex=\"100%\" fxFlex.gt-sm=\"60%\" fxFlexOffset.gt-sm=\"40%\">\r\n    <app-hr-comb [hrcombs]=\"hrdata.combs\" [charSelected]=\"charSelected\" [option]=\"option\"\r\n      (reportCharClick)=\"showCharTags($event)\">\r\n    </app-hr-comb>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/lvlup/lvlup.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/lvlup/lvlup.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div fxLayout=\"row wrap\">\r\n  <div fxFlex=\"100%\" fxFlex.gt-md=\"50%\" fxLayout=\"row wrap\" fxLayoutAlign=\"space-around start\">\r\n    <div fxFlex=\"30\">\r\n      <div mdcSelect class=\"input-field\">\r\n        <select mdcSelectControl [(ngModel)]=\"star\" (change)=\"onStarChange()\">\r\n          <option value=\"6\" selected>6★</option>\r\n          <option value=\"5\">5★</option>\r\n          <option value=\"4\">4★</option>\r\n          <option value=\"3\">3★</option>\r\n          <option value=\"2\">2★</option>\r\n          <option value=\"1\">1★</option>\r\n        </select>\r\n        <label mdcFloatingLabel class=\"mdc-floating-label--float-above\">星级</label>\r\n      </div>\r\n    </div>\r\n\r\n    <div fxFlex=\"30\">\r\n      <div mdcSelect class=\"input-field\">\r\n        <select mdcSelectControl [(value)]=\"lsMap\">\r\n          <option value=\"5\" selected>LS-5</option>\r\n        </select>\r\n        <label mdcFloatingLabel class=\"mdc-floating-label--float-above\">经验本</label>\r\n      </div>\r\n    </div>\r\n\r\n    <div fxFlex=\"30\">\r\n      <div mdcSelect class=\"input-field\">\r\n        <select mdcSelectControl [(value)]=\"ceMap\">\r\n          <option value=\"5\" selected>CE-5</option>\r\n        </select>\r\n        <label mdcFloatingLabel class=\"mdc-floating-label--float-above\">金币本</label>\r\n      </div>\r\n    </div>\r\n\r\n    <div fxFlex=\"30\">\r\n      <div mdcTextField dense class=\"input-field\">\r\n        <span>\r\n          <button mdcButton dense (click)=\"onEvolveChange(false,false)\">\r\n            <i mdcButtonIcon class=\"material-icons\">remove</i>\r\n          </button>\r\n        </span>\r\n        <span>\r\n          <input mdcTextFieldInput #input1=\"ngModel\" type=\"number\" [(ngModel)]=\"currentEvolve\" placeholder=\"当前精英化\">\r\n          <label mdcFloatingLabel class=\"mdc-floating-label--float-above\">当前精英化</label>\r\n        </span>\r\n        <span>\r\n          <button mdcButton dense (click)=\"onEvolveChange(false,true)\">\r\n            <i mdcButtonIcon class=\"material-icons\">add</i>\r\n          </button>\r\n        </span>\r\n      </div>\r\n    </div>\r\n\r\n    <div fxFlex=\"30\">\r\n      <div mdcTextField dense class=\"input-field\">\r\n        <span>\r\n          <button mdcButton dense (click)=\"currentLvl=1\">\r\n            <i mdcButtonIcon class=\"material-icons\">first_page</i>\r\n          </button>\r\n        </span>\r\n        <span>\r\n          <input mdcTextFieldInput #input1=\"ngModel\" type=\"number\" [(ngModel)]=\"currentLvl\" placeholder=\"当前等级\">\r\n          <label mdcFloatingLabel class=\"mdc-floating-label--float-above\">当前等级</label>\r\n        </span>\r\n        <span>\r\n          <button mdcButton dense (click)=\"toMaxLvl(true)\">\r\n            <i mdcButtonIcon class=\"material-icons\">last_page</i>\r\n          </button>\r\n        </span>\r\n      </div>\r\n    </div>\r\n\r\n    <div fxFlex=\"30\">\r\n      <div mdcTextField dense class=\"input-field\">\r\n        <span>\r\n          <input mdcTextFieldInput #input1=\"ngModel\" type=\"number\" [(ngModel)]=\"currentExp\" placeholder=\"当前经验\">\r\n          <label mdcFloatingLabel class=\"mdc-floating-label--float-above\">当前经验</label>\r\n        </span>\r\n        <span>\r\n          <button mdcButton dense (click)=\"currentExp=0\">\r\n            <i mdcButtonIcon class=\"material-icons\">close</i>\r\n          </button>\r\n        </span>\r\n      </div>\r\n    </div>\r\n\r\n    <div fxFlex=\"30\">\r\n      <div mdcTextField dense class=\"input-field\">\r\n        <span>\r\n          <button mdcButton dense (click)=\"onEvolveChange(true,false)\">\r\n            <i mdcButtonIcon class=\"material-icons\">remove</i>\r\n          </button>\r\n        </span>\r\n        <span>\r\n          <input mdcTextFieldInput #input1=\"ngModel\" type=\"number\" [(ngModel)]=\"targetEvolve\" placeholder=\"目标精英化\">\r\n          <label mdcFloatingLabel class=\"mdc-floating-label--float-above\">目标精英化</label>\r\n        </span>\r\n        <span>\r\n          <button mdcButton dense (click)=\"onEvolveChange(true,true)\">\r\n            <i mdcButtonIcon class=\"material-icons\">add</i>\r\n          </button>\r\n        </span>\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <div fxFlex=\"30\">\r\n      <div mdcTextField dense class=\"input-field\">\r\n        <span>\r\n          <button mdcButton dense (click)=\"targetLvl=1\">\r\n            <i mdcButtonIcon class=\"material-icons\">first_page</i>\r\n          </button>\r\n        </span>\r\n        <span>\r\n          <input mdcTextFieldInput #input1=\"ngModel\" type=\"number\" [(ngModel)]=\"targetLvl\" placeholder=\"目标等级\">\r\n          <label mdcFloatingLabel class=\"mdc-floating-label--float-above\">目标等级</label>\r\n        </span>\r\n        <span>\r\n          <button mdcButton dense (click)=\"toMaxLvl(false)\">\r\n            <i mdcButtonIcon class=\"material-icons\">last_page</i>\r\n          </button>\r\n        </span>\r\n      </div>\r\n\r\n    </div>\r\n\r\n\r\n    <div fxFlex=\"30\">\r\n      <div mdcTextField dense class=\"input-field\">\r\n        <span>\r\n          <input mdcTextFieldInput #input1=\"ngModel\" type=\"number\" [(ngModel)]=\"gold\" placeholder=\"已有金币\">\r\n          <label mdcFloatingLabel class=\"mdc-floating-label--float-above\">已有金币</label>\r\n        </span>\r\n        <span>\r\n          <button mdcButton dense (click)=\"gold=0\">\r\n            <i mdcButtonIcon class=\"material-icons\">close</i>\r\n          </button>\r\n        </span>\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <div fxFlex=\"22\">\r\n      <div mdcTextField dense class=\"input-field\">\r\n        <span>\r\n          <input mdcTextFieldInput #input1=\"ngModel\" type=\"number\" [(ngModel)]=\"bookBasic\" placeholder=\"基础经验书\">\r\n          <label mdcFloatingLabel class=\"mdc-floating-label--float-above\">{{isExsm?'基础书':'基础经验书'}}</label>\r\n        </span>\r\n        <span>\r\n          <button mdcButton dense (click)=\"bookBasic=0\">\r\n            <i mdcButtonIcon class=\"material-icons\">close</i>\r\n          </button>\r\n        </span>\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <div fxFlex=\"22\">\r\n      <div mdcTextField dense class=\"input-field\">\r\n        <span>\r\n          <input mdcTextFieldInput #input1=\"ngModel\" type=\"number\" [(ngModel)]=\"bookPrimary\" placeholder=\"初级经验书\">\r\n          <label mdcFloatingLabel class=\"mdc-floating-label--float-above\">{{isExsm?'初级书':'初级经验书'}}</label>\r\n        </span>\r\n        <span>\r\n          <button mdcButton dense (click)=\"bookPrimary=0\">\r\n            <i mdcButtonIcon class=\"material-icons\">close</i>\r\n          </button>\r\n        </span>\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <div fxFlex=\"22\">\r\n      <div mdcTextField dense class=\"input-field\">\r\n        <span>\r\n          <input mdcTextFieldInput #input1=\"ngModel\" type=\"number\" [(ngModel)]=\"bookMiddle\" placeholder=\"中级经验书\">\r\n          <label mdcFloatingLabel class=\"mdc-floating-label--float-above\">{{isExsm?'中级书':'经验书'}}</label>\r\n        </span>\r\n        <span>\r\n          <button mdcButton dense (click)=\"bookMiddle=0\">\r\n            <i mdcButtonIcon class=\"material-icons\">close</i>\r\n          </button>\r\n        </span>\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <div fxFlex=\"22\">\r\n      <div mdcTextField dense class=\"input-field\">\r\n        <span>\r\n          <input mdcTextFieldInput #input1=\"ngModel\" type=\"number\" [(ngModel)]=\"bookAdvanced\" placeholder=\"\">\r\n          <label mdcFloatingLabel class=\"mdc-floating-label--float-above\">{{isExsm?'高级书':'高级经验书'}}</label>\r\n        </span>\r\n        <span>\r\n          <button mdcButton dense (click)=\"bookAdvanced=0\">\r\n            <i mdcButtonIcon class=\"material-icons\">close</i>\r\n          </button>\r\n        </span>\r\n      </div>\r\n    </div>\r\n    <div fxFlex=\"100\" fxLayoutAlign=\"center center\">\r\n      <span>\r\n        <button mdcButton raised class=\"btnCalc\" (click)=\"calc()\">计算</button>\r\n      </span>\r\n    </div>\r\n  </div>\r\n\r\n  <div fxFlex=\"100%\" fxFlex.gt-md=\"50%\" fxLayout=\"row wrap\" fxLayoutAlign=\"space-around start\">\r\n    <div mdcCard>\r\n      <div class=\"custom-card-group-heading\">{{star}}★ 精{{currentEvolve}}.LV{{currentLvl}} →\r\n        精{{targetEvolve}}.LV{{targetLvl}}</div>\r\n      <hr mdcListDivider>\r\n      <table>\r\n        <tbody>\r\n          <tr>\r\n            <th>体力总计</th>\r\n            <td>\r\n              <b>{{math.ceil(lsAp+ceAp)}}</b> <sub> = {{math.ceil(lsAp)}} + {{math.ceil(ceAp)}}</sub>\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <th>经验</th>\r\n            <td>\r\n              <b>{{math.ceil(lvlupExp-expMinus>0?(lvlupExp-expMinus):0)}}</b> <sub> = {{math.ceil(lvlupExp)}} -\r\n                {{math.ceil(expMinus)}}</sub>\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <th>LS体力 <sub>场数</sub></th>\r\n            <td>\r\n              <b>{{math.ceil(lsAp)}}</b> <sub> = 30 * {{math.ceil(lsCount)}}</sub>\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <th>金币</th>\r\n            <td>\r\n              <b>{{math.ceil(lvlupGold+evolveGold-goldMinus>0?(lvlupGold+evolveGold-goldMinus):0)}}</b> <sub> =\r\n                {{math.ceil(lvlupGold+evolveGold)}} - {{goldMinus}}</sub>\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <th>CE体力 <sub>场数</sub></th>\r\n            <td>\r\n              <b>{{math.ceil(ceAp)}}</b> <sub> = 30 * {{math.ceil(ceCount)}}</sub>\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <th>升级金币</th>\r\n            <td>\r\n              {{math.ceil(lvlupGold)}}\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <th>精英化金币</th>\r\n            <td>\r\n              {{math.ceil(evolveGold)}}\r\n            </td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n    <!-- <table>\r\n      <thead>\r\n        <tr>\r\n          <th>资源</th><td>\r\n          <th>需求</th><td>\r\n        </td></tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr>\r\n          <th>体力总计</th><td>\r\n          <b>{{lsAp+ceAp}}</b> <sub>= {{lsAp}} + {{ceAp}}</sub>\r\n        </td></tr>\r\n        <tr>\r\n          <th>经验</th><td>\r\n          <b>{{lvlupExp-expMinus>0?(lvlupExp-expMinus):0}}</b> <sub>= {{lvlupExp}} - {{expMinus}}</sub>\r\n        </td></tr>\r\n        <tr>\r\n          <th>LS体力 <sub>场数</sub></th><td>\r\n          <b>{{lsAp}}</b> <sub>= 30 * {{lsCount}}</sub>\r\n        </td></tr>\r\n        <tr>\r\n          <th>金币</th><td>\r\n          <b>{{lvlupGold+evolveGold-goldMinus>0?(lvlupGold+evolveGold-goldMinus):0}}</b> <sub>=\r\n              {{lvlupGold+evolveGold}} - {{goldMinus}}</sub>\r\n        </td></tr>\r\n        <tr>\r\n          <th>CE体力 <sub>场数</sub></th><td>\r\n          <b>{{ceAp}}</b> <sub>= 30 * {{ceCount}}</sub>\r\n        </td></tr>\r\n        <tr>\r\n          <th>升级金币</th><td>\r\n          {{lvlupGold}}\r\n        </td></tr>\r\n        <tr>\r\n          <th>精英化金币</th><td>\r\n          {{evolveGold}}\r\n        </td></tr>\r\n      </tbody>\r\n    </table> -->\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/main.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/main.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-container\">\r\n    <div fxLayout=\"row\">\r\n        <div>\r\n            <img class=\"img-title\" src=\"../assets/icons/android-chrome-512x512.png\" />\r\n        </div>\r\n        <div>\r\n            <h2>明日方舟工具箱</h2>\r\n            <p>欢迎使用，请在导航栏选择相应功能使用。</p>\r\n            <p *ngIf=\"!cn\" class=\"notice\"><a href=\"https://aktoolscn.graueneko.xyz\">国内用户请点这里</a></p>\r\n            <p *ngIf=\"cn\" class=\"notice\"><a href=\"https://aktools.graueneko.xyz\">国际用户请点这里</a></p>\r\n\r\n        </div>\r\n    </div>\r\n    &nbsp;\r\n    <p>2020.01.14 更新：加入暗色模式，请点右上角月亮图标切换。</p>\r\n    <p>2020.01.14 更新：加入新干员[年],[吽],[阿]的材料数据。</p>\r\n    <p>Tip: 移动端和平板用户可以将任意页面添加到桌面，获得与本地App相同的使用体验：快速加载，离线使用，自动更新。</p>\r\n    <p>详情请点击右上角<i class=\"material-icons\">help</i>查看。</p>\r\n    <div fxLayout=\"row wrap\">\r\n        <div fxFlex=\"100\" fxFlex.gt-sm=\"50\">\r\n            <h3>已实现功能</h3>\r\n            <ul>\r\n                <li>公开招募</li>\r\n                <li>升级消耗</li>\r\n                <li>精英材料</li>\r\n                <li>干员材料多合一计算：精英化，通用技能，专精技能</li>\r\n                <li>自动识别仓库中材料(测试中)</li>\r\n            </ul>\r\n        </div>\r\n        <div fxFlex=\"100\" fxFlex.gt-sm=\"50\">\r\n            <h3>实现中功能</h3>\r\n            <ul>\r\n                <li>干员技能、属性表</li>\r\n                <li>干员基建技能总览</li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n    <h3>贡献者</h3>\r\n    <div class=\"contributors\" fxLayout=\"row wrap\" fxLayoutAlign=\"start center\">\r\n        <div class=\"contributor\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n            <a href=\"https://github.com/graueneko/\">\r\n                <img src=\"../../assets/img/main/graueneko.png\" /><br />\r\n                一只灰猫\r\n            </a>\r\n        </div>\r\n        <div class=\"contributor\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n            <a href=\"https://github.com/Evealicemier\">\r\n                <img src=\"../../assets/img/main/crystal.jpg\" /><br />\r\n                水晶泡芙\r\n            </a>\r\n        </div>\r\n        <div class=\"contributor\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n            <a href=\"https://github.com/Luke-lujunxian\">\r\n                <img src=\"../../assets/img/main/Luke_lu.jpg\" /><br />\r\n                Luke_lu\r\n            </a>\r\n        </div>\r\n        <div class=\"contributor\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n            <a href=\"https://github.com/bbaa-bbaa\">\r\n                <img src=\"../../assets/img/main/bbaa.png\" /><br />\r\n                bbaa\r\n            </a>\r\n        </div>\r\n        <div class=\"contributor\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n            <a href=\"https://github.com/Yue-plus\">\r\n                <img src=\"../../assets/img/main/Yue_plus.png\" /><br />\r\n                Yue_plus\r\n            </a>\r\n        </div>\r\n    </div>\r\n\r\n    <h4>建议/需求/加入我们</h4>\r\n    <div class=\"joinus\" fxLayout=\"row wrap\" fxLayoutAlign=\"start center\">\r\n        <div class=\"contributor\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n            <a href=\"https://github.com/graueneko/aktools\">\r\n                <img src=\"../../assets/img/main/github.png\" /><br />\r\n                Github\r\n            </a>\r\n        </div>\r\n        <div class=\"contributor\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n            <a href=\"https://t.me/aktools\">\r\n                <img src=\"../../assets/img/main/telegram.png\" /><br />\r\n                Telegram\r\n            </a>\r\n        </div>\r\n    </div>\r\n    <h4>友情链接</h4>\r\n    <p>欢迎访问 <a href=\"https://bbs.nga.cn/thread.php?fid=-34587507\">NGA明日方舟-罗德岛驻艾泽拉斯大使馆</a></p>\r\n    <p>欢迎向 <a href=\"https://penguin-stats.io\">企鹅物流数据统计</a> 贡献材料掉落信息</p>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/material-card/material-card.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/material-card/material-card.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div mdcCard fxLayout=\"column\" class=\"m-lvl-{{item.rarity}}\" [ngClass]=\"{'op-card': itemdata.lack===0}\">\r\n  <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n    <div class=\"img-icon-box\" fxFlex=\"15\" fxFlex.gt-xs=\"23\">\r\n      <img class=\"img-icon\" src=\"./assets/img/material/{{item.icon}}.png\" />\r\n    </div>\r\n    <div class=\"material-detail\" fxLayout=\"column\" fxFlex=\"60\" fxFlex.gt-xs=\"50\">\r\n      <div class=\"card-title\">{{item.name}}</div>\r\n      <div class=\"material-source\" *ngFor=\"let s of item.source | keyvalue\">{{s.key}} <sub>{{s.value}}</sub></div>\r\n    </div>\r\n    <div class=\"material-detail\" fxLayout=\"column\" fxFlex=\"23\" fxFlex.gt-xs=\"25\" fxLayoutAlign=\"end end\">\r\n      <div>\r\n        <button mdcButton class=\"need-button\" [ngClass]=\"{'notice': itemdata.lack!==0}\"\r\n          disabled>{{itemdata.lack}}</button>\r\n      </div>\r\n      <div>\r\n        <button mdcButton dense [raised]=\"itemdata.canMerge\" class=\"btnMerge\" (click)=\"doMerge()\"\r\n          [disabled]=\"!(itemdata.canMerge)\"><i mdcButtonIcon class=\"material-icons\">merge_type</i></button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n    <div fxFlex=\"49\" mdcTextField dense class=\"input-field\">\r\n      <span>\r\n        <button mdcButton dense (click)=\"itemdata.need=itemdata.need-(itemdata.need>0?1:0);onInputChange()\">\r\n          <i mdcButtonIcon class=\"material-icons\">remove</i>\r\n        </button>\r\n      </span>\r\n      <span>\r\n        <input mdcTextFieldInput #input1=\"ngModel\" type=\"number\" [(ngModel)]=\"itemdata.need\" (change)=\"onInputChange()\">\r\n        <label mdcFloatingLabel class=\"mdc-floating-label--float-above\">需要</label>\r\n      </span>\r\n      <span>\r\n        <button mdcButton dense (click)=\"itemdata.need=itemdata.need+1;onInputChange()\">\r\n          <i mdcButtonIcon class=\"material-icons\">add</i>\r\n        </button>\r\n      </span>\r\n    </div>\r\n    <div fxFlex=\"49\" mdcTextField dense class=\"input-field\">\r\n      <span>\r\n        <button mdcButton dense (click)=\"itemdata.have=itemdata.have-(itemdata.have>0?1:0);onInputChange()\">\r\n          <i mdcButtonIcon class=\"material-icons\">remove</i>\r\n        </button>\r\n      </span>\r\n      <span>\r\n        <input mdcTextFieldInput #input1=\"ngModel\" type=\"number\" [(ngModel)]=\"itemdata.have\" (change)=\"onInputChange()\">\r\n        <label mdcFloatingLabel class=\"mdc-floating-label--float-above\">已有</label>\r\n      </span>\r\n      <span>\r\n        <button mdcButton dense (click)=\"itemdata.have=itemdata.have+1;onInputChange()\">\r\n          <i mdcButtonIcon class=\"material-icons\">add</i>\r\n        </button>\r\n      </span>\r\n    </div>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/material/material.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/material/material.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<aside #dialogPlan=\"mdcDialog\" mdcDialog mdcFocusTrap>\r\n  <div mdcDialogSurface>\r\n    <header mdcDialogHeader>\r\n      <h2 mdcDialogHeaderTitle>材料路径规划（试行，仅供参考）</h2>\r\n    </header>\r\n    <section mdcDialogBody scrollable>\r\n      <h4>by <a href=\"https://github.com/ycremar/ArkPlanner\">@ycremar</a>(算法) & <a\r\n          href=\"https://github.com/invisiblearts/ArkPlanner\">@invisiblearts</a>(数据)</h4>\r\n      <h4>体力预计消耗：<strong>{{cost}}</strong></h4>\r\n      <ng-container *ngIf=\"stagesText.length!==0\">\r\n        <h4>刷本获取：</h4>\r\n        <ul mdcList>\r\n          <li mdcListItem *ngFor=\"let st of stagesText\">{{st}}</li>\r\n        </ul>\r\n      </ng-container>\r\n      <ng-container *ngIf=\"synsText.length!==0\">\r\n        <h4>合成获取：</h4>\r\n        <ul mdcList>\r\n          <li mdcListItem *ngFor=\"let sy of synsText\">{{sy}}</li>\r\n        </ul>\r\n      </ng-container>\r\n\r\n    </section>\r\n    <footer mdcDialogFooter>\r\n      <button mdcButton mdcDialogCancel>关闭</button>\r\n      <button mdcButton mdcDialogAccept (click)=\"copyResult()\">复制</button>\r\n    </footer>\r\n  </div>\r\n  <div mdcDialogBackdrop></div>\r\n</aside>\r\n<aside #dialogData=\"mdcDialog\" mdcDialog mdcFocusTrap>\r\n  <div mdcDialogSurface class=\"dialog-data\">\r\n    <section mdcDialogBody>\r\n      <div fxLayout=\"column\" fxLayoutAlign=\"start center\">\r\n        <div fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n          <div>\r\n            <button mdcButton raised dense id=\"btnReset\" (click)=\"reset(false)\">重置</button>\r\n          </div>\r\n          <div>\r\n            <button mdcButton raised dense id=\"btnResetNeed\" (click)=\"reset(true)\">重置需求</button>\r\n          </div>\r\n          <div>\r\n            <button mdcButton mdcDialogCancel>关闭</button>\r\n          </div>\r\n        </div>\r\n        <div fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n          <div mdcTextField [dense]=\"true\">\r\n            <textarea mdcTextFieldInput type=\"text\" rows=\"5\" cols=\"60\" #input1=\"ngModel\"\r\n              [(ngModel)]=\"exportedData\"></textarea>\r\n          </div>\r\n          <div fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n            <button mdcButton raised dense id=\"btnExport\" (click)=\"copyExport()\">复制</button>\r\n          </div>\r\n        </div>\r\n        <div fxLayout=\"row\" class=\"hint\" fxLayoutAlign=\"center center\">\r\n          <p><small>若未弹出成功提示，或复制失败，请手动复制。</small></p>\r\n        </div>\r\n        <div fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n          <div mdcTextField [dense]=\"true\">\r\n            <textarea mdcTextFieldInput type=\"text\" rows=\"5\" cols=\"60\" #input1=\"ngModel\"\r\n              [(ngModel)]=\"importedData\"></textarea>\r\n          </div>\r\n          <div fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n            <button mdcButton raised dense id=\"btnImport\" (click)=\"getImportedData()\">导入</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </section>\r\n  </div>\r\n  <div mdcDialogBackdrop></div>\r\n</aside>\r\n<div fxLayout=\"row wrap\" fxLayoutAlign=\"center center\">\r\n  <div fxLayout=\"row wrap\" fxFlex=\"100\" fxFlex.gt-sm=\"50\" fxLayoutAlign=\"end center\" fxLayoutGap=\"1%\"\r\n    class=\"options-box\">\r\n    <div fxLayout=\"row wrap\" fxFlex=\"100\" fxFlex.gt-xs=\"30\" fxLayoutAlign=\"start center\">\r\n      <div mdcFormField fxFlex=\"100\">\r\n        <!-- <button mdcButton raised dense id=\"btnReset\" (click)=\"reset()\">重置</button> -->\r\n        <button mdcButton raised dense id=\"btnData\" (click)=\"dialogData.open()\">重置/导入/导出</button>\r\n      </div>\r\n      <div fxFlex=\"100\" fxShow=\"true\" fxShow.gt-xs=\"false\" class=\"sepatator\">\r\n      </div>\r\n    </div>\r\n    <div fxLayout=\"row\" fxFlex=\"100\" fxFlex.gt-xs=\"65\" fxLayoutAlign=\"end center\">\r\n      <div mdcFormField>\r\n        <div mdcSwitch>\r\n          <input mdcSwitchInput type=\"checkbox\" [(ngModel)]=\"options.showOnly3plus\" (change)=\"onOptionChange()\" />\r\n        </div>\r\n        <label mdcFormFieldLabel>3★及以上</label>\r\n      </div>\r\n      <div mdcFormField>\r\n        <div mdcSwitch>\r\n          <input mdcSwitchInput type=\"checkbox\" [(ngModel)]=\"options.filtered\" (change)=\"onOptionChange()\" />\r\n        </div>\r\n        <label mdcFormFieldLabel>过滤</label>\r\n      </div>\r\n      <div mdcFormField>\r\n        <button mdcButton raised dense (click)=\"plan();dialogPlan.open()\">刷图规划</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div fxLayout=\"row\" fxFlex=\"100\" fxFlex.gt-sm=\"50\" fxLayoutAlign=\"start center\" fxLayoutGap=\"1%\" class=\"options-box\">\r\n    <div mdcFormField>\r\n      <div mdcSwitch>\r\n        <input mdcSwitchInput type=\"checkbox\" [(ngModel)]=\"options.showMat\" (change)=\"onOptionChange()\" />\r\n      </div>\r\n      <label mdcFormFieldLabel>精英材料</label>\r\n    </div>\r\n    <div mdcFormField>\r\n      <div mdcSwitch>\r\n        <input mdcSwitchInput type=\"checkbox\" [(ngModel)]=\"options.showBook\" (change)=\"onOptionChange()\" />\r\n      </div>\r\n      <label mdcFormFieldLabel>技能书</label>\r\n    </div>\r\n    <div mdcFormField>\r\n      <div mdcSwitch>\r\n        <input mdcSwitchInput type=\"checkbox\" [(ngModel)]=\"options.showChip\" (change)=\"onOptionChange()\" />\r\n      </div>\r\n      <label mdcFormFieldLabel>芯片</label>\r\n    </div>\r\n  </div>\r\n  <div fxLayout=\"row wrap\" fxFlex=\"100\" fxLayoutAlign=\"start start\">\r\n    <ng-container *ngFor=\"let item of items; trackBy:trackItem\">\r\n      <div fxFlex=\"50\" fxFlex.gt-xs=\"33\" fxFlex.gt-sm=\"25\" fxFlex.gt-md=\"16\" class=\"padding-025\"\r\n        [hidden]=\"((options.filtered && !data[item.name].need && !data[item.name].lack)||(options.showOnly3plus && item.id.startsWith('30') && item.rarity<3)||(!options.showMat && item.id.startsWith('30'))||(!options.showBook && item.id.startsWith('33'))||(!options.showChip && item.id.startsWith('32')))\">\r\n        <app-material-card [item]=\"item\" [itemdata]=\"data[item.name]\" (dataChange)=\"onDataChange($event)\"\r\n          (reportMerge)=\"onMatMerge($event)\"></app-material-card>\r\n      </div>\r\n    </ng-container>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/settings/settings.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/settings/settings.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<aside #dialog1=\"mdcDialog\" mdcDialog mdcFocusTrap (accept)=\"dialog.acceptCallback()\"\r\n  (decline)=\"dialog.declineCallback()\">\r\n  <div mdcDialogSurface>\r\n    <header mdcDialogHeader>\r\n      <h2 mdcDialogHeaderTitle>{{dialog.title}}</h2>\r\n    </header>\r\n    <section mdcDialogBody>\r\n      {{dialog.message}}\r\n    </section>\r\n    <footer mdcDialogFooter>\r\n      <button mdcButton mdcDialogCancel>{{dialog.decline}}</button>\r\n      <button mdcButton mdcDialogAccept>{{dialog.accept}}</button>\r\n    </footer>\r\n  </div>\r\n  <div mdcDialogBackdrop></div>\r\n</aside>\r\n<div class=\"settings-container\">\r\n  <div mdcListGroup>\r\n    <h3 mdcListGroupSubHeader>设置</h3>\r\n    <ul mdcList>\r\n      <li mdcListItem>\r\n        <div mdcFormField>\r\n          <div mdcSwitch>\r\n            <input mdcSwitchInput type=\"checkbox\" [(ngModel)]=\"isExtraSmall\" (change)=\"saveSettings()\" />\r\n          </div>\r\n          <label mdcFormFieldLabel>超小屏幕模式</label>\r\n        </div>\r\n      </li>\r\n      <li mdcListDivider></li>\r\n      <li mdcListItem>\r\n        <div mdcFormField>\r\n          <div mdcSwitch>\r\n            <input mdcSwitchInput type=\"checkbox\" [(ngModel)]=\"isMaxFontSize\" (change)=\"saveSettings()\" />\r\n          </div>\r\n          <label mdcFormFieldLabel>自动导入(hash):最大字体模式</label>\r\n        </div>\r\n      </li>\r\n      <li mdcListDivider></li>\r\n      <li mdcListItem>\r\n        <div mdcFormField>\r\n          <div mdcTextField dense class=\"input-field\" style=\"width:80%;\">\r\n            <input mdcTextFieldInput [(ngModel)]=\"detectColor\" (change)=\"saveSettings()\" (input)=\"saveSettings()\"/>\r\n            <label mdcFloatingLabel class=\"mdc-floating-label--float-above\">自动导入(hash):文字颜色</label>\r\n          </div>\r\n          <label mdcFormFieldLabel></label>\r\n        </div>\r\n      </li>\r\n      <li mdcListDivider></li>\r\n      <li mdcListItem (click)=\"beforeClear();dialog1.open()\">\r\n        <i mdcListItemGraphic class=\"material-icons\">delete</i>清空本地数据\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _hr_hr_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hr/hr.component */ "./src/app/hr/hr.component.ts");
/* harmony import */ var _lvlup_lvlup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lvlup/lvlup.component */ "./src/app/lvlup/lvlup.component.ts");
/* harmony import */ var _material_material_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./material/material.component */ "./src/app/material/material.component.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _help_help_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./help/help.component */ "./src/app/help/help.component.ts");
/* harmony import */ var _char_mat_char_mat_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./char-mat/char-mat.component */ "./src/app/char-mat/char-mat.component.ts");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./settings/settings.component */ "./src/app/settings/settings.component.ts");
/* harmony import */ var _auto_detect_auto_detect_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./auto-detect/auto-detect.component */ "./src/app/auto-detect/auto-detect.component.ts");
/* harmony import */ var _auto_detect_hash_auto_detect_hash_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./auto-detect-hash/auto-detect-hash.component */ "./src/app/auto-detect-hash/auto-detect-hash.component.ts");












const routes = [
    { path: 'hr', component: _hr_hr_component__WEBPACK_IMPORTED_MODULE_3__["HrComponent"] },
    { path: 'lvlup', component: _lvlup_lvlup_component__WEBPACK_IMPORTED_MODULE_4__["LvlupComponent"] },
    { path: 'material', component: _material_material_component__WEBPACK_IMPORTED_MODULE_5__["MaterialComponent"] },
    { path: 'help', component: _help_help_component__WEBPACK_IMPORTED_MODULE_7__["HelpComponent"] },
    { path: 'charmat', component: _char_mat_char_mat_component__WEBPACK_IMPORTED_MODULE_8__["CharMatComponent"] },
    { path: 'settings', component: _settings_settings_component__WEBPACK_IMPORTED_MODULE_9__["SettingsComponent"] },
    { path: '', component: _main_main_component__WEBPACK_IMPORTED_MODULE_6__["MainComponent"], pathMatch: 'full' },
    { path: 'autodetect', component: _auto_detect_auto_detect_component__WEBPACK_IMPORTED_MODULE_10__["AutoDetectComponent"] },
    { path: 'autodetecthash', component: _auto_detect_hash_auto_detect_hash_component__WEBPACK_IMPORTED_MODULE_11__["AutoDetectHashComponent"] },
    { path: '**', redirectTo: '/' }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("button {\n  margin: 0.25em;\n  white-space: nowrap;\n}\n\na {\n  text-decoration: none;\n}\n\n[mdcDrawerHeader],\n[mdcDrawerToolbarSpacer],\n[mdcToolbar] {\n  background-color: #6200ee;\n  /* @alternate */\n  background-color: var(--mdc-theme-primary, #6200ee);\n  color: #fff;\n  /* @alternate */\n  color: var(--mdc-theme-on-primary, #fff);\n  /* Support for iOS 11.2+. */\n  padding-top: env(safe-area-inset-top);\n  padding-right: env(safe-area-inset-right);\n  padding-left: env(safe-area-inset-left);\n}\n\nsection {\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n[mdcDrawerHeader] {\n  height: 128px;\n}\n\n[mdcDrawerToolbarSpacer],\n[mdcToolbar] {\n  height: 64px;\n}\n\n[mdcToolbarRow] {\n  min-height: 100%;\n}\n\n.container {\n  max-width: 1400px;\n  margin: auto;\n  padding-top: calc(0.5em + env(safe-area-inset-top));\n  padding-right: calc(0.5em + env(safe-area-inset-right));\n  padding-bottom: calc(0.5em + env(safe-area-inset-bottom));\n  padding-left: calc(0.5em + env(safe-area-inset-left));\n  width: 100%;\n  box-sizing: border-box;\n}\n\n.mdc-toolbar__title {\n  font-size: 1.125em;\n  color: var(--mdc-theme-on-primary);\n  padding: 0.25em;\n}\n\n.mdc-toolbar__title.router-active {\n  color: #22bbff;\n  border: 1px solid rgba(0, 0, 0, 0.125);\n  border-radius: 1em 0.5em 1em 0.5em;\n  border-color: #ffffff;\n}\n\n[mdcDrawerHeaderContent] .mdc-toolbar__title.router-active {\n  border: none;\n}\n\n[mdcDrawerHeaderContent] .drawer-header {\n  height: 100%;\n  widows: 100%;\n}\n\n[mdcDrawerContent] a {\n  color: var(--mdc-theme-secondary);\n}\n\n[mdcDrawerContent] a:hover {\n  color: var(--mdc-theme-on-secondary);\n  background-color: var(--mdc-theme-secondary);\n}\n\n[mdcDrawerContent] a:hover i {\n  font-size: 32px;\n  color: var(--mdc-theme-on-secondary);\n}\n\n[mdcDrawerContent] a i {\n  color: var(--mdc-theme-secondary);\n}\n\n.router-active.small {\n  font-size: 80%;\n}\n\n.toolbar-titles {\n  height: 100%;\n  -webkit-box-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: flex;\n}\n\n.img-header {\n  max-width: 100%;\n  max-height: 100%;\n  width: auto;\n  height: auto;\n}\n\n.img-title {\n  width: 48px;\n  height: 48px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxZdWVfcFxcRG9jdW1lbnRzXFxjb2RlXFxha3Rvb2xzL3NyY1xcYXBwXFxzdHlsZXNcXGN1c3RvbS5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL0M6XFxVc2Vyc1xcWXVlX3BcXERvY3VtZW50c1xcY29kZVxcYWt0b29scy9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9DOlxcVXNlcnNcXFl1ZV9wXFxEb2N1bWVudHNcXGNvZGVcXGFrdG9vbHMvbm9kZV9tb2R1bGVzXFxAbWF0ZXJpYWxcXHRoZW1lXFxfbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0JBO0VBQ0UsY0FBQTtFQUNBLG1CQUFBO0FDdkJGOztBRHlCQTtFQUNFLHFCQUFBO0FDdEJGOztBQ0pBOzs7RUN1RE0seUJBdkJNO0VBdUNKLGVBQUE7RUFDQSxtREFBQTtFQWpCRixXQXZCTTtFQXVDSixlQUFBO0VBQ0Esd0NBQUE7RURqRU4sMkJBQUE7RUFDQSxxQ0FBQTtFQUNBLHlDQUFBO0VBQ0EsdUNBQUE7QURTRjs7QUNGQTtFQUNFLHlCQUFBO1VBQUEsbUJBQUE7QURLRjs7QUNGQTtFQUNFLGFBQUE7QURLRjs7QUNIQTs7RUFFRSxZQUFBO0FETUY7O0FDSkE7RUFDRSxnQkFBQTtBRE9GOztBQ0pBO0VBSUUsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsbURBQUE7RUFDQSx1REFBQTtFQUNBLHlEQUFBO0VBQ0EscURBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7QURJRjs7QUNGQTtFQUNFLGtCQUFBO0VBQ0Esa0NBQUE7RUFDQSxlQUFBO0FES0Y7O0FDSEE7RUFDRSxjRi9DYztFRWdEZCxzQ0FBQTtFQUNBLGtDQUFBO0VBQ0EscUJBQUE7QURNRjs7QUNGRTtFQUNFLFlBQUE7QURLSjs7QUNIRTtFQUNFLFlBQUE7RUFDQSxZQUFBO0FES0o7O0FDQUU7RUFDRSxpQ0FBQTtBREdKOztBQ0ZJO0VBQ0Usb0NBQUE7RUFDQSw0Q0FBQTtBRElOOztBQ0hNO0VBQ0UsZUFBQTtFQUNBLG9DQUFBO0FES1I7O0FDRkk7RUFDRSxpQ0FBQTtBRElOOztBQ0NBO0VBQ0UsY0FBQTtBREVGOztBQ0NBO0VBQ0UsWUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7QURFRjs7QUNDQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FERUY7O0FDQ0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBREVGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaHR0cHM6Ly9jb2xvcmh1bnQuY28vcGFsZXR0ZS8zNjFcclxuJGNvbG9yLTE6ICNkMDY5NGU7XHJcbiRjb2xvci0yOiAjZjZjZThjO1xyXG4kY29sb3ItMzogI2MzZTNlNTtcclxuJGNvbG9yLTQ6ICM1ODliYWQ7XHJcblxyXG4kY29sb3ItbXV0ZWQ6IHJnYigxNTMsIDE1MywgMTUzKTs7IC8vIOaWueiIny3mlofmnKzngbBcclxuJGNvbG9yLXByaW1hcnk6IHJnYigzNCwgMTg3LCAyNTUpOyAvLyDmlrnoiJ8t6JOdXHJcbiRjb2xvci1zdWNjZXNzOiByZ2IoMTI3LCAyMjQsIDE0OSk7IC8vIGJvb3RzdHJhcDRcclxuJGNvbG9yLWluZm86IHJnYigxMzcsIDEzNywgMTM3KTsgLy8g5pa56IifLeeBsFxyXG4kY29sb3Itd2FybmluZzogI2ZlMjsgLy8g5pa56IifLem7hFxyXG4kY29sb3ItZGFuZ2VyOiAjZWMyYjAwOyAvLyDmtKrngonnpLrlsoFcclxuJGNvbG9yLXNlY29uZGFyeTogcmdiKDEzNywgMTM3LCAxMzcpOyAvLyDmlrnoiJ8t54GwXHJcbiRjb2xvci1kYXJrOiAjMzEzMTMxOyAvLyDmlrnoiJ8t5oyJ6ZKuXHJcbiRjb2xvci1ibGFjazogIzAwMDsgLy8g57qv6buRXHJcbiRjb2xvci1saWdodDogcmdiKDI1MCwgMjQ5LCAyNDgpOyAvL2Jvb3RzdHJhcDRcclxuJGNvbG9yLXdoaXRlOiAjZmZmOyAvLyBib290c3RyYXA0XHJcblxyXG4kbWRjLXR5cG9ncmFwaHktZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIFwiTm90byBTYW5zXCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgSGVsdmV0aWNhLCBcIk5pbWJ1cyBTYW5zIExcIiwgQXJpYWwsXHJcbiAgXCJMaWJlcmF0aW9uIFNhbnNcIiwgXCJQaW5nRmFuZyBTQ1wiLCBcIkhpcmFnaW5vIFNhbnMgR0JcIiwgXCJOb3RvIFNhbnMgQ0pLIFNDXCIsIFwiU291cmNlIEhhbiBTYW5zIFNDXCIsIFwiU291cmNlIEhhbiBTYW5zIENOXCIsXHJcbiAgU2ltSGVpLCBcIk1pY3Jvc29mdCBZYUhlaVwiLCBcIldlbnF1YW55aSBNaWNybyBIZWlcIiwgXCJXZW5RdWFuWWkgWmVuIEhlaVwiLCBcIlNUIEhlaXRpXCIsIFwiV2VuUXVhbllpIFplbiBIZWkgU2hhcnBcIixcclxuICBzYW5zLXNlcmlmO1xyXG5cclxuJGhpZ2hsaWdodC1iYWNrZ3JvdW5kOiAjZThlYWY3O1xyXG5idXR0b24ge1xyXG4gIG1hcmdpbjogMC4yNWVtO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbn1cclxuYSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcbiIsImJ1dHRvbiB7XG4gIG1hcmdpbjogMC4yNWVtO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5bbWRjRHJhd2VySGVhZGVyXSxcblttZGNEcmF3ZXJUb29sYmFyU3BhY2VyXSxcblttZGNUb29sYmFyXSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2MjAwZWU7XG4gIC8qIEBhbHRlcm5hdGUgKi9cbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWRjLXRoZW1lLXByaW1hcnksICM2MjAwZWUpO1xuICBjb2xvcjogI2ZmZjtcbiAgLyogQGFsdGVybmF0ZSAqL1xuICBjb2xvcjogdmFyKC0tbWRjLXRoZW1lLW9uLXByaW1hcnksICNmZmYpO1xuICAvKiBTdXBwb3J0IGZvciBpT1MgMTEuMisuICovXG4gIHBhZGRpbmctdG9wOiBlbnYoc2FmZS1hcmVhLWluc2V0LXRvcCk7XG4gIHBhZGRpbmctcmlnaHQ6IGVudihzYWZlLWFyZWEtaW5zZXQtcmlnaHQpO1xuICBwYWRkaW5nLWxlZnQ6IGVudihzYWZlLWFyZWEtaW5zZXQtbGVmdCk7XG59XG5cbnNlY3Rpb24ge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5bbWRjRHJhd2VySGVhZGVyXSB7XG4gIGhlaWdodDogMTI4cHg7XG59XG5cblttZGNEcmF3ZXJUb29sYmFyU3BhY2VyXSxcblttZGNUb29sYmFyXSB7XG4gIGhlaWdodDogNjRweDtcbn1cblxuW21kY1Rvb2xiYXJSb3ddIHtcbiAgbWluLWhlaWdodDogMTAwJTtcbn1cblxuLmNvbnRhaW5lciB7XG4gIG1heC13aWR0aDogMTQwMHB4O1xuICBtYXJnaW46IGF1dG87XG4gIHBhZGRpbmctdG9wOiBjYWxjKDAuNWVtICsgZW52KHNhZmUtYXJlYS1pbnNldC10b3ApKTtcbiAgcGFkZGluZy1yaWdodDogY2FsYygwLjVlbSArIGVudihzYWZlLWFyZWEtaW5zZXQtcmlnaHQpKTtcbiAgcGFkZGluZy1ib3R0b206IGNhbGMoMC41ZW0gKyBlbnYoc2FmZS1hcmVhLWluc2V0LWJvdHRvbSkpO1xuICBwYWRkaW5nLWxlZnQ6IGNhbGMoMC41ZW0gKyBlbnYoc2FmZS1hcmVhLWluc2V0LWxlZnQpKTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5tZGMtdG9vbGJhcl9fdGl0bGUge1xuICBmb250LXNpemU6IDEuMTI1ZW07XG4gIGNvbG9yOiB2YXIoLS1tZGMtdGhlbWUtb24tcHJpbWFyeSk7XG4gIHBhZGRpbmc6IDAuMjVlbTtcbn1cblxuLm1kYy10b29sYmFyX190aXRsZS5yb3V0ZXItYWN0aXZlIHtcbiAgY29sb3I6ICMyMmJiZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xMjUpO1xuICBib3JkZXItcmFkaXVzOiAxZW0gMC41ZW0gMWVtIDAuNWVtO1xuICBib3JkZXItY29sb3I6ICNmZmZmZmY7XG59XG5cblttZGNEcmF3ZXJIZWFkZXJDb250ZW50XSAubWRjLXRvb2xiYXJfX3RpdGxlLnJvdXRlci1hY3RpdmUge1xuICBib3JkZXI6IG5vbmU7XG59XG5bbWRjRHJhd2VySGVhZGVyQ29udGVudF0gLmRyYXdlci1oZWFkZXIge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZG93czogMTAwJTtcbn1cblxuW21kY0RyYXdlckNvbnRlbnRdIGEge1xuICBjb2xvcjogdmFyKC0tbWRjLXRoZW1lLXNlY29uZGFyeSk7XG59XG5bbWRjRHJhd2VyQ29udGVudF0gYTpob3ZlciB7XG4gIGNvbG9yOiB2YXIoLS1tZGMtdGhlbWUtb24tc2Vjb25kYXJ5KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWRjLXRoZW1lLXNlY29uZGFyeSk7XG59XG5bbWRjRHJhd2VyQ29udGVudF0gYTpob3ZlciBpIHtcbiAgZm9udC1zaXplOiAzMnB4O1xuICBjb2xvcjogdmFyKC0tbWRjLXRoZW1lLW9uLXNlY29uZGFyeSk7XG59XG5bbWRjRHJhd2VyQ29udGVudF0gYSBpIHtcbiAgY29sb3I6IHZhcigtLW1kYy10aGVtZS1zZWNvbmRhcnkpO1xufVxuXG4ucm91dGVyLWFjdGl2ZS5zbWFsbCB7XG4gIGZvbnQtc2l6ZTogODAlO1xufVxuXG4udG9vbGJhci10aXRsZXMge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5pbWctaGVhZGVyIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtYXgtaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogYXV0bztcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4uaW1nLXRpdGxlIHtcbiAgd2lkdGg6IDQ4cHg7XG4gIGhlaWdodDogNDhweDtcbn0iLCJAaW1wb3J0IFwiLi9zdHlsZXMvY3VzdG9tLnNjc3NcIjtcclxuQGltcG9ydCBcIkBtYXRlcmlhbC90aGVtZS9taXhpbnNcIjtcclxuXHJcblttZGNEcmF3ZXJIZWFkZXJdLFxyXG5bbWRjRHJhd2VyVG9vbGJhclNwYWNlcl0sXHJcblttZGNUb29sYmFyXSB7XHJcbiAgLy8gY29sb3IgdGhlIGhlYWRlciB2YXJpYW50cyB0aGUgc2FtZSB3YXkgYXMgdGhlIHRvb2xiYXI6XHJcbiAgQGluY2x1ZGUgbWRjLXRoZW1lLXByb3AoYmFja2dyb3VuZC1jb2xvciwgcHJpbWFyeSk7XHJcbiAgQGluY2x1ZGUgbWRjLXRoZW1lLXByb3AoY29sb3IsIG9uLXByaW1hcnkpO1xyXG5cclxuICAvKiBTdXBwb3J0IGZvciBpT1MgMTEuMisuICovXHJcbiAgcGFkZGluZy10b3A6IGVudihzYWZlLWFyZWEtaW5zZXQtdG9wKTtcclxuICBwYWRkaW5nLXJpZ2h0OiBlbnYoc2FmZS1hcmVhLWluc2V0LXJpZ2h0KTtcclxuICBwYWRkaW5nLWxlZnQ6IGVudihzYWZlLWFyZWEtaW5zZXQtbGVmdCk7XHJcbn1cclxuXHJcbi8vIC50b29sYmFyLXRpdGxlcyB7XHJcbi8vICAgcGFkZGluZzogMC41ZW07XHJcbi8vIH1cclxuXHJcbnNlY3Rpb24ge1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcblttZGNEcmF3ZXJIZWFkZXJdIHtcclxuICBoZWlnaHQ6IDEyOHB4O1xyXG59XHJcblttZGNEcmF3ZXJUb29sYmFyU3BhY2VyXSxcclxuW21kY1Rvb2xiYXJdIHtcclxuICBoZWlnaHQ6IDY0cHg7XHJcbn1cclxuW21kY1Rvb2xiYXJSb3ddIHtcclxuICBtaW4taGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICAvL0BpbmNsdWRlIG1kYy10aGVtZS1wcm9wKGJhY2tncm91bmQtY29sb3IsIGJhY2tncm91bmQpO1xyXG4gIC8vQGluY2x1ZGUgbWRjLXRoZW1lLXByb3AoY29sb3IsIHRleHQtcHJpbWFyeS1vbi1iYWNrZ3JvdW5kKTtcclxuXHJcbiAgbWF4LXdpZHRoOiAxNDAwcHg7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHBhZGRpbmctdG9wOiBjYWxjKDAuNWVtICsgZW52KHNhZmUtYXJlYS1pbnNldC10b3ApKTtcclxuICBwYWRkaW5nLXJpZ2h0OiBjYWxjKDAuNWVtICsgZW52KHNhZmUtYXJlYS1pbnNldC1yaWdodCkpO1xyXG4gIHBhZGRpbmctYm90dG9tOiBjYWxjKDAuNWVtICsgZW52KHNhZmUtYXJlYS1pbnNldC1ib3R0b20pKTtcclxuICBwYWRkaW5nLWxlZnQ6IGNhbGMoMC41ZW0gKyBlbnYoc2FmZS1hcmVhLWluc2V0LWxlZnQpKTtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcbi5tZGMtdG9vbGJhcl9fdGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMS4xMjVlbTtcclxuICBjb2xvcjogdmFyKC0tbWRjLXRoZW1lLW9uLXByaW1hcnkpO1xyXG4gIHBhZGRpbmc6IDAuMjVlbTtcclxufVxyXG4ubWRjLXRvb2xiYXJfX3RpdGxlLnJvdXRlci1hY3RpdmUge1xyXG4gIGNvbG9yOiAkY29sb3ItcHJpbWFyeTtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTI1KTtcclxuICBib3JkZXItcmFkaXVzOiAxZW0gMC41ZW0gMWVtIDAuNWVtO1xyXG4gIGJvcmRlci1jb2xvcjogI2ZmZmZmZjtcclxufVxyXG5cclxuW21kY0RyYXdlckhlYWRlckNvbnRlbnRdIHtcclxuICAubWRjLXRvb2xiYXJfX3RpdGxlLnJvdXRlci1hY3RpdmUge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gIH1cclxuICAuZHJhd2VyLWhlYWRlciB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWRvd3M6IDEwMCU7XHJcbiAgfVxyXG59XHJcblxyXG5bbWRjRHJhd2VyQ29udGVudF0ge1xyXG4gIGEge1xyXG4gICAgY29sb3I6IHZhcigtLW1kYy10aGVtZS1zZWNvbmRhcnkpO1xyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1tZGMtdGhlbWUtb24tc2Vjb25kYXJ5KTtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWRjLXRoZW1lLXNlY29uZGFyeSk7XHJcbiAgICAgIGkge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzJweDtcclxuICAgICAgICBjb2xvcjogdmFyKC0tbWRjLXRoZW1lLW9uLXNlY29uZGFyeSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGkge1xyXG4gICAgICBjb2xvcjogdmFyKC0tbWRjLXRoZW1lLXNlY29uZGFyeSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4ucm91dGVyLWFjdGl2ZS5zbWFsbCB7XHJcbiAgZm9udC1zaXplOiA4MCU7XHJcbn1cclxuXHJcbi50b29sYmFyLXRpdGxlcyB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLmltZy1oZWFkZXIge1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICBtYXgtaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIGhlaWdodDogYXV0bztcclxufVxyXG5cclxuLmltZy10aXRsZSB7XHJcbiAgd2lkdGg6IDQ4cHg7XHJcbiAgaGVpZ2h0OiA0OHB4O1xyXG59XHJcbiIsIi8vXG4vLyBDb3B5cmlnaHQgMjAxNyBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuLy9cbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4vLyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4vLyBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbi8vXG4vLyAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuLy9cbi8vIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbi8vIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbi8vIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuLy8gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuLy8gbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4vL1xuXG5AaW1wb3J0IFwiLi92YXJpYWJsZXNcIjtcblxuLy8gQXBwbGllcyB0aGUgY29ycmVjdCB0aGVtZSBjb2xvciBzdHlsZSB0byB0aGUgc3BlY2lmaWVkIHByb3BlcnR5LlxuLy8gJHByb3BlcnR5IGlzIHR5cGljYWxseSBjb2xvciBvciBiYWNrZ3JvdW5kLWNvbG9yLCBidXQgY2FuIGJlIGFueSBDU1MgcHJvcGVydHkgdGhhdCBhY2NlcHRzIGNvbG9yIHZhbHVlcy5cbi8vICRzdHlsZSBzaG91bGQgYmUgb25lIG9mIHRoZSBtYXAga2V5cyBpbiAkbWRjLXRoZW1lLXByb3BlcnR5LXZhbHVlcyAoX3ZhcmlhYmxlcy5zY3NzKSwgb3IgYSBsaXRlcmFsIGNvbG9yIHZhbHVlLlxuLy8gJGVkZ2VPcHRPdXQgY29udHJvbHMgd2hldGhlciB0byBmZWF0dXJlLWRldGVjdCBhcm91bmQgRWRnZSB0byBhdm9pZCBlbWl0dGluZyBDU1MgdmFyaWFibGVzIGZvciBpdCxcbi8vIGludGVuZGVkIGZvciB1c2UgaW4gY2FzZXMgd2hlcmUgaW50ZXJhY3Rpb25zIHdpdGggcHNldWRvLWVsZW1lbnQgc3R5bGVzIGNhdXNlIHByb2JsZW1zIGR1ZSB0byBFZGdlIGJ1Z3MuXG5AbWl4aW4gbWRjLXRoZW1lLXByb3AoJHByb3BlcnR5LCAkc3R5bGUsICRpbXBvcnRhbnQ6IGZhbHNlLCAkZWRnZU9wdE91dDogZmFsc2UpIHtcbiAgQGlmIHR5cGUtb2YoJHN0eWxlKSA9PSBcImNvbG9yXCIgb3IgJHN0eWxlID09IFwiY3VycmVudENvbG9yXCIge1xuICAgIEBpZiAkaW1wb3J0YW50IHtcbiAgICAgICN7JHByb3BlcnR5fTogJHN0eWxlICFpbXBvcnRhbnQ7XG4gICAgfSBAZWxzZSB7XG4gICAgICAjeyRwcm9wZXJ0eX06ICRzdHlsZTtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBpZiBub3QgbWFwLWhhcy1rZXkoJG1kYy10aGVtZS1wcm9wZXJ0eS12YWx1ZXMsICRzdHlsZSkge1xuICAgICAgQGVycm9yIFwiSW52YWxpZCBzdHlsZTogJyN7JHN0eWxlfScuIENob29zZSBvbmUgb2Y6ICN7bWFwLWtleXMoJG1kYy10aGVtZS1wcm9wZXJ0eS12YWx1ZXMpfVwiO1xuICAgIH1cblxuICAgICR2YWx1ZTogbWFwLWdldCgkbWRjLXRoZW1lLXByb3BlcnR5LXZhbHVlcywgJHN0eWxlKTtcblxuICAgIEBpZiAkaW1wb3J0YW50IHtcbiAgICAgICN7JHByb3BlcnR5fTogJHZhbHVlICFpbXBvcnRhbnQ7XG5cbiAgICAgIEBpZiAkZWRnZU9wdE91dCB7XG4gICAgICAgIC8vIHN0eWxlbGludC1kaXNhYmxlIG1heC1uZXN0aW5nLWRlcHRoXG4gICAgICAgIEBhdC1yb290IHtcbiAgICAgICAgICBAc3VwcG9ydHMgbm90ICgtbXMtaW1lLWFsaWduOmF1dG8pIHtcbiAgICAgICAgICAgIC8vIHN0eWxlbGludC1kaXNhYmxlIHNjc3Mvc2VsZWN0b3Itbm8tcmVkdW5kYW50LW5lc3Rpbmctc2VsZWN0b3JcbiAgICAgICAgICAgICYge1xuICAgICAgICAgICAgICAvKiBAYWx0ZXJuYXRlICovXG4gICAgICAgICAgICAgICN7JHByb3BlcnR5fTogdmFyKC0tbWRjLXRoZW1lLSN7JHN0eWxlfSwgJHZhbHVlKSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gc3R5bGVsaW50LWVuYWJsZSBzY3NzL3NlbGVjdG9yLW5vLXJlZHVuZGFudC1uZXN0aW5nLXNlbGVjdG9yXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIHN0eWxlbGludC1lbmFibGUgbWF4LW5lc3RpbmctZGVwdGhcbiAgICAgIH0gQGVsc2Uge1xuICAgICAgICAvKiBAYWx0ZXJuYXRlICovXG4gICAgICAgICN7JHByb3BlcnR5fTogdmFyKC0tbWRjLXRoZW1lLSN7JHN0eWxlfSwgJHZhbHVlKSAhaW1wb3J0YW50O1xuICAgICAgfVxuICAgIH0gQGVsc2Uge1xuICAgICAgI3skcHJvcGVydHl9OiAkdmFsdWU7XG5cbiAgICAgIEBpZiAkZWRnZU9wdE91dCB7XG4gICAgICAgIC8vIHN0eWxlbGludC1kaXNhYmxlIG1heC1uZXN0aW5nLWRlcHRoXG4gICAgICAgIEBhdC1yb290IHtcbiAgICAgICAgICBAc3VwcG9ydHMgbm90ICgtbXMtaW1lLWFsaWduOmF1dG8pIHtcbiAgICAgICAgICAgIC8vIHN0eWxlbGludC1kaXNhYmxlIHNjc3Mvc2VsZWN0b3Itbm8tcmVkdW5kYW50LW5lc3Rpbmctc2VsZWN0b3JcbiAgICAgICAgICAgICYge1xuICAgICAgICAgICAgICAvKiBAYWx0ZXJuYXRlICovXG4gICAgICAgICAgICAgICN7JHByb3BlcnR5fTogdmFyKC0tbWRjLXRoZW1lLSN7JHN0eWxlfSwgJHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIHN0eWxlbGludC1lbmFibGUgc2Nzcy9zZWxlY3Rvci1uby1yZWR1bmRhbnQtbmVzdGluZy1zZWxlY3RvclxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBzdHlsZWxpbnQtZW5hYmxlIG1heC1uZXN0aW5nLWRlcHRoXG4gICAgICB9IEBlbHNlIHtcbiAgICAgICAgLyogQGFsdGVybmF0ZSAqL1xuICAgICAgICAjeyRwcm9wZXJ0eX06IHZhcigtLW1kYy10aGVtZS0jeyRzdHlsZX0sICR2YWx1ZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _blox_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @blox/material */ "./node_modules/@blox/material/dist/material.es5.js");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm2015/service-worker.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _switch_theme_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./switch-theme.service */ "./src/app/switch-theme.service.ts");
/* harmony import */ var _fetch_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fetch.service */ "./src/app/fetch.service.ts");







let AppComponent = class AppComponent {
    constructor(snackBar, swUpdate, router, activatedRoute, switchTheme, fetchService) {
        this.snackBar = snackBar;
        this.swUpdate = swUpdate;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.switchTheme = switchTheme;
        this.fetchService = fetchService;
        this.title = '明日方舟工具箱 by 一只灰猫';
        this.drawerOpen = false;
        this.temporary = 'temporary';
        this.showNavbar = true;
        this.baseUrl = window.location.origin;
        this.nav = window.navigator;
        if (this.swUpdate.isEnabled) {
            this.swUpdate.checkForUpdate();
            this.swUpdate.available.subscribe(() => {
                const snackbarRef = this.snackBar.show({
                    message: '有新版本可用，是否更新？(同样可以点击右上角手动更新）',
                    actionText: '更新',
                    multiline: true,
                    actionOnBottom: true,
                    timeout: 5000
                });
                snackbarRef.action().subscribe(() => {
                    this.doUpdate();
                });
            });
        }
        this.router.events.subscribe(event => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationEnd"]) {
                ga('set', 'page', event.urlAfterRedirects);
                ga('send', 'pageview');
            }
        });
        this.activatedRoute.queryParams.subscribe(params => {
            this.showNavbar = !('hidenav' in params);
        });
        this.theme = this.fetchService.getLocalStorage("theme", "dark");
        this.switchTheme.setTheme(this.theme);
    }
    toggleDrawer() {
        this.drawerOpen = !this.drawerOpen;
    }
    showSnackBar(msg, action) {
        this.snackBar.show({
            message: msg,
            actionText: action,
            multiline: false,
            actionOnBottom: false
        });
    }
    toggleTheme() {
        if (this.theme === "light") {
            this.theme = "dark";
            this.switchTheme.setTheme(this.theme);
            this.fetchService.setLocalStorage("theme", this.theme);
        }
        else {
            this.theme = "light";
            this.switchTheme.setTheme(this.theme);
            this.fetchService.setLocalStorage("theme", this.theme);
        }
    }
    doUpdate() {
        this.swUpdate.activateUpdate().then(() => window.location.reload());
    }
    doShare() {
        if (this.nav && this.nav.share) {
            this.nav.share({
                title: this.title,
                text: this.title,
                url: window.location.origin
            });
        }
    }
    onbeforeinstallprompt(e) {
        e.preventDefault();
        this.deferredPrompt = e;
    }
};
AppComponent.ctorParameters = () => [
    { type: _blox_material__WEBPACK_IMPORTED_MODULE_2__["MdcSnackbarService"] },
    { type: _angular_service_worker__WEBPACK_IMPORTED_MODULE_3__["SwUpdate"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _switch_theme_service__WEBPACK_IMPORTED_MODULE_5__["SwitchThemeService"] },
    { type: _fetch_service__WEBPACK_IMPORTED_MODULE_6__["FetchService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:beforeinstallprompt', ['$event']),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
], AppComponent.prototype, "onbeforeinstallprompt", null);
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_blox_material__WEBPACK_IMPORTED_MODULE_2__["MdcSnackbarService"],
        _angular_service_worker__WEBPACK_IMPORTED_MODULE_3__["SwUpdate"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        _switch_theme_service__WEBPACK_IMPORTED_MODULE_5__["SwitchThemeService"],
        _fetch_service__WEBPACK_IMPORTED_MODULE_6__["FetchService"]])
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _blox_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @blox/material */ "./node_modules/@blox/material/dist/material.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _hr_hr_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./hr/hr.component */ "./src/app/hr/hr.component.ts");
/* harmony import */ var _hr_tags_hr_tags_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./hr-tags/hr-tags.component */ "./src/app/hr-tags/hr-tags.component.ts");
/* harmony import */ var _hr_comb_hr_comb_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./hr-comb/hr-comb.component */ "./src/app/hr-comb/hr-comb.component.ts");
/* harmony import */ var _lvlup_lvlup_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./lvlup/lvlup.component */ "./src/app/lvlup/lvlup.component.ts");
/* harmony import */ var _material_material_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./material/material.component */ "./src/app/material/material.component.ts");
/* harmony import */ var _material_card_material_card_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./material-card/material-card.component */ "./src/app/material-card/material-card.component.ts");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm2015/service-worker.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _help_help_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./help/help.component */ "./src/app/help/help.component.ts");
/* harmony import */ var ngx_clipboard__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-clipboard */ "./node_modules/ngx-clipboard/fesm2015/ngx-clipboard.js");
/* harmony import */ var _char_mat_char_mat_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./char-mat/char-mat.component */ "./src/app/char-mat/char-mat.component.ts");
/* harmony import */ var _char_mat_charcard_char_mat_charcard_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./char-mat-charcard/char-mat-charcard.component */ "./src/app/char-mat-charcard/char-mat-charcard.component.ts");
/* harmony import */ var _char_mat_matcard_char_mat_matcard_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./char-mat-matcard/char-mat-matcard.component */ "./src/app/char-mat-matcard/char-mat-matcard.component.ts");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./settings/settings.component */ "./src/app/settings/settings.component.ts");
/* harmony import */ var _auto_detect_auto_detect_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./auto-detect/auto-detect.component */ "./src/app/auto-detect/auto-detect.component.ts");
/* harmony import */ var _auto_detect_hash_auto_detect_hash_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./auto-detect-hash/auto-detect-hash.component */ "./src/app/auto-detect-hash/auto-detect-hash.component.ts");



 // (optional)






















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
            _hr_hr_component__WEBPACK_IMPORTED_MODULE_9__["HrComponent"],
            _hr_tags_hr_tags_component__WEBPACK_IMPORTED_MODULE_10__["HrTagsComponent"],
            _hr_comb_hr_comb_component__WEBPACK_IMPORTED_MODULE_11__["HrCombComponent"],
            _lvlup_lvlup_component__WEBPACK_IMPORTED_MODULE_12__["LvlupComponent"],
            _material_material_component__WEBPACK_IMPORTED_MODULE_13__["MaterialComponent"],
            _material_card_material_card_component__WEBPACK_IMPORTED_MODULE_14__["MaterialCardComponent"],
            _main_main_component__WEBPACK_IMPORTED_MODULE_17__["MainComponent"],
            _help_help_component__WEBPACK_IMPORTED_MODULE_18__["HelpComponent"],
            _char_mat_char_mat_component__WEBPACK_IMPORTED_MODULE_20__["CharMatComponent"],
            _char_mat_charcard_char_mat_charcard_component__WEBPACK_IMPORTED_MODULE_21__["CharMatCharcardComponent"],
            _char_mat_matcard_char_mat_matcard_component__WEBPACK_IMPORTED_MODULE_22__["CharMatMatcardComponent"],
            _settings_settings_component__WEBPACK_IMPORTED_MODULE_23__["SettingsComponent"],
            _auto_detect_auto_detect_component__WEBPACK_IMPORTED_MODULE_24__["AutoDetectComponent"],
            _auto_detect_hash_auto_detect_hash_component__WEBPACK_IMPORTED_MODULE_25__["AutoDetectHashComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _blox_material__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"],
            ngx_clipboard__WEBPACK_IMPORTED_MODULE_19__["ClipboardModule"],
            _angular_service_worker__WEBPACK_IMPORTED_MODULE_15__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_16__["environment"].production })
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/auto-detect-hash/auto-detect-hash.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/auto-detect-hash/auto-detect-hash.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("button {\n  margin: 0.25em;\n  white-space: nowrap;\n}\n\na {\n  text-decoration: none;\n}\n\nimg[src=\"\"],\nimg:not([src]) {\n  opacity: 0;\n}\n\ninput,\nselect {\n  text-align: center;\n}\n\n.mdc-button--dense {\n  min-width: 20px;\n}\n\n.mdc-text-field--upgraded:not(.mdc-text-field--fullwidth):not(.mdc-text-field--box) {\n  margin: 0;\n}\n\n.ad-container {\n  width: 100%;\n  max-width: 1200px;\n  margin: auto;\n}\n\n.ad-container .card-title {\n  max-width: 100%;\n  width: 400;\n  padding: 0.25em;\n  display: block;\n}\n\n[mdcCard] {\n  margin: 0.5em;\n}\n\n[mdcCard] .mat-icon {\n  max-height: 48px;\n  max-width: 48px;\n  height: auto;\n  width: auto;\n}\n\n[mdcCard] .matcard-item {\n  padding: 0.25em;\n}\n\n[mdcButton]:hover, [mdcButton]:checked {\n  color: var(--mdc-theme-on-primary);\n  background-color: var(--mdc-theme-primary);\n}\n\n[mdcButton]:disabled {\n  color: #999999;\n  background-color: #000;\n}\n\n[mdcLinearProgress] {\n  max-width: 1200px;\n  margin: 0 auto 10px auto;\n}\n\ncanvas {\n  width: 100%;\n  max-width: 1200px;\n}\n\np, input, select {\n  color: #999999;\n}\n\n.select {\n  border: blue 2px solid;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0by1kZXRlY3QtaGFzaC9DOlxcVXNlcnNcXFl1ZV9wXFxEb2N1bWVudHNcXGNvZGVcXGFrdG9vbHMvc3JjXFxhcHBcXHN0eWxlc1xcY3VzdG9tLnNjc3MiLCJzcmMvYXBwL2F1dG8tZGV0ZWN0LWhhc2gvYXV0by1kZXRlY3QtaGFzaC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXV0by1kZXRlY3QtaGFzaC9DOlxcVXNlcnNcXFl1ZV9wXFxEb2N1bWVudHNcXGNvZGVcXGFrdG9vbHMvc3JjXFxhcHBcXGF1dG8tZGV0ZWN0LWhhc2hcXGF1dG8tZGV0ZWN0LWhhc2guY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0JBO0VBQ0UsY0FBQTtFQUNBLG1CQUFBO0FDdkJGOztBRHlCQTtFQUNFLHFCQUFBO0FDdEJGOztBQ0xBOztFQUVFLFVBQUE7QURRRjs7QUNOQTs7RUFFRSxrQkFBQTtBRFNGOztBQ1BBO0VBQ0UsZUFBQTtBRFVGOztBQ1JBO0VBQ0UsU0FBQTtBRFdGOztBQ1RBO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBRFlGOztBQ1hFO0VBQ0UsZUFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBRGFKOztBQ1RBO0VBQ0UsYUFBQTtBRFlGOztBQ1ZFO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QURZSjs7QUNWRTtFQUNFLGVBQUE7QURZSjs7QUNORTtFQUNFLGtDQUFBO0VBQ0EsMENBQUE7QURTSjs7QUNQRTtFQUNFLGNGM0NVO0VFNENWLHNCRnBDVTtBQzZDZDs7QUNDQTtFQUNFLGlCQUFBO0VBQ0Esd0JBQUE7QURFRjs7QUNBQTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtBREdGOztBQ0FBO0VBQ0UsY0ZoRVk7QUNtRWQ7O0FDQUE7RUFDRSxzQkFBQTtBREdGIiwiZmlsZSI6InNyYy9hcHAvYXV0by1kZXRlY3QtaGFzaC9hdXRvLWRldGVjdC1oYXNoLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaHR0cHM6Ly9jb2xvcmh1bnQuY28vcGFsZXR0ZS8zNjFcclxuJGNvbG9yLTE6ICNkMDY5NGU7XHJcbiRjb2xvci0yOiAjZjZjZThjO1xyXG4kY29sb3ItMzogI2MzZTNlNTtcclxuJGNvbG9yLTQ6ICM1ODliYWQ7XHJcblxyXG4kY29sb3ItbXV0ZWQ6IHJnYigxNTMsIDE1MywgMTUzKTs7IC8vIOaWueiIny3mlofmnKzngbBcclxuJGNvbG9yLXByaW1hcnk6IHJnYigzNCwgMTg3LCAyNTUpOyAvLyDmlrnoiJ8t6JOdXHJcbiRjb2xvci1zdWNjZXNzOiByZ2IoMTI3LCAyMjQsIDE0OSk7IC8vIGJvb3RzdHJhcDRcclxuJGNvbG9yLWluZm86IHJnYigxMzcsIDEzNywgMTM3KTsgLy8g5pa56IifLeeBsFxyXG4kY29sb3Itd2FybmluZzogI2ZlMjsgLy8g5pa56IifLem7hFxyXG4kY29sb3ItZGFuZ2VyOiAjZWMyYjAwOyAvLyDmtKrngonnpLrlsoFcclxuJGNvbG9yLXNlY29uZGFyeTogcmdiKDEzNywgMTM3LCAxMzcpOyAvLyDmlrnoiJ8t54GwXHJcbiRjb2xvci1kYXJrOiAjMzEzMTMxOyAvLyDmlrnoiJ8t5oyJ6ZKuXHJcbiRjb2xvci1ibGFjazogIzAwMDsgLy8g57qv6buRXHJcbiRjb2xvci1saWdodDogcmdiKDI1MCwgMjQ5LCAyNDgpOyAvL2Jvb3RzdHJhcDRcclxuJGNvbG9yLXdoaXRlOiAjZmZmOyAvLyBib290c3RyYXA0XHJcblxyXG4kbWRjLXR5cG9ncmFwaHktZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIFwiTm90byBTYW5zXCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgSGVsdmV0aWNhLCBcIk5pbWJ1cyBTYW5zIExcIiwgQXJpYWwsXHJcbiAgXCJMaWJlcmF0aW9uIFNhbnNcIiwgXCJQaW5nRmFuZyBTQ1wiLCBcIkhpcmFnaW5vIFNhbnMgR0JcIiwgXCJOb3RvIFNhbnMgQ0pLIFNDXCIsIFwiU291cmNlIEhhbiBTYW5zIFNDXCIsIFwiU291cmNlIEhhbiBTYW5zIENOXCIsXHJcbiAgU2ltSGVpLCBcIk1pY3Jvc29mdCBZYUhlaVwiLCBcIldlbnF1YW55aSBNaWNybyBIZWlcIiwgXCJXZW5RdWFuWWkgWmVuIEhlaVwiLCBcIlNUIEhlaXRpXCIsIFwiV2VuUXVhbllpIFplbiBIZWkgU2hhcnBcIixcclxuICBzYW5zLXNlcmlmO1xyXG5cclxuJGhpZ2hsaWdodC1iYWNrZ3JvdW5kOiAjZThlYWY3O1xyXG5idXR0b24ge1xyXG4gIG1hcmdpbjogMC4yNWVtO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbn1cclxuYSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcbiIsImJ1dHRvbiB7XG4gIG1hcmdpbjogMC4yNWVtO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5pbWdbc3JjPVwiXCJdLFxuaW1nOm5vdChbc3JjXSkge1xuICBvcGFjaXR5OiAwO1xufVxuXG5pbnB1dCxcbnNlbGVjdCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLm1kYy1idXR0b24tLWRlbnNlIHtcbiAgbWluLXdpZHRoOiAyMHB4O1xufVxuXG4ubWRjLXRleHQtZmllbGQtLXVwZ3JhZGVkOm5vdCgubWRjLXRleHQtZmllbGQtLWZ1bGx3aWR0aCk6bm90KC5tZGMtdGV4dC1maWVsZC0tYm94KSB7XG4gIG1hcmdpbjogMDtcbn1cblxuLmFkLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDEyMDBweDtcbiAgbWFyZ2luOiBhdXRvO1xufVxuLmFkLWNvbnRhaW5lciAuY2FyZC10aXRsZSB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgd2lkdGg6IDQwMDtcbiAgcGFkZGluZzogMC4yNWVtO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuW21kY0NhcmRdIHtcbiAgbWFyZ2luOiAwLjVlbTtcbn1cblttZGNDYXJkXSAubWF0LWljb24ge1xuICBtYXgtaGVpZ2h0OiA0OHB4O1xuICBtYXgtd2lkdGg6IDQ4cHg7XG4gIGhlaWdodDogYXV0bztcbiAgd2lkdGg6IGF1dG87XG59XG5bbWRjQ2FyZF0gLm1hdGNhcmQtaXRlbSB7XG4gIHBhZGRpbmc6IDAuMjVlbTtcbn1cblxuW21kY0J1dHRvbl06aG92ZXIsIFttZGNCdXR0b25dOmNoZWNrZWQge1xuICBjb2xvcjogdmFyKC0tbWRjLXRoZW1lLW9uLXByaW1hcnkpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tZGMtdGhlbWUtcHJpbWFyeSk7XG59XG5bbWRjQnV0dG9uXTpkaXNhYmxlZCB7XG4gIGNvbG9yOiAjOTk5OTk5O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xufVxuXG5bbWRjTGluZWFyUHJvZ3Jlc3NdIHtcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XG4gIG1hcmdpbjogMCBhdXRvIDEwcHggYXV0bztcbn1cblxuY2FudmFzIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMTIwMHB4O1xufVxuXG5wLCBpbnB1dCwgc2VsZWN0IHtcbiAgY29sb3I6ICM5OTk5OTk7XG59XG5cbi5zZWxlY3Qge1xuICBib3JkZXI6IGJsdWUgMnB4IHNvbGlkO1xufSIsIkBpbXBvcnQgXCIuLi9zdHlsZXMvY3VzdG9tLnNjc3NcIjtcclxuXHJcbmltZ1tzcmM9XCJcIl0sXHJcbmltZzpub3QoW3NyY10pIHtcclxuICBvcGFjaXR5OiAwO1xyXG59XHJcbmlucHV0LFxyXG5zZWxlY3Qge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4ubWRjLWJ1dHRvbi0tZGVuc2Uge1xyXG4gIG1pbi13aWR0aDogMjBweDtcclxufVxyXG4ubWRjLXRleHQtZmllbGQtLXVwZ3JhZGVkOm5vdCgubWRjLXRleHQtZmllbGQtLWZ1bGx3aWR0aCk6bm90KC5tZGMtdGV4dC1maWVsZC0tYm94KSB7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcbi5hZC1jb250YWluZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1heC13aWR0aDogMTIwMHB4O1xyXG4gIG1hcmdpbjogYXV0bztcclxuICAuY2FyZC10aXRsZSB7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICB3aWR0aDogNDAwO1xyXG4gICAgcGFkZGluZzogMC4yNWVtO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG59XHJcblxyXG5bbWRjQ2FyZF0ge1xyXG4gIG1hcmdpbjogMC41ZW07XHJcblxyXG4gIC5tYXQtaWNvbiB7XHJcbiAgICBtYXgtaGVpZ2h0OiA0OHB4O1xyXG4gICAgbWF4LXdpZHRoOiA0OHB4O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgfVxyXG4gIC5tYXRjYXJkLWl0ZW0ge1xyXG4gICAgcGFkZGluZzogMC4yNWVtO1xyXG4gIH1cclxufVxyXG5cclxuW21kY0J1dHRvbl0ge1xyXG5cclxuICAmOmhvdmVyLCAmOmNoZWNrZWQge1xyXG4gICAgY29sb3I6IHZhcigtLW1kYy10aGVtZS1vbi1wcmltYXJ5KTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1kYy10aGVtZS1wcmltYXJ5KTtcclxuICB9XHJcbiAgJjpkaXNhYmxlZCB7XHJcbiAgICBjb2xvcjogJGNvbG9yLW11dGVkO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWJsYWNrO1xyXG4gIH1cclxufVxyXG5cclxuLy8gW21kY1RleHRGaWVsZF0ge1xyXG4vLyAgIGlucHV0IHtcclxuLy8gICAgIGNvbG9yOiAkY29sb3Itd2hpdGU7XHJcbi8vICAgfVxyXG4vLyB9XHJcblxyXG5bbWRjTGluZWFyUHJvZ3Jlc3NdIHtcclxuICBtYXgtd2lkdGg6MTIwMHB4O1xyXG4gIG1hcmdpbjowIGF1dG8gMTBweCBhdXRvO1xyXG59XHJcbmNhbnZhcyB7XHJcbiAgd2lkdGg6MTAwJTtcclxuICBtYXgtd2lkdGg6ICAxMjAwcHg7XHJcbn1cclxuXHJcbnAsIGlucHV0LCBzZWxlY3Qge1xyXG4gIGNvbG9yOiAkY29sb3ItbXV0ZWQ7XHJcbn1cclxuXHJcbi5zZWxlY3Qge1xyXG4gIGJvcmRlcjpibHVlIDJweCBzb2xpZDtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/auto-detect-hash/auto-detect-hash.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/auto-detect-hash/auto-detect-hash.component.ts ***!
  \****************************************************************/
/*! exports provided: AutoDetectHashComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutoDetectHashComponent", function() { return AutoDetectHashComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _blox_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @blox/material */ "./node_modules/@blox/material/dist/material.es5.js");
/* harmony import */ var _fetch_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../fetch.service */ "./src/app/fetch.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let AutoDetectHashComponent = class AutoDetectHashComponent {
    constructor(fetchService, snackbar, router, el) {
        this.fetchService = fetchService;
        this.snackbar = snackbar;
        this.router = router;
        this.el = el;
        // tslint:disable: max-line-length
        this.detectedItemList = [];
        this.ItemHashList = [];
        this.InfoText = '等待处理';
        this.progress = 0;
        this.XBound = [];
        this.YBound = [];
        this.ItemGreyData = [];
        this.ItemHash = [];
        this.ImageGreyData = {};
        this.ButtonLock = false;
        this.ItemImage = '';
        this.ModifyingItem = null;
        this.ModifyBuffer = { name: '', have: 0, delete: false };
        this.Modifying = { x: 0, y: 0 };
        this.NumberData = [];
        this.FixingNumberData = [];
        this.FixingNumberIndex = 0;
        this.textColor = '#00ff00';
        this.NumberHash = {
            1: '0000100000001000000010000000100000001000000010000000100000000001',
            2: '0010011110000001000000010000000100000011000001000001100000100000',
            3: '0010001100000001000000010000011000000011000000000000000100100011',
            4: '0000001000001010000110100011001001000010000000110000001000000010',
            5: '0010000101100000011000000011001100000000000000000000000101100011',
            6: '0000001101100000010000001100011111100001110000000110000100110011',
            7: '0000000000000001000000110000010000000100000010000000100000001000',
            8: '0001001101100000011000000011101101100001110000000100000000010001',
            9: '0010001111000001100000011100000000001101000000010000000101000111',
            0: '0011001101100001110000011100000011000000110000010110000100110111',
            万: '0000100000010000000100000001000100100001001000010110000111000001'
        };
        this.HighQNumberHash = {};
        this.MaxFontSize = true;
        this.FontSize = 0;
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const SaveHash = this.fetchService.getLocalStorage('detect-hash', false);
            if (SaveHash === false) {
                this.fetchService.getJson('./assets/data/MaterialHash.json').subscribe(data => {
                    this.ItemHashList = data;
                    this.fetchService.setLocalStorage('detect-hash', {
                        NumberHash: this.NumberHash,
                        ItemHash: data
                    });
                });
            }
            else {
                this.ItemHashList = SaveHash.ItemHash;
                this.NumberHash = SaveHash.NumberHash;
            }
            this.MaxFontSize = this.fetchService.getLocalStorage('detect-mfs', true);
            this.textColor = this.fetchService.getLocalStorage('detect-tclr', '#00ff00');
            this.ImageElement = document.createElement('img');
            this.Canvas = this.el.nativeElement.getElementsByTagName('canvas')[0];
            this.Ctx = this.Canvas.getContext('2d');
            this.onPasteImage();
        });
    }
    choiceImage(event) {
        const ImageContainer = event.target;
        const Reader = new FileReader();
        Reader.onload = e => {
            this.LoadImage(Reader.result.toString());
        };
        Reader.readAsDataURL(ImageContainer.files[0]);
        this.XBound = [];
        this.YBound = [];
        this.ItemGreyData = [];
        this.detectedItemList = [];
        this.ItemHash = [];
    }
    onPasteImage() {
        const ctx = this;
        document.addEventListener("paste", function (event) {
            const items = event.clipboardData && event.clipboardData.items;
            if (items && items.length) {
                if (items[0].type.indexOf("image") !== -1) {
                    const file = items[0].getAsFile();
                    const Reader = new FileReader();
                    Reader.onload = e => {
                        ctx.LoadImage(Reader.result.toString());
                    };
                    Reader.readAsDataURL(file);
                    ctx.XBound = [];
                    ctx.YBound = [];
                    ctx.ItemGreyData = [];
                    ctx.detectedItemList = [];
                    ctx.ItemHash = [];
                }
            }
        });
    }
    LoadImage(src) {
        this.ImageElement.src = src;
        this.ImageElement.onload = () => {
            this.setProgress('等待处理', 0);
            const img = this.ImageElement;
            this.Canvas.width = this.ImageElement.width;
            this.Canvas.height = this.ImageElement.height;
            const maxSize = 1200;
            /*const width = img.width > img.height ? maxSize : (maxSize * img.width / img.height);
            const height = img.width > img.height ? (maxSize * img.height / img.width) : maxSize;
            this.Canvas.style.width = width + 'px';
            this.Canvas.style.height = height + 'px';*/
            this.ImageLoaded = true;
            this.Ctx.drawImage(img, 0, 0);
            // this.Ctx.font = img.height / 750 * 15 + 'px serif';
            this.Ctx.textAlign = 'center';
            this.ImageData = this.Ctx.getImageData(0, 0, this.Canvas.width, this.Canvas.height);
        };
    }
    objectRegonition() {
        this.XBound = [];
        this.YBound = [];
        this.ItemGreyData = [];
        this.detectedItemList = [];
        this.ItemHash = [];
        this.setProgress('正在扫描图片', 0.1);
        this.ButtonLock = true;
        this.searchBoundary().then(() => {
            return this.CropImage();
        }).then(() => {
            return this.genHash();
        }).then(() => {
            return this.checkHash();
        }).then(() => {
            return this.Ocr();
        }).then(() => {
            return this.drawText();
        }).then(() => {
            this.setProgress('识别完成，可点击图像对应位置对识别结果进行修改', 1);
            this.ButtonLock = false;
        });
    }
    Ocr() {
        return new Promise((resolve, reject) => {
            // 十分简易的文字识别
            this.setProgress('正在识别各物品数量', 0.90);
            setTimeout(() => {
                // 惯例两for遍历
                for (let y = 0, YAll = this.detectedItemList.length; y < YAll; y++) {
                    this.NumberData.push([]);
                    const YDistance = this.YBound[y][1] - this.YBound[y][0];
                    const top = Math.floor(YDistance * 0.735) + y;
                    const bottom = Math.floor(YDistance * 0.0725);
                    const height = YDistance - bottom - top;
                    const realTop = this.YBound[y][0] + top;
                    for (let x = 0, XAll = this.detectedItemList[y].length; x < XAll; x++) {
                        this.NumberData[y].push([]);
                        const XDistance = this.XBound[x][1] - this.XBound[x][0];
                        const width = Math.floor(XDistance * 0.485);
                        const realLeft = Math.floor(this.XBound[x][0] + (XDistance * 0.4));
                        // 1.裁剪出数字的地方
                        const NumberBuffer = document.createElement('canvas').getContext('2d');
                        NumberBuffer.canvas.height = height;
                        NumberBuffer.canvas.width = width;
                        NumberBuffer.drawImage(this.ImageElement, realLeft, realTop, width, height, 0, 0, width, height);
                        const rImgData = NumberBuffer.getImageData(0, 0, width, height);
                        const ImgData = rImgData.data;
                        // 2.图像预处理，只保留出两种状态
                        const easyData = [];
                        for (let ny = 0; ny < height; ny++) {
                            easyData.push([]);
                            const BaseY = (ny * width) * 4;
                            for (let nx = 0; nx < width; nx++) {
                                if (255 - Math.floor((ImgData[BaseY + nx * 4] + ImgData[BaseY + nx * 4 + 1] + ImgData[BaseY + nx * 4 + 2]) / 3) <= 80) {
                                    ImgData[BaseY + nx * 4] = 255;
                                    ImgData[BaseY + nx * 4 + 1] = 255;
                                    ImgData[BaseY + nx * 4 + 2] = 255;
                                    easyData[ny][nx] = true;
                                }
                                else {
                                    ImgData[BaseY + nx * 4] = 0;
                                    ImgData[BaseY + nx * 4 + 1] = 0;
                                    ImgData[BaseY + nx * 4 + 2] = 0;
                                    easyData[ny][nx] = false;
                                }
                            }
                        }
                        // 3. 分割每个数字，方便计算Hash
                        const XNumberBound = [];
                        const YNumberBound = [];
                        this.Ctx.fillStyle = '#00ff00';
                        for (let nx = 0, whiteLock = false, i; nx < width; nx++) {
                            let white = 0;
                            for (let ny = 0; ny < height; ny++) {
                                if (easyData[ny][nx]) {
                                    white++;
                                }
                            }
                            if (white && !whiteLock) {
                                i = XNumberBound.push([]) - 1;
                                XNumberBound[i][0] = nx;
                                this.Ctx.fillRect(realLeft + nx, realTop, 1, height);
                                whiteLock = true;
                            }
                            else if (whiteLock && white === 0) {
                                XNumberBound[i][1] = nx;
                                this.Ctx.fillRect(realLeft + nx, realTop, 1, height);
                                whiteLock = false;
                            }
                        }
                        for (let index = 0, all = XNumberBound.length; index < all; index++) {
                            for (let ny = 0, whiteLock = false; ny < height; ny++) {
                                let white = 0;
                                for (let nx = XNumberBound[index][0]; nx <= XNumberBound[index][1]; nx++) {
                                    if (easyData[ny][nx]) {
                                        white++;
                                    }
                                }
                                if (white && !whiteLock) {
                                    YNumberBound[index] = [];
                                    YNumberBound[index][0] = ny;
                                    this.Ctx.fillRect(realLeft + XNumberBound[index][0], realTop + ny, XNumberBound[index][1] - XNumberBound[index][0], 1);
                                    whiteLock = true;
                                }
                                else if (whiteLock && white === 0) {
                                    YNumberBound[index][1] = ny;
                                    this.Ctx.fillRect(realLeft + XNumberBound[index][0], realTop + ny, XNumberBound[index][1] - XNumberBound[index][0], 1);
                                    whiteLock = false;
                                }
                            }
                        }
                        this.Ctx.fillStyle = '#ff0000';
                        let NumberString = '';
                        NumberBuffer.putImageData(rImgData, 0, 0);
                        for (let i = 0, all = XNumberBound.length; i < all; i++) {
                            if (XNumberBound[i].length !== 2) {
                                continue;
                            }
                            if (XNumberBound[i][1] - XNumberBound[i][0] >= 1 && XNumberBound[i][1] - XNumberBound[i][0] <= 3) {
                                NumberString = NumberString.replace(/\./g, '') + '.';
                                continue;
                            }
                            if (XNumberBound[i][1] - XNumberBound[i][0] < 6 || XNumberBound[i][1] - XNumberBound[i][0] >= 24) {
                                continue;
                            }
                            this.Ctx.fillRect(realLeft + XNumberBound[i][0], realTop, 1, height);
                            this.Ctx.fillRect(realLeft + XNumberBound[i][1], realTop, 1, height);
                            let hash = '';
                            const SingleNumber = document.createElement('canvas').getContext('2d');
                            SingleNumber.canvas.width = 9;
                            SingleNumber.canvas.height = 8;
                            // 数值范围显示:this.Ctx.fillRect(realLeft + XNumberBound[i][0], realTop+YNumberBound[i][0], XNumberBound[i][1] - XNumberBound[i][0], YNumberBound[i][1] - YNumberBound[i][0]);
                            SingleNumber.drawImage(NumberBuffer.canvas, XNumberBound[i][0], YNumberBound[i][0], XNumberBound[i][1] - XNumberBound[i][0], YNumberBound[i][1] - YNumberBound[i][0], 0, 0, SingleNumber.canvas.width, SingleNumber.canvas.height);
                            const SingleNumberData = SingleNumber.getImageData(0, 0, SingleNumber.canvas.width, SingleNumber.canvas.height).data;
                            for (let j = 0, dataAll = SingleNumberData.length; j < dataAll; j += 4) {
                                if (Math.floor(j / 4) % SingleNumber.canvas.width === (SingleNumber.canvas.width - 1)) {
                                    continue;
                                }
                                hash += (Math.floor((SingleNumberData[j] + SingleNumberData[j + 1] + SingleNumberData[j + 2]) / 3) > Math.floor((SingleNumberData[j + 4] + SingleNumberData[j + 5] + SingleNumberData[j + 6]) / 3)) ? '1' : '0';
                            }
                            let Q = Infinity;
                            let Value = '';
                            for (const key of Object.keys(this.NumberHash)) {
                                const distance = this.NumberHash[key].split('').reduce((count, value, index) => {
                                    return count + (value === hash[index] ? 0 : 1);
                                }, 0);
                                /*const LD = this.LD(hash, this.NumberHash[key]);
                                const LCS = this.LCS(hash, this.NumberHash[key]);
                                const S = (1 - (LCS / (LD + LCS))) * 100;*/
                                Q = Math.min(Q, distance);
                                if (Q === distance) {
                                    Value = key;
                                }
                            }
                            NumberString += Q > 15 ? '' : Value; // 去噪声
                            const TempCanvas = document.createElement('canvas').getContext('2d');
                            TempCanvas.canvas.width = XNumberBound[i][1] - XNumberBound[i][0];
                            TempCanvas.canvas.height = YNumberBound[i][1] - YNumberBound[i][0];
                            TempCanvas.drawImage(this.ImageElement, realLeft + XNumberBound[i][0], realTop + YNumberBound[i][0], TempCanvas.canvas.width, TempCanvas.canvas.height, 0, 0, TempCanvas.canvas.width, TempCanvas.canvas.height);
                            this.NumberData[y][x].push({ hash, src: TempCanvas.canvas.toDataURL(), realData: null });
                            TempCanvas.canvas.remove();
                            SingleNumber.canvas.remove();
                        }
                        if (NumberString.indexOf('.') === -1 || /万\d+/.test(NumberString)) {
                            NumberString = NumberString.replace(/万/g, '');
                        }
                        if (NumberString[0] === '.') {
                            NumberString = NumberString.substr(1, NumberString.length - 1);
                        }
                        // this.Ctx.fillText(NumberString, Math.floor(this.XBound[x][0] + (this.XBound[x][1] - this.XBound[x][0]) / 2), Math.floor(this.YBound[y][0] + (this.YBound[y][1] - this.YBound[y][0]) / 2 + this.ImageElement.height / 750 * 15));
                        if (NumberString.substr(NumberString.length - 1, 1) === '万') {
                            this.detectedItemList[y][x].have = Number(NumberString.substr(0, NumberString.length - 1)) * 10000;
                        }
                        else {
                            this.detectedItemList[y][x].have = Number(NumberString);
                        }
                        NumberBuffer.canvas.remove();
                        /* 直接对比汉明距离在这里不太好用，使用编辑距离来进行比较
                        // 实际测试中发现对不同设备的兼容性不够良好
                        for (let ny = 0; ny < height; ny++) {
                            for (let nx = XNumberBound[i][0]; nx <= XNumberBound[i][1]; nx++) {
                                hash += easyData[ny][nx] ? '1' : '0';
                            }
                        }
                        let min = Infinity;
                        let Value: string;
                        for (const key of Object.keys(this.NumberHash)) {
                            const ld = this.LD((hash.length < this.NumberHash[key]) ? hash.padEnd(this.NumberHash[key].length, '0') : hash, (hash.length < this.NumberHash[key]) ? this.NumberHash[key] : this.NumberHash[key].padEnd(hash.length, '0'));
                            min = Math.min(min, ld);
                            if (ld === min) {
                                Value = key;
                            }
                        }
                        NumberString += (min > 100) ? '' : Value;
                    }
                    if (NumberString.indexOf('.') === -1) {
                        NumberString.replace(/万/g, '');
                    }
                    this.Ctx.fillStyle = '#00ff00';
                    this.Ctx.fillText(NumberString, Math.floor(this.XBound[x][0] + (this.XBound[x][1] - this.XBound[x][0]) / 2), Math.floor(this.YBound[y][0] + (this.YBound[y][1] - this.YBound[y][0]) / 2 + 20));
                    if (NumberString.substr(NumberString.length - 1, 1) === '万') {
                        this.detectedItemList[y][x].have = Number(NumberString.substr(0, NumberString.length - 1)) * 10000;
                    } else {
                        this.detectedItemList[y][x].have = Number(NumberString);
                    }
                    */
                        // //console.log(easyData);
                        // //console.log(XNumberBound);
                    }
                }
                resolve();
            }, 25);
        });
    }
    /*
    LD(str1: string, str2: string) {
        // 实现LD算法计算编辑距离 可以优化成LDCompare(https://www.cnblogs.com/grenet/archive/2009/12/17/1626649.html#comment_body_1727150)?
        // 代码参考https://www.cnblogs.com/grenet/archive/2010/06/01/1748448.html
        const L = [];
        L[0] = [];
        L[0][0] = 0;
        for (let i = 1, all = str1.length; i <= all; i++) {
            L[i] = [];
            L[i][0] = i;
        }
        for (let j = 1, all = str2.length; j <= all; j++) {
            L[0][j] = j;
        }
        for (let i = 1, all = str1.length; i <= all; i++) {
            for (let j = 1, all2 = str2.length; j <= all2; j++) {
                if (str1[i - 1] === str2[j - 1]) {
                    L[i][j] = L[i - 1][j - 1];
                } else {
                    L[i][j] = Math.min(L[i - 1][j - 1], L[i - 1][j], L[i][j - 1]) + 1;
                }
            }
        }
        return L[str1.length][str2.length];
    }
    LCS(str1: string, str2: string) {
        const L = [];
        L[0] = [];
        L[0][0] = 0;
        for (let i = 1, all = str1.length; i <= all; i++) {
            L[i] = [];
            L[i][0] = 0;
        }
        for (let j = 1, all = str2.length; j <= all; j++) {
            L[0][j] = 0;
        }
        for (let i = 1, all = str1.length; i <= all; i++) {
            for (let j = 1, all2 = str2.length; j <= all2; j++) {
                if (str1[i - 1] === str2[j - 1]) {
                    L[i][j] = L[i - 1][j - 1] + 1;
                } else {
                    L[i][j] = Math.max(L[i - 1][j - 1], L[i - 1][j], L[i][j - 1]);
                }
            }
        }
        return L[str1.length][str2.length];
    }*/
    CropImage() {
        // 裁剪图片
        return new Promise((resolve, reject) => {
            this.setProgress('正在裁剪并缩放各物品图片', 0.55);
            setTimeout(() => {
                const TempCanvas = document.createElement('canvas');
                TempCanvas.width = 9;
                TempCanvas.height = 8;
                const TempCtx = TempCanvas.getContext('2d');
                for (let y = 0, YAll = this.YBound.length; y < YAll; y++) {
                    if (this.YBound[y].length !== 2) {
                        continue;
                    }
                    this.ItemGreyData.push([]);
                    for (let x = 0, XAll = this.XBound.length; x < XAll; x++) {
                        if (this.XBound[x].length !== 2) {
                            continue;
                        }
                        TempCtx.drawImage(this.ImageElement, this.XBound[x][0], this.YBound[y][0], this.XBound[x][1] - this.XBound[x][0], this.YBound[y][1] - this.YBound[y][0], 0, 0, TempCanvas.width, TempCanvas.height);
                        const TempImageData = TempCtx.getImageData(0, 0, TempCanvas.width, TempCanvas.height).data;
                        const l = this.ItemGreyData[y].push([]) - 1;
                        for (let ya = 0; ya < TempCanvas.height; ya++) {
                            this.ItemGreyData[y][l].push([]);
                            for (let xa = 0; xa < TempCanvas.width; xa++) {
                                const index = (ya * TempCanvas.width + xa) * 4;
                                this.ItemGreyData[y][l][ya][xa] = Math.floor((TempImageData[index] + TempImageData[index + 1] + TempImageData[index + 2]) / 3);
                            }
                        }
                    }
                }
                TempCanvas.remove();
                resolve();
            }, 25);
        });
    }
    genHash() {
        return new Promise((resolve, reject) => {
            this.setProgress('正在计算Hash(请耐心等待)', 0.65);
            setTimeout(() => {
                for (let ya = 0, YaAll = this.ItemGreyData.length; ya < YaAll; ya++) {
                    this.ItemHash.push([]);
                    for (let xa = 0, XaAll = this.ItemGreyData[ya].length; xa < XaAll; xa++) {
                        let hash = '';
                        for (let yb = 0, YbAll = this.ItemGreyData[ya][xa].length; yb < YbAll; yb++) {
                            for (let xb = 0, XbAll = this.ItemGreyData[ya][xa][yb].length; xb < XbAll - 1; xb++) {
                                hash += (this.ItemGreyData[ya][xa][yb][xb] > this.ItemGreyData[ya][xa][yb][xb + 1] ? '1' : '0');
                            }
                        }
                        this.ItemHash[ya][xa] = hash;
                    }
                }
                resolve();
            }, 25);
        });
    }
    checkHash() {
        // 对比Hash部分
        return new Promise((resolve, reject) => {
            this.setProgress('正在识别物品', 0.75);
            setTimeout(() => {
                for (let y = 0, YAll = this.ItemHash.length; y < YAll; y++) {
                    this.detectedItemList.push([]);
                    for (let x = 0, XAll = this.ItemHash[y].length; x < XAll; x++) {
                        this.detectedItemList[y][x] = {
                            have: 0,
                            item: this.ItemHashList.map((item) => {
                                if (item.hash === '') {
                                    return { distance: 64, name: item.name, hash: item.hash };
                                }
                                return {
                                    distance: this.ItemHash[y][x].split('').reduce((count, value, index) => {
                                        return count + (value === item.hash[index] ? 0 : 1);
                                    }, 0), name: item.name, hash: item.hash
                                };
                            }).sort((a, b) => a.distance - b.distance)
                        };
                        this.detectedItemList[y][x].name = this.detectedItemList[y][x].item[0].name;
                        this.detectedItemList[y][x].delete = false;
                        // this.Ctx.fillText(this.detectedItemList[y][x].item[0].name, Math.floor(this.XBound[x][0] + (this.XBound[x][1] - this.XBound[x][0]) / 2), Math.floor(this.YBound[y][0] + (this.YBound[y][1] - this.YBound[y][0]) / 2));
                    }
                }
                resolve();
            }, 25);
        });
    }
    getPixelGrey(x, y) {
        if (x < 0 || y < 0 || x > this.Canvas.width || y > this.Canvas.height) {
            return -1;
        }
        const offset = y * 10000 + x;
        if (typeof this.ImageGreyData[offset] !== 'undefined') {
            return this.ImageGreyData[offset];
        }
        const index = (y * this.Canvas.width + x) * 4;
        this.ImageGreyData[offset] = Math.floor((this.ImageData.data[index] + this.ImageData.data[index + 1] + this.ImageData.data[index + 2]) / 3);
        return this.ImageGreyData[offset];
    }
    searchBoundary() {
        this.setProgress('扫描图像边界', 0.2);
        const XBlank = Array(this.Canvas.width).fill(0);
        const YBlank = Array(this.Canvas.height).fill(0);
        const XSpace = Array(this.Canvas.height).fill(0);
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // //console.time("a");
                for (let y = 100, BlackPoint = -1; y < this.Canvas.height; y++) {
                    let LastBlank = 0;
                    for (let x = 15; x < this.Canvas.width - 1; x++) {
                        const GreyList = [
                            [this.getPixelGrey(x - 1, y - 1), this.getPixelGrey(x, y - 1), this.getPixelGrey(x + 1, y - 1)],
                            [this.getPixelGrey(x - 1, y), this.getPixelGrey(x, y), this.getPixelGrey(x + 1, y)],
                            [this.getPixelGrey(x - 1, y - 1), this.getPixelGrey(x, y - 1), this.getPixelGrey(x + 1, y - 1)]
                        ];
                        if ((() => {
                            for (let ya = 0; ya < 3; ya++) {
                                for (let xa = 0; xa < 3; xa++) {
                                    if (GreyList[ya][xa] === -1) {
                                        GreyList[ya][xa] = GreyList[1][1];
                                        continue;
                                    }
                                    if (ya === 1 && xa === 1) {
                                        continue;
                                    }
                                    if (Math.abs(GreyList[ya][xa] - GreyList[1][1]) <= 10) {
                                        return false;
                                    }
                                }
                            }
                            return true;
                        })()) {
                            if (LastBlank === 0) {
                                LastBlank = x;
                            }
                            else {
                                XSpace[y] += (x - LastBlank);
                                LastBlank = x;
                                BlackPoint++;
                            }
                            YBlank[y]++;
                            XBlank[x]++;
                        }
                    }
                    XSpace[y] /= BlackPoint;
                }
                // console.log(XSpace);
                this.ImageGreyData = {};
                // //console.timeEnd("a");
                resolve();
            }, 25);
        }).then(() => {
            this.setProgress('正在计算各元素Y轴方向上的边界', 0.35);
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    this.Ctx.fillStyle = '#00ff00';
                    for (let y = 0, isObject = false, LastBlank = 0, SpaceLength, ItemHeight, length; y < this.Canvas.height; y++) {
                        if (!isObject && YBlank[y] > (10)) {
                            length = this.YBound.push([]);
                            isObject = true;
                            this.YBound[length - 1][0] = y;
                            SpaceLength = 0;
                            ItemHeight = 0;
                            this.Ctx.fillRect(0, y, this.Canvas.width, 1);
                        }
                        if (isObject && ItemHeight > 100 && YBlank[y] <= (this.YBound.length < 3 ? 10 : 30)) {
                            SpaceLength++;
                            if (SpaceLength > 15) {
                                SpaceLength = 0;
                                this.YBound[length - 1][1] = LastBlank;
                                isObject = false;
                                this.Ctx.fillRect(0, LastBlank, this.Canvas.width, 1);
                                // if (this.YBound.length === 3) { break; }
                            }
                        }
                        if (isObject && YBlank[y] > (this.YBound.length < 3 ? 5 : 20)) {
                            LastBlank = XSpace[y] > 0.01 ? y : LastBlank;
                            SpaceLength = 0;
                        }
                        if (isObject) {
                            ItemHeight++;
                        }
                    }
                    // console.log(this.YBound);
                    resolve();
                }, 25);
            });
        }).then(() => {
            this.setProgress('正在计算各元素X轴方向上的边界', 0.45);
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    for (let x = 0, isObject = false, LastBlank = 0, SpaceLength, ItemWidth, length; x < this.Canvas.width; x++) {
                        if (!isObject && XBlank[x] > (this.XBound.length > 0 ? 5 : 20)) {
                            length = this.XBound.push([]);
                            isObject = true;
                            this.XBound[length - 1][0] = x;
                            SpaceLength = 0;
                            ItemWidth = 0;
                            this.Ctx.fillRect(x, 0, 1, this.Canvas.height);
                        }
                        if (isObject && ItemWidth > 100 && XBlank[x] <= 10) {
                            SpaceLength++;
                            if (SpaceLength > 15) {
                                SpaceLength = 0;
                                this.XBound[length - 1][1] = LastBlank;
                                isObject = false;
                                this.Ctx.fillRect(LastBlank, 0, 1, this.Canvas.height);
                                if (this.XBound.length === 8) {
                                    break;
                                }
                            }
                        }
                        if (isObject && XBlank[x] > 5) {
                            LastBlank = x;
                            SpaceLength = 0;
                        }
                        if (isObject) {
                            ItemWidth++;
                        }
                    }
                    // //console.log(XBlank);
                    resolve();
                }, 25);
            });
        });
    }
    setProgress(text, Progress) {
        this.InfoText = text;
        this.progress = Progress;
    }
    ModifyData(dialog, e) {
        if (this.detectedItemList.length === 0) {
            return;
        }
        const rect = this.Canvas.getBoundingClientRect();
        const clickY = e.offsetY * (this.Canvas.height / rect.height);
        const clickX = e.offsetX * (this.Canvas.width / rect.width);
        let x;
        let y;
        for (let ya = 0, YAll = this.YBound.length; ya < YAll; ya++) {
            if (this.YBound[ya].length !== 2) {
                continue;
            }
            if (clickY >= this.YBound[ya][0] && clickY <= this.YBound[ya][1]) {
                y = ya;
                break;
            }
        }
        for (let xa = 0, XAll = this.XBound.length; xa < XAll; xa++) {
            if (this.XBound[xa].length !== 2) {
                continue;
            }
            if (clickX >= this.XBound[xa][0] && clickX <= this.XBound[xa][1]) {
                x = xa;
                break;
            }
        }
        if (typeof x === 'undefined' || typeof y === 'undefined') {
            return;
        }
        const ItemImage = document.createElement('canvas').getContext('2d');
        ItemImage.canvas.width = this.XBound[x][1] - this.XBound[x][0];
        ItemImage.canvas.height = this.YBound[y][1] - this.YBound[y][0];
        ItemImage.drawImage(this.ImageElement, this.XBound[x][0], this.YBound[y][0], this.XBound[x][1] - this.XBound[x][0], this.YBound[y][1] - this.YBound[y][0], 0, 0, ItemImage.canvas.width, ItemImage.canvas.height);
        this.ItemImage = ItemImage.canvas.toDataURL();
        this.ModifyingItem = this.detectedItemList[y][x];
        for (const key of Object.keys(this.ModifyingItem)) {
            if (typeof this.ModifyingItem[key] !== 'object') {
                this.ModifyBuffer[key] = this.ModifyingItem[key];
            }
        }
        this.Modifying.y = y;
        this.Modifying.x = x;
        // //console.dir(dialog);
        dialog.open();
    }
    AcceptModify() {
        const y = this.Modifying.y;
        const x = this.Modifying.x;
        if (this.ModifyBuffer.name !== this.ModifyingItem.name) {
            for (let i = 0, all = this.ItemHashList.length; i < all; i++) {
                if (this.ItemHashList[i].name === this.ModifyBuffer.name) {
                    this.ItemHashList[i].hash = this.ItemHash[y][x];
                    break;
                }
            }
            this.fetchService.setLocalStorage('detect-hash', {
                NumberHash: this.NumberHash,
                ItemHash: this.ItemHashList
            });
        }
        if (this.ModifyBuffer.name !== this.ModifyingItem.name || this.ModifyBuffer.have !== this.ModifyingItem.have || this.ModifyBuffer.delete !== this.ModifyingItem.delete) {
            for (const key of Object.keys(this.ModifyBuffer)) {
                this.ModifyingItem[key] = this.ModifyBuffer[key];
            }
            this.Ctx.drawImage(this.ImageElement, this.XBound[x][0] + 1, this.YBound[y][0] + 1, this.XBound[x][1] - this.XBound[x][0] - 1, this.YBound[y][1] - this.YBound[y][0] - 1, this.XBound[x][0] + 1, this.YBound[y][0] + 1, this.XBound[x][1] - this.XBound[x][0] - 1, this.YBound[y][1] - this.YBound[y][0] - 1);
            this.drawText(x, y);
        }
        if (this.ModifyingItem.delete) {
            this.Ctx.drawImage(this.ImageElement, this.XBound[x][0] + 1, this.YBound[y][0] + 1, this.XBound[x][1] - this.XBound[x][0] - 1, this.YBound[y][1] - this.YBound[y][0] - 1, this.XBound[x][0] + 1, this.YBound[y][0] + 1, this.XBound[x][1] - this.XBound[x][0] - 1, this.YBound[y][1] - this.YBound[y][0] - 1);
            return;
        }
    }
    toMaterialCalc() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (!this.detectedItemList || this.detectedItemList.length === 0) {
                this.snackbar.show({
                    message: '材料为空，请先输入需求。',
                    actionText: '好的',
                    multiline: false,
                    actionOnBottom: false
                });
                return;
            }
            const data = this.fetchService.getLocalStorage('m-data', {});
            if (Object.keys(data).length === 0) {
                this.snackbar.show({
                    message: '请先打开一次材料计算页面。',
                    actionText: '好的',
                    multiline: false,
                    actionOnBottom: false
                });
                return;
            }
            for (let y = 0, Yall = this.detectedItemList.length; y < Yall; y++) {
                for (let x = 0, Xall = this.detectedItemList[y].length; x < Xall; x++) {
                    if (this.detectedItemList[y][x].name in data && !isNaN(this.detectedItemList[y][x].have) && this.detectedItemList[y][x].have !== 0 && !this.detectedItemList[y][x].delete) {
                        data[this.detectedItemList[y][x].name].have = this.detectedItemList[y][x].have;
                    }
                }
            }
            this.fetchService.setLocalStorage('m-data', data);
            this.router.navigateByUrl('/material');
        });
    }
    toggleItem() {
        this.ModifyBuffer.delete = !this.ModifyBuffer.delete;
    }
    fixNumberHash(dialog) {
        this.FixingNumberData = this.NumberData[this.Modifying.y][this.Modifying.x];
        this.FixingNumberIndex = 0;
        dialog.open();
    }
    AcceptFixNumber() {
        for (let i = 0, all = this.FixingNumberData.length; i < all; i++) {
            if (this.FixingNumberData[i].realData !== null) {
                this.NumberHash[this.FixingNumberData[i].realData] = this.FixingNumberData[i].hash;
                /*if (this.FixingNumberIndex === i) {
                    this.HighQNumberHash[this.FixingNumberData[i].realData] = this.HighQNumberHash[this.FixingNumberData[i].realData] || { hash: new Array(144).fill(0), count: 0 };
                    this.HighQNumberHash[this.FixingNumberData[i].realData].hash = this.HighQNumberHash[this.FixingNumberData[i].realData].hash.map((item: number, index: number) => {
                        return item + Number(this.FixingNumberData[i].hash[index]);
                    });
                    this.HighQNumberHash[this.FixingNumberData[i].realData].count++;
                    console.log(this.HighQNumberHash);
                }*/
            }
        }
        this.fetchService.setLocalStorage('detect-hash', {
            NumberHash: this.NumberHash,
            ItemHash: this.ItemHashList
        });
    }
    drawText(...pos) {
        this.Ctx.fillStyle = this.textColor;
        if (pos.length === 0) {
            this.setProgress('正在绘制文字', 0.95);
            return new Promise((reduce, reject) => {
                setTimeout(() => {
                    for (let y = 0, Yall = this.detectedItemList.length; y < Yall; y++) {
                        for (let x = 0, Xall = this.detectedItemList[y].length; x < Xall; x++) {
                            const width = this.XBound[x][1] - this.XBound[x][0];
                            const height = this.YBound[y][1] - this.YBound[y][0];
                            const NumberString = (this.detectedItemList[y][x].have / 10000 >= 1) ? Math.round(this.detectedItemList[y][x].have / 100) / 100 + '万' : this.detectedItemList[y][x].have.toString();
                            const fontSize = Math.min(this.getSuitFontSize(this.detectedItemList[y][x].name, width, height), this.getSuitFontSize(NumberString, width, height));
                            this.Ctx.font = fontSize + 'px serif';
                            this.Ctx.fillText(this.detectedItemList[y][x].name, Math.floor(this.XBound[x][0] + (width) / 2), Math.floor(this.YBound[y][0] + (height) / 2));
                            this.Ctx.fillText(NumberString, Math.floor(this.XBound[x][0] + (width) / 2), Math.floor(this.YBound[y][0] + (height) / 2) + fontSize);
                        }
                    }
                    reduce();
                }, 25);
            });
        }
        else {
            const x = pos[0];
            const y = pos[1];
            const width = this.XBound[x][1] - this.XBound[x][0];
            const height = this.YBound[y][1] - this.YBound[y][0];
            const NumberString = (this.detectedItemList[y][x].have / 10000 >= 1) ? Math.round(this.detectedItemList[y][x].have / 100) / 100 + '万' : this.detectedItemList[y][x].have.toString();
            // this.Ctx.font = this.getSuitFontSize(NumberString, width) + 'px serif';
            const fontSize = Math.min(this.getSuitFontSize(this.detectedItemList[y][x].name, width, height), this.getSuitFontSize(NumberString, width, height));
            this.Ctx.font = fontSize + 'px serif';
            this.Ctx.fillText(this.detectedItemList[y][x].name, Math.floor(this.XBound[x][0] + (width) / 2), Math.floor(this.YBound[y][0] + (height) / 2));
            this.Ctx.fillText(NumberString, Math.floor(this.XBound[x][0] + (width) / 2), Math.floor(this.YBound[y][0] + (height) / 2) + fontSize);
        }
    }
    getSuitFontSize(text, width, height) {
        if (!this.MaxFontSize) {
            if (this.FontSize === 0) {
                this.MaxFontSize = true;
                this.FontSize = this.getSuitFontSize('技能概要·卷3', width, height);
                this.MaxFontSize = false;
            }
            return this.FontSize;
        }
        let BaseFontSize = 10;
        while (true) {
            this.Ctx.font = BaseFontSize + 'px serif';
            if (this.Ctx.measureText(text).width > width || BaseFontSize * 2 + 10 > height) {
                return BaseFontSize - 1;
            }
            BaseFontSize++;
        }
    }
};
AutoDetectHashComponent.ctorParameters = () => [
    { type: _fetch_service__WEBPACK_IMPORTED_MODULE_3__["FetchService"] },
    { type: _blox_material__WEBPACK_IMPORTED_MODULE_2__["MdcSnackbarService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
AutoDetectHashComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-auto-detect',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./auto-detect-hash.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/auto-detect-hash/auto-detect-hash.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./auto-detect-hash.component.scss */ "./src/app/auto-detect-hash/auto-detect-hash.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_fetch_service__WEBPACK_IMPORTED_MODULE_3__["FetchService"], _blox_material__WEBPACK_IMPORTED_MODULE_2__["MdcSnackbarService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
], AutoDetectHashComponent);



/***/ }),

/***/ "./src/app/auto-detect/auto-detect.component.scss":
/*!********************************************************!*\
  !*** ./src/app/auto-detect/auto-detect.component.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("img[src=\"\"],\nimg:not([src]) {\n  opacity: 0;\n}\n\ninput,\nselect {\n  text-align: center;\n}\n\n.matcard-item .mdc-button--dense {\n  min-width: 20px;\n  width: 20px;\n  margin: 0;\n  padding: 0;\n}\n\n.mdc-text-field--upgraded:not(.mdc-text-field--fullwidth):not(.mdc-text-field--box) {\n  margin: 0;\n}\n\n.ad-container {\n  width: 100%;\n  max-width: 1200px;\n  margin: auto;\n}\n\n.ad-container img {\n  width: 100%;\n  height: auto;\n}\n\n.ad-container .card-title {\n  max-width: 100%;\n  width: 400;\n  padding: 0.25em;\n  display: block;\n}\n\n[mdcCard] {\n  margin: 0.5em;\n}\n\n[mdcCard] .mat-icon {\n  max-height: 48px;\n  max-width: 48px;\n  height: auto;\n  width: auto;\n}\n\n[mdcCard] .matcard-item {\n  padding: 0.25em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0by1kZXRlY3QvQzpcXFVzZXJzXFxZdWVfcFxcRG9jdW1lbnRzXFxjb2RlXFxha3Rvb2xzL3NyY1xcYXBwXFxhdXRvLWRldGVjdFxcYXV0by1kZXRlY3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2F1dG8tZGV0ZWN0L2F1dG8tZGV0ZWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFLFVBQUE7QUNDRjs7QURDQTs7RUFFRSxrQkFBQTtBQ0VGOztBRENFO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQ0VKOztBRENBO0VBQ0UsU0FBQTtBQ0VGOztBREFBO0VBS0UsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQ0RGOztBRExFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUNPSjs7QURERTtFQUNFLGVBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNHSjs7QURDQTtFQUNFLGFBQUE7QUNFRjs7QURBRTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDRUo7O0FEQUU7RUFDRSxlQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9hdXRvLWRldGVjdC9hdXRvLWRldGVjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImltZ1tzcmM9XCJcIl0sXHJcbmltZzpub3QoW3NyY10pIHtcclxuICBvcGFjaXR5OiAwO1xyXG59XHJcbmlucHV0LFxyXG5zZWxlY3Qge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4ubWF0Y2FyZC1pdGVtIHtcclxuICAubWRjLWJ1dHRvbi0tZGVuc2Uge1xyXG4gICAgbWluLXdpZHRoOiAyMHB4O1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gIH1cclxufVxyXG4ubWRjLXRleHQtZmllbGQtLXVwZ3JhZGVkOm5vdCgubWRjLXRleHQtZmllbGQtLWZ1bGx3aWR0aCk6bm90KC5tZGMtdGV4dC1maWVsZC0tYm94KSB7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcbi5hZC1jb250YWluZXIge1xyXG4gIGltZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICB9XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG5cclxuICAuY2FyZC10aXRsZSB7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICB3aWR0aDogNDAwO1xyXG4gICAgcGFkZGluZzogMC4yNWVtO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG59XHJcblxyXG5bbWRjQ2FyZF0ge1xyXG4gIG1hcmdpbjogMC41ZW07XHJcblxyXG4gIC5tYXQtaWNvbiB7XHJcbiAgICBtYXgtaGVpZ2h0OiA0OHB4O1xyXG4gICAgbWF4LXdpZHRoOiA0OHB4O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgfVxyXG4gIC5tYXRjYXJkLWl0ZW0ge1xyXG4gICAgcGFkZGluZzogMC4yNWVtO1xyXG4gIH1cclxufVxyXG4iLCJpbWdbc3JjPVwiXCJdLFxuaW1nOm5vdChbc3JjXSkge1xuICBvcGFjaXR5OiAwO1xufVxuXG5pbnB1dCxcbnNlbGVjdCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLm1hdGNhcmQtaXRlbSAubWRjLWJ1dHRvbi0tZGVuc2Uge1xuICBtaW4td2lkdGg6IDIwcHg7XG4gIHdpZHRoOiAyMHB4O1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5tZGMtdGV4dC1maWVsZC0tdXBncmFkZWQ6bm90KC5tZGMtdGV4dC1maWVsZC0tZnVsbHdpZHRoKTpub3QoLm1kYy10ZXh0LWZpZWxkLS1ib3gpIHtcbiAgbWFyZ2luOiAwO1xufVxuXG4uYWQtY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMTIwMHB4O1xuICBtYXJnaW46IGF1dG87XG59XG4uYWQtY29udGFpbmVyIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG59XG4uYWQtY29udGFpbmVyIC5jYXJkLXRpdGxlIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICB3aWR0aDogNDAwO1xuICBwYWRkaW5nOiAwLjI1ZW07XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5bbWRjQ2FyZF0ge1xuICBtYXJnaW46IDAuNWVtO1xufVxuW21kY0NhcmRdIC5tYXQtaWNvbiB7XG4gIG1heC1oZWlnaHQ6IDQ4cHg7XG4gIG1heC13aWR0aDogNDhweDtcbiAgaGVpZ2h0OiBhdXRvO1xuICB3aWR0aDogYXV0bztcbn1cblttZGNDYXJkXSAubWF0Y2FyZC1pdGVtIHtcbiAgcGFkZGluZzogMC4yNWVtO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/auto-detect/auto-detect.component.ts":
/*!******************************************************!*\
  !*** ./src/app/auto-detect/auto-detect.component.ts ***!
  \******************************************************/
/*! exports provided: AutoDetectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutoDetectComponent", function() { return AutoDetectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _blox_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @blox/material */ "./node_modules/@blox/material/dist/material.es5.js");
/* harmony import */ var _fetch_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../fetch.service */ "./src/app/fetch.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





// TODO:可调整识别结果
let AutoDetectComponent = class AutoDetectComponent {
    constructor(fetchService, snackbar, router) {
        this.fetchService = fetchService;
        this.snackbar = snackbar;
        this.router = router;
        this.detectedItemList = [];
        this.ImageLoaded = false;
        this.items = [];
        this.resultList = [];
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // TestONLY
            /*this.detectedItemList = [['MTL_SL_DS',2,1],
            ['MTL_SL_RUSH4',3,1],
            ['MTL_SL_KETONE2',3,1],
            ['MTL_SL_BN',2,1],
            ['MTL_SL_RUSH1',3,1],
            ['MTL_SL_STRG4',3,1],
            ['MTL_SKILL2',1,1]]*/
            this.fetchService.getJson('./assets/data/material.json').subscribe(data => {
                this.items = [];
                for (const k in data) {
                    if (data[k]) {
                        this.items.push(data[k]);
                    }
                }
            });
        });
    }
    // 图片预览
    previewImage(event) {
        if (event.target.files && event.target.files[0]) {
            const reader = new FileReader();
            reader.onload = e => {
                // const image: HTMLImageElement = document.createElement("img");
                // image.src = reader.r;
                const img = new Image();
                img.src = reader.result;
                img.onload = () => {
                    const canvas = document.createElement('canvas');
                    const ctx = canvas.getContext('2d');
                    const maxSize = 1200;
                    // calculate new size
                    const width = img.width > img.height ? maxSize : (maxSize * img.width / img.height);
                    const height = img.width > img.height ? (maxSize * img.height / img.width) : maxSize;
                    // resize the canvas to the new dimensions
                    canvas.width = width;
                    canvas.height = height;
                    // scale & draw the image onto the canvas
                    ctx.drawImage(img, 0, 0, width, height);
                    this.imageSrc = canvas.toDataURL('image/jpeg');
                };
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    }
    objectRegonition() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.fetchService.postJson('https://rest.graueneko.xyz:1443/aktools/detect', {
                image: this.imageSrc
            }).subscribe(result => {
                if (result.error) {
                    this.snackbar.show({
                        message: '服务器内部错误，请重试',
                        actionText: '好的',
                        multiline: false,
                        actionOnBottom: false
                    });
                    return;
                }
                const resultList = result.itemList;
                for (const item of resultList) {
                    let dulplicate = false;
                    if (isNaN(item[2])) {
                        item[2] = 1;
                    }
                    for (const existed of this.detectedItemList) {
                        if (existed[0] === item[0]) {
                            dulplicate = true;
                            if (existed[2] < item[2]) {
                                existed[2] = item[2];
                                existed[1] = item[1];
                            }
                            break;
                        }
                    }
                    if (!dulplicate) {
                        this.detectedItemList.push(item);
                    }
                }
            });
        });
    }
    downLoad(url, name) {
        const oA = document.createElement('a');
        oA.download = name; // 设置下载的文件名，默认是'下载'
        oA.href = url;
        document.body.appendChild(oA);
        oA.click();
        oA.remove(); // 下载之后把创建的元素删除
    }
    toMaterialCalc() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (!this.detectedItemList || this.detectedItemList.length === 0) {
                this.snackbar.show({
                    message: '材料为空，请先输入需求。',
                    actionText: '好的',
                    multiline: false,
                    actionOnBottom: false
                });
                return;
            }
            const data = this.fetchService.getLocalStorage('m-data', {});
            if (Object.keys(data).length === 0) {
                this.snackbar.show({
                    message: '请先打开一次材料计算页面。',
                    actionText: '好的',
                    multiline: false,
                    actionOnBottom: false
                });
                return;
            }
            for (const m of this.detectedItemList) {
                if (!m[0]) {
                    continue;
                }
                console.log(m[0]);
                try {
                    const name = this.getMaterialInfo(m[0]);
                    if (name === m[0]) {
                        continue;
                    }
                    data[name].have = m[1];
                }
                catch (e) {
                    console.error(e);
                    continue;
                }
            }
            this.fetchService.setLocalStorage('m-data', data);
            this.fetchService.setLocalStorage('m-option', {
                showOnly3plus: true,
                filtered: true,
                showMat: true,
                showChip: true,
                showBook: true
            });
            this.router.navigateByUrl('/material');
        });
    }
    getMaterialInfo(name) {
        for (const k in this.items) {
            if (this.items[k]) {
                if (this.items[k].icon === name) {
                    return this.items[k].name;
                }
            }
        }
        // console.warn("Unable to find proper name")
        return name;
    }
};
AutoDetectComponent.ctorParameters = () => [
    { type: _fetch_service__WEBPACK_IMPORTED_MODULE_3__["FetchService"] },
    { type: _blox_material__WEBPACK_IMPORTED_MODULE_2__["MdcSnackbarService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
AutoDetectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-auto-detect',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./auto-detect.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/auto-detect/auto-detect.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./auto-detect.component.scss */ "./src/app/auto-detect/auto-detect.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_fetch_service__WEBPACK_IMPORTED_MODULE_3__["FetchService"], _blox_material__WEBPACK_IMPORTED_MODULE_2__["MdcSnackbarService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], AutoDetectComponent);



/***/ }),

/***/ "./src/app/char-mat-charcard/char-mat-charcard.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/char-mat-charcard/char-mat-charcard.component.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("button {\n  margin: 0.25em;\n  white-space: nowrap;\n}\n\na {\n  text-decoration: none;\n}\n\n.mdc-button--dense {\n  min-width: 20px;\n  margin: 0;\n  padding: 0;\n}\n\n.mdc-button--dense .material-icons {\n  font-size: 16px;\n}\n\n.input-field {\n  width: 100%;\n  margin: 0.25em;\n}\n\ninput, select {\n  text-align: center;\n}\n\n[mdcCard] {\n  max-width: 100%;\n  width: 100%;\n  margin: 0.75em 0;\n  padding: 0.25em;\n  border: 0.125em solid rgba(0, 0, 0, 0.125);\n  border-radius: 2em 0.5em 0.5em 0.5em;\n  color: var(--mdc-theme-on-surface);\n}\n\n[mdcCard] .card-heading {\n  padding: 8px 16px;\n  text-align: center;\n}\n\n[mdcCard] .material-source {\n  font-size: 0.875em;\n}\n\n[mdcCard] .material-detail {\n  padding: 0.25em;\n}\n\n.mdc-card.ch-lvl-5 {\n  border-color: #d0694e;\n}\n\n.mdc-card.ch-lvl-4 {\n  border-color: #f9ce8c;\n}\n\n.mdc-card.ch-lvl-3 {\n  border-color: #589bad;\n}\n\n.mdc-card.ch-lvl-2 {\n  border-color: #7ebc59;\n}\n\n.mdc-card.ch-lvl-1 {\n  border-color: #c3e3e5;\n}\n\nbutton {\n  margin: 0;\n}\n\n[mdcIconButton] {\n  padding: 0.5em;\n}\n\n[mdcButton] {\n  font-size: 0.875em;\n  padding: 0px;\n  color: var(--mdc-theme-on-surface);\n}\n\n[mdcButton].btnTitle {\n  min-width: 54px;\n  width: 54px;\n  white-space: normal;\n}\n\n.mdc-text-field--upgraded:not(.mdc-text-field--fullwidth):not(.mdc-text-field--box) {\n  margin-top: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhci1tYXQtY2hhcmNhcmQvQzpcXFVzZXJzXFxZdWVfcFxcRG9jdW1lbnRzXFxjb2RlXFxha3Rvb2xzL3NyY1xcYXBwXFxzdHlsZXNcXGN1c3RvbS5zY3NzIiwic3JjL2FwcC9jaGFyLW1hdC1jaGFyY2FyZC9jaGFyLW1hdC1jaGFyY2FyZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY2hhci1tYXQtY2hhcmNhcmQvQzpcXFVzZXJzXFxZdWVfcFxcRG9jdW1lbnRzXFxjb2RlXFxha3Rvb2xzL3NyY1xcYXBwXFxjaGFyLW1hdC1jaGFyY2FyZFxcY2hhci1tYXQtY2hhcmNhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0JBO0VBQ0UsY0FBQTtFQUNBLG1CQUFBO0FDdkJGOztBRHlCQTtFQUNFLHFCQUFBO0FDdEJGOztBQ05BO0VBQ0UsZUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FEU0Y7O0FDUEE7RUFDRSxlQUFBO0FEVUY7O0FDUkE7RUFDRSxXQUFBO0VBQ0EsY0FBQTtBRFdGOztBQ1RBO0VBQ0Usa0JBQUE7QURZRjs7QUNWQTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsMENBQUE7RUFDQSxvQ0FBQTtFQUNBLGtDQUFBO0FEYUo7O0FDWEk7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0FEYU47O0FDVkk7RUFDRSxrQkFBQTtBRFlOOztBQ1ZJO0VBQ0UsZUFBQTtBRFlOOztBQ1JFO0VBQ0UscUJBQUE7QURXSjs7QUNURTtFQUNFLHFCQUFBO0FEWUo7O0FDVkU7RUFDRSxxQkFBQTtBRGFKOztBQ1hFO0VBQ0UscUJBQUE7QURjSjs7QUNaRTtFQUNFLHFCQUFBO0FEZUo7O0FDWkU7RUFDRSxTQUFBO0FEZUo7O0FDYkU7RUFDRSxjQUFBO0FEZ0JKOztBQ2RFO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0NBQUE7QURpQko7O0FDZkU7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FEa0JKOztBQ2hCRTtFQUNFLGFBQUE7QURtQkoiLCJmaWxlIjoic3JjL2FwcC9jaGFyLW1hdC1jaGFyY2FyZC9jaGFyLW1hdC1jaGFyY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGh0dHBzOi8vY29sb3JodW50LmNvL3BhbGV0dGUvMzYxXHJcbiRjb2xvci0xOiAjZDA2OTRlO1xyXG4kY29sb3ItMjogI2Y2Y2U4YztcclxuJGNvbG9yLTM6ICNjM2UzZTU7XHJcbiRjb2xvci00OiAjNTg5YmFkO1xyXG5cclxuJGNvbG9yLW11dGVkOiByZ2IoMTUzLCAxNTMsIDE1Myk7OyAvLyDmlrnoiJ8t5paH5pys54GwXHJcbiRjb2xvci1wcmltYXJ5OiByZ2IoMzQsIDE4NywgMjU1KTsgLy8g5pa56IifLeiTnVxyXG4kY29sb3Itc3VjY2VzczogcmdiKDEyNywgMjI0LCAxNDkpOyAvLyBib290c3RyYXA0XHJcbiRjb2xvci1pbmZvOiByZ2IoMTM3LCAxMzcsIDEzNyk7IC8vIOaWueiIny3ngbBcclxuJGNvbG9yLXdhcm5pbmc6ICNmZTI7IC8vIOaWueiIny3pu4RcclxuJGNvbG9yLWRhbmdlcjogI2VjMmIwMDsgLy8g5rSq54KJ56S65bKBXHJcbiRjb2xvci1zZWNvbmRhcnk6IHJnYigxMzcsIDEzNywgMTM3KTsgLy8g5pa56IifLeeBsFxyXG4kY29sb3ItZGFyazogIzMxMzEzMTsgLy8g5pa56IifLeaMiemSrlxyXG4kY29sb3ItYmxhY2s6ICMwMDA7IC8vIOe6r+m7kVxyXG4kY29sb3ItbGlnaHQ6IHJnYigyNTAsIDI0OSwgMjQ4KTsgLy9ib290c3RyYXA0XHJcbiRjb2xvci13aGl0ZTogI2ZmZjsgLy8gYm9vdHN0cmFwNFxyXG5cclxuJG1kYy10eXBvZ3JhcGh5LWZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBcIk5vdG8gU2Fuc1wiLCBcIkhlbHZldGljYSBOZXVlXCIsIEhlbHZldGljYSwgXCJOaW1idXMgU2FucyBMXCIsIEFyaWFsLFxyXG4gIFwiTGliZXJhdGlvbiBTYW5zXCIsIFwiUGluZ0ZhbmcgU0NcIiwgXCJIaXJhZ2lubyBTYW5zIEdCXCIsIFwiTm90byBTYW5zIENKSyBTQ1wiLCBcIlNvdXJjZSBIYW4gU2FucyBTQ1wiLCBcIlNvdXJjZSBIYW4gU2FucyBDTlwiLFxyXG4gIFNpbUhlaSwgXCJNaWNyb3NvZnQgWWFIZWlcIiwgXCJXZW5xdWFueWkgTWljcm8gSGVpXCIsIFwiV2VuUXVhbllpIFplbiBIZWlcIiwgXCJTVCBIZWl0aVwiLCBcIldlblF1YW5ZaSBaZW4gSGVpIFNoYXJwXCIsXHJcbiAgc2Fucy1zZXJpZjtcclxuXHJcbiRoaWdobGlnaHQtYmFja2dyb3VuZDogI2U4ZWFmNztcclxuYnV0dG9uIHtcclxuICBtYXJnaW46IDAuMjVlbTtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG59XHJcbmEge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG4iLCJidXR0b24ge1xuICBtYXJnaW46IDAuMjVlbTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLm1kYy1idXR0b24tLWRlbnNlIHtcbiAgbWluLXdpZHRoOiAyMHB4O1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5tZGMtYnV0dG9uLS1kZW5zZSAubWF0ZXJpYWwtaWNvbnMge1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5pbnB1dC1maWVsZCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDAuMjVlbTtcbn1cblxuaW5wdXQsIHNlbGVjdCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuW21kY0NhcmRdIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwLjc1ZW0gMDtcbiAgcGFkZGluZzogMC4yNWVtO1xuICBib3JkZXI6IDAuMTI1ZW0gc29saWQgcmdiYSgwLCAwLCAwLCAwLjEyNSk7XG4gIGJvcmRlci1yYWRpdXM6IDJlbSAwLjVlbSAwLjVlbSAwLjVlbTtcbiAgY29sb3I6IHZhcigtLW1kYy10aGVtZS1vbi1zdXJmYWNlKTtcbn1cblttZGNDYXJkXSAuY2FyZC1oZWFkaW5nIHtcbiAgcGFkZGluZzogOHB4IDE2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblttZGNDYXJkXSAubWF0ZXJpYWwtc291cmNlIHtcbiAgZm9udC1zaXplOiAwLjg3NWVtO1xufVxuW21kY0NhcmRdIC5tYXRlcmlhbC1kZXRhaWwge1xuICBwYWRkaW5nOiAwLjI1ZW07XG59XG5cbi5tZGMtY2FyZC5jaC1sdmwtNSB7XG4gIGJvcmRlci1jb2xvcjogI2QwNjk0ZTtcbn1cblxuLm1kYy1jYXJkLmNoLWx2bC00IHtcbiAgYm9yZGVyLWNvbG9yOiAjZjljZThjO1xufVxuXG4ubWRjLWNhcmQuY2gtbHZsLTMge1xuICBib3JkZXItY29sb3I6ICM1ODliYWQ7XG59XG5cbi5tZGMtY2FyZC5jaC1sdmwtMiB7XG4gIGJvcmRlci1jb2xvcjogIzdlYmM1OTtcbn1cblxuLm1kYy1jYXJkLmNoLWx2bC0xIHtcbiAgYm9yZGVyLWNvbG9yOiAjYzNlM2U1O1xufVxuXG5idXR0b24ge1xuICBtYXJnaW46IDA7XG59XG5cblttZGNJY29uQnV0dG9uXSB7XG4gIHBhZGRpbmc6IDAuNWVtO1xufVxuXG5bbWRjQnV0dG9uXSB7XG4gIGZvbnQtc2l6ZTogMC44NzVlbTtcbiAgcGFkZGluZzogMHB4O1xuICBjb2xvcjogdmFyKC0tbWRjLXRoZW1lLW9uLXN1cmZhY2UpO1xufVxuXG5bbWRjQnV0dG9uXS5idG5UaXRsZSB7XG4gIG1pbi13aWR0aDogNTRweDtcbiAgd2lkdGg6IDU0cHg7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG59XG5cbi5tZGMtdGV4dC1maWVsZC0tdXBncmFkZWQ6bm90KC5tZGMtdGV4dC1maWVsZC0tZnVsbHdpZHRoKTpub3QoLm1kYy10ZXh0LWZpZWxkLS1ib3gpIHtcbiAgbWFyZ2luLXRvcDogMDtcbn0iLCJAaW1wb3J0ICcuLi9zdHlsZXMvY3VzdG9tLnNjc3MnO1xyXG4ubWRjLWJ1dHRvbi0tZGVuc2Uge1xyXG4gIG1pbi13aWR0aDogMjBweDtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG4ubWRjLWJ1dHRvbi0tZGVuc2UgLm1hdGVyaWFsLWljb25ze1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG4uaW5wdXQtZmllbGR7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luOiAwLjI1ZW07XHJcbn1cclxuaW5wdXQsIHNlbGVjdCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblttZGNDYXJkXSB7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogMC43NWVtIDA7XHJcbiAgICBwYWRkaW5nOiAwLjI1ZW07XHJcbiAgICBib3JkZXI6IDAuMTI1ZW0gc29saWQgcmdiYSgwLCAwLCAwLCAwLjEyNSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyZW0gMC41ZW0gMC41ZW0gMC41ZW07XHJcbiAgICBjb2xvcjogdmFyKC0tbWRjLXRoZW1lLW9uLXN1cmZhY2UpO1xyXG4gIFxyXG4gICAgLmNhcmQtaGVhZGluZyB7XHJcbiAgICAgIHBhZGRpbmc6IDhweCAxNnB4O1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAubWF0ZXJpYWwtc291cmNlIHtcclxuICAgICAgZm9udC1zaXplOiAwLjg3NWVtO1xyXG4gICAgfVxyXG4gICAgLm1hdGVyaWFsLWRldGFpbCB7XHJcbiAgICAgIHBhZGRpbmc6IDAuMjVlbTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLm1kYy1jYXJkLmNoLWx2bC01IHtcclxuICAgIGJvcmRlci1jb2xvcjogI2QwNjk0ZTtcclxuICB9XHJcbiAgLm1kYy1jYXJkLmNoLWx2bC00IHtcclxuICAgIGJvcmRlci1jb2xvcjogI2Y5Y2U4YztcclxuICB9XHJcbiAgLm1kYy1jYXJkLmNoLWx2bC0zIHtcclxuICAgIGJvcmRlci1jb2xvcjogIzU4OWJhZDtcclxuICB9XHJcbiAgLm1kYy1jYXJkLmNoLWx2bC0yIHtcclxuICAgIGJvcmRlci1jb2xvcjogIzdlYmM1OTtcclxuICB9XHJcbiAgLm1kYy1jYXJkLmNoLWx2bC0xIHtcclxuICAgIGJvcmRlci1jb2xvcjogI2MzZTNlNTtcclxuICB9XHJcblxyXG4gIGJ1dHRvbiB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG4gIFttZGNJY29uQnV0dG9uXSB7XHJcbiAgICBwYWRkaW5nOiAwLjVlbTtcclxuICB9XHJcbiAgW21kY0J1dHRvbl17XHJcbiAgICBmb250LXNpemU6IDAuODc1ZW07XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBjb2xvcjogdmFyKC0tbWRjLXRoZW1lLW9uLXN1cmZhY2UpO1xyXG4gIH1cclxuICBbbWRjQnV0dG9uXS5idG5UaXRsZXtcclxuICAgIG1pbi13aWR0aDogNTRweDtcclxuICAgIHdpZHRoOjU0cHg7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xyXG4gIH1cclxuICAubWRjLXRleHQtZmllbGQtLXVwZ3JhZGVkOm5vdCgubWRjLXRleHQtZmllbGQtLWZ1bGx3aWR0aCk6bm90KC5tZGMtdGV4dC1maWVsZC0tYm94KXtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgfSJdfQ== */");

/***/ }),

/***/ "./src/app/char-mat-charcard/char-mat-charcard.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/char-mat-charcard/char-mat-charcard.component.ts ***!
  \******************************************************************/
/*! exports provided: CharMatCharcardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharMatCharcardComponent", function() { return CharMatCharcardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _fetch_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../fetch.service */ "./src/app/fetch.service.ts");



let CharMatCharcardComponent = class CharMatCharcardComponent {
    constructor(fetch) {
        this.fetch = fetch;
        this.reportRemove = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.reportMats = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.data = {
            ce: 0,
            te: 0,
            cs: 1,
            ts: 1,
            specials: [],
            css: [],
            tss: []
        };
        this.limits = {
            maxEvolve: 0,
            maxSkill: 1,
            maxSpecial: [],
        };
        this.isExsm = false;
    }
    emitRemove() {
        this.reportRemove.emit(this.char.name);
    }
    getOrDefault(o, k, v = 0) {
        return k in o ? o[k] : v;
    }
    saveLocal() {
        this.fetch.setLocalStorage('cm-' + this.char.name, this.data);
    }
    ngOnInit() {
        // console.log(this.char.evolveCosts.length);
        this.limits.maxSkill = this.char.askillCosts.length + 1;
        this.limits.maxEvolve = this.char.evolveCosts.length - 1;
        const cml = this.fetch.getLocalStorage('cm-' + this.char.name, {
            ce: 0,
            te: this.limits.maxEvolve,
            cs: 1,
            ts: this.limits.maxSkill,
            specials: [],
            css: [],
            tss: []
        });
        this.data = cml;
        const specialCount = this.char.sskillCosts.length;
        if (specialCount !== 0 && this.data.specials.length === 0) {
            for (let i = 0; i < specialCount; i++) {
                const maxSpecial = this.char.sskillCosts[i].levelUpCost.length;
                this.data.css.push(cml.css.length > i ? cml.css[i] : 0);
                this.data.tss.push(cml.tss.length > i ? cml.tss[i] : 0); // 专精技能并不会全部强化，因此取消默认最大。
                this.limits.maxSpecial.push(maxSpecial);
                this.data.specials.push(i);
            }
        }
        this.calc();
        this.isExsm = this.fetch.getLocalStorage('s-exsm', false);
    }
    onEvolveClick(isTarget, isAdd) {
        const maxEvolve = this.char.evolveCosts.length - 1;
        if (isTarget) {
            this.data.te = this.checkFix(this.data.te + (isAdd ? 1 : -1), 0, maxEvolve);
        }
        else {
            this.data.ce = this.checkFix(this.data.ce + (isAdd ? 1 : -1), 0, maxEvolve);
        }
        if (this.data.te < this.data.ce) {
            if (isTarget) {
                this.data.ce = this.data.te;
            }
            else {
                this.data.te = this.data.ce;
            }
        }
        this.calc();
    }
    onSkillClick(isTarget, isAdd) {
        const maxSkill = this.char.askillCosts.length + 1;
        if (isTarget) {
            this.data.ts = this.checkFix(this.data.ts + (isAdd ? 1 : -1), 1, maxSkill);
        }
        else {
            this.data.cs = this.checkFix(this.data.cs + (isAdd ? 1 : -1), 1, maxSkill);
        }
        if (this.data.ts < this.data.cs) {
            if (isTarget) {
                this.data.cs = this.data.ts;
            }
            else {
                this.data.ts = this.data.cs;
            }
        }
        this.calc();
    }
    onSpecialClick(idx, isTarget, isAdd) {
        const maxSpecial = this.char.sskillCosts[idx].levelUpCost.length;
        if (isTarget) {
            this.data.tss[idx] = this.checkFix(this.data.tss[idx] + (isAdd ? 1 : -1), 0, maxSpecial);
        }
        else {
            this.data.css[idx] = this.checkFix(this.data.css[idx] + (isAdd ? 1 : -1), 0, maxSpecial);
        }
        if (this.data.tss[idx] < this.data.css[idx]) {
            if (isTarget) {
                this.data.css[idx] = this.data.tss[idx];
            }
            else {
                this.data.tss[idx] = this.data.css[idx];
            }
        }
        this.calc();
    }
    addOrCreate(o, key, val) {
        if (key in o) {
            o[key] += val;
        }
        else {
            o[key] = val;
        }
    }
    calc() {
        const m = {};
        // evolve
        for (let i = this.data.ce + 1; i <= this.data.te; i++) {
            const ec = this.char.evolveCosts[i];
            for (const eci of ec) {
                this.addOrCreate(m, eci.id, eci.count);
            }
        }
        // all skills
        for (let i = this.data.cs; i < this.data.ts; i++) {
            const sc = this.char.askillCosts[i - 1];
            for (const sci of sc.lvlUpCost) {
                this.addOrCreate(m, sci.id, sci.count);
            }
        }
        // specials
        for (const idx of this.data.specials) {
            for (let i = this.data.css[idx]; i < this.data.tss[idx]; i++) {
                const spc = this.char.sskillCosts[idx].levelUpCost[i];
                for (const spci of spc.levelUpCost) {
                    this.addOrCreate(m, spci.id, spci.count);
                }
            }
        }
        // console.log(this);
        this.saveLocal();
        this.reportMats.emit({ name: this.char.name, mat: m });
    }
    checkFix(val, min, max) {
        // console.log(val, min, max);
        if (val === null || val < min) {
            return min;
        }
        if (val > max) {
            return max;
        }
        return val;
    }
    onInputChange() {
        const maxEvolve = this.char.evolveCosts.length - 1;
        this.data.te = this.checkFix(this.data.te, 0, maxEvolve);
        this.data.ce = this.checkFix(this.data.ce, 0, maxEvolve);
        const maxSkill = this.char.askillCosts.length + 1;
        this.data.ts = this.checkFix(this.data.ts, 1, maxSkill);
        this.data.cs = this.checkFix(this.data.cs, 1, maxSkill);
        for (const idx of this.data.specials) {
            const maxSpecial = this.char.sskillCosts[idx].levelUpCost.length;
            this.data.tss[idx] = this.checkFix(this.data.tss[idx], 0, maxSpecial);
            this.data.css[idx] = this.checkFix(this.data.css[idx], 0, maxSpecial);
        }
        this.calc();
    }
};
CharMatCharcardComponent.ctorParameters = () => [
    { type: _fetch_service__WEBPACK_IMPORTED_MODULE_2__["FetchService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], CharMatCharcardComponent.prototype, "char", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], CharMatCharcardComponent.prototype, "reportRemove", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], CharMatCharcardComponent.prototype, "reportMats", void 0);
CharMatCharcardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-char-mat-charcard',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./char-mat-charcard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/char-mat-charcard/char-mat-charcard.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./char-mat-charcard.component.scss */ "./src/app/char-mat-charcard/char-mat-charcard.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_fetch_service__WEBPACK_IMPORTED_MODULE_2__["FetchService"]])
], CharMatCharcardComponent);



/***/ }),

/***/ "./src/app/char-mat-matcard/char-mat-matcard.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/char-mat-matcard/char-mat-matcard.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("button {\n  margin: 0.25em;\n  white-space: nowrap;\n}\n\na {\n  text-decoration: none;\n}\n\n[mdcCard] {\n  min-width: 300px;\n  width: 100%;\n  max-width: 100%;\n  margin-top: 0.5em;\n  padding: 0.25em;\n  color: var(--mdc-theme-on-surface);\n}\n\n[mdcCard] img {\n  max-width: 48px;\n  max-height: 48px;\n  width: auto;\n  height: auto;\n  margin: auto;\n}\n\n[mdcCard] p {\n  margin: 0;\n}\n\n[mdcCard] .matcard-item {\n  padding: 0.125em 0.5em;\n  min-width: 150px;\n  width: 160px;\n  max-width: 100%;\n  border: 0.125em solid rgba(0, 0, 0, 0.125);\n  border-radius: 2em 0.5em 0.5em 2em;\n  font-size: 0.875rem;\n  margin: 0.125em;\n}\n\n[mdcCard] .matcard-item-image {\n  width: 48px;\n  height: 48px;\n  display: -webkit-box;\n  display: flex;\n}\n\n[mdcCard] [mdcCardActions] {\n  min-width: 300px;\n  width: 300px;\n}\n\n[mdcCard] .place-holder {\n  height: 0px;\n  border: none;\n}\n\n[mdcCard] .m-lvl-5 {\n  border-color: #d0694e;\n}\n\n[mdcCard] .m-lvl-4 {\n  border-color: #f9ce8c;\n}\n\n[mdcCard] .m-lvl-3 {\n  border-color: #589bad;\n}\n\n[mdcCard] .m-lvl-2 {\n  border-color: #7ebc59;\n}\n\n[mdcCard] .m-lvl-1 {\n  border-color: #c3e3e5;\n}\n\n[mdcButton] {\n  color: var(--mdc-theme-on-surface);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhci1tYXQtbWF0Y2FyZC9DOlxcVXNlcnNcXFl1ZV9wXFxEb2N1bWVudHNcXGNvZGVcXGFrdG9vbHMvc3JjXFxhcHBcXHN0eWxlc1xcY3VzdG9tLnNjc3MiLCJzcmMvYXBwL2NoYXItbWF0LW1hdGNhcmQvY2hhci1tYXQtbWF0Y2FyZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY2hhci1tYXQtbWF0Y2FyZC9DOlxcVXNlcnNcXFl1ZV9wXFxEb2N1bWVudHNcXGNvZGVcXGFrdG9vbHMvc3JjXFxhcHBcXGNoYXItbWF0LW1hdGNhcmRcXGNoYXItbWF0LW1hdGNhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0JBO0VBQ0UsY0FBQTtFQUNBLG1CQUFBO0FDdkJGOztBRHlCQTtFQUNFLHFCQUFBO0FDdEJGOztBQ0xBO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtDQUFBO0FEUUY7O0FDUEU7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QURTSjs7QUNORTtFQUNFLFNBQUE7QURRSjs7QUNMRTtFQUNFLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLDBDQUFBO0VBQ0Esa0NBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QURPSjs7QUNMRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0FET0o7O0FDSkU7RUFDRSxnQkFBQTtFQUNBLFlBQUE7QURNSjs7QUNIRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FES0o7O0FDRkU7RUFDRSxxQkFBQTtBRElKOztBQ0ZFO0VBQ0UscUJBQUE7QURJSjs7QUNGRTtFQUNFLHFCQUFBO0FESUo7O0FDRkU7RUFDRSxxQkFBQTtBRElKOztBQ0ZFO0VBQ0UscUJBQUE7QURJSjs7QUNBQTtFQUNFLGtDQUFBO0FER0YiLCJmaWxlIjoic3JjL2FwcC9jaGFyLW1hdC1tYXRjYXJkL2NoYXItbWF0LW1hdGNhcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBodHRwczovL2NvbG9yaHVudC5jby9wYWxldHRlLzM2MVxyXG4kY29sb3ItMTogI2QwNjk0ZTtcclxuJGNvbG9yLTI6ICNmNmNlOGM7XHJcbiRjb2xvci0zOiAjYzNlM2U1O1xyXG4kY29sb3ItNDogIzU4OWJhZDtcclxuXHJcbiRjb2xvci1tdXRlZDogcmdiKDE1MywgMTUzLCAxNTMpOzsgLy8g5pa56IifLeaWh+acrOeBsFxyXG4kY29sb3ItcHJpbWFyeTogcmdiKDM0LCAxODcsIDI1NSk7IC8vIOaWueiIny3ok51cclxuJGNvbG9yLXN1Y2Nlc3M6IHJnYigxMjcsIDIyNCwgMTQ5KTsgLy8gYm9vdHN0cmFwNFxyXG4kY29sb3ItaW5mbzogcmdiKDEzNywgMTM3LCAxMzcpOyAvLyDmlrnoiJ8t54GwXHJcbiRjb2xvci13YXJuaW5nOiAjZmUyOyAvLyDmlrnoiJ8t6buEXHJcbiRjb2xvci1kYW5nZXI6ICNlYzJiMDA7IC8vIOa0queCieekuuWygVxyXG4kY29sb3Itc2Vjb25kYXJ5OiByZ2IoMTM3LCAxMzcsIDEzNyk7IC8vIOaWueiIny3ngbBcclxuJGNvbG9yLWRhcms6ICMzMTMxMzE7IC8vIOaWueiIny3mjInpkq5cclxuJGNvbG9yLWJsYWNrOiAjMDAwOyAvLyDnuq/pu5FcclxuJGNvbG9yLWxpZ2h0OiByZ2IoMjUwLCAyNDksIDI0OCk7IC8vYm9vdHN0cmFwNFxyXG4kY29sb3Itd2hpdGU6ICNmZmY7IC8vIGJvb3RzdHJhcDRcclxuXHJcbiRtZGMtdHlwb2dyYXBoeS1mb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgXCJOb3RvIFNhbnNcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBIZWx2ZXRpY2EsIFwiTmltYnVzIFNhbnMgTFwiLCBBcmlhbCxcclxuICBcIkxpYmVyYXRpb24gU2Fuc1wiLCBcIlBpbmdGYW5nIFNDXCIsIFwiSGlyYWdpbm8gU2FucyBHQlwiLCBcIk5vdG8gU2FucyBDSksgU0NcIiwgXCJTb3VyY2UgSGFuIFNhbnMgU0NcIiwgXCJTb3VyY2UgSGFuIFNhbnMgQ05cIixcclxuICBTaW1IZWksIFwiTWljcm9zb2Z0IFlhSGVpXCIsIFwiV2VucXVhbnlpIE1pY3JvIEhlaVwiLCBcIldlblF1YW5ZaSBaZW4gSGVpXCIsIFwiU1QgSGVpdGlcIiwgXCJXZW5RdWFuWWkgWmVuIEhlaSBTaGFycFwiLFxyXG4gIHNhbnMtc2VyaWY7XHJcblxyXG4kaGlnaGxpZ2h0LWJhY2tncm91bmQ6ICNlOGVhZjc7XHJcbmJ1dHRvbiB7XHJcbiAgbWFyZ2luOiAwLjI1ZW07XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxufVxyXG5hIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuIiwiYnV0dG9uIHtcbiAgbWFyZ2luOiAwLjI1ZW07XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbmEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cblttZGNDYXJkXSB7XG4gIG1pbi13aWR0aDogMzAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDAuNWVtO1xuICBwYWRkaW5nOiAwLjI1ZW07XG4gIGNvbG9yOiB2YXIoLS1tZGMtdGhlbWUtb24tc3VyZmFjZSk7XG59XG5bbWRjQ2FyZF0gaW1nIHtcbiAgbWF4LXdpZHRoOiA0OHB4O1xuICBtYXgtaGVpZ2h0OiA0OHB4O1xuICB3aWR0aDogYXV0bztcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW46IGF1dG87XG59XG5bbWRjQ2FyZF0gcCB7XG4gIG1hcmdpbjogMDtcbn1cblttZGNDYXJkXSAubWF0Y2FyZC1pdGVtIHtcbiAgcGFkZGluZzogMC4xMjVlbSAwLjVlbTtcbiAgbWluLXdpZHRoOiAxNTBweDtcbiAgd2lkdGg6IDE2MHB4O1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogMC4xMjVlbSBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTI1KTtcbiAgYm9yZGVyLXJhZGl1czogMmVtIDAuNWVtIDAuNWVtIDJlbTtcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgbWFyZ2luOiAwLjEyNWVtO1xufVxuW21kY0NhcmRdIC5tYXRjYXJkLWl0ZW0taW1hZ2Uge1xuICB3aWR0aDogNDhweDtcbiAgaGVpZ2h0OiA0OHB4O1xuICBkaXNwbGF5OiBmbGV4O1xufVxuW21kY0NhcmRdIFttZGNDYXJkQWN0aW9uc10ge1xuICBtaW4td2lkdGg6IDMwMHB4O1xuICB3aWR0aDogMzAwcHg7XG59XG5bbWRjQ2FyZF0gLnBsYWNlLWhvbGRlciB7XG4gIGhlaWdodDogMHB4O1xuICBib3JkZXI6IG5vbmU7XG59XG5bbWRjQ2FyZF0gLm0tbHZsLTUge1xuICBib3JkZXItY29sb3I6ICNkMDY5NGU7XG59XG5bbWRjQ2FyZF0gLm0tbHZsLTQge1xuICBib3JkZXItY29sb3I6ICNmOWNlOGM7XG59XG5bbWRjQ2FyZF0gLm0tbHZsLTMge1xuICBib3JkZXItY29sb3I6ICM1ODliYWQ7XG59XG5bbWRjQ2FyZF0gLm0tbHZsLTIge1xuICBib3JkZXItY29sb3I6ICM3ZWJjNTk7XG59XG5bbWRjQ2FyZF0gLm0tbHZsLTEge1xuICBib3JkZXItY29sb3I6ICNjM2UzZTU7XG59XG5cblttZGNCdXR0b25dIHtcbiAgY29sb3I6IHZhcigtLW1kYy10aGVtZS1vbi1zdXJmYWNlKTtcbn0iLCJAaW1wb3J0ICcuLi9zdHlsZXMvY3VzdG9tLnNjc3MnO1xyXG5cclxuW21kY0NhcmRdIHtcclxuICBtaW4td2lkdGg6IDMwMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICBtYXJnaW4tdG9wOiAwLjVlbTtcclxuICBwYWRkaW5nOiAwLjI1ZW07XHJcbiAgY29sb3I6IHZhcigtLW1kYy10aGVtZS1vbi1zdXJmYWNlKTtcclxuICBpbWcge1xyXG4gICAgbWF4LXdpZHRoOiA0OHB4O1xyXG4gICAgbWF4LWhlaWdodDogNDhweDtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gIH1cclxuXHJcbiAgcCB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG5cclxuICAubWF0Y2FyZC1pdGVtIHtcclxuICAgIHBhZGRpbmc6IDAuMTI1ZW0gMC41ZW07XHJcbiAgICBtaW4td2lkdGg6IDE1MHB4O1xyXG4gICAgd2lkdGg6IDE2MHB4O1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyOiAwLjEyNWVtIHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xMjUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMmVtIDAuNWVtIDAuNWVtIDJlbTtcclxuICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbiAgICBtYXJnaW46IDAuMTI1ZW07XHJcbiAgfVxyXG4gIC5tYXRjYXJkLWl0ZW0taW1hZ2Uge1xyXG4gICAgd2lkdGg6IDQ4cHg7XHJcbiAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gIH1cclxuXHJcbiAgW21kY0NhcmRBY3Rpb25zXSB7XHJcbiAgICBtaW4td2lkdGg6IDMwMHB4O1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gIH1cclxuXHJcbiAgLnBsYWNlLWhvbGRlciB7XHJcbiAgICBoZWlnaHQ6IDBweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICB9XHJcblxyXG4gIC5tLWx2bC01IHtcclxuICAgIGJvcmRlci1jb2xvcjogI2QwNjk0ZTtcclxuICB9XHJcbiAgLm0tbHZsLTQge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZjljZThjO1xyXG4gIH1cclxuICAubS1sdmwtMyB7XHJcbiAgICBib3JkZXItY29sb3I6ICM1ODliYWQ7XHJcbiAgfVxyXG4gIC5tLWx2bC0yIHtcclxuICAgIGJvcmRlci1jb2xvcjogIzdlYmM1OTtcclxuICB9XHJcbiAgLm0tbHZsLTEge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjYzNlM2U1O1xyXG4gIH1cclxufVxyXG5cclxuW21kY0J1dHRvbl0ge1xyXG4gIGNvbG9yOiB2YXIoLS1tZGMtdGhlbWUtb24tc3VyZmFjZSk7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/char-mat-matcard/char-mat-matcard.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/char-mat-matcard/char-mat-matcard.component.ts ***!
  \****************************************************************/
/*! exports provided: CharMatMatcardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharMatMatcardComponent", function() { return CharMatMatcardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _fetch_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../fetch.service */ "./src/app/fetch.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _blox_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @blox/material */ "./node_modules/@blox/material/dist/material.es5.js");





let CharMatMatcardComponent = class CharMatMatcardComponent {
    constructor(fetch, router, snackbar) {
        this.fetch = fetch;
        this.router = router;
        this.snackbar = snackbar;
        this.innerSMats = [];
    }
    set smats(sm) {
        this.innerSMats = sm;
    }
    get smats() {
        return this.innerSMats;
    }
    toMaterialCalc() {
        if (!this.innerSMats || this.innerSMats.length === 0) {
            this.snackbar.show({
                message: '材料为空，请先输入需求。',
                actionText: '好的',
                multiline: false,
                actionOnBottom: false
            });
            return;
        }
        const data = this.fetch.getLocalStorage('m-data', {});
        if (Object.keys(data).length === 0) {
            this.snackbar.show({
                message: '请先打开一次材料计算页面。',
                actionText: '好的',
                multiline: false,
                actionOnBottom: false
            });
            return;
        }
        // 导入前清空原有需求
        for (const e in data) {
            if (data.hasOwnProperty(e)) {
                data[e].need = 0;
            }
        }
        for (const m of this.innerSMats) {
            if (data[this.allmats[m.id].name]) {
                data[this.allmats[m.id].name].need = m.count;
            }
            else {
                this.snackbar.show({
                    message: '材料有更新，请先打开一次材料计算页面，当前输入不会清空。',
                    actionText: '好的',
                    multiline: false,
                    actionOnBottom: false
                });
                return;
            }
        }
        this.fetch.setLocalStorage('m-data', data);
        this.fetch.setLocalStorage('m-option', {
            showOnly3plus: true,
            filtered: true,
            showMat: true,
            showChip: true,
            showBook: true
        });
        this.router.navigateByUrl('/material');
    }
    ngOnInit() {
    }
};
CharMatMatcardComponent.ctorParameters = () => [
    { type: _fetch_service__WEBPACK_IMPORTED_MODULE_2__["FetchService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _blox_material__WEBPACK_IMPORTED_MODULE_4__["MdcSnackbarService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], CharMatMatcardComponent.prototype, "allmats", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Array])
], CharMatMatcardComponent.prototype, "smats", null);
CharMatMatcardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-char-mat-matcard',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./char-mat-matcard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/char-mat-matcard/char-mat-matcard.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./char-mat-matcard.component.scss */ "./src/app/char-mat-matcard/char-mat-matcard.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_fetch_service__WEBPACK_IMPORTED_MODULE_2__["FetchService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _blox_material__WEBPACK_IMPORTED_MODULE_4__["MdcSnackbarService"]])
], CharMatMatcardComponent);



/***/ }),

/***/ "./src/app/char-mat/char-mat.component.scss":
/*!**************************************************!*\
  !*** ./src/app/char-mat/char-mat.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".input-field {\n  width: 100%;\n  margin: 0.25em;\n}\n\ninput,\nselect {\n  text-align: center;\n  -webkit-padding-start: 0.5em;\n          padding-inline-start: 0.5em;\n}\n\n.padding-x-1 {\n  padding: 0 1em;\n}\n\ndiv {\n  color: var(--mdc-theme-on-surface);\n}\n\noption,\n.tpob {\n  color: var(--mdc-theme-text-primary-on-background);\n}\n\n.mdc-select__native-control:focus ~ .mdc-floating-label {\n  color: var(--mdc-theme-text-primary-on-background);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhci1tYXQvQzpcXFVzZXJzXFxZdWVfcFxcRG9jdW1lbnRzXFxjb2RlXFxha3Rvb2xzL3NyY1xcYXBwXFxjaGFyLW1hdFxcY2hhci1tYXQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NoYXItbWF0L2NoYXItbWF0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLGNBQUE7QUNDRjs7QURDQTs7RUFFRSxrQkFBQTtFQUNBLDRCQUFBO1VBQUEsMkJBQUE7QUNFRjs7QURBQTtFQUNFLGNBQUE7QUNHRjs7QUREQTtFQUNFLGtDQUFBO0FDSUY7O0FEREE7O0VBRUUsa0RBQUE7QUNJRjs7QUREQTtFQUNFLGtEQUFBO0FDSUYiLCJmaWxlIjoic3JjL2FwcC9jaGFyLW1hdC9jaGFyLW1hdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbnB1dC1maWVsZCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luOiAwLjI1ZW07XHJcbn1cclxuaW5wdXQsXHJcbnNlbGVjdCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAwLjVlbTtcclxufVxyXG4ucGFkZGluZy14LTEge1xyXG4gIHBhZGRpbmc6IDAgMWVtO1xyXG59XHJcbmRpdiB7XHJcbiAgY29sb3I6IHZhcigtLW1kYy10aGVtZS1vbi1zdXJmYWNlKTtcclxufVxyXG5cclxub3B0aW9uLFxyXG4udHBvYiB7XHJcbiAgY29sb3I6IHZhcigtLW1kYy10aGVtZS10ZXh0LXByaW1hcnktb24tYmFja2dyb3VuZCk7XHJcbn1cclxuXHJcbi5tZGMtc2VsZWN0X19uYXRpdmUtY29udHJvbDpmb2N1cyB+IC5tZGMtZmxvYXRpbmctbGFiZWwge1xyXG4gIGNvbG9yOiB2YXIoLS1tZGMtdGhlbWUtdGV4dC1wcmltYXJ5LW9uLWJhY2tncm91bmQpO1xyXG59IiwiLmlucHV0LWZpZWxkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMC4yNWVtO1xufVxuXG5pbnB1dCxcbnNlbGVjdCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDAuNWVtO1xufVxuXG4ucGFkZGluZy14LTEge1xuICBwYWRkaW5nOiAwIDFlbTtcbn1cblxuZGl2IHtcbiAgY29sb3I6IHZhcigtLW1kYy10aGVtZS1vbi1zdXJmYWNlKTtcbn1cblxub3B0aW9uLFxuLnRwb2Ige1xuICBjb2xvcjogdmFyKC0tbWRjLXRoZW1lLXRleHQtcHJpbWFyeS1vbi1iYWNrZ3JvdW5kKTtcbn1cblxuLm1kYy1zZWxlY3RfX25hdGl2ZS1jb250cm9sOmZvY3VzIH4gLm1kYy1mbG9hdGluZy1sYWJlbCB7XG4gIGNvbG9yOiB2YXIoLS1tZGMtdGhlbWUtdGV4dC1wcmltYXJ5LW9uLWJhY2tncm91bmQpO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/char-mat/char-mat.component.ts":
/*!************************************************!*\
  !*** ./src/app/char-mat/char-mat.component.ts ***!
  \************************************************/
/*! exports provided: CharMatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharMatComponent", function() { return CharMatComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _fetch_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../fetch.service */ "./src/app/fetch.service.ts");
/* harmony import */ var _blox_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @blox/material */ "./node_modules/@blox/material/dist/material.es5.js");




let CharMatComponent = class CharMatComponent {
    constructor(fetch, cdRef, snackbar) {
        this.fetch = fetch;
        this.cdRef = cdRef;
        this.snackbar = snackbar;
        this.chars = [];
        this.joindChars = [];
        this.star = 6;
        this.prof = '全部';
        this.char = '';
        this.selectedChars = [];
        this.rawMat = {};
    }
    ngOnInit() {
        this.fetch.getJson('./assets/data/charMaterials.json').subscribe(data => {
            this.cmMap = data;
            this.chars = Object.keys(data);
            const cbs = [[], [], [], [], [], [], []];
            const cbp = { 医疗: [], 近卫: [], 先锋: [], 重装: [], 狙击: [], 术师: [], 辅助: [], 特种: [], 全部: [], 其它: [] };
            for (const chn in data) {
                if (data[chn] && data[chn].profession !== '其它') {
                    cbs[0].push(chn);
                    cbp.全部.push(chn);
                    cbs[+data[chn].rarity + 1].push(chn);
                    cbp[data[chn].profession].push(chn);
                }
            }
            for (let i = 0; i < cbs.length; i++) {
                cbs[i] = cbs[i].sort((a, b) => a > b ? 1 : (a < b ? -1 : 0));
            }
            for (const p in cbp) {
                if (cbp[p]) {
                    cbp[p] = cbp[p].sort((a, b) => a > b ? 1 : (a < b ? -1 : 0));
                }
            }
            this.charByStar = cbs;
            this.charByProf = cbp;
            this.onFilterChange();
            this.selectedChars = this.fetch.getLocalStorage('cm-chars', []);
        });
        this.fetch.getJson('./assets/data/material.json').subscribe(data => {
            this.mats = data;
        });
    }
    onFilterChange() {
        const cs = this.charByStar[this.star];
        const cp = this.charByProf[this.prof];
        // 在已排好序的前提下求交集，时间复杂度n+m
        const joind = [];
        for (let i = 0, j = 0; i < cs.length && j < cp.length;) {
            if (cs[i] > cp[j]) {
                j++;
            }
            else if (cs[i] < cp[j]) {
                i++;
            }
            else if (cs[i] === cp[j]) {
                joind.push(cs[i]);
                i++;
                j++;
            }
        }
        this.joindChars = joind;
        if (joind.length > 0) {
            this.char = joind[0];
        }
    }
    onCharAdd() {
        if (!this.selectedChars.includes(this.char)) {
            this.selectedChars.unshift(this.char);
            this.fetch.setLocalStorage('cm-chars', this.selectedChars);
        }
        else {
            this.snackbar.show({
                message: '干员已存在。',
                actionText: '好的',
                multiline: false,
                actionOnBottom: false
            });
        }
    }
    onCharRemove(name) {
        const index = this.selectedChars.indexOf(name, 0);
        if (index > -1) {
            this.selectedChars.splice(index, 1);
        }
        delete this.rawMat[name];
        this.fetch.setLocalStorage('cm-chars', this.selectedChars);
        this.summaryMats();
    }
    onMatReport(charMat) {
        // console.log(charMat);
        this.rawMat[charMat.name] = charMat.mat;
        this.summaryMats();
    }
    addOrCreate(m, key, val) {
        if (key in m) {
            m[key] += val;
        }
        else {
            m[key] = val;
        }
    }
    summaryMats() {
        const sum = {};
        for (const k in this.rawMat) {
            if (this.rawMat[k]) {
                for (const mid in this.rawMat[k]) {
                    if (this.rawMat[k][mid]) {
                        this.addOrCreate(sum, mid, this.rawMat[k][mid]);
                    }
                }
            }
        }
        const sorted = [];
        for (const k in sum) {
            if (sum[k]) {
                sorted.push({
                    id: k,
                    count: sum[k]
                });
            }
        }
        sorted.sort((a, b) => this.mats[a.id].rarity > this.mats[b.id].rarity ? -1 :
            (this.mats[a.id].rarity < this.mats[b.id].rarity ? 1 :
                (a.id > b.id ? -1 : (a.id < b.id ? 1 : 0))));
        this.summarizedMats = sorted;
    }
    ngAfterViewChecked() {
        this.cdRef.detectChanges();
    }
};
CharMatComponent.ctorParameters = () => [
    { type: _fetch_service__WEBPACK_IMPORTED_MODULE_2__["FetchService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _blox_material__WEBPACK_IMPORTED_MODULE_3__["MdcSnackbarService"] }
];
CharMatComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-char-mat',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./char-mat.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/char-mat/char-mat.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./char-mat.component.scss */ "./src/app/char-mat/char-mat.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_fetch_service__WEBPACK_IMPORTED_MODULE_2__["FetchService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _blox_material__WEBPACK_IMPORTED_MODULE_3__["MdcSnackbarService"]])
], CharMatComponent);



/***/ }),

/***/ "./src/app/fetch.service.ts":
/*!**********************************!*\
  !*** ./src/app/fetch.service.ts ***!
  \**********************************/
/*! exports provided: FetchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchService", function() { return FetchService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let FetchService = class FetchService {
    constructor(http) {
        this.http = http;
        this.cache = new Object();
    }
    getJson(url) {
        if (url in this.cache) {
            return this.cache[url];
        }
        const resp = this.http.get(url);
        this.cache[url] = resp;
        return resp;
    }
    postJson(url, data) {
        const resp = this.http.post(url, data);
        return resp;
    }
    getLocalStorage(key, defaultVal = null) {
        const val = localStorage.getItem(key);
        // console.log({ key: val });
        if (val === null) {
            return defaultVal;
        }
        return JSON.parse(val);
    }
    setLocalStorage(key, val) {
        // console.log({ key: val });
        localStorage.setItem(key, JSON.stringify(val));
    }
    removeLocalStorage(key) {
        localStorage.removeItem(key);
    }
};
FetchService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
FetchService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], FetchService);



/***/ }),

/***/ "./src/app/help/help.component.scss":
/*!******************************************!*\
  !*** ./src/app/help/help.component.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("button {\n  margin: 0.25em;\n  white-space: nowrap;\n}\n\na {\n  text-decoration: none;\n}\n\n.help-container {\n  max-width: 1200px;\n  margin: auto;\n  padding: 1em;\n}\n\np {\n  color: #999999;\n}\n\nimg {\n  max-width: 300px;\n  width: auto;\n  height: auto;\n}\n\nul {\n  color: #999999;\n}\n\nul li {\n  vertical-align: center;\n  align-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVscC9DOlxcVXNlcnNcXFl1ZV9wXFxEb2N1bWVudHNcXGNvZGVcXGFrdG9vbHMvc3JjXFxhcHBcXHN0eWxlc1xcY3VzdG9tLnNjc3MiLCJzcmMvYXBwL2hlbHAvaGVscC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaGVscC9DOlxcVXNlcnNcXFl1ZV9wXFxEb2N1bWVudHNcXGNvZGVcXGFrdG9vbHMvc3JjXFxhcHBcXGhlbHBcXGhlbHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0JBO0VBQ0UsY0FBQTtFQUNBLG1CQUFBO0FDdkJGOztBRHlCQTtFQUNFLHFCQUFBO0FDdEJGOztBQ0xBO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBRFFGOztBQ0xBO0VBQ0UsY0ZIWTtBQ1dkOztBQ05BO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBRFNGOztBQ1BBO0VBQ0UsY0ZYWTtBQ3FCZDs7QUNURTtFQUNFLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FEV0oiLCJmaWxlIjoic3JjL2FwcC9oZWxwL2hlbHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBodHRwczovL2NvbG9yaHVudC5jby9wYWxldHRlLzM2MVxyXG4kY29sb3ItMTogI2QwNjk0ZTtcclxuJGNvbG9yLTI6ICNmNmNlOGM7XHJcbiRjb2xvci0zOiAjYzNlM2U1O1xyXG4kY29sb3ItNDogIzU4OWJhZDtcclxuXHJcbiRjb2xvci1tdXRlZDogcmdiKDE1MywgMTUzLCAxNTMpOzsgLy8g5pa56IifLeaWh+acrOeBsFxyXG4kY29sb3ItcHJpbWFyeTogcmdiKDM0LCAxODcsIDI1NSk7IC8vIOaWueiIny3ok51cclxuJGNvbG9yLXN1Y2Nlc3M6IHJnYigxMjcsIDIyNCwgMTQ5KTsgLy8gYm9vdHN0cmFwNFxyXG4kY29sb3ItaW5mbzogcmdiKDEzNywgMTM3LCAxMzcpOyAvLyDmlrnoiJ8t54GwXHJcbiRjb2xvci13YXJuaW5nOiAjZmUyOyAvLyDmlrnoiJ8t6buEXHJcbiRjb2xvci1kYW5nZXI6ICNlYzJiMDA7IC8vIOa0queCieekuuWygVxyXG4kY29sb3Itc2Vjb25kYXJ5OiByZ2IoMTM3LCAxMzcsIDEzNyk7IC8vIOaWueiIny3ngbBcclxuJGNvbG9yLWRhcms6ICMzMTMxMzE7IC8vIOaWueiIny3mjInpkq5cclxuJGNvbG9yLWJsYWNrOiAjMDAwOyAvLyDnuq/pu5FcclxuJGNvbG9yLWxpZ2h0OiByZ2IoMjUwLCAyNDksIDI0OCk7IC8vYm9vdHN0cmFwNFxyXG4kY29sb3Itd2hpdGU6ICNmZmY7IC8vIGJvb3RzdHJhcDRcclxuXHJcbiRtZGMtdHlwb2dyYXBoeS1mb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgXCJOb3RvIFNhbnNcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBIZWx2ZXRpY2EsIFwiTmltYnVzIFNhbnMgTFwiLCBBcmlhbCxcclxuICBcIkxpYmVyYXRpb24gU2Fuc1wiLCBcIlBpbmdGYW5nIFNDXCIsIFwiSGlyYWdpbm8gU2FucyBHQlwiLCBcIk5vdG8gU2FucyBDSksgU0NcIiwgXCJTb3VyY2UgSGFuIFNhbnMgU0NcIiwgXCJTb3VyY2UgSGFuIFNhbnMgQ05cIixcclxuICBTaW1IZWksIFwiTWljcm9zb2Z0IFlhSGVpXCIsIFwiV2VucXVhbnlpIE1pY3JvIEhlaVwiLCBcIldlblF1YW5ZaSBaZW4gSGVpXCIsIFwiU1QgSGVpdGlcIiwgXCJXZW5RdWFuWWkgWmVuIEhlaSBTaGFycFwiLFxyXG4gIHNhbnMtc2VyaWY7XHJcblxyXG4kaGlnaGxpZ2h0LWJhY2tncm91bmQ6ICNlOGVhZjc7XHJcbmJ1dHRvbiB7XHJcbiAgbWFyZ2luOiAwLjI1ZW07XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxufVxyXG5hIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuIiwiYnV0dG9uIHtcbiAgbWFyZ2luOiAwLjI1ZW07XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbmEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5oZWxwLWNvbnRhaW5lciB7XG4gIG1heC13aWR0aDogMTIwMHB4O1xuICBtYXJnaW46IGF1dG87XG4gIHBhZGRpbmc6IDFlbTtcbn1cblxucCB7XG4gIGNvbG9yOiAjOTk5OTk5O1xufVxuXG5pbWcge1xuICBtYXgtd2lkdGg6IDMwMHB4O1xuICB3aWR0aDogYXV0bztcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG51bCB7XG4gIGNvbG9yOiAjOTk5OTk5O1xufVxudWwgbGkge1xuICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59IiwiQGltcG9ydCBcIi4uL3N0eWxlcy9jdXN0b20uc2Nzc1wiO1xyXG5cclxuLmhlbHAtY29udGFpbmVyIHtcclxuICBtYXgtd2lkdGg6IDEyMDBweDtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgcGFkZGluZzogMWVtO1xyXG59XHJcblxyXG5wIHtcclxuICBjb2xvcjogJGNvbG9yLW11dGVkO1xyXG59XHJcbmltZyB7XHJcbiAgbWF4LXdpZHRoOiAzMDBweDtcclxuICB3aWR0aDogYXV0bztcclxuICBoZWlnaHQ6IGF1dG87XHJcbn1cclxudWwge1xyXG4gIGNvbG9yOiAkY29sb3ItbXV0ZWQ7XHJcbiAgbGkge1xyXG4gICAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/help/help.component.ts":
/*!****************************************!*\
  !*** ./src/app/help/help.component.ts ***!
  \****************************************/
/*! exports provided: HelpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpComponent", function() { return HelpComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HelpComponent = class HelpComponent {
    constructor() { }
    ngOnInit() {
    }
    scrollToAnchor($element) {
        $element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    }
};
HelpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-help',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./help.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/help/help.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./help.component.scss */ "./src/app/help/help.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], HelpComponent);



/***/ }),

/***/ "./src/app/hr-comb/hr-comb.component.scss":
/*!************************************************!*\
  !*** ./src/app/hr-comb/hr-comb.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("button {\n  margin: 0.25em;\n  white-space: nowrap;\n}\n\na {\n  text-decoration: none;\n}\n\n.char-lvl-6 {\n  background-color: #d0694e;\n  color: white;\n}\n\n.char-lvl-5 {\n  background-color: #f9ce8c;\n  color: #1a1d1e;\n}\n\n.char-lvl-4 {\n  background-color: #589bad;\n  color: white;\n}\n\n.char-lvl-3 {\n  background-color: #7ebc59;\n  color: white;\n}\n\n.char-lvl-2 {\n  background-color: #c3e3e5;\n  color: #1a1d1e;\n}\n\n.char-lvl-1 {\n  background-color: #1a1d1e;\n  color: white;\n}\n\n.char-hl {\n  background-color: var(--mdc-theme-primary);\n  color: white;\n}\n\ntable {\n  width: 100%;\n}\n\ntable td {\n  background: var(--hr-comb-background);\n  color: rgba(255, 255, 255, 0.3);\n  font-size: 1em;\n  padding: 0px;\n}\n\n[mdcCard] {\n  margin: 8px 4px;\n  background: var(--hr-comb-background);\n}\n\n.mdc-list-divider {\n  margin: 2px;\n}\n\n.mdc-chip {\n  margin: 8px;\n  background: transparent;\n}\n\n.mdc-button {\n  padding: 0em 0.75em;\n  min-width: 0px;\n  min-height: 0px;\n  height: 32px;\n}\n\n.mdc-button.mdc-button--outlined {\n  padding: 0em 0.5em;\n  background-color: var(--mdc-theme-on-primary);\n}\n\n.gap-row {\n  background-color: var(--hr-gap-background);\n}\n\n[mdcListDivider] {\n  margin: 0px;\n}\n\n.p-25 {\n  padding: 0.25em;\n}\n\n.inline-block {\n  display: inline-block;\n}\n\n.hidden-gap-row {\n  height: 1px;\n  width: 100%;\n  min-width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaHItY29tYi9DOlxcVXNlcnNcXFl1ZV9wXFxEb2N1bWVudHNcXGNvZGVcXGFrdG9vbHMvc3JjXFxhcHBcXHN0eWxlc1xcY3VzdG9tLnNjc3MiLCJzcmMvYXBwL2hyLWNvbWIvaHItY29tYi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaHItY29tYi9DOlxcVXNlcnNcXFl1ZV9wXFxEb2N1bWVudHNcXGNvZGVcXGFrdG9vbHMvc3JjXFxhcHBcXGhyLWNvbWJcXGhyLWNvbWIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0JBO0VBQ0UsY0FBQTtFQUNBLG1CQUFBO0FDdkJGOztBRHlCQTtFQUNFLHFCQUFBO0FDdEJGOztBQ0xBO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0FEUUY7O0FDTEE7RUFDRSx5QkFBQTtFQUNBLGNBQUE7QURRRjs7QUNMQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtBRFFGOztBQ0xBO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0FEUUY7O0FDTEE7RUFDRSx5QkFBQTtFQUNBLGNBQUE7QURRRjs7QUNMQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtBRFFGOztBQ0xBO0VBQ0UsMENBQUE7RUFDQSxZQUFBO0FEUUY7O0FDTEE7RUFDRSxXQUFBO0FEUUY7O0FDUEU7RUFDRSxxQ0FBQTtFQUNBLCtCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QURTSjs7QUNMQTtFQUNFLGVBQUE7RUFDQSxxQ0FBQTtBRFFGOztBQ0NBO0VBQ0UsV0FBQTtBREVGOztBQ0NBO0VBQ0UsV0FBQTtFQUNBLHVCQUFBO0FERUY7O0FDQ0E7RUFDRSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBREVGOztBQ0NBO0VBQ0Usa0JBQUE7RUFDQSw2Q0FBQTtBREVGOztBQ0NBO0VBQ0UsMENBQUE7QURFRjs7QUNDQTtFQUNFLFdBQUE7QURFRjs7QUNJQTtFQUNFLGVBQUE7QURERjs7QUNHQTtFQUNFLHFCQUFBO0FEQUY7O0FDRUE7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QURDRiIsImZpbGUiOiJzcmMvYXBwL2hyLWNvbWIvaHItY29tYi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGh0dHBzOi8vY29sb3JodW50LmNvL3BhbGV0dGUvMzYxXHJcbiRjb2xvci0xOiAjZDA2OTRlO1xyXG4kY29sb3ItMjogI2Y2Y2U4YztcclxuJGNvbG9yLTM6ICNjM2UzZTU7XHJcbiRjb2xvci00OiAjNTg5YmFkO1xyXG5cclxuJGNvbG9yLW11dGVkOiByZ2IoMTUzLCAxNTMsIDE1Myk7OyAvLyDmlrnoiJ8t5paH5pys54GwXHJcbiRjb2xvci1wcmltYXJ5OiByZ2IoMzQsIDE4NywgMjU1KTsgLy8g5pa56IifLeiTnVxyXG4kY29sb3Itc3VjY2VzczogcmdiKDEyNywgMjI0LCAxNDkpOyAvLyBib290c3RyYXA0XHJcbiRjb2xvci1pbmZvOiByZ2IoMTM3LCAxMzcsIDEzNyk7IC8vIOaWueiIny3ngbBcclxuJGNvbG9yLXdhcm5pbmc6ICNmZTI7IC8vIOaWueiIny3pu4RcclxuJGNvbG9yLWRhbmdlcjogI2VjMmIwMDsgLy8g5rSq54KJ56S65bKBXHJcbiRjb2xvci1zZWNvbmRhcnk6IHJnYigxMzcsIDEzNywgMTM3KTsgLy8g5pa56IifLeeBsFxyXG4kY29sb3ItZGFyazogIzMxMzEzMTsgLy8g5pa56IifLeaMiemSrlxyXG4kY29sb3ItYmxhY2s6ICMwMDA7IC8vIOe6r+m7kVxyXG4kY29sb3ItbGlnaHQ6IHJnYigyNTAsIDI0OSwgMjQ4KTsgLy9ib290c3RyYXA0XHJcbiRjb2xvci13aGl0ZTogI2ZmZjsgLy8gYm9vdHN0cmFwNFxyXG5cclxuJG1kYy10eXBvZ3JhcGh5LWZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBcIk5vdG8gU2Fuc1wiLCBcIkhlbHZldGljYSBOZXVlXCIsIEhlbHZldGljYSwgXCJOaW1idXMgU2FucyBMXCIsIEFyaWFsLFxyXG4gIFwiTGliZXJhdGlvbiBTYW5zXCIsIFwiUGluZ0ZhbmcgU0NcIiwgXCJIaXJhZ2lubyBTYW5zIEdCXCIsIFwiTm90byBTYW5zIENKSyBTQ1wiLCBcIlNvdXJjZSBIYW4gU2FucyBTQ1wiLCBcIlNvdXJjZSBIYW4gU2FucyBDTlwiLFxyXG4gIFNpbUhlaSwgXCJNaWNyb3NvZnQgWWFIZWlcIiwgXCJXZW5xdWFueWkgTWljcm8gSGVpXCIsIFwiV2VuUXVhbllpIFplbiBIZWlcIiwgXCJTVCBIZWl0aVwiLCBcIldlblF1YW5ZaSBaZW4gSGVpIFNoYXJwXCIsXHJcbiAgc2Fucy1zZXJpZjtcclxuXHJcbiRoaWdobGlnaHQtYmFja2dyb3VuZDogI2U4ZWFmNztcclxuYnV0dG9uIHtcclxuICBtYXJnaW46IDAuMjVlbTtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG59XHJcbmEge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG4iLCJidXR0b24ge1xuICBtYXJnaW46IDAuMjVlbTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmNoYXItbHZsLTYge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDA2OTRlO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5jaGFyLWx2bC01IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5Y2U4YztcbiAgY29sb3I6ICMxYTFkMWU7XG59XG5cbi5jaGFyLWx2bC00IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU4OWJhZDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uY2hhci1sdmwtMyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3ZWJjNTk7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmNoYXItbHZsLTIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzNlM2U1O1xuICBjb2xvcjogIzFhMWQxZTtcbn1cblxuLmNoYXItbHZsLTEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWExZDFlO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5jaGFyLWhsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWRjLXRoZW1lLXByaW1hcnkpO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbnRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG50YWJsZSB0ZCB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWhyLWNvbWItYmFja2dyb3VuZCk7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBwYWRkaW5nOiAwcHg7XG59XG5cblttZGNDYXJkXSB7XG4gIG1hcmdpbjogOHB4IDRweDtcbiAgYmFja2dyb3VuZDogdmFyKC0taHItY29tYi1iYWNrZ3JvdW5kKTtcbn1cblxuLm1kYy1saXN0LWRpdmlkZXIge1xuICBtYXJnaW46IDJweDtcbn1cblxuLm1kYy1jaGlwIHtcbiAgbWFyZ2luOiA4cHg7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG4ubWRjLWJ1dHRvbiB7XG4gIHBhZGRpbmc6IDBlbSAwLjc1ZW07XG4gIG1pbi13aWR0aDogMHB4O1xuICBtaW4taGVpZ2h0OiAwcHg7XG4gIGhlaWdodDogMzJweDtcbn1cblxuLm1kYy1idXR0b24ubWRjLWJ1dHRvbi0tb3V0bGluZWQge1xuICBwYWRkaW5nOiAwZW0gMC41ZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1kYy10aGVtZS1vbi1wcmltYXJ5KTtcbn1cblxuLmdhcC1yb3cge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oci1nYXAtYmFja2dyb3VuZCk7XG59XG5cblttZGNMaXN0RGl2aWRlcl0ge1xuICBtYXJnaW46IDBweDtcbn1cblxuLnAtMjUge1xuICBwYWRkaW5nOiAwLjI1ZW07XG59XG5cbi5pbmxpbmUtYmxvY2sge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5oaWRkZW4tZ2FwLXJvdyB7XG4gIGhlaWdodDogMXB4O1xuICB3aWR0aDogMTAwJTtcbiAgbWluLXdpZHRoOiAxMDAlO1xufSIsIkBpbXBvcnQgXCIuLi9zdHlsZXMvY3VzdG9tLnNjc3NcIjtcclxuXHJcbi5jaGFyLWx2bC02IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDA2OTRlO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmNoYXItbHZsLTUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOWNlOGM7XHJcbiAgY29sb3I6ICMxYTFkMWU7XHJcbn1cclxuXHJcbi5jaGFyLWx2bC00IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTg5YmFkO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmNoYXItbHZsLTMge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM3ZWJjNTk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uY2hhci1sdmwtMiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2MzZTNlNTtcclxuICBjb2xvcjogIzFhMWQxZTtcclxufVxyXG5cclxuLmNoYXItbHZsLTEge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxYTFkMWU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uY2hhci1obCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWRjLXRoZW1lLXByaW1hcnkpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxudGFibGUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRkIHtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWhyLWNvbWItYmFja2dyb3VuZCk7XHJcbiAgICBjb2xvcjogcmdiYSgjZmZmLCAwLjMpO1xyXG4gICAgZm9udC1zaXplOiAxZW07XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5bbWRjQ2FyZF0ge1xyXG4gIG1hcmdpbjogOHB4IDRweDtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1oci1jb21iLWJhY2tncm91bmQpO1xyXG59XHJcblxyXG5cclxuLy8gLmJ0bi10YWcge1xyXG4vLyAgIGJhY2tncm91bmQtY29sb3I6ICRtZGMtdGhlbWUtc2Vjb25kYXJ5O1xyXG4vLyAgIGNvbG9yOiAjZmZmO1xyXG4vLyB9XHJcblxyXG4ubWRjLWxpc3QtZGl2aWRlciB7XHJcbiAgbWFyZ2luOiAycHg7XHJcbn1cclxuXHJcbi5tZGMtY2hpcCB7XHJcbiAgbWFyZ2luOiA4cHg7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnRcclxufVxyXG5cclxuLm1kYy1idXR0b24ge1xyXG4gIHBhZGRpbmc6IDBlbSAwLjc1ZW07XHJcbiAgbWluLXdpZHRoOiAwcHg7XHJcbiAgbWluLWhlaWdodDogMHB4O1xyXG4gIGhlaWdodDogMzJweDtcclxufVxyXG5cclxuLm1kYy1idXR0b24ubWRjLWJ1dHRvbi0tb3V0bGluZWQge1xyXG4gIHBhZGRpbmc6IDBlbSAwLjVlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tZGMtdGhlbWUtb24tcHJpbWFyeSk7XHJcbn1cclxuXHJcbi5nYXAtcm93IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oci1nYXAtYmFja2dyb3VuZCk7XHJcbn1cclxuXHJcblttZGNMaXN0RGl2aWRlcl0ge1xyXG4gIG1hcmdpbjogMHB4O1xyXG59XHJcblxyXG4vLyB0ZCB7XHJcbi8vICAgbWluLXdpZHRoOiAxMjVweDtcclxuLy8gfVxyXG4ucC0yNXtcclxuICBwYWRkaW5nOiAwLjI1ZW07XHJcbn1cclxuLmlubGluZS1ibG9jayB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcbi5oaWRkZW4tZ2FwLXJvdyB7XHJcbiAgaGVpZ2h0OiAxcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWluLXdpZHRoOiAxMDAlO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/hr-comb/hr-comb.component.ts":
/*!**********************************************!*\
  !*** ./src/app/hr-comb/hr-comb.component.ts ***!
  \**********************************************/
/*! exports provided: HrCombComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HrCombComponent", function() { return HrCombComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _fetch_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../fetch.service */ "./src/app/fetch.service.ts");



let HrCombComponent = class HrCombComponent {
    constructor(fetch) {
        this.fetch = fetch;
        this.reportCharClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    // Note: without this trackBy function, *ngFor re-rendering will be extremely
    // slow due to the tracking mechanism.
    trackComb(_, item) {
        if (item === null) {
            return null;
        }
        return item.id;
    }
    onNameClick(name) {
        this.reportCharClick.emit(name);
    }
    ngOnInit() {
    }
};
HrCombComponent.ctorParameters = () => [
    { type: _fetch_service__WEBPACK_IMPORTED_MODULE_2__["FetchService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
], HrCombComponent.prototype, "hrcombs", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], HrCombComponent.prototype, "charSelected", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], HrCombComponent.prototype, "option", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], HrCombComponent.prototype, "reportCharClick", void 0);
HrCombComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-hr-comb',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./hr-comb.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/hr-comb/hr-comb.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./hr-comb.component.scss */ "./src/app/hr-comb/hr-comb.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_fetch_service__WEBPACK_IMPORTED_MODULE_2__["FetchService"]])
], HrCombComponent);



/***/ }),

/***/ "./src/app/hr-tags/hr-tags.component.scss":
/*!************************************************!*\
  !*** ./src/app/hr-tags/hr-tags.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("button {\n  margin: 0.25em;\n  white-space: nowrap;\n}\n\na {\n  text-decoration: none;\n}\n\n.mdc-button {\n  border-color: var(--hr-unselected-background);\n  background-color: var(--hr-unselected-background);\n  padding: 0em 0.5em;\n  min-width: 0px;\n  min-height: 0px;\n  height: 32px;\n}\n\n.mdc-button:hover {\n  border-color: var(--mdc-theme-secondary);\n}\n\n.mdc-button--outlined:not(.mdc-button--raised) {\n  color: var(--hr-unselected-text);\n  background-color: var(--hr-unselected-background);\n  border-color: var(--hr-tag-border);\n}\n\n.mdc-button--outlined.mdc-button--raised {\n  color: var(--hr-selected-text);\n  background-color: var(--hr-selected-background);\n  border-color: var(--hr-selected-background);\n}\n\n.mdc-button.btnTitle {\n  background-color: var(--hr-unselected-background);\n  color: var(--hr-unselected-text);\n}\n\n.no-padding {\n  padding: 0px, 0px, 0px, 0px;\n}\n\n.mdc-chip {\n  margin: 2px;\n}\n\n.btnStarGroup .mdc-button {\n  padding: 0 0.36em;\n  min-width: 0px;\n}\n\n.btnRowTitle {\n  color: var(--hr-unselected-text);\n  background-color: unset;\n  padding: 0 0.25em;\n  min-width: 40px;\n  margin: 0px;\n  pointer-events: none;\n}\n\n.even-row {\n  background-color: var(--hr-gap-background);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaHItdGFncy9DOlxcVXNlcnNcXFl1ZV9wXFxEb2N1bWVudHNcXGNvZGVcXGFrdG9vbHMvc3JjXFxhcHBcXHN0eWxlc1xcY3VzdG9tLnNjc3MiLCJzcmMvYXBwL2hyLXRhZ3MvaHItdGFncy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaHItdGFncy9DOlxcVXNlcnNcXFl1ZV9wXFxEb2N1bWVudHNcXGNvZGVcXGFrdG9vbHMvc3JjXFxhcHBcXGhyLXRhZ3NcXGhyLXRhZ3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0JBO0VBQ0UsY0FBQTtFQUNBLG1CQUFBO0FDdkJGOztBRHlCQTtFQUNFLHFCQUFBO0FDdEJGOztBQ0xBO0VBQ0UsNkNBQUE7RUFDQSxpREFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FEUUY7O0FDUEU7RUFDRSx3Q0FBQTtBRFNKOztBQ0xBO0VBQ0UsZ0NBQUE7RUFDQSxpREFBQTtFQUNBLGtDQUFBO0FEUUY7O0FDTkE7RUFDRSw4QkFBQTtFQUNBLCtDQUFBO0VBQ0EsMkNBQUE7QURTRjs7QUNOQTtFQUNFLGlEQUFBO0VBQ0EsZ0NBQUE7QURTRjs7QUNOQTtFQUNFLDJCQUFBO0FEU0Y7O0FDTkE7RUFDRSxXQUFBO0FEU0Y7O0FDTkE7RUFDRSxpQkFBQTtFQUNBLGNBQUE7QURTRjs7QUNOQTtFQUNFLGdDQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7QURTRjs7QUNOQTtFQUNFLDBDQUFBO0FEU0YiLCJmaWxlIjoic3JjL2FwcC9oci10YWdzL2hyLXRhZ3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBodHRwczovL2NvbG9yaHVudC5jby9wYWxldHRlLzM2MVxyXG4kY29sb3ItMTogI2QwNjk0ZTtcclxuJGNvbG9yLTI6ICNmNmNlOGM7XHJcbiRjb2xvci0zOiAjYzNlM2U1O1xyXG4kY29sb3ItNDogIzU4OWJhZDtcclxuXHJcbiRjb2xvci1tdXRlZDogcmdiKDE1MywgMTUzLCAxNTMpOzsgLy8g5pa56IifLeaWh+acrOeBsFxyXG4kY29sb3ItcHJpbWFyeTogcmdiKDM0LCAxODcsIDI1NSk7IC8vIOaWueiIny3ok51cclxuJGNvbG9yLXN1Y2Nlc3M6IHJnYigxMjcsIDIyNCwgMTQ5KTsgLy8gYm9vdHN0cmFwNFxyXG4kY29sb3ItaW5mbzogcmdiKDEzNywgMTM3LCAxMzcpOyAvLyDmlrnoiJ8t54GwXHJcbiRjb2xvci13YXJuaW5nOiAjZmUyOyAvLyDmlrnoiJ8t6buEXHJcbiRjb2xvci1kYW5nZXI6ICNlYzJiMDA7IC8vIOa0queCieekuuWygVxyXG4kY29sb3Itc2Vjb25kYXJ5OiByZ2IoMTM3LCAxMzcsIDEzNyk7IC8vIOaWueiIny3ngbBcclxuJGNvbG9yLWRhcms6ICMzMTMxMzE7IC8vIOaWueiIny3mjInpkq5cclxuJGNvbG9yLWJsYWNrOiAjMDAwOyAvLyDnuq/pu5FcclxuJGNvbG9yLWxpZ2h0OiByZ2IoMjUwLCAyNDksIDI0OCk7IC8vYm9vdHN0cmFwNFxyXG4kY29sb3Itd2hpdGU6ICNmZmY7IC8vIGJvb3RzdHJhcDRcclxuXHJcbiRtZGMtdHlwb2dyYXBoeS1mb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgXCJOb3RvIFNhbnNcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBIZWx2ZXRpY2EsIFwiTmltYnVzIFNhbnMgTFwiLCBBcmlhbCxcclxuICBcIkxpYmVyYXRpb24gU2Fuc1wiLCBcIlBpbmdGYW5nIFNDXCIsIFwiSGlyYWdpbm8gU2FucyBHQlwiLCBcIk5vdG8gU2FucyBDSksgU0NcIiwgXCJTb3VyY2UgSGFuIFNhbnMgU0NcIiwgXCJTb3VyY2UgSGFuIFNhbnMgQ05cIixcclxuICBTaW1IZWksIFwiTWljcm9zb2Z0IFlhSGVpXCIsIFwiV2VucXVhbnlpIE1pY3JvIEhlaVwiLCBcIldlblF1YW5ZaSBaZW4gSGVpXCIsIFwiU1QgSGVpdGlcIiwgXCJXZW5RdWFuWWkgWmVuIEhlaSBTaGFycFwiLFxyXG4gIHNhbnMtc2VyaWY7XHJcblxyXG4kaGlnaGxpZ2h0LWJhY2tncm91bmQ6ICNlOGVhZjc7XHJcbmJ1dHRvbiB7XHJcbiAgbWFyZ2luOiAwLjI1ZW07XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxufVxyXG5hIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuIiwiYnV0dG9uIHtcbiAgbWFyZ2luOiAwLjI1ZW07XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbmEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5tZGMtYnV0dG9uIHtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1oci11bnNlbGVjdGVkLWJhY2tncm91bmQpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oci11bnNlbGVjdGVkLWJhY2tncm91bmQpO1xuICBwYWRkaW5nOiAwZW0gMC41ZW07XG4gIG1pbi13aWR0aDogMHB4O1xuICBtaW4taGVpZ2h0OiAwcHg7XG4gIGhlaWdodDogMzJweDtcbn1cbi5tZGMtYnV0dG9uOmhvdmVyIHtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1tZGMtdGhlbWUtc2Vjb25kYXJ5KTtcbn1cblxuLm1kYy1idXR0b24tLW91dGxpbmVkOm5vdCgubWRjLWJ1dHRvbi0tcmFpc2VkKSB7XG4gIGNvbG9yOiB2YXIoLS1oci11bnNlbGVjdGVkLXRleHQpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oci11bnNlbGVjdGVkLWJhY2tncm91bmQpO1xuICBib3JkZXItY29sb3I6IHZhcigtLWhyLXRhZy1ib3JkZXIpO1xufVxuXG4ubWRjLWJ1dHRvbi0tb3V0bGluZWQubWRjLWJ1dHRvbi0tcmFpc2VkIHtcbiAgY29sb3I6IHZhcigtLWhyLXNlbGVjdGVkLXRleHQpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oci1zZWxlY3RlZC1iYWNrZ3JvdW5kKTtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1oci1zZWxlY3RlZC1iYWNrZ3JvdW5kKTtcbn1cblxuLm1kYy1idXR0b24uYnRuVGl0bGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oci11bnNlbGVjdGVkLWJhY2tncm91bmQpO1xuICBjb2xvcjogdmFyKC0taHItdW5zZWxlY3RlZC10ZXh0KTtcbn1cblxuLm5vLXBhZGRpbmcge1xuICBwYWRkaW5nOiAwcHgsIDBweCwgMHB4LCAwcHg7XG59XG5cbi5tZGMtY2hpcCB7XG4gIG1hcmdpbjogMnB4O1xufVxuXG4uYnRuU3Rhckdyb3VwIC5tZGMtYnV0dG9uIHtcbiAgcGFkZGluZzogMCAwLjM2ZW07XG4gIG1pbi13aWR0aDogMHB4O1xufVxuXG4uYnRuUm93VGl0bGUge1xuICBjb2xvcjogdmFyKC0taHItdW5zZWxlY3RlZC10ZXh0KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdW5zZXQ7XG4gIHBhZGRpbmc6IDAgMC4yNWVtO1xuICBtaW4td2lkdGg6IDQwcHg7XG4gIG1hcmdpbjogMHB4O1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLmV2ZW4tcm93IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taHItZ2FwLWJhY2tncm91bmQpO1xufSIsIkBpbXBvcnQgXCIuLi9zdHlsZXMvY3VzdG9tLnNjc3NcIjtcclxuXHJcbi5tZGMtYnV0dG9uIHtcclxuICBib3JkZXItY29sb3I6IHZhcigtLWhyLXVuc2VsZWN0ZWQtYmFja2dyb3VuZCk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taHItdW5zZWxlY3RlZC1iYWNrZ3JvdW5kKTtcclxuICBwYWRkaW5nOiAwZW0gMC41ZW07XHJcbiAgbWluLXdpZHRoOiAwcHg7XHJcbiAgbWluLWhlaWdodDogMHB4O1xyXG4gIGhlaWdodDogMzJweDtcclxuICAmOmhvdmVyIHtcclxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tbWRjLXRoZW1lLXNlY29uZGFyeSk7XHJcbiAgfVxyXG59XHJcblxyXG4ubWRjLWJ1dHRvbi0tb3V0bGluZWQ6bm90KC5tZGMtYnV0dG9uLS1yYWlzZWQpe1xyXG4gIGNvbG9yOiB2YXIoLS1oci11bnNlbGVjdGVkLXRleHQpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhyLXVuc2VsZWN0ZWQtYmFja2dyb3VuZCk7XHJcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1oci10YWctYm9yZGVyKTtcclxufVxyXG4ubWRjLWJ1dHRvbi0tb3V0bGluZWQubWRjLWJ1dHRvbi0tcmFpc2VkIHtcclxuICBjb2xvcjogdmFyKC0taHItc2VsZWN0ZWQtdGV4dCk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taHItc2VsZWN0ZWQtYmFja2dyb3VuZCk7XHJcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1oci1zZWxlY3RlZC1iYWNrZ3JvdW5kKTtcclxufVxyXG5cclxuLm1kYy1idXR0b24uYnRuVGl0bGUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhyLXVuc2VsZWN0ZWQtYmFja2dyb3VuZCk7XHJcbiAgY29sb3I6IHZhcigtLWhyLXVuc2VsZWN0ZWQtdGV4dCk7XHJcbn1cclxuXHJcbi5uby1wYWRkaW5nIHtcclxuICBwYWRkaW5nOiAwcHgsIDBweCwgMHB4LCAwcHg7XHJcbn1cclxuXHJcbi5tZGMtY2hpcCB7XHJcbiAgbWFyZ2luOiAycHg7XHJcbn1cclxuXHJcbi5idG5TdGFyR3JvdXAgLm1kYy1idXR0b24ge1xyXG4gIHBhZGRpbmc6IDAgMC4zNmVtO1xyXG4gIG1pbi13aWR0aDogMHB4O1xyXG59XHJcblxyXG4uYnRuUm93VGl0bGUge1xyXG4gIGNvbG9yOiB2YXIoLS1oci11bnNlbGVjdGVkLXRleHQpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHVuc2V0O1xyXG4gIHBhZGRpbmc6IDAgMC4yNWVtO1xyXG4gIG1pbi13aWR0aDogNDBweDtcclxuICBtYXJnaW46IDBweDtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxufVxyXG5cclxuLmV2ZW4tcm93IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oci1nYXAtYmFja2dyb3VuZCk7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/hr-tags/hr-tags.component.ts":
/*!**********************************************!*\
  !*** ./src/app/hr-tags/hr-tags.component.ts ***!
  \**********************************************/
/*! exports provided: HrTagsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HrTagsComponent", function() { return HrTagsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _blox_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @blox/material */ "./node_modules/@blox/material/dist/material.es5.js");
/* harmony import */ var _fetch_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../fetch.service */ "./src/app/fetch.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let HrTagsComponent = class HrTagsComponent {
    constructor(snackbar, fetch, activatedRoute) {
        this.snackbar = snackbar;
        this.fetch = fetch;
        this.activatedRoute = activatedRoute;
        this.reportSelectedTags = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.reportSelectedStars = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.selectedStars = this.fetch.getLocalStorage('hr-stars', [true, true, true, true, true, true, true]);
        this.activatedRoute.queryParams.subscribe(params => {
            this.selectedTags = ('tags' in params) ? params.tags.split(' ') : [];
        });
        this.selectedStars = this.fetch.getLocalStorage('hr-stars', [true, true, true, true, true, true, true]);
    }
    onStarBtnClick(id) {
        if (id === 0) {
            const newStat = !this.selectedStars[0];
            for (let i = 0; i < 7; i++) {
                this.selectedStars[i] = newStat;
            }
        }
        else {
            this.selectedStars[id] = !this.selectedStars[id];
            let allSelected = true;
            for (let i = 1; i < 7; i++) {
                if (!this.selectedStars[i]) {
                    allSelected = false;
                }
            }
            this.selectedStars[0] = allSelected;
        }
        const stars = [];
        for (let i = 1; i < 7; i++) {
            if (this.selectedStars[i]) {
                stars.push(i);
            }
        }
        this.fetch.setLocalStorage('hr-stars', this.selectedStars);
        this.reportSelectedStars.emit(stars);
    }
    onTagClick(tag) {
        const index = this.selectedTags.indexOf(tag, 0);
        if (index > -1) {
            this.selectedTags.splice(index, 1);
        }
        else if (this.selectedTags.length > 5) {
            this.showSnackBar('无法选择更多标签：最多6个', '好的');
            return;
        }
        else {
            this.selectedTags.push(tag);
        }
        this.reportSelectedTags.emit(this.selectedTags);
    }
    showSnackBar(msg, action) {
        this.snackbar.show({
            message: msg,
            actionText: action,
            multiline: false,
            actionOnBottom: false
        });
    }
    ngOnInit() {
    }
};
HrTagsComponent.ctorParameters = () => [
    { type: _blox_material__WEBPACK_IMPORTED_MODULE_2__["MdcSnackbarService"] },
    { type: _fetch_service__WEBPACK_IMPORTED_MODULE_3__["FetchService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
], HrTagsComponent.prototype, "tagrows", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], HrTagsComponent.prototype, "reportSelectedTags", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], HrTagsComponent.prototype, "reportSelectedStars", void 0);
HrTagsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-hr-tags',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./hr-tags.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/hr-tags/hr-tags.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./hr-tags.component.scss */ "./src/app/hr-tags/hr-tags.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_blox_material__WEBPACK_IMPORTED_MODULE_2__["MdcSnackbarService"],
        _fetch_service__WEBPACK_IMPORTED_MODULE_3__["FetchService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
], HrTagsComponent);



/***/ }),

/***/ "./src/app/hr/hr.component.scss":
/*!**************************************!*\
  !*** ./src/app/hr/hr.component.scss ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("button {\n  margin: 0.25em;\n  white-space: nowrap;\n}\n\na {\n  text-decoration: none;\n}\n\n.float-box {\n  position: fixed;\n}\n\n.tagrows-container {\n  max-width: 550px;\n}\n\n.mdc-button {\n  padding: 0em 0.75em;\n  min-width: 0px;\n  min-height: 0px;\n  height: 32px;\n}\n\n.option-0 {\n  color: #1a1d1e;\n  background-color: #f6ce8c;\n}\n\n.option-1 {\n  color: #1a1d1e;\n  background-color: #c3e3e5;\n}\n\n.option-2 {\n  color: white;\n  background-color: #589bad;\n}\n\n#btnClear {\n  color: #fff;\n  background-color: #d0694e;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaHIvQzpcXFVzZXJzXFxZdWVfcFxcRG9jdW1lbnRzXFxjb2RlXFxha3Rvb2xzL3NyY1xcYXBwXFxzdHlsZXNcXGN1c3RvbS5zY3NzIiwic3JjL2FwcC9oci9oci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaHIvQzpcXFVzZXJzXFxZdWVfcFxcRG9jdW1lbnRzXFxjb2RlXFxha3Rvb2xzL3NyY1xcYXBwXFxoclxcaHIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0JBO0VBQ0UsY0FBQTtFQUNBLG1CQUFBO0FDdkJGOztBRHlCQTtFQUNFLHFCQUFBO0FDdEJGOztBQ0xBO0VBQ0UsZUFBQTtBRFFGOztBQ05BO0VBQ0UsZ0JBQUE7QURTRjs7QUNQQTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FEVUY7O0FDUEE7RUFDRSxjQUFBO0VBQ0EseUJGZlE7QUN5QlY7O0FDUkE7RUFDRSxjQUFBO0VBQ0EseUJGbEJRO0FDNkJWOztBQ1RBO0VBQ0UsWUFBQTtFQUNBLHlCRnJCUTtBQ2lDVjs7QUNWQTtFQUNFLFdBQUE7RUFDQSx5QkY1QlE7QUN5Q1YiLCJmaWxlIjoic3JjL2FwcC9oci9oci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGh0dHBzOi8vY29sb3JodW50LmNvL3BhbGV0dGUvMzYxXHJcbiRjb2xvci0xOiAjZDA2OTRlO1xyXG4kY29sb3ItMjogI2Y2Y2U4YztcclxuJGNvbG9yLTM6ICNjM2UzZTU7XHJcbiRjb2xvci00OiAjNTg5YmFkO1xyXG5cclxuJGNvbG9yLW11dGVkOiByZ2IoMTUzLCAxNTMsIDE1Myk7OyAvLyDmlrnoiJ8t5paH5pys54GwXHJcbiRjb2xvci1wcmltYXJ5OiByZ2IoMzQsIDE4NywgMjU1KTsgLy8g5pa56IifLeiTnVxyXG4kY29sb3Itc3VjY2VzczogcmdiKDEyNywgMjI0LCAxNDkpOyAvLyBib290c3RyYXA0XHJcbiRjb2xvci1pbmZvOiByZ2IoMTM3LCAxMzcsIDEzNyk7IC8vIOaWueiIny3ngbBcclxuJGNvbG9yLXdhcm5pbmc6ICNmZTI7IC8vIOaWueiIny3pu4RcclxuJGNvbG9yLWRhbmdlcjogI2VjMmIwMDsgLy8g5rSq54KJ56S65bKBXHJcbiRjb2xvci1zZWNvbmRhcnk6IHJnYigxMzcsIDEzNywgMTM3KTsgLy8g5pa56IifLeeBsFxyXG4kY29sb3ItZGFyazogIzMxMzEzMTsgLy8g5pa56IifLeaMiemSrlxyXG4kY29sb3ItYmxhY2s6ICMwMDA7IC8vIOe6r+m7kVxyXG4kY29sb3ItbGlnaHQ6IHJnYigyNTAsIDI0OSwgMjQ4KTsgLy9ib290c3RyYXA0XHJcbiRjb2xvci13aGl0ZTogI2ZmZjsgLy8gYm9vdHN0cmFwNFxyXG5cclxuJG1kYy10eXBvZ3JhcGh5LWZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBcIk5vdG8gU2Fuc1wiLCBcIkhlbHZldGljYSBOZXVlXCIsIEhlbHZldGljYSwgXCJOaW1idXMgU2FucyBMXCIsIEFyaWFsLFxyXG4gIFwiTGliZXJhdGlvbiBTYW5zXCIsIFwiUGluZ0ZhbmcgU0NcIiwgXCJIaXJhZ2lubyBTYW5zIEdCXCIsIFwiTm90byBTYW5zIENKSyBTQ1wiLCBcIlNvdXJjZSBIYW4gU2FucyBTQ1wiLCBcIlNvdXJjZSBIYW4gU2FucyBDTlwiLFxyXG4gIFNpbUhlaSwgXCJNaWNyb3NvZnQgWWFIZWlcIiwgXCJXZW5xdWFueWkgTWljcm8gSGVpXCIsIFwiV2VuUXVhbllpIFplbiBIZWlcIiwgXCJTVCBIZWl0aVwiLCBcIldlblF1YW5ZaSBaZW4gSGVpIFNoYXJwXCIsXHJcbiAgc2Fucy1zZXJpZjtcclxuXHJcbiRoaWdobGlnaHQtYmFja2dyb3VuZDogI2U4ZWFmNztcclxuYnV0dG9uIHtcclxuICBtYXJnaW46IDAuMjVlbTtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG59XHJcbmEge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG4iLCJidXR0b24ge1xuICBtYXJnaW46IDAuMjVlbTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmZsb2F0LWJveCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbn1cblxuLnRhZ3Jvd3MtY29udGFpbmVyIHtcbiAgbWF4LXdpZHRoOiA1NTBweDtcbn1cblxuLm1kYy1idXR0b24ge1xuICBwYWRkaW5nOiAwZW0gMC43NWVtO1xuICBtaW4td2lkdGg6IDBweDtcbiAgbWluLWhlaWdodDogMHB4O1xuICBoZWlnaHQ6IDMycHg7XG59XG5cbi5vcHRpb24tMCB7XG4gIGNvbG9yOiAjMWExZDFlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZjZThjO1xufVxuXG4ub3B0aW9uLTEge1xuICBjb2xvcjogIzFhMWQxZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2MzZTNlNTtcbn1cblxuLm9wdGlvbi0yIHtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTg5YmFkO1xufVxuXG4jYnRuQ2xlYXIge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2QwNjk0ZTtcbn0iLCJAaW1wb3J0IFwiLi4vc3R5bGVzL2N1c3RvbS5zY3NzXCI7XHJcblxyXG4uZmxvYXQtYm94IHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbn1cclxuLnRhZ3Jvd3MtY29udGFpbmVyIHtcclxuICBtYXgtd2lkdGg6IDU1MHB4O1xyXG59XHJcbi5tZGMtYnV0dG9uIHtcclxuICBwYWRkaW5nOiAwZW0gMC43NWVtO1xyXG4gIG1pbi13aWR0aDogMHB4O1xyXG4gIG1pbi1oZWlnaHQ6IDBweDtcclxuICBoZWlnaHQ6IDMycHg7XHJcbn1cclxuXHJcbi5vcHRpb24tMCB7XHJcbiAgY29sb3I6ICMxYTFkMWU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLTI7XHJcbn1cclxuLm9wdGlvbi0xIHtcclxuICBjb2xvcjogIzFhMWQxZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItMztcclxufVxyXG4ub3B0aW9uLTIge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItNDtcclxufVxyXG4jYnRuQ2xlYXIge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci0xO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/hr/hr.component.ts":
/*!************************************!*\
  !*** ./src/app/hr/hr.component.ts ***!
  \************************************/
/*! exports provided: HrComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HrComponent", function() { return HrComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _model_hrdata__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/hrdata */ "./src/app/model/hrdata.ts");
/* harmony import */ var _fetch_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../fetch.service */ "./src/app/fetch.service.ts");
/* harmony import */ var _blox_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @blox/material */ "./node_modules/@blox/material/dist/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let HrComponent = class HrComponent {
    constructor(fetch, snackbar, router, activatedRoute) {
        this.fetch = fetch;
        this.snackbar = snackbar;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.selectedTags = [];
        this.selectedStars = [];
        this.charSelected = '';
        this.option = 0;
        this.showTags = true;
        this.activatedRoute.queryParams.subscribe(params => {
            this.selectedTags = ('tags' in params) ? params.tags.split(' ') : [];
            this.showTags = !('hidetags' in params);
        });
        const selectedStars = this.fetch.getLocalStorage('hr-stars', [true, true, true, true, true, true, true]);
        for (let i = 1; i < 7; i++) {
            if (selectedStars[i]) {
                this.selectedStars.push(i);
            }
        }
    }
    onSelectTagChanged(selected) {
        this.selectedTags = selected;
        this.calculateCombs();
    }
    onSelectStarChanged(selected) {
        this.selectedStars = selected;
        this.calculateCombs();
    }
    ngOnInit() {
        this.hrdata = new _model_hrdata__WEBPACK_IMPORTED_MODULE_2__["HrData"]();
        this.option = this.fetch.getLocalStorage('hrcb-opt', 0);
        this.hrdata.tagrows = [
            {
                title: '资质', tags: ['新手', '资深干员', '高级资深干员'],
            },
            {
                title: '位置', tags: ['远程位', '近战位'],
            },
            {
                title: '种类', tags: ['先锋干员', '狙击干员', '医疗干员', '术师干员', '近卫干员', '重装干员', '辅助干员', '特种干员'],
            },
            {
                title: '词缀', tags: ['治疗', '支援', '输出', '群攻', '减速', '生存', '防护', '削弱', '位移', '控场', '爆发', '召唤', '快速复活', '费用回复', '支援机械'],
            }
        ];
        this.hrdata.combs = [];
        this.fetch.getJson('./assets/data/akhr.json').subscribe(data => {
            this.hrjson = data;
            this.chars = {};
            this.tags = {};
            for (const char of data) {
                if (char.hidden) {
                    continue;
                }
                char.tags.push(char.type + '干员');
                const name = char.name;
                for (const tag of char.tags) {
                    if (tag in this.tags) {
                        this.tags[tag].push({ name, img: char['name-en'], level: char.level, type: char.type });
                    }
                    else {
                        this.tags[tag] = [{ name, img: char['name-en'], level: char.level, type: char.type }];
                    }
                }
                this.chars[name] = { level: char.level, tags: char.tags };
                if (this.selectedTags.length !== 0) {
                }
            }
            this.calculateCombs();
        });
    }
    calculateCombs() {
        const len = this.selectedTags.length;
        const count = Math.pow(2, this.selectedTags.length);
        const combs = [];
        for (let i = 0; i < count; i++) {
            const ts = [];
            for (let j = 0, mask = 1; j < len; j++) {
                // tslint:disable-next-line: no-bitwise
                if ((i & mask) !== 0) {
                    ts.push(this.selectedTags[j]);
                }
                mask = mask * 2;
            }
            combs.push({ tags: ts, score: 0.0, possible: [], id: '' });
        }
        for (const comb of combs) {
            const tags = comb.tags;
            if (tags.length === 0 || tags.length > 3) {
                continue;
            }
            let chars = [...this.tags[tags[0]]];
            for (let j = 1; j < tags.length; j++) {
                const reducedChars = [];
                for (const char of chars) {
                    for (const tgch of this.tags[tags[j]]) {
                        if (char.name === tgch.name) {
                            reducedChars.push(char);
                            break;
                        }
                    }
                }
                chars = reducedChars;
            }
            if (chars.length === 0) {
                continue;
            }
            if (!tags.includes('高级资深干员')) {
                const reduce6 = [];
                for (const char of chars) {
                    if (char.level !== 6) {
                        reduce6.push(char);
                    }
                }
                chars = reduce6;
            }
            const filteredChars = [];
            for (const char of chars) {
                if (this.selectedStars.includes(char.level)) {
                    filteredChars.push(char);
                }
            }
            chars = filteredChars;
            if (chars.length === 0) {
                continue;
            }
            comb.possible = chars.sort((a, b) => a.level > b.level ? -1 : (a.level < b.level ? 1 : 0));
            let s = 0;
            for (const char of chars) {
                s += char.level;
            }
            s = s / chars.length;
            comb.score = s + 0.1 / tags.length + 0.9 / chars.length;
            comb.id = tags.join('') + chars.join('');
        }
        combs.sort((a, b) => {
            return a.score > b.score ? -1 : (a.score < b.score ? 1 :
                (a.tags.length > b.tags.length ? 1 : (a.tags.length < b.tags.length ? -1 : 0)));
        });
        this.hrdata.combs = combs.filter(c => c.possible.length > 0);
    }
    showCharTags(name) {
        if (this.hrdata.combsBk.length === 0) {
            this.snackbar.show({
                message: (name + ': ' + this.chars[name].tags.join(', ')),
                actionText: '关闭',
                multiline: true,
                actionOnBottom: true,
                timeout: 10000
            });
            this.hrdata.combsBk = [...this.hrdata.combs];
            const newCb = [];
            for (const c of this.hrdata.combs) {
                for (const ch of c.possible) {
                    if (ch.name === name) {
                        this.charSelected = name;
                        newCb.push(c);
                        continue;
                    }
                }
            }
            this.hrdata.combs = newCb;
        }
        else {
            this.hrdata.combs = [...this.hrdata.combsBk];
            this.hrdata.combsBk = [];
            this.charSelected = '';
        }
    }
    clearTags() {
        const currentUrl = this.router.url;
        const param = currentUrl.includes('hidenav') ? '?hidenav=' : '';
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
            if (currentUrl.indexOf('?') > 0) {
                this.router.navigateByUrl(currentUrl.substring(0, currentUrl.indexOf('?')) + param);
            }
            else {
                this.router.navigateByUrl(currentUrl);
            }
        });
    }
    toggleOption() {
        this.option = (this.option + 1) % 3;
        this.fetch.setLocalStorage('hrcb-opt', this.option);
    }
};
HrComponent.ctorParameters = () => [
    { type: _fetch_service__WEBPACK_IMPORTED_MODULE_3__["FetchService"] },
    { type: _blox_material__WEBPACK_IMPORTED_MODULE_4__["MdcSnackbarService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }
];
HrComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-hr',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./hr.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/hr/hr.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./hr.component.scss */ "./src/app/hr/hr.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_fetch_service__WEBPACK_IMPORTED_MODULE_3__["FetchService"],
        _blox_material__WEBPACK_IMPORTED_MODULE_4__["MdcSnackbarService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
], HrComponent);



/***/ }),

/***/ "./src/app/lvlup/lvlup.component.scss":
/*!********************************************!*\
  !*** ./src/app/lvlup/lvlup.component.scss ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("button {\n  margin: 0.25em;\n  white-space: nowrap;\n}\n\na {\n  text-decoration: none;\n}\n\n.mdc-button--dense {\n  color: #999999;\n  min-width: 20px;\n  margin: 0;\n  padding: 0;\n  color: var(--mdc-theme-on-surface);\n}\n\n.input-field {\n  width: 100%;\n  margin: 0.25em;\n}\n\ninput, select {\n  text-align: center;\n}\n\n[mdcSelect] [mdcSelectControl] {\n  color: #22bbff;\n}\n\n[mdcSelect] label {\n  color: #22bbff;\n}\n\n[mdcTextField] input {\n  color: #22bbff;\n}\n\n[mdcTextField] label {\n  color: #22bbff;\n}\n\n[mdcCard] {\n  min-width: 280px;\n  max-width: 100%;\n  width: 350px;\n  color: var(--mdc-theme-on-surface);\n  margin: 1em 0 0 0;\n}\n\n[mdcCard] .custom-card-group-heading {\n  font-size: 0.875em;\n  padding: 8px 16px;\n  text-align: center;\n}\n\n[mdcCard] th {\n  text-align: end;\n  width: 100px;\n}\n\n[mdcCard] td {\n  text-align: start;\n}\n\n[mdcCard] th, [mdcCard] td {\n  padding: 0.375em 1em;\n}\n\n.btnCalc {\n  color: #22bbff;\n  margin: 1em 0 0 0;\n  width: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbHZsdXAvQzpcXFVzZXJzXFxZdWVfcFxcRG9jdW1lbnRzXFxjb2RlXFxha3Rvb2xzL3NyY1xcYXBwXFxzdHlsZXNcXGN1c3RvbS5zY3NzIiwic3JjL2FwcC9sdmx1cC9sdmx1cC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbHZsdXAvQzpcXFVzZXJzXFxZdWVfcFxcRG9jdW1lbnRzXFxjb2RlXFxha3Rvb2xzL3NyY1xcYXBwXFxsdmx1cFxcbHZsdXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0JBO0VBQ0UsY0FBQTtFQUNBLG1CQUFBO0FDdkJGOztBRHlCQTtFQUNFLHFCQUFBO0FDdEJGOztBQ0xBO0VBQ0ksY0ZHVTtFRURWLGVBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGtDQUFBO0FET0o7O0FDTEE7RUFDSSxXQUFBO0VBQ0EsY0FBQTtBRFFKOztBQ0xBO0VBRUksa0JBQUE7QURPSjs7QUNGSTtFQUNJLGNGaEJRO0FDcUJoQjs7QUNGSTtFQUNJLGNGcEJRO0FDd0JoQjs7QUNFSTtFQUNJLGNGM0JRO0FDNEJoQjs7QUNDSTtFQUNJLGNGOUJRO0FDK0JoQjs7QUNHQTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxrQ0FBQTtFQWtCQSxpQkFBQTtBRGpCSjs7QUNDSTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBRENSOztBQ0VJO0VBQ0ksZUFBQTtFQUNBLFlBQUE7QURBUjs7QUNFSTtFQUNJLGlCQUFBO0FEQVI7O0FDRUk7RUFDSSxvQkFBQTtBREFSOztBQ0tBO0VBQ0ksY0Y1RFk7RUU2RFosaUJBQUE7RUFDQSxVQUFBO0FERkoiLCJmaWxlIjoic3JjL2FwcC9sdmx1cC9sdmx1cC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGh0dHBzOi8vY29sb3JodW50LmNvL3BhbGV0dGUvMzYxXHJcbiRjb2xvci0xOiAjZDA2OTRlO1xyXG4kY29sb3ItMjogI2Y2Y2U4YztcclxuJGNvbG9yLTM6ICNjM2UzZTU7XHJcbiRjb2xvci00OiAjNTg5YmFkO1xyXG5cclxuJGNvbG9yLW11dGVkOiByZ2IoMTUzLCAxNTMsIDE1Myk7OyAvLyDmlrnoiJ8t5paH5pys54GwXHJcbiRjb2xvci1wcmltYXJ5OiByZ2IoMzQsIDE4NywgMjU1KTsgLy8g5pa56IifLeiTnVxyXG4kY29sb3Itc3VjY2VzczogcmdiKDEyNywgMjI0LCAxNDkpOyAvLyBib290c3RyYXA0XHJcbiRjb2xvci1pbmZvOiByZ2IoMTM3LCAxMzcsIDEzNyk7IC8vIOaWueiIny3ngbBcclxuJGNvbG9yLXdhcm5pbmc6ICNmZTI7IC8vIOaWueiIny3pu4RcclxuJGNvbG9yLWRhbmdlcjogI2VjMmIwMDsgLy8g5rSq54KJ56S65bKBXHJcbiRjb2xvci1zZWNvbmRhcnk6IHJnYigxMzcsIDEzNywgMTM3KTsgLy8g5pa56IifLeeBsFxyXG4kY29sb3ItZGFyazogIzMxMzEzMTsgLy8g5pa56IifLeaMiemSrlxyXG4kY29sb3ItYmxhY2s6ICMwMDA7IC8vIOe6r+m7kVxyXG4kY29sb3ItbGlnaHQ6IHJnYigyNTAsIDI0OSwgMjQ4KTsgLy9ib290c3RyYXA0XHJcbiRjb2xvci13aGl0ZTogI2ZmZjsgLy8gYm9vdHN0cmFwNFxyXG5cclxuJG1kYy10eXBvZ3JhcGh5LWZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBcIk5vdG8gU2Fuc1wiLCBcIkhlbHZldGljYSBOZXVlXCIsIEhlbHZldGljYSwgXCJOaW1idXMgU2FucyBMXCIsIEFyaWFsLFxyXG4gIFwiTGliZXJhdGlvbiBTYW5zXCIsIFwiUGluZ0ZhbmcgU0NcIiwgXCJIaXJhZ2lubyBTYW5zIEdCXCIsIFwiTm90byBTYW5zIENKSyBTQ1wiLCBcIlNvdXJjZSBIYW4gU2FucyBTQ1wiLCBcIlNvdXJjZSBIYW4gU2FucyBDTlwiLFxyXG4gIFNpbUhlaSwgXCJNaWNyb3NvZnQgWWFIZWlcIiwgXCJXZW5xdWFueWkgTWljcm8gSGVpXCIsIFwiV2VuUXVhbllpIFplbiBIZWlcIiwgXCJTVCBIZWl0aVwiLCBcIldlblF1YW5ZaSBaZW4gSGVpIFNoYXJwXCIsXHJcbiAgc2Fucy1zZXJpZjtcclxuXHJcbiRoaWdobGlnaHQtYmFja2dyb3VuZDogI2U4ZWFmNztcclxuYnV0dG9uIHtcclxuICBtYXJnaW46IDAuMjVlbTtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG59XHJcbmEge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG4iLCJidXR0b24ge1xuICBtYXJnaW46IDAuMjVlbTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLm1kYy1idXR0b24tLWRlbnNlIHtcbiAgY29sb3I6ICM5OTk5OTk7XG4gIG1pbi13aWR0aDogMjBweDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBjb2xvcjogdmFyKC0tbWRjLXRoZW1lLW9uLXN1cmZhY2UpO1xufVxuXG4uaW5wdXQtZmllbGQge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwLjI1ZW07XG59XG5cbmlucHV0LCBzZWxlY3Qge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cblttZGNTZWxlY3RdIFttZGNTZWxlY3RDb250cm9sXSB7XG4gIGNvbG9yOiAjMjJiYmZmO1xufVxuW21kY1NlbGVjdF0gbGFiZWwge1xuICBjb2xvcjogIzIyYmJmZjtcbn1cblxuW21kY1RleHRGaWVsZF0gaW5wdXQge1xuICBjb2xvcjogIzIyYmJmZjtcbn1cblttZGNUZXh0RmllbGRdIGxhYmVsIHtcbiAgY29sb3I6ICMyMmJiZmY7XG59XG5cblttZGNDYXJkXSB7XG4gIG1pbi13aWR0aDogMjgwcHg7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgd2lkdGg6IDM1MHB4O1xuICBjb2xvcjogdmFyKC0tbWRjLXRoZW1lLW9uLXN1cmZhY2UpO1xuICBtYXJnaW46IDFlbSAwIDAgMDtcbn1cblttZGNDYXJkXSAuY3VzdG9tLWNhcmQtZ3JvdXAtaGVhZGluZyB7XG4gIGZvbnQtc2l6ZTogMC44NzVlbTtcbiAgcGFkZGluZzogOHB4IDE2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblttZGNDYXJkXSB0aCB7XG4gIHRleHQtYWxpZ246IGVuZDtcbiAgd2lkdGg6IDEwMHB4O1xufVxuW21kY0NhcmRdIHRkIHtcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XG59XG5bbWRjQ2FyZF0gdGgsIFttZGNDYXJkXSB0ZCB7XG4gIHBhZGRpbmc6IDAuMzc1ZW0gMWVtO1xufVxuXG4uYnRuQ2FsYyB7XG4gIGNvbG9yOiAjMjJiYmZmO1xuICBtYXJnaW46IDFlbSAwIDAgMDtcbiAgd2lkdGg6IDUwJTtcbn0iLCJAaW1wb3J0ICcuLi9zdHlsZXMvY3VzdG9tLnNjc3MnO1xyXG5cclxuLm1kYy1idXR0b24tLWRlbnNlIHtcclxuICAgIGNvbG9yOiAkY29sb3ItbXV0ZWQ7XHJcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItZGFyaztcclxuICAgIG1pbi13aWR0aDogMjBweDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBjb2xvcjogdmFyKC0tbWRjLXRoZW1lLW9uLXN1cmZhY2UpO1xyXG59XHJcbi5pbnB1dC1maWVsZHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAwLjI1ZW07XHJcbn1cclxuXHJcbmlucHV0LCBzZWxlY3Qge1xyXG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXByaW1hcnk7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcblxyXG5bbWRjU2VsZWN0XSB7XHJcbiAgICBbbWRjU2VsZWN0Q29udHJvbF0ge1xyXG4gICAgICAgIGNvbG9yOiAkY29sb3ItcHJpbWFyeTtcclxuICAgICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRjb2xvci1kYXJrLCAwLjUpO1xyXG4gICAgfVxyXG4gICAgbGFiZWwge1xyXG4gICAgICAgIGNvbG9yOiAkY29sb3ItcHJpbWFyeTtcclxuICAgICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItYmxhY2s7XHJcbiAgICB9XHJcbn1cclxuXHJcblttZGNUZXh0RmllbGRdIHtcclxuICAgIGlucHV0IHtcclxuICAgICAgICBjb2xvcjogJGNvbG9yLXByaW1hcnk7XHJcbiAgICB9XHJcbiAgICBsYWJlbCB7XHJcbiAgICAgICAgY29sb3I6ICRjb2xvci1wcmltYXJ5O1xyXG4gICAgfVxyXG59XHJcblxyXG5bbWRjQ2FyZF0ge1xyXG4gICAgbWluLXdpZHRoOiAyODBweDtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIHdpZHRoOiAzNTBweDtcclxuICAgIGNvbG9yOiB2YXIoLS1tZGMtdGhlbWUtb24tc3VyZmFjZSk7XHJcblxyXG4gICAgLmN1c3RvbS1jYXJkLWdyb3VwLWhlYWRpbmcge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC44NzVlbTtcclxuICAgICAgICBwYWRkaW5nOiA4cHggMTZweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgdGgge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGVuZDtcclxuICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICB9XHJcbiAgICB0ZCB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogc3RhcnQ7XHJcbiAgICB9XHJcbiAgICB0aCwgdGR7XHJcbiAgICAgICAgcGFkZGluZzogMC4zNzVlbSAxZW07XHJcbiAgICB9XHJcbiAgICBtYXJnaW46IDFlbSAwIDAgMDtcclxufVxyXG5cclxuLmJ0bkNhbGMge1xyXG4gICAgY29sb3I6ICRjb2xvci1wcmltYXJ5O1xyXG4gICAgbWFyZ2luOiAxZW0gMCAwIDA7XHJcbiAgICB3aWR0aDogNTAlO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/lvlup/lvlup.component.ts":
/*!******************************************!*\
  !*** ./src/app/lvlup/lvlup.component.ts ***!
  \******************************************/
/*! exports provided: LvlupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LvlupComponent", function() { return LvlupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _fetch_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../fetch.service */ "./src/app/fetch.service.ts");



let LvlupComponent = class LvlupComponent {
    constructor(fetchService) {
        this.fetchService = fetchService;
        // import math for binding
        this.math = Math;
        // Char
        this.star = 6;
        this.currentEvolve = 0;
        this.targetEvolve = 0;
        this.currentLvl = 1;
        this.targetLvl = 1;
        this.currentExp = 0;
        // Assets
        this.gold = 0;
        this.bookBasic = 0;
        this.bookPrimary = 0;
        this.bookMiddle = 0;
        this.bookAdvanced = 0;
        // Results
        this.lsCount = 0;
        this.ceCount = 0;
        this.lsAp = 0;
        this.ceAp = 0;
        this.expMinus = 0;
        this.goldMinus = 0;
        this.lvlupExp = 0;
        this.lvlupGold = 0;
        this.evolveGold = 0;
        // Maps:
        this.lsMap = '5';
        this.ceMap = '5';
        this.isExsm = false;
        this.isExsm = fetchService.getLocalStorage('s-exsm', false);
    }
    toMaxLvl(isCurrent) {
        if (isCurrent) {
            this.currentLvl = this.lvlJson.maxLevel[+this.star - 1][this.currentEvolve];
        }
        else {
            this.targetLvl = this.lvlJson.maxLevel[+this.star - 1][this.targetEvolve];
        }
    }
    onStarChange() {
        console.log(this.lvlJson.maxLevel);
        const star = Number(this.star);
        const maxEvolve = this.lvlJson.maxLevel[star - 1].length;
        if (this.currentEvolve >= maxEvolve) {
            this.currentEvolve = maxEvolve - 1;
        }
        if (this.targetEvolve >= maxEvolve) {
            this.targetEvolve = maxEvolve - 1;
        }
        if (this.currentLvl > this.lvlJson.maxLevel[star - 1][this.currentEvolve]) {
            this.currentLvl = this.lvlJson.maxLevel[star - 1][this.currentEvolve];
        }
        if (this.targetLvl > this.lvlJson.maxLevel[star - 1][this.targetEvolve]) {
            this.targetLvl = this.lvlJson.maxLevel[star - 1][this.targetEvolve];
        }
    }
    onEvolveChange(isTarget, isAdd) {
        const star = Number(this.star);
        if (isTarget) {
            if (isAdd) {
                this.targetEvolve += this.targetEvolve < this.lvlJson.maxLevel[star - 1].length - 1 ? 1 : 0;
            }
            else {
                this.targetEvolve -= this.targetEvolve > 0 ? 1 : 0;
            }
        }
        else {
            if (isAdd) {
                this.currentEvolve += this.currentEvolve < this.lvlJson.maxLevel[star - 1].length - 1 ? 1 : 0;
                if (this.targetEvolve < this.currentEvolve) {
                    this.targetEvolve = this.currentEvolve;
                }
            }
            else {
                this.currentEvolve -= this.currentEvolve > 0 ? 1 : 0;
            }
        }
    }
    calc() {
        // console.log(this);
        let cl = this.currentLvl;
        const ce = this.currentEvolve;
        const star = +this.star;
        const cex = this.currentExp;
        const tl = this.targetLvl;
        const te = this.targetEvolve;
        const higher = te > ce || (te === ce && tl > cl);
        const isHighest = this.maxLevel[star - 1][ce] === cl;
        let expSum = higher ? (isHighest ? 0 : this.charExpMap[ce][cl - 1] - cex) : 0;
        let costSum = higher ? (isHighest ? 0 : this.charUpCostMap[ce][cl - 1] * expSum / this.charExpMap[ce][cl - 1]) : 0;
        cl++;
        // console.log(expSum)
        // console.log(costSum)
        // lvlup
        for (let i = ce, j = cl; i <= te; i++) {
            while (i < te && j < this.maxLevel[star - 1][i]) {
                expSum += this.charExpMap[i][j - 1];
                costSum += this.charUpCostMap[i][j - 1];
                j++;
            }
            while (i === te && j < tl) {
                expSum += this.charExpMap[i][j - 1];
                costSum += this.charUpCostMap[i][j - 1];
                j++;
            }
            j = 1;
        }
        this.lvlupExp = expSum;
        this.lvlupGold = costSum;
        // evolve
        let ea = 0;
        console.log(this.evolGoldCost);
        console.log(star);
        for (let i = ce; i < te; i++) {
            ea += this.evolGoldCost[star - 1][i];
        }
        this.evolveGold = ea;
        // books
        const bb = this.bookBasic;
        const bp = this.bookPrimary;
        const bm = this.bookMiddle;
        const ba = this.bookAdvanced;
        const bs = bb * 200 + bp * 400 + bm * 1000 + ba * 2000;
        this.expMinus = bs;
        if (expSum <= bs) {
            this.lsCount = 0;
            this.lsAp = 0;
        }
        else {
            this.lsCount = Math.ceil((expSum - bs) / 7400);
            this.lsAp = this.lsCount * 30;
        }
        const gs = this.gold + this.lsCount * 360;
        this.goldMinus = gs;
        if (costSum + ea <= gs) {
            this.ceCount = 0;
            this.ceAp = 0;
        }
        else {
            this.ceCount = Math.ceil((costSum + ea - gs) / 7500);
            this.ceAp = this.ceCount * 30;
        }
        // console.log(this);
    }
    ngOnInit() {
        this.fetchService.getJson('./assets/data/aklevel.json').subscribe(data => {
            this.lvlJson = data;
            this.maxLevel = data.maxLevel;
            this.charExpMap = data.characterExpMap;
            this.charUpCostMap = data.characterUpgradeCostMap;
            this.evolGoldCost = data.evolveGoldCost;
        });
    }
};
LvlupComponent.ctorParameters = () => [
    { type: _fetch_service__WEBPACK_IMPORTED_MODULE_2__["FetchService"] }
];
LvlupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-lvlup',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./lvlup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/lvlup/lvlup.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./lvlup.component.scss */ "./src/app/lvlup/lvlup.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_fetch_service__WEBPACK_IMPORTED_MODULE_2__["FetchService"]])
], LvlupComponent);



/***/ }),

/***/ "./src/app/main/main.component.scss":
/*!******************************************!*\
  !*** ./src/app/main/main.component.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("button {\n  margin: 0.25em;\n  white-space: nowrap;\n}\n\na {\n  text-decoration: none;\n}\n\n.main-container {\n  max-width: 1200px;\n  margin: auto;\n  padding: 1em;\n  background: none;\n  color: var(--mdc-theme-text-primary-on-background);\n}\n\na {\n  color: var(--mdc-theme-on-surface);\n}\n\n.img-logos {\n  max-width: 100px;\n  max-height: 100px;\n  width: auto;\n  height: auto;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5 {\n  font-weight: 600;\n}\n\n.contributor a {\n  padding: 0.5em;\n  text-align: center;\n}\n\n.contributor img {\n  border-radius: 50%;\n  max-height: 64px;\n  max-width: 64px;\n  height: auto;\n  width: auto;\n}\n\n.joinus img {\n  max-height: 64px;\n  max-width: 64px;\n  height: auto;\n  width: auto;\n}\n\n.notice {\n  font-weight: bold;\n}\n\n.img-title {\n  width: 128px;\n  height: 128px;\n  margin-right: 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9DOlxcVXNlcnNcXFl1ZV9wXFxEb2N1bWVudHNcXGNvZGVcXGFrdG9vbHMvc3JjXFxhcHBcXHN0eWxlc1xcY3VzdG9tLnNjc3MiLCJzcmMvYXBwL21haW4vbWFpbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbWFpbi9DOlxcVXNlcnNcXFl1ZV9wXFxEb2N1bWVudHNcXGNvZGVcXGFrdG9vbHMvc3JjXFxhcHBcXG1haW5cXG1haW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0JBO0VBQ0UsY0FBQTtFQUNBLG1CQUFBO0FDdkJGOztBRHlCQTtFQUNFLHFCQUFBO0FDdEJGOztBQ0xBO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0RBQUE7QURRRjs7QUNMQTtFQUNFLGtDQUFBO0FEUUY7O0FDTEE7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QURRRjs7QUNKQTs7Ozs7RUFLRSxnQkFBQTtBRE9GOztBQ0pBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0FET0Y7O0FDSkE7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FET0Y7O0FDTEE7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBRFFGOztBQ05BO0VBQ0UsaUJBQUE7QURTRjs7QUNQQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7QURVRiIsImZpbGUiOiJzcmMvYXBwL21haW4vbWFpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGh0dHBzOi8vY29sb3JodW50LmNvL3BhbGV0dGUvMzYxXHJcbiRjb2xvci0xOiAjZDA2OTRlO1xyXG4kY29sb3ItMjogI2Y2Y2U4YztcclxuJGNvbG9yLTM6ICNjM2UzZTU7XHJcbiRjb2xvci00OiAjNTg5YmFkO1xyXG5cclxuJGNvbG9yLW11dGVkOiByZ2IoMTUzLCAxNTMsIDE1Myk7OyAvLyDmlrnoiJ8t5paH5pys54GwXHJcbiRjb2xvci1wcmltYXJ5OiByZ2IoMzQsIDE4NywgMjU1KTsgLy8g5pa56IifLeiTnVxyXG4kY29sb3Itc3VjY2VzczogcmdiKDEyNywgMjI0LCAxNDkpOyAvLyBib290c3RyYXA0XHJcbiRjb2xvci1pbmZvOiByZ2IoMTM3LCAxMzcsIDEzNyk7IC8vIOaWueiIny3ngbBcclxuJGNvbG9yLXdhcm5pbmc6ICNmZTI7IC8vIOaWueiIny3pu4RcclxuJGNvbG9yLWRhbmdlcjogI2VjMmIwMDsgLy8g5rSq54KJ56S65bKBXHJcbiRjb2xvci1zZWNvbmRhcnk6IHJnYigxMzcsIDEzNywgMTM3KTsgLy8g5pa56IifLeeBsFxyXG4kY29sb3ItZGFyazogIzMxMzEzMTsgLy8g5pa56IifLeaMiemSrlxyXG4kY29sb3ItYmxhY2s6ICMwMDA7IC8vIOe6r+m7kVxyXG4kY29sb3ItbGlnaHQ6IHJnYigyNTAsIDI0OSwgMjQ4KTsgLy9ib290c3RyYXA0XHJcbiRjb2xvci13aGl0ZTogI2ZmZjsgLy8gYm9vdHN0cmFwNFxyXG5cclxuJG1kYy10eXBvZ3JhcGh5LWZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBcIk5vdG8gU2Fuc1wiLCBcIkhlbHZldGljYSBOZXVlXCIsIEhlbHZldGljYSwgXCJOaW1idXMgU2FucyBMXCIsIEFyaWFsLFxyXG4gIFwiTGliZXJhdGlvbiBTYW5zXCIsIFwiUGluZ0ZhbmcgU0NcIiwgXCJIaXJhZ2lubyBTYW5zIEdCXCIsIFwiTm90byBTYW5zIENKSyBTQ1wiLCBcIlNvdXJjZSBIYW4gU2FucyBTQ1wiLCBcIlNvdXJjZSBIYW4gU2FucyBDTlwiLFxyXG4gIFNpbUhlaSwgXCJNaWNyb3NvZnQgWWFIZWlcIiwgXCJXZW5xdWFueWkgTWljcm8gSGVpXCIsIFwiV2VuUXVhbllpIFplbiBIZWlcIiwgXCJTVCBIZWl0aVwiLCBcIldlblF1YW5ZaSBaZW4gSGVpIFNoYXJwXCIsXHJcbiAgc2Fucy1zZXJpZjtcclxuXHJcbiRoaWdobGlnaHQtYmFja2dyb3VuZDogI2U4ZWFmNztcclxuYnV0dG9uIHtcclxuICBtYXJnaW46IDAuMjVlbTtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG59XHJcbmEge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG4iLCJidXR0b24ge1xuICBtYXJnaW46IDAuMjVlbTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLm1haW4tY29udGFpbmVyIHtcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgcGFkZGluZzogMWVtO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBjb2xvcjogdmFyKC0tbWRjLXRoZW1lLXRleHQtcHJpbWFyeS1vbi1iYWNrZ3JvdW5kKTtcbn1cblxuYSB7XG4gIGNvbG9yOiB2YXIoLS1tZGMtdGhlbWUtb24tc3VyZmFjZSk7XG59XG5cbi5pbWctbG9nb3Mge1xuICBtYXgtd2lkdGg6IDEwMHB4O1xuICBtYXgtaGVpZ2h0OiAxMDBweDtcbiAgd2lkdGg6IGF1dG87XG4gIGhlaWdodDogYXV0bztcbn1cblxuaDEsXG5oMixcbmgzLFxuaDQsXG5oNSB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5jb250cmlidXRvciBhIHtcbiAgcGFkZGluZzogMC41ZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNvbnRyaWJ1dG9yIGltZyB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgbWF4LWhlaWdodDogNjRweDtcbiAgbWF4LXdpZHRoOiA2NHB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIHdpZHRoOiBhdXRvO1xufVxuXG4uam9pbnVzIGltZyB7XG4gIG1heC1oZWlnaHQ6IDY0cHg7XG4gIG1heC13aWR0aDogNjRweDtcbiAgaGVpZ2h0OiBhdXRvO1xuICB3aWR0aDogYXV0bztcbn1cblxuLm5vdGljZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uaW1nLXRpdGxlIHtcbiAgd2lkdGg6IDEyOHB4O1xuICBoZWlnaHQ6IDEyOHB4O1xuICBtYXJnaW4tcmlnaHQ6IDFlbTtcbn0iLCJAaW1wb3J0IFwiLi4vc3R5bGVzL2N1c3RvbS5zY3NzXCI7XHJcblxyXG4ubWFpbi1jb250YWluZXIge1xyXG4gIG1heC13aWR0aDogMTIwMHB4O1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBwYWRkaW5nOiAxZW07XHJcbiAgYmFja2dyb3VuZDogbm9uZTtcclxuICBjb2xvcjogdmFyKC0tbWRjLXRoZW1lLXRleHQtcHJpbWFyeS1vbi1iYWNrZ3JvdW5kKTtcclxufVxyXG5cclxuYSB7XHJcbiAgY29sb3I6IHZhcigtLW1kYy10aGVtZS1vbi1zdXJmYWNlKTtcclxufVxyXG5cclxuLmltZy1sb2dvcyB7XHJcbiAgbWF4LXdpZHRoOiAxMDBweDtcclxuICBtYXgtaGVpZ2h0OiAxMDBweDtcclxuICB3aWR0aDogYXV0bztcclxuICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcblxyXG5oMSxcclxuaDIsXHJcbmgzLFxyXG5oNCxcclxuaDUge1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbi5jb250cmlidXRvciBhIHtcclxuICBwYWRkaW5nOiAwLjVlbTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jb250cmlidXRvciBpbWcge1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBtYXgtaGVpZ2h0OiA2NHB4O1xyXG4gIG1heC13aWR0aDogNjRweDtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgd2lkdGg6IGF1dG87XHJcbn1cclxuLmpvaW51cyBpbWcge1xyXG4gIG1heC1oZWlnaHQ6IDY0cHg7XHJcbiAgbWF4LXdpZHRoOiA2NHB4O1xyXG4gIGhlaWdodDogYXV0bztcclxuICB3aWR0aDogYXV0bztcclxufVxyXG4ubm90aWNle1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbi5pbWctdGl0bGV7XHJcbiAgd2lkdGg6IDEyOHB4O1xyXG4gIGhlaWdodDogMTI4cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxZW07XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/main/main.component.ts":
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MainComponent = class MainComponent {
    constructor() {
        this.cn = window.location.hostname.includes('cn');
    }
    ngOnInit() {
    }
};
MainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-main',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./main.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/main.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./main.component.scss */ "./src/app/main/main.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], MainComponent);



/***/ }),

/***/ "./src/app/material-card/material-card.component.scss":
/*!************************************************************!*\
  !*** ./src/app/material-card/material-card.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("button {\n  margin: 0.25em;\n  white-space: nowrap;\n}\n\na {\n  text-decoration: none;\n}\n\n.img-icon-box {\n  height: 48px;\n  width: 100%;\n  text-align: center;\n  -webkit-box-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: flex;\n  margin: 0.25em;\n}\n\n.img-icon {\n  max-width: 100%;\n  max-height: 100%;\n  width: auto;\n  height: auto;\n  float: left;\n}\n\n.input-field {\n  width: 100%;\n  margin: 0.25em 0;\n}\n\ninput,\nselect {\n  text-align: center;\n}\n\n.mdc-button--dense {\n  color: var(--mdc-theme-secondary);\n  min-width: 20px;\n  width: 20px;\n  margin: 0;\n  padding: 0;\n}\n\n.mdc-text-field--upgraded:not(.mdc-text-field--fullwidth):not(.mdc-text-field--box) {\n  margin: 0;\n}\n\n[mdcCard] {\n  width: 100%;\n  height: 130px;\n  min-width: 140px;\n  max-height: 170px;\n  padding: 0.25em;\n  margin: 0.25em 0.125em;\n  border: 0.125em solid rgba(0, 0, 0, 0.125);\n  border-radius: 2em 0.5em 2em 0.5em;\n}\n\n[mdcCard] .card-title {\n  color: var(--mdc-theme-on-surface);\n  text-align: start;\n  font-size: 0.875em;\n  font-weight: 700;\n}\n\n[mdcCard] .material-source {\n  color: var(--mdc-theme-secondary);\n  font-size: 0.75em;\n  text-align: end;\n}\n\n[mdcCard] .material-detail {\n  color: var(--mdc-theme-secondary);\n  padding: 0;\n}\n\n.mdc-card.m-lvl-5 {\n  border-color: #d0694e;\n}\n\n.mdc-card.m-lvl-4 {\n  border-color: #f9ce8c;\n}\n\n.mdc-card.m-lvl-3 {\n  border-color: #589bad;\n}\n\n.mdc-card.m-lvl-2 {\n  border-color: #7ebc59;\n}\n\n.mdc-card.m-lvl-1 {\n  border-color: #c3e3e5;\n}\n\n.mdc-card.op-card {\n  opacity: 0.8;\n}\n\n.need-button {\n  font-size: 1.25em;\n  margin: 0;\n  text-align: end;\n  -webkit-box-align: end;\n          align-items: flex-end;\n  color: #d0694e;\n  font-weight: bold;\n  min-width: 0px;\n}\n\n.need-button::before {\n  position: inherit;\n}\n\n.btnMerge {\n  width: 32px;\n  height: 32px;\n}\n\n.btnMerge.mdc-button--raised {\n  background-color: var(--mdc-theme-primary);\n  color: var(--mdc-theme-on-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWF0ZXJpYWwtY2FyZC9DOlxcVXNlcnNcXFl1ZV9wXFxEb2N1bWVudHNcXGNvZGVcXGFrdG9vbHMvc3JjXFxhcHBcXHN0eWxlc1xcY3VzdG9tLnNjc3MiLCJzcmMvYXBwL21hdGVyaWFsLWNhcmQvbWF0ZXJpYWwtY2FyZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbWF0ZXJpYWwtY2FyZC9DOlxcVXNlcnNcXFl1ZV9wXFxEb2N1bWVudHNcXGNvZGVcXGFrdG9vbHMvc3JjXFxhcHBcXG1hdGVyaWFsLWNhcmRcXG1hdGVyaWFsLWNhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0JBO0VBQ0UsY0FBQTtFQUNBLG1CQUFBO0FDdkJGOztBRHlCQTtFQUNFLHFCQUFBO0FDdEJGOztBQ0hBO0VBQ0UsWUFIUztFQUlULFdBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxjQUFBO0FETUY7O0FDSkE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QURPRjs7QUNKQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtBRE9GOztBQ0pBOztFQUdFLGtCQUFBO0FETUY7O0FDSEE7RUFDRSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QURNRjs7QUNKQTtFQUNFLFNBQUE7QURPRjs7QUNKQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLDBDQUFBO0VBQ0Esa0NBQUE7QURPRjs7QUNMRTtFQUNFLGtDQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FET0o7O0FDSkU7RUFDRSxpQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBRE1KOztBQ0hFO0VBQ0UsaUNBQUE7RUFDQSxVQUFBO0FES0o7O0FDREE7RUFDRSxxQkFBQTtBRElGOztBQ0ZBO0VBQ0UscUJBQUE7QURLRjs7QUNIQTtFQUNFLHFCQUFBO0FETUY7O0FDSkE7RUFDRSxxQkFBQTtBRE9GOztBQ0xBO0VBQ0UscUJBQUE7QURRRjs7QUNOQTtFQUNFLFlBQUE7QURTRjs7QUNOQTtFQUNFLGlCQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtVQUFBLHFCQUFBO0VBQ0EsY0Y5RlE7RUUrRlIsaUJBQUE7RUFDQSxjQUFBO0FEU0Y7O0FDUEE7RUFDRSxpQkFBQTtBRFVGOztBQ1BBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QURVRjs7QUNSQTtFQUNFLDBDQUFBO0VBQ0Esa0NBQUE7QURXRiIsImZpbGUiOiJzcmMvYXBwL21hdGVyaWFsLWNhcmQvbWF0ZXJpYWwtY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGh0dHBzOi8vY29sb3JodW50LmNvL3BhbGV0dGUvMzYxXHJcbiRjb2xvci0xOiAjZDA2OTRlO1xyXG4kY29sb3ItMjogI2Y2Y2U4YztcclxuJGNvbG9yLTM6ICNjM2UzZTU7XHJcbiRjb2xvci00OiAjNTg5YmFkO1xyXG5cclxuJGNvbG9yLW11dGVkOiByZ2IoMTUzLCAxNTMsIDE1Myk7OyAvLyDmlrnoiJ8t5paH5pys54GwXHJcbiRjb2xvci1wcmltYXJ5OiByZ2IoMzQsIDE4NywgMjU1KTsgLy8g5pa56IifLeiTnVxyXG4kY29sb3Itc3VjY2VzczogcmdiKDEyNywgMjI0LCAxNDkpOyAvLyBib290c3RyYXA0XHJcbiRjb2xvci1pbmZvOiByZ2IoMTM3LCAxMzcsIDEzNyk7IC8vIOaWueiIny3ngbBcclxuJGNvbG9yLXdhcm5pbmc6ICNmZTI7IC8vIOaWueiIny3pu4RcclxuJGNvbG9yLWRhbmdlcjogI2VjMmIwMDsgLy8g5rSq54KJ56S65bKBXHJcbiRjb2xvci1zZWNvbmRhcnk6IHJnYigxMzcsIDEzNywgMTM3KTsgLy8g5pa56IifLeeBsFxyXG4kY29sb3ItZGFyazogIzMxMzEzMTsgLy8g5pa56IifLeaMiemSrlxyXG4kY29sb3ItYmxhY2s6ICMwMDA7IC8vIOe6r+m7kVxyXG4kY29sb3ItbGlnaHQ6IHJnYigyNTAsIDI0OSwgMjQ4KTsgLy9ib290c3RyYXA0XHJcbiRjb2xvci13aGl0ZTogI2ZmZjsgLy8gYm9vdHN0cmFwNFxyXG5cclxuJG1kYy10eXBvZ3JhcGh5LWZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBcIk5vdG8gU2Fuc1wiLCBcIkhlbHZldGljYSBOZXVlXCIsIEhlbHZldGljYSwgXCJOaW1idXMgU2FucyBMXCIsIEFyaWFsLFxyXG4gIFwiTGliZXJhdGlvbiBTYW5zXCIsIFwiUGluZ0ZhbmcgU0NcIiwgXCJIaXJhZ2lubyBTYW5zIEdCXCIsIFwiTm90byBTYW5zIENKSyBTQ1wiLCBcIlNvdXJjZSBIYW4gU2FucyBTQ1wiLCBcIlNvdXJjZSBIYW4gU2FucyBDTlwiLFxyXG4gIFNpbUhlaSwgXCJNaWNyb3NvZnQgWWFIZWlcIiwgXCJXZW5xdWFueWkgTWljcm8gSGVpXCIsIFwiV2VuUXVhbllpIFplbiBIZWlcIiwgXCJTVCBIZWl0aVwiLCBcIldlblF1YW5ZaSBaZW4gSGVpIFNoYXJwXCIsXHJcbiAgc2Fucy1zZXJpZjtcclxuXHJcbiRoaWdobGlnaHQtYmFja2dyb3VuZDogI2U4ZWFmNztcclxuYnV0dG9uIHtcclxuICBtYXJnaW46IDAuMjVlbTtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG59XHJcbmEge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG4iLCJidXR0b24ge1xuICBtYXJnaW46IDAuMjVlbTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmltZy1pY29uLWJveCB7XG4gIGhlaWdodDogNDhweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luOiAwLjI1ZW07XG59XG5cbi5pbWctaWNvbiB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWF4LWhlaWdodDogMTAwJTtcbiAgd2lkdGg6IGF1dG87XG4gIGhlaWdodDogYXV0bztcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5pbnB1dC1maWVsZCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDAuMjVlbSAwO1xufVxuXG5pbnB1dCxcbnNlbGVjdCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLm1kYy1idXR0b24tLWRlbnNlIHtcbiAgY29sb3I6IHZhcigtLW1kYy10aGVtZS1zZWNvbmRhcnkpO1xuICBtaW4td2lkdGg6IDIwcHg7XG4gIHdpZHRoOiAyMHB4O1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5tZGMtdGV4dC1maWVsZC0tdXBncmFkZWQ6bm90KC5tZGMtdGV4dC1maWVsZC0tZnVsbHdpZHRoKTpub3QoLm1kYy10ZXh0LWZpZWxkLS1ib3gpIHtcbiAgbWFyZ2luOiAwO1xufVxuXG5bbWRjQ2FyZF0ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMzBweDtcbiAgbWluLXdpZHRoOiAxNDBweDtcbiAgbWF4LWhlaWdodDogMTcwcHg7XG4gIHBhZGRpbmc6IDAuMjVlbTtcbiAgbWFyZ2luOiAwLjI1ZW0gMC4xMjVlbTtcbiAgYm9yZGVyOiAwLjEyNWVtIHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xMjUpO1xuICBib3JkZXItcmFkaXVzOiAyZW0gMC41ZW0gMmVtIDAuNWVtO1xufVxuW21kY0NhcmRdIC5jYXJkLXRpdGxlIHtcbiAgY29sb3I6IHZhcigtLW1kYy10aGVtZS1vbi1zdXJmYWNlKTtcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XG4gIGZvbnQtc2l6ZTogMC44NzVlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblttZGNDYXJkXSAubWF0ZXJpYWwtc291cmNlIHtcbiAgY29sb3I6IHZhcigtLW1kYy10aGVtZS1zZWNvbmRhcnkpO1xuICBmb250LXNpemU6IDAuNzVlbTtcbiAgdGV4dC1hbGlnbjogZW5kO1xufVxuW21kY0NhcmRdIC5tYXRlcmlhbC1kZXRhaWwge1xuICBjb2xvcjogdmFyKC0tbWRjLXRoZW1lLXNlY29uZGFyeSk7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5tZGMtY2FyZC5tLWx2bC01IHtcbiAgYm9yZGVyLWNvbG9yOiAjZDA2OTRlO1xufVxuXG4ubWRjLWNhcmQubS1sdmwtNCB7XG4gIGJvcmRlci1jb2xvcjogI2Y5Y2U4Yztcbn1cblxuLm1kYy1jYXJkLm0tbHZsLTMge1xuICBib3JkZXItY29sb3I6ICM1ODliYWQ7XG59XG5cbi5tZGMtY2FyZC5tLWx2bC0yIHtcbiAgYm9yZGVyLWNvbG9yOiAjN2ViYzU5O1xufVxuXG4ubWRjLWNhcmQubS1sdmwtMSB7XG4gIGJvcmRlci1jb2xvcjogI2MzZTNlNTtcbn1cblxuLm1kYy1jYXJkLm9wLWNhcmQge1xuICBvcGFjaXR5OiAwLjg7XG59XG5cbi5uZWVkLWJ1dHRvbiB7XG4gIGZvbnQtc2l6ZTogMS4yNWVtO1xuICBtYXJnaW46IDA7XG4gIHRleHQtYWxpZ246IGVuZDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICBjb2xvcjogI2QwNjk0ZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1pbi13aWR0aDogMHB4O1xufVxuXG4ubmVlZC1idXR0b246OmJlZm9yZSB7XG4gIHBvc2l0aW9uOiBpbmhlcml0O1xufVxuXG4uYnRuTWVyZ2Uge1xuICB3aWR0aDogMzJweDtcbiAgaGVpZ2h0OiAzMnB4O1xufVxuXG4uYnRuTWVyZ2UubWRjLWJ1dHRvbi0tcmFpc2VkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWRjLXRoZW1lLXByaW1hcnkpO1xuICBjb2xvcjogdmFyKC0tbWRjLXRoZW1lLW9uLXByaW1hcnkpO1xufSIsIkBpbXBvcnQgXCIuLi9zdHlsZXMvY3VzdG9tLnNjc3NcIjtcclxuXHJcbiRpbWctc2l6ZTogNDhweDtcclxuXHJcbi5pbWctaWNvbi1ib3gge1xyXG4gIGhlaWdodDogJGltZy1zaXplO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgbWFyZ2luOiAwLjI1ZW07XHJcbn1cclxuLmltZy1pY29uIHtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgbWF4LWhlaWdodDogMTAwJTtcclxuICB3aWR0aDogYXV0bztcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcbi5pbnB1dC1maWVsZCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luOiAwLjI1ZW0gMDtcclxufVxyXG5cclxuaW5wdXQsXHJcbnNlbGVjdCB7XHJcbiAgLy8gY29sb3I6ICRjb2xvci1wcmltYXJ5O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLm1kYy1idXR0b24tLWRlbnNlIHtcclxuICBjb2xvcjogdmFyKC0tbWRjLXRoZW1lLXNlY29uZGFyeSk7XHJcbiAgbWluLXdpZHRoOiAyMHB4O1xyXG4gIHdpZHRoOiAyMHB4O1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcbi5tZGMtdGV4dC1maWVsZC0tdXBncmFkZWQ6bm90KC5tZGMtdGV4dC1maWVsZC0tZnVsbHdpZHRoKTpub3QoLm1kYy10ZXh0LWZpZWxkLS1ib3gpIHtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcblttZGNDYXJkXSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMzBweDtcclxuICBtaW4td2lkdGg6IDE0MHB4O1xyXG4gIG1heC1oZWlnaHQ6IDE3MHB4O1xyXG4gIHBhZGRpbmc6IDAuMjVlbTtcclxuICBtYXJnaW46IDAuMjVlbSAwLjEyNWVtO1xyXG4gIGJvcmRlcjogMC4xMjVlbSBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTI1KTtcclxuICBib3JkZXItcmFkaXVzOiAyZW0gMC41ZW0gMmVtIDAuNWVtO1xyXG5cclxuICAuY2FyZC10aXRsZSB7XHJcbiAgICBjb2xvcjogdmFyKC0tbWRjLXRoZW1lLW9uLXN1cmZhY2UpO1xyXG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XHJcbiAgICBmb250LXNpemU6IDAuODc1ZW07XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gIH1cclxuXHJcbiAgLm1hdGVyaWFsLXNvdXJjZSB7XHJcbiAgICBjb2xvcjogdmFyKC0tbWRjLXRoZW1lLXNlY29uZGFyeSk7XHJcbiAgICBmb250LXNpemU6IDAuNzVlbTtcclxuICAgIHRleHQtYWxpZ246IGVuZDtcclxuICB9XHJcbiAgXHJcbiAgLm1hdGVyaWFsLWRldGFpbCB7XHJcbiAgICBjb2xvcjogdmFyKC0tbWRjLXRoZW1lLXNlY29uZGFyeSk7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gIH1cclxufVxyXG5cclxuLm1kYy1jYXJkLm0tbHZsLTUge1xyXG4gIGJvcmRlci1jb2xvcjogI2QwNjk0ZTtcclxufVxyXG4ubWRjLWNhcmQubS1sdmwtNCB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjZjljZThjO1xyXG59XHJcbi5tZGMtY2FyZC5tLWx2bC0zIHtcclxuICBib3JkZXItY29sb3I6ICM1ODliYWQ7XHJcbn1cclxuLm1kYy1jYXJkLm0tbHZsLTIge1xyXG4gIGJvcmRlci1jb2xvcjogIzdlYmM1OTtcclxufVxyXG4ubWRjLWNhcmQubS1sdmwtMSB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjYzNlM2U1O1xyXG59XHJcbi5tZGMtY2FyZC5vcC1jYXJkIHtcclxuICBvcGFjaXR5OiAwLjg7XHJcbn1cclxuXHJcbi5uZWVkLWJ1dHRvbiB7XHJcbiAgZm9udC1zaXplOiAxLjI1ZW07XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHRleHQtYWxpZ246IGVuZDtcclxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgY29sb3I6ICRjb2xvci0xO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIG1pbi13aWR0aDogMHB4O1xyXG59XHJcbi5uZWVkLWJ1dHRvbjo6YmVmb3JlIHtcclxuICBwb3NpdGlvbjogaW5oZXJpdDtcclxufVxyXG5cclxuLmJ0bk1lcmdle1xyXG4gIHdpZHRoOjMycHg7XHJcbiAgaGVpZ2h0OjMycHg7XHJcbn1cclxuLmJ0bk1lcmdlLm1kYy1idXR0b24tLXJhaXNlZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWRjLXRoZW1lLXByaW1hcnkpO1xyXG4gIGNvbG9yOiB2YXIoLS1tZGMtdGhlbWUtb24tcHJpbWFyeSk7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/material-card/material-card.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/material-card/material-card.component.ts ***!
  \**********************************************************/
/*! exports provided: MaterialCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialCardComponent", function() { return MaterialCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _model_materialitemdata__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/materialitemdata */ "./src/app/model/materialitemdata.ts");
/* harmony import */ var _model_materialinfo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/materialinfo */ "./src/app/model/materialinfo.ts");




let MaterialCardComponent = class MaterialCardComponent {
    constructor() {
        this.dataChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.reportMerge = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    onInputChange() {
        this.dataChange.emit(this.itemdata);
    }
    doMerge() {
        this.reportMerge.emit(this.item.name);
    }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _model_materialinfo__WEBPACK_IMPORTED_MODULE_3__["MaterialInfo"])
], MaterialCardComponent.prototype, "item", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _model_materialitemdata__WEBPACK_IMPORTED_MODULE_2__["MaterialItemData"])
], MaterialCardComponent.prototype, "itemdata", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], MaterialCardComponent.prototype, "dataChange", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], MaterialCardComponent.prototype, "reportMerge", void 0);
MaterialCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-material-card',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./material-card.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/material-card/material-card.component.html")).default,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./material-card.component.scss */ "./src/app/material-card/material-card.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], MaterialCardComponent);



/***/ }),

/***/ "./src/app/material/material.component.scss":
/*!**************************************************!*\
  !*** ./src/app/material/material.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("button {\n  margin: 0.25em;\n  white-space: nowrap;\n}\n\na {\n  text-decoration: none;\n}\n\n[mdcDialog] {\n  color: var(--mdc-theme-text-primary-on-background);\n}\n\n[mdcDialog] .mdc-dialog__body,\n[mdcDialog] a {\n  color: var(--mdc-theme-text-secondary-on-background);\n}\n\n[mdcDialog] [mdcButton]:hover {\n  color: var(--mdc-theme-on-primary);\n  background-color: var(--mdc-theme-primary);\n}\n\n[mdcDialog] [mdcDialogCancel] {\n  color: var(--mdc-theme-on-surface);\n}\n\n.options-box {\n  padding: 0.5em 1em;\n}\n\n.padding-025 {\n  padding: 0.25em;\n}\n\nh4 {\n  margin: 0.25em 0;\n}\n\nsection {\n  max-height: 60vh;\n  height: 60vh;\n}\n\n.mdc-list-item {\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  padding: 0.25em 0;\n}\n\n#btnReset,\n#btnResetNeed {\n  background-color: #d0694e;\n}\n\n.sepatator {\n  height: 0.5em;\n  width: 10em;\n}\n\n[mdcTextField] textarea {\n  color: #999999;\n  background-color: rgba(49, 49, 49, 0.1);\n  resize: none;\n  border-color: #22bbff;\n}\n\n.mdc-text-field__input {\n  padding: 0.25em 0.75em;\n  font-size: small;\n}\n\n.dialog-data {\n  max-width: 600px;\n  max-height: 600px;\n}\n\n.hint {\n  line-height: 0.5em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWF0ZXJpYWwvQzpcXFVzZXJzXFxZdWVfcFxcRG9jdW1lbnRzXFxjb2RlXFxha3Rvb2xzL3NyY1xcYXBwXFxzdHlsZXNcXGN1c3RvbS5zY3NzIiwic3JjL2FwcC9tYXRlcmlhbC9tYXRlcmlhbC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbWF0ZXJpYWwvQzpcXFVzZXJzXFxZdWVfcFxcRG9jdW1lbnRzXFxjb2RlXFxha3Rvb2xzL3NyY1xcYXBwXFxtYXRlcmlhbFxcbWF0ZXJpYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0JBO0VBQ0UsY0FBQTtFQUNBLG1CQUFBO0FDdkJGOztBRHlCQTtFQUNFLHFCQUFBO0FDdEJGOztBQ05BO0VBQ0Usa0RBQUE7QURTRjs7QUNQRTs7RUFFRSxvREFBQTtBRFNKOztBQ0xJO0VBQ0Usa0NBQUE7RUFDQSwwQ0FBQTtBRE9OOztBQ0pFO0VBQ0Usa0NBQUE7QURNSjs7QUNIQTtFQUNFLGtCQUFBO0FETUY7O0FDSkE7RUFDRSxlQUFBO0FET0Y7O0FDSkE7RUFDRSxnQkFBQTtBRE9GOztBQ0xBO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0FEUUY7O0FDTEE7RUFDRSwyQkFBQTtFQUFBLHdCQUFBO0VBQUEsbUJBQUE7RUFDQSxpQkFBQTtBRFFGOztBQ05BOztFQUVFLHlCRnZDUTtBQ2dEVjs7QUNQQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0FEVUY7O0FDTkU7RUFDRSxjRjNDVTtFRTRDVix1Q0FBQTtFQUNBLFlBQUE7RUFDQSxxQkY3Q1k7QUNzRGhCOztBQ0xBO0VBQ0Usc0JBQUE7RUFDQSxnQkFBQTtBRFFGOztBQ0xBO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtBRFFGOztBQ05BO0VBQ0Usa0JBQUE7QURTRiIsImZpbGUiOiJzcmMvYXBwL21hdGVyaWFsL21hdGVyaWFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaHR0cHM6Ly9jb2xvcmh1bnQuY28vcGFsZXR0ZS8zNjFcclxuJGNvbG9yLTE6ICNkMDY5NGU7XHJcbiRjb2xvci0yOiAjZjZjZThjO1xyXG4kY29sb3ItMzogI2MzZTNlNTtcclxuJGNvbG9yLTQ6ICM1ODliYWQ7XHJcblxyXG4kY29sb3ItbXV0ZWQ6IHJnYigxNTMsIDE1MywgMTUzKTs7IC8vIOaWueiIny3mlofmnKzngbBcclxuJGNvbG9yLXByaW1hcnk6IHJnYigzNCwgMTg3LCAyNTUpOyAvLyDmlrnoiJ8t6JOdXHJcbiRjb2xvci1zdWNjZXNzOiByZ2IoMTI3LCAyMjQsIDE0OSk7IC8vIGJvb3RzdHJhcDRcclxuJGNvbG9yLWluZm86IHJnYigxMzcsIDEzNywgMTM3KTsgLy8g5pa56IifLeeBsFxyXG4kY29sb3Itd2FybmluZzogI2ZlMjsgLy8g5pa56IifLem7hFxyXG4kY29sb3ItZGFuZ2VyOiAjZWMyYjAwOyAvLyDmtKrngonnpLrlsoFcclxuJGNvbG9yLXNlY29uZGFyeTogcmdiKDEzNywgMTM3LCAxMzcpOyAvLyDmlrnoiJ8t54GwXHJcbiRjb2xvci1kYXJrOiAjMzEzMTMxOyAvLyDmlrnoiJ8t5oyJ6ZKuXHJcbiRjb2xvci1ibGFjazogIzAwMDsgLy8g57qv6buRXHJcbiRjb2xvci1saWdodDogcmdiKDI1MCwgMjQ5LCAyNDgpOyAvL2Jvb3RzdHJhcDRcclxuJGNvbG9yLXdoaXRlOiAjZmZmOyAvLyBib290c3RyYXA0XHJcblxyXG4kbWRjLXR5cG9ncmFwaHktZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIFwiTm90byBTYW5zXCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgSGVsdmV0aWNhLCBcIk5pbWJ1cyBTYW5zIExcIiwgQXJpYWwsXHJcbiAgXCJMaWJlcmF0aW9uIFNhbnNcIiwgXCJQaW5nRmFuZyBTQ1wiLCBcIkhpcmFnaW5vIFNhbnMgR0JcIiwgXCJOb3RvIFNhbnMgQ0pLIFNDXCIsIFwiU291cmNlIEhhbiBTYW5zIFNDXCIsIFwiU291cmNlIEhhbiBTYW5zIENOXCIsXHJcbiAgU2ltSGVpLCBcIk1pY3Jvc29mdCBZYUhlaVwiLCBcIldlbnF1YW55aSBNaWNybyBIZWlcIiwgXCJXZW5RdWFuWWkgWmVuIEhlaVwiLCBcIlNUIEhlaXRpXCIsIFwiV2VuUXVhbllpIFplbiBIZWkgU2hhcnBcIixcclxuICBzYW5zLXNlcmlmO1xyXG5cclxuJGhpZ2hsaWdodC1iYWNrZ3JvdW5kOiAjZThlYWY3O1xyXG5idXR0b24ge1xyXG4gIG1hcmdpbjogMC4yNWVtO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbn1cclxuYSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcbiIsImJ1dHRvbiB7XG4gIG1hcmdpbjogMC4yNWVtO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5bbWRjRGlhbG9nXSB7XG4gIGNvbG9yOiB2YXIoLS1tZGMtdGhlbWUtdGV4dC1wcmltYXJ5LW9uLWJhY2tncm91bmQpO1xufVxuW21kY0RpYWxvZ10gLm1kYy1kaWFsb2dfX2JvZHksXG5bbWRjRGlhbG9nXSBhIHtcbiAgY29sb3I6IHZhcigtLW1kYy10aGVtZS10ZXh0LXNlY29uZGFyeS1vbi1iYWNrZ3JvdW5kKTtcbn1cblttZGNEaWFsb2ddIFttZGNCdXR0b25dOmhvdmVyIHtcbiAgY29sb3I6IHZhcigtLW1kYy10aGVtZS1vbi1wcmltYXJ5KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWRjLXRoZW1lLXByaW1hcnkpO1xufVxuW21kY0RpYWxvZ10gW21kY0RpYWxvZ0NhbmNlbF0ge1xuICBjb2xvcjogdmFyKC0tbWRjLXRoZW1lLW9uLXN1cmZhY2UpO1xufVxuXG4ub3B0aW9ucy1ib3gge1xuICBwYWRkaW5nOiAwLjVlbSAxZW07XG59XG5cbi5wYWRkaW5nLTAyNSB7XG4gIHBhZGRpbmc6IDAuMjVlbTtcbn1cblxuaDQge1xuICBtYXJnaW46IDAuMjVlbSAwO1xufVxuXG5zZWN0aW9uIHtcbiAgbWF4LWhlaWdodDogNjB2aDtcbiAgaGVpZ2h0OiA2MHZoO1xufVxuXG4ubWRjLWxpc3QtaXRlbSB7XG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gIHBhZGRpbmc6IDAuMjVlbSAwO1xufVxuXG4jYnRuUmVzZXQsXG4jYnRuUmVzZXROZWVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2QwNjk0ZTtcbn1cblxuLnNlcGF0YXRvciB7XG4gIGhlaWdodDogMC41ZW07XG4gIHdpZHRoOiAxMGVtO1xufVxuXG5bbWRjVGV4dEZpZWxkXSB0ZXh0YXJlYSB7XG4gIGNvbG9yOiAjOTk5OTk5O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQ5LCA0OSwgNDksIDAuMSk7XG4gIHJlc2l6ZTogbm9uZTtcbiAgYm9yZGVyLWNvbG9yOiAjMjJiYmZmO1xufVxuXG4ubWRjLXRleHQtZmllbGRfX2lucHV0IHtcbiAgcGFkZGluZzogMC4yNWVtIDAuNzVlbTtcbiAgZm9udC1zaXplOiBzbWFsbDtcbn1cblxuLmRpYWxvZy1kYXRhIHtcbiAgbWF4LXdpZHRoOiA2MDBweDtcbiAgbWF4LWhlaWdodDogNjAwcHg7XG59XG5cbi5oaW50IHtcbiAgbGluZS1oZWlnaHQ6IDAuNWVtO1xufSIsIkBpbXBvcnQgXCIuLi9zdHlsZXMvY3VzdG9tLnNjc3NcIjtcclxuW21kY0RpYWxvZ10ge1xyXG4gIGNvbG9yOiB2YXIoLS1tZGMtdGhlbWUtdGV4dC1wcmltYXJ5LW9uLWJhY2tncm91bmQpO1xyXG5cclxuICAubWRjLWRpYWxvZ19fYm9keSxcclxuICBhIHtcclxuICAgIGNvbG9yOiB2YXIoLS1tZGMtdGhlbWUtdGV4dC1zZWNvbmRhcnktb24tYmFja2dyb3VuZCk7XHJcbiAgfVxyXG5cclxuICBbbWRjQnV0dG9uXSB7XHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgY29sb3I6IHZhcigtLW1kYy10aGVtZS1vbi1wcmltYXJ5KTtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWRjLXRoZW1lLXByaW1hcnkpO1xyXG4gICAgfVxyXG4gIH1cclxuICBbbWRjRGlhbG9nQ2FuY2VsXSB7XHJcbiAgICBjb2xvcjogdmFyKC0tbWRjLXRoZW1lLW9uLXN1cmZhY2UpO1xyXG4gIH1cclxufVxyXG4ub3B0aW9ucy1ib3gge1xyXG4gIHBhZGRpbmc6IDAuNWVtIDFlbTtcclxufVxyXG4ucGFkZGluZy0wMjUge1xyXG4gIHBhZGRpbmc6IDAuMjVlbTtcclxufVxyXG5cclxuaDQge1xyXG4gIG1hcmdpbjogMC4yNWVtIDA7XHJcbn1cclxuc2VjdGlvbiB7XHJcbiAgbWF4LWhlaWdodDogNjB2aDtcclxuICBoZWlnaHQ6IDYwdmg7XHJcbiAgXHJcbn1cclxuLm1kYy1saXN0LWl0ZW0ge1xyXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbiAgcGFkZGluZzogMC4yNWVtIDA7XHJcbn1cclxuI2J0blJlc2V0LFxyXG4jYnRuUmVzZXROZWVkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItMTtcclxufVxyXG4uc2VwYXRhdG9yIHtcclxuICBoZWlnaHQ6IDAuNWVtO1xyXG4gIHdpZHRoOiAxMGVtO1xyXG59XHJcblxyXG5bbWRjVGV4dEZpZWxkXSB7XHJcbiAgdGV4dGFyZWEge1xyXG4gICAgY29sb3I6ICRjb2xvci1tdXRlZDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJGNvbG9yLWRhcmssIDAuMSk7XHJcbiAgICByZXNpemU6IG5vbmU7XHJcbiAgICBib3JkZXItY29sb3I6ICRjb2xvci1wcmltYXJ5O1xyXG4gIH1cclxufVxyXG5cclxuLm1kYy10ZXh0LWZpZWxkX19pbnB1dCB7XHJcbiAgcGFkZGluZzogMC4yNWVtIDAuNzVlbTtcclxuICBmb250LXNpemU6IHNtYWxsO1xyXG59XHJcblxyXG4uZGlhbG9nLWRhdGEge1xyXG4gIG1heC13aWR0aDogNjAwcHg7XHJcbiAgbWF4LWhlaWdodDogNjAwcHg7XHJcbn1cclxuLmhpbnQge1xyXG4gIGxpbmUtaGVpZ2h0OiAwLjVlbTtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/material/material.component.ts":
/*!************************************************!*\
  !*** ./src/app/material/material.component.ts ***!
  \************************************************/
/*! exports provided: MaterialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialComponent", function() { return MaterialComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _fetch_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../fetch.service */ "./src/app/fetch.service.ts");
/* harmony import */ var _blox_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @blox/material */ "./node_modules/@blox/material/dist/material.es5.js");
/* harmony import */ var _model_materialitemdata__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model/materialitemdata */ "./src/app/model/materialitemdata.ts");





let MaterialComponent = class MaterialComponent {
    constructor(fetchService, snackbar) {
        this.fetchService = fetchService;
        this.snackbar = snackbar;
        this.planResult = {
            cost: 0,
            stages: [],
            syntheses: []
        };
        this.cost = 0;
        this.stagesText = [];
        this.synsText = [];
        this.exportedData = '';
        this.importedData = '';
        this.options = this.fetchService.getLocalStorage('m-option', {
            showOnly3plus: true,
            filtered: false,
            showMat: true,
            showBook: true,
            showChip: true
        });
    }
    calc() {
        const counts = {};
        for (const i of this.items) {
            const need = this.data[i.name].need;
            const have = this.data[i.name].have;
            const diff = need - have;
            counts[i.name] = {
                need,
                have_s: have,
                have,
                upper: 0,
                lack: diff > 0 ? diff : 0
            };
        }
        // 稀有度由高到低，生成所有合成路线
        for (let i = 4; i >= 0; i--) {
            for (let j = this.mByLvl[i].length - 1; j >= 0; j--) {
                const m = this.mIdx[this.mByLvl[i][j]];
                const mm = m.madeof;
                for (const k in mm) {
                    if (mm[k]) {
                        counts[k].upper += mm[k] * counts[m.name].lack;
                        const diff = counts[k].need + counts[k].upper - counts[k].have;
                        counts[k].lack = diff > 0 ? diff : 0;
                    }
                }
            }
        }
        // 稀有度由低到高，检查现有材料是否能向上合成
        for (let i = 1; i < 5; i++) {
            for (let j = this.mByLvl[i].length - 1; j >= 0; j--) {
                const m = this.mIdx[this.mByLvl[i][j]];
                if (counts[m.name].lack === 0) {
                    counts[m.name].canMerge = false;
                    continue;
                }
                let maxCompose = Object.keys(m.madeof).length === 0 ? 0 : Number.MAX_SAFE_INTEGER;
                for (const k in m.madeof) {
                    if (counts[k]) {
                        const cm = counts[k];
                        if (cm.have / m.madeof[k] < maxCompose) {
                            maxCompose = cm.have / m.madeof[k];
                        }
                    }
                }
                maxCompose = Math.floor(maxCompose > counts[m.name].lack ? counts[m.name].lack : maxCompose);
                counts[m.name].canMerge = maxCompose > 0;
            }
        }
        const newData = {};
        for (const i of this.items) {
            const name = i.name;
            const newItemData = new _model_materialitemdata__WEBPACK_IMPORTED_MODULE_4__["MaterialItemData"](name);
            newItemData.lack = counts[name].lack;
            newItemData.have = counts[name].have;
            newItemData.need = counts[name].need;
            newItemData.canMerge = counts[name].canMerge;
            newData[name] = newItemData;
        }
        this.data = newData;
        this.fetchService.setLocalStorage('m-data', this.data);
        this.genExportedData();
    }
    onMatMerge(name) {
        const m = this.mIdx[name];
        for (const k in m.madeof) {
            if (m.madeof[k]) {
                this.data[k].have -= m.madeof[k];
            }
        }
        this.data[name].have += 1;
        this.calc();
    }
    onDataChange(itemData) {
        this.data[itemData.name].have = itemData.have;
        this.data[itemData.name].need = itemData.need;
        this.calc();
    }
    onOptionChange() {
        this.fetchService.setLocalStorage('m-option', this.options);
    }
    reset(onlyNeed) {
        for (const i of this.items) {
            this.data[i.name].need = 0;
            if (!onlyNeed) {
                this.data[i.name].have = 0;
            }
        }
        this.options = {
            showOnly3plus: true,
            filtered: false,
            showMat: true,
            showBook: true,
            showChip: true
        };
        this.calc();
        this.exportedData = '';
    }
    ngOnInit() {
        this.fetchService.getJson('./assets/data/material.json').subscribe(data => {
            const items = [];
            this.mByLvl = [];
            this.mIdx = {};
            for (let i = 0; i < 5; i++) {
                this.mByLvl.push([]);
            }
            const ldata = this.fetchService.getLocalStorage('m-data', {});
            for (const k in data) {
                if (data[k]) {
                    const item = data[k];
                    items.push(item);
                    if (!(item.name in ldata)) {
                        ldata[item.name] = new _model_materialitemdata__WEBPACK_IMPORTED_MODULE_4__["MaterialItemData"](item.name);
                    }
                    this.mByLvl[data[k].rarity - 1].push(data[k].name);
                    this.mIdx[data[k].name] = data[k];
                }
            }
            this.data = ldata;
            this.items = items.sort((a, b) => {
                return a.sort > b.sort ? 1 : (a.sort < b.sort ? -1 : 0);
            });
            this.calc();
        });
    }
    getOrDefault(o, k, v = 0) {
        return k in o ? o[k] : v;
    }
    trackItem(_, item) {
        return item === null ? null : item.id;
    }
    plan() {
        const owned = {};
        const required = {};
        for (const m in this.data) {
            if (this.data[m]) {
                const mt = this.data[m];
                const mi = this.mIdx[m];
                if (mi.id.startsWith('30')) {
                    if (mt.have !== 0) {
                        owned[m] = mt.have;
                    }
                    if (mt.need !== 0) {
                        required[m] = mt.need;
                    }
                }
            }
        }
        this.planResult = this.fetchService.postJson('https://ak.inva.land/plan/', { owned, required, exp_demand: false, extra_outc: false, gold_demand: false })
            .subscribe(plan => {
            this.cost = plan && plan.cost ? plan.cost : 0;
            const stage = plan && plan.stages && plan.stages.length !== 0 ? [...plan.stages] : [];
            const syns = plan && plan.syntheses && plan.syntheses.length !== 0 ? [...plan.syntheses] : [];
            this.stagesText = [];
            this.synsText = [];
            for (const st of stage) {
                const text = '[' + st.stage + '] x' + st.count + ' - ';
                const itemsText = [];
                for (const it in st.items) {
                    if (st.items[it]) {
                        itemsText.push(it + ' x' + st.items[it]);
                    }
                }
                this.stagesText.push(text + itemsText.join(', '));
            }
            for (const syn of syns) {
                const text = '[' + syn.target + '] x' + syn.count + ' - ';
                const itemsText = [];
                for (const it in syn.materials) {
                    if (syn.materials[it]) {
                        itemsText.push(it + ' x' + syn.materials[it]);
                    }
                }
                this.synsText.push(text + itemsText.join(', '));
            }
        });
    }
    copyResult() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (navigator.clipboard) {
                try {
                    yield navigator.clipboard.writeText('材料规划路线（试用版）\r\n预计体力消耗: ' + this.cost
                        + '\r\n刷图获得：\r\n' + this.stagesText.join('\r\n')
                        + '\r\n合成获得：\r\n' + this.synsText.join('\r\n')
                        + '\r\n来源：明日方舟工具箱: https://aktools.graueneko.xyz & ArkPlanner: https://github.com/ycremar/ArkPlanner , 结果仅供参考');
                    this.snackbar.show({
                        message: '已复制到剪切板。',
                        actionText: '好的',
                        multiline: false,
                        actionOnBottom: false
                    });
                }
                catch (err) {
                    this.snackbar.show({
                        message: '复制失败。',
                        actionText: '好吧',
                        multiline: false,
                        actionOnBottom: false
                    });
                }
            }
        });
    }
    genExportedData() {
        const storage = {};
        for (const name in this.data) {
            if (this.data[name]) {
                const d = this.data[name];
                storage[name] = [
                    d.have, d.need
                ];
            }
        }
        this.exportedData = JSON.stringify(storage);
    }
    copyExport() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (navigator.clipboard) {
                try {
                    yield navigator.clipboard.writeText(this.exportedData);
                    this.snackbar.show({
                        message: '已复制到剪切板。',
                        actionText: '好的',
                        multiline: false,
                        actionOnBottom: false
                    });
                }
                catch (err) {
                    this.snackbar.show({
                        message: '复制失败。',
                        actionText: '好吧',
                        multiline: false,
                        actionOnBottom: false
                    });
                }
            }
        });
    }
    getImportedData() {
        const storage = JSON.parse(this.importedData);
        const newData = {};
        for (const name in storage) {
            if (storage[name]) {
                const s = storage[name];
                const d = new _model_materialitemdata__WEBPACK_IMPORTED_MODULE_4__["MaterialItemData"](name);
                d.have = s[0];
                d.need = s[1];
                newData[name] = d;
            }
        }
        this.data = newData;
        this.calc();
    }
};
MaterialComponent.ctorParameters = () => [
    { type: _fetch_service__WEBPACK_IMPORTED_MODULE_2__["FetchService"] },
    { type: _blox_material__WEBPACK_IMPORTED_MODULE_3__["MdcSnackbarService"] }
];
MaterialComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-material',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./material.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/material/material.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./material.component.scss */ "./src/app/material/material.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_fetch_service__WEBPACK_IMPORTED_MODULE_2__["FetchService"], _blox_material__WEBPACK_IMPORTED_MODULE_3__["MdcSnackbarService"]])
], MaterialComponent);



/***/ }),

/***/ "./src/app/model/hrdata.ts":
/*!*********************************!*\
  !*** ./src/app/model/hrdata.ts ***!
  \*********************************/
/*! exports provided: HrData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HrData", function() { return HrData; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class HrData {
    constructor() {
        this.combs = [];
        this.tagrows = [];
        this.combsBk = [];
    }
}


/***/ }),

/***/ "./src/app/model/materialinfo.ts":
/*!***************************************!*\
  !*** ./src/app/model/materialinfo.ts ***!
  \***************************************/
/*! exports provided: MaterialInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialInfo", function() { return MaterialInfo; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class MaterialInfo {
}


/***/ }),

/***/ "./src/app/model/materialitemdata.ts":
/*!*******************************************!*\
  !*** ./src/app/model/materialitemdata.ts ***!
  \*******************************************/
/*! exports provided: MaterialItemData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialItemData", function() { return MaterialItemData; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class MaterialItemData {
    constructor(name) {
        this.have = 0;
        this.need = 0;
        this.lack = 0;
        this.canMerge = false;
        this.name = name;
    }
    shouldHide() {
        return !(this.have || this.need || this.lack);
    }
}


/***/ }),

/***/ "./src/app/settings/settings.component.scss":
/*!**************************************************!*\
  !*** ./src/app/settings/settings.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".settings-container {\n  max-width: 600px;\n  margin: auto;\n}\n\n.mdc-dialog__surface {\n  background-color: var(--mdc-theme-surface);\n}\n\n.mdc-dialog {\n  color: var(--mdc-theme-text-primary-on-background);\n}\n\n.mdc-dialog__body {\n  color: var(--mdc-theme-text-secondary-on-background);\n}\n\n[mdcButton] {\n  color: var(--mdc-theme-on-surface);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2V0dGluZ3MvQzpcXFVzZXJzXFxZdWVfcFxcRG9jdW1lbnRzXFxjb2RlXFxha3Rvb2xzL3NyY1xcYXBwXFxzZXR0aW5nc1xcc2V0dGluZ3MuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NldHRpbmdzL3NldHRpbmdzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0FDQ0o7O0FEQ0E7RUFDSSwwQ0FBQTtBQ0VKOztBREFBO0VBQ0ksa0RBQUE7QUNHSjs7QUREQTtFQUNJLG9EQUFBO0FDSUo7O0FEREE7RUFDSSxrQ0FBQTtBQ0lKIiwiZmlsZSI6InNyYy9hcHAvc2V0dGluZ3Mvc2V0dGluZ3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2V0dGluZ3MtY29udGFpbmVyIHtcclxuICAgIG1heC13aWR0aDogNjAwcHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbn1cclxuLm1kYy1kaWFsb2dfX3N1cmZhY2Uge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWRjLXRoZW1lLXN1cmZhY2UpO1xyXG59XHJcbi5tZGMtZGlhbG9nIHtcclxuICAgIGNvbG9yOiB2YXIoLS1tZGMtdGhlbWUtdGV4dC1wcmltYXJ5LW9uLWJhY2tncm91bmQpO1xyXG59XHJcbi5tZGMtZGlhbG9nX19ib2R5IHtcclxuICAgIGNvbG9yOiB2YXIoLS1tZGMtdGhlbWUtdGV4dC1zZWNvbmRhcnktb24tYmFja2dyb3VuZCk7XHJcbn1cclxuXHJcblttZGNCdXR0b25dIHtcclxuICAgIGNvbG9yOiB2YXIoLS1tZGMtdGhlbWUtb24tc3VyZmFjZSk7XHJcbn0iLCIuc2V0dGluZ3MtY29udGFpbmVyIHtcbiAgbWF4LXdpZHRoOiA2MDBweDtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4ubWRjLWRpYWxvZ19fc3VyZmFjZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1kYy10aGVtZS1zdXJmYWNlKTtcbn1cblxuLm1kYy1kaWFsb2cge1xuICBjb2xvcjogdmFyKC0tbWRjLXRoZW1lLXRleHQtcHJpbWFyeS1vbi1iYWNrZ3JvdW5kKTtcbn1cblxuLm1kYy1kaWFsb2dfX2JvZHkge1xuICBjb2xvcjogdmFyKC0tbWRjLXRoZW1lLXRleHQtc2Vjb25kYXJ5LW9uLWJhY2tncm91bmQpO1xufVxuXG5bbWRjQnV0dG9uXSB7XG4gIGNvbG9yOiB2YXIoLS1tZGMtdGhlbWUtb24tc3VyZmFjZSk7XG59Il19 */");

/***/ }),

/***/ "./src/app/settings/settings.component.ts":
/*!************************************************!*\
  !*** ./src/app/settings/settings.component.ts ***!
  \************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _blox_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @blox/material */ "./node_modules/@blox/material/dist/material.es5.js");
/* harmony import */ var _fetch_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../fetch.service */ "./src/app/fetch.service.ts");





let SettingsComponent = class SettingsComponent {
    constructor(fetch, router, snackbar) {
        this.fetch = fetch;
        this.router = router;
        this.snackbar = snackbar;
        this.dialog = {
            title: '提示',
            message: '',
            decline: '不了',
            accept: '好的',
            acceptCallback: () => { },
            declineCallback: () => { }
        };
        this.isExtraSmall = false;
        this.isMaxFontSize = true;
        this.detectColor = '#00ff00';
    }
    ngOnInit() {
        this.isExtraSmall = this.fetch.getLocalStorage("s-exsm", false);
        this.isMaxFontSize = this.fetch.getLocalStorage("detect-mfs", true);
        this.detectColor = this.fetch.getLocalStorage("detect-tclr", '#00ff00');
    }
    saveSettings() {
        this.fetch.setLocalStorage("s-exsm", this.isExtraSmall);
        this.fetch.setLocalStorage("detect-mfs", this.isMaxFontSize);
        this.fetch.setLocalStorage("detect-tclr", this.detectColor);
        console.log(localStorage);
    }
    showSnackBar(msg, action) {
        this.snackbar.show({
            message: msg,
            actionText: action,
            multiline: false,
            actionOnBottom: false
        });
    }
    beforeClear() {
        this.dialog = {
            title: '提示',
            message: '是否清除本地输入数据？这在有些数据错误时很有用。（缓存数据不受影响）',
            accept: '好的',
            decline: '不了',
            declineCallback: () => { },
            acceptCallback: () => {
                localStorage.clear();
                const currentUrl = this.router.url;
                this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
                    this.router.navigateByUrl(currentUrl);
                });
                this.showSnackBar('输入数据已清空', '好的');
            }
        };
    }
};
SettingsComponent.ctorParameters = () => [
    { type: _fetch_service__WEBPACK_IMPORTED_MODULE_4__["FetchService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _blox_material__WEBPACK_IMPORTED_MODULE_3__["MdcSnackbarService"] }
];
SettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-settings',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./settings.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/settings/settings.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./settings.component.scss */ "./src/app/settings/settings.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_fetch_service__WEBPACK_IMPORTED_MODULE_4__["FetchService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _blox_material__WEBPACK_IMPORTED_MODULE_3__["MdcSnackbarService"]])
], SettingsComponent);



/***/ }),

/***/ "./src/app/switch-theme.service.ts":
/*!*****************************************!*\
  !*** ./src/app/switch-theme.service.ts ***!
  \*****************************************/
/*! exports provided: SwitchThemeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwitchThemeService", function() { return SwitchThemeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");




let SwitchThemeService = 
// Copied and modified from https://medium.com/better-programming/angular-multiple-themes-without-killing-bundle-size-with-material-or-not-5a80849b6b34
class SwitchThemeService {
    constructor(rendererFactory, document) {
        this._theme = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]("light");
        this.themeLinks = [];
        this.head = document.head;
        this._renderer = rendererFactory.createRenderer(null, null);
        this.theme$ = this._theme;
        this.theme$.subscribe((target) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const cssFilename = target + ".css";
            yield this.loadCss(cssFilename);
            if (this.themeLinks.length == 2)
                this._renderer.removeChild(this.head, this.themeLinks.shift());
        }));
    }
    setTheme(name) {
        this._theme.next(name);
    }
    loadCss(filename) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return new Promise(resolve => {
                const linkEl = this._renderer.createElement('link');
                this._renderer.setAttribute(linkEl, 'rel', 'stylesheet');
                this._renderer.setAttribute(linkEl, 'type', 'text/css');
                this._renderer.setAttribute(linkEl, 'href', filename);
                this._renderer.setProperty(linkEl, 'onload', resolve);
                this._renderer.appendChild(this.head, linkEl);
                this.themeLinks = [...this.themeLinks, linkEl];
            });
        });
    }
};
SwitchThemeService.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["RendererFactory2"] },
    { type: Document, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"],] }] }
];
SwitchThemeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
    // Copied and modified from https://medium.com/better-programming/angular-multiple-themes-without-killing-bundle-size-with-material-or-not-5a80849b6b34
    ,
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["RendererFactory2"],
        Document])
], SwitchThemeService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).then(() => {
    if ('serviceWorker' in navigator && _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
        navigator.serviceWorker.register('ngsw-worker.js');
    }
}).catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Yue_p\Documents\code\aktools\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);