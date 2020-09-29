webpackHotUpdate("main",{

/***/ "./src/components/SideDrawer/styled.js":
/*!*********************************************!*\
  !*** ./src/components/SideDrawer/styled.js ***!
  \*********************************************/
/*! exports provided: Container, ContainerSide */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContainerSide", function() { return ContainerSide; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

const Container = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 25px;
  width: 36px;
  background: transparent;
  border: none;
  cursor: pointer;
  box-sizing: border-box;



  :focus {
    outline: none;
  }

.linha {
  width: 100%;
  height: 2px;
  background:  -webkit-linear-gradient(right,#129c67,#b36b03);
  -webkit-text-fill-color: transparent;
}
`;
const ContainerSide = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].nav`
   height: 100%;
   border-radius: 4px;
   background: #fff;
   box-shadow: 2px 0px 5px rgba(0,0,0,0.5);
  position: fixed;
  top: 0;
  left: 0;
  width: 30%;
  max-width: 30%;
  max-width: 300px;
  @media( max-width: 800px){
    width: 60%;
  }

  width: 100%;
  z-index: 200;

ul {
  display: flex;
  flex-direction: column;
}



.botao {
  margin-top: 10px;
  margin: 0px 0px 0px 10px;
  cursor: pointer;

  background:  -webkit-linear-gradient(right,#129c67,#b36b03);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

`;

/***/ })

})
//# sourceMappingURL=main.75e7a2c49198f6fd39c1.hot-update.js.map