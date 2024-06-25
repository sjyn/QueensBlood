/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/QueensBlood.ts":
/*!****************************!*\
  !*** ./src/QueensBlood.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.QueensBlood = void 0;\nconst engine_1 = __webpack_require__(/*! ./engine */ \"./src/engine/index.ts\");\nclass QueensBlood {\n    constructor(canvas) {\n        this.canvas = canvas;\n        this.canvas.setAttribute(\"height\", window.innerHeight.toString());\n        this.canvas.setAttribute(\"width\", window.innerWidth.toString());\n        this.engine = new engine_1.Engine(this.canvas);\n        this.lastRender = 0;\n        this.updateClock = Date.now();\n    }\n    update() {\n        this.updateClock = Date.now();\n    }\n    draw() {\n        if (this.updateClock - this.lastRender > (1000 / 60)) {\n            this.lastRender = Date.now();\n            this.engine.render();\n        }\n    }\n    loop() {\n        this.update();\n        this.draw();\n        window.requestAnimationFrame(this.loop.bind(this));\n    }\n    run() {\n        console.log(\"run initial render\");\n        window.requestAnimationFrame(this.loop.bind(this));\n    }\n}\nexports.QueensBlood = QueensBlood;\n\n\n//# sourceURL=webpack://queensblood/./src/QueensBlood.ts?");

/***/ }),

/***/ "./src/data/board/Board.ts":
/*!*********************************!*\
  !*** ./src/data/board/Board.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Board = void 0;\nclass Board {\n    constructor() {\n        this.board = [\n            [\n                { pawnCount: 1 },\n                { pawnCount: 0 },\n                { pawnCount: 0 },\n                { pawnCount: 0 },\n                { pawnCount: 1 },\n            ],\n            [\n                { pawnCount: 1 },\n                { pawnCount: 0 },\n                { pawnCount: 0 },\n                { pawnCount: 0 },\n                { pawnCount: 1 },\n            ],\n            [\n                { pawnCount: 1 },\n                { pawnCount: 0 },\n                { pawnCount: 0 },\n                { pawnCount: 0 },\n                { pawnCount: 1 },\n            ],\n        ];\n    }\n}\nexports.Board = Board;\n\n\n//# sourceURL=webpack://queensblood/./src/data/board/Board.ts?");

/***/ }),

/***/ "./src/data/board/index.ts":
/*!*********************************!*\
  !*** ./src/data/board/index.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n__exportStar(__webpack_require__(/*! ./Board */ \"./src/data/board/Board.ts\"), exports);\n\n\n//# sourceURL=webpack://queensblood/./src/data/board/index.ts?");

/***/ }),

/***/ "./src/data/cards/ICard.ts":
/*!*********************************!*\
  !*** ./src/data/cards/ICard.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n\n\n//# sourceURL=webpack://queensblood/./src/data/cards/ICard.ts?");

/***/ }),

/***/ "./src/data/cards/SecurityOfficer.ts":
/*!*******************************************!*\
  !*** ./src/data/cards/SecurityOfficer.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __metadata = (this && this.__metadata) || function (k, v) {\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\n};\nvar SecurityOfficerCard_1;\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.SecurityOfficerCard = void 0;\nconst utils_1 = __webpack_require__(/*! ../../utils */ \"./src/utils/index.ts\");\nlet SecurityOfficerCard = SecurityOfficerCard_1 = class SecurityOfficerCard {\n    constructor(_id) {\n        this._id = _id;\n    }\n    get pattern() {\n        return [\n            [\"-\", \"-\", \"-\", \"-\", \"-\"],\n            [\"-\", \"-\", \"+\", \"-\", \"-\"],\n            [\"-\", \"+\", \"*\", \"+\", \"-\"],\n            [\"-\", \"-\", \"+\", \"-\", \"-\"],\n            [\"-\", \"-\", \"-\", \"-\", \"-\"],\n        ];\n    }\n    get pawnCount() {\n        return 1;\n    }\n    get power() {\n        return 1;\n    }\n    get cardNumber() {\n        return 1;\n    }\n    get cardType() {\n        return \"standard\";\n    }\n    get id() {\n        return this._id;\n    }\n    serialize() {\n        return this._id;\n    }\n    static deserialize(serialized) {\n        return new SecurityOfficerCard_1(serialized);\n    }\n};\nexports.SecurityOfficerCard = SecurityOfficerCard;\nexports.SecurityOfficerCard = SecurityOfficerCard = SecurityOfficerCard_1 = __decorate([\n    (0, utils_1.staticImplements)(),\n    __metadata(\"design:paramtypes\", [String])\n], SecurityOfficerCard);\n\n\n//# sourceURL=webpack://queensblood/./src/data/cards/SecurityOfficer.ts?");

/***/ }),

/***/ "./src/data/cards/index.ts":
/*!*********************************!*\
  !*** ./src/data/cards/index.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n__exportStar(__webpack_require__(/*! ./ICard */ \"./src/data/cards/ICard.ts\"), exports);\n__exportStar(__webpack_require__(/*! ./SecurityOfficer */ \"./src/data/cards/SecurityOfficer.ts\"), exports);\n\n\n//# sourceURL=webpack://queensblood/./src/data/cards/index.ts?");

/***/ }),

/***/ "./src/data/index.ts":
/*!***************************!*\
  !*** ./src/data/index.ts ***!
  \***************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n__exportStar(__webpack_require__(/*! ./cards */ \"./src/data/cards/index.ts\"), exports);\n__exportStar(__webpack_require__(/*! ./board */ \"./src/data/board/index.ts\"), exports);\n\n\n//# sourceURL=webpack://queensblood/./src/data/index.ts?");

/***/ }),

/***/ "./src/engine/Engine.ts":
/*!******************************!*\
  !*** ./src/engine/Engine.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Engine = void 0;\nconst state_1 = __webpack_require__(/*! ./state */ \"./src/engine/state/index.ts\");\nclass Engine {\n    get state() {\n        return this._state;\n    }\n    set state(descriptor) {\n        let newState = null;\n        switch (descriptor) {\n            case state_1.MainMenuState.descriptor:\n                newState = this.mainMenuState;\n                break;\n            case state_1.PregameDeckSelectionState.descriptor:\n                newState = this.pregameDeckSelectionState;\n                break;\n            case state_1.GameState.descriptor:\n                newState = this.gameState;\n                break;\n            default:\n                break;\n        }\n        if (newState != null) {\n            console.log(\"Transitioning to state\", descriptor);\n            let unbindReturn = null;\n            if (this._state != null) {\n                console.log(\"Unbinding state\", this.stateDescriptor);\n                unbindReturn = this._state.unbindState();\n            }\n            this._state = newState;\n            this.stateDescriptor = descriptor;\n            console.log(\"Binding state\", this.stateDescriptor, \"with args\", unbindReturn);\n            // eslint-disable-next-line @typescript-eslint/no-explicit-any\n            this._state.bindState(unbindReturn);\n        }\n        else {\n            console.error(\"No state found for descriptor\", descriptor);\n        }\n    }\n    constructor(canvas) {\n        this.canvas = canvas;\n        this._state = null;\n        this.stateDescriptor = null;\n        this.mainMenuState = new state_1.MainMenuState();\n        this.pregameDeckSelectionState = new state_1.PregameDeckSelectionState();\n        this.gameState = new state_1.GameState();\n        this.state = state_1.MainMenuState.descriptor;\n        this.context = this.canvas.getContext(\"2d\");\n    }\n    render() {\n        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);\n        if (this._state) {\n            this._state.render(this.context);\n        }\n    }\n}\nexports.Engine = Engine;\n\n\n//# sourceURL=webpack://queensblood/./src/engine/Engine.ts?");

/***/ }),

/***/ "./src/engine/index.ts":
/*!*****************************!*\
  !*** ./src/engine/index.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n__exportStar(__webpack_require__(/*! ./Engine */ \"./src/engine/Engine.ts\"), exports);\n\n\n//# sourceURL=webpack://queensblood/./src/engine/index.ts?");

/***/ }),

/***/ "./src/engine/state/GameState.ts":
/*!***************************************!*\
  !*** ./src/engine/state/GameState.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.GameState = void 0;\nconst data_1 = __webpack_require__(/*! ../../data */ \"./src/data/index.ts\");\nconst utils_1 = __webpack_require__(/*! ../../utils */ \"./src/utils/index.ts\");\nlet GameState = class GameState {\n    constructor() {\n        this.board = new data_1.Board();\n        this.playerHand = [];\n        this.opponentHand = [];\n        this.playerDeck = [];\n        this.opponentDeck = [];\n    }\n    drawPlayerCards(numCards) {\n        for (let i = 0; i < numCards && this.playerDeck.length > 0; i++) {\n            this.playerHand.push(this.playerDeck.pop());\n        }\n    }\n    drawOpponentCards(numCards) {\n        for (let i = 0; i < numCards && this.opponentDeck.length > 0; i++) {\n            this.opponentHand.push(this.opponentDeck.pop());\n        }\n    }\n    bindState(args) {\n        this.board = new data_1.Board();\n        this.playerDeck = [...args.playerDeck];\n        this.opponentDeck = [...args.opponentDeck];\n        (0, utils_1.shuffle)(this.playerDeck);\n        (0, utils_1.shuffle)(this.opponentDeck);\n        this.drawPlayerCards(5);\n        this.drawOpponentCards(5);\n    }\n    ;\n    unbindState() {\n    }\n    render(context) {\n    }\n};\nexports.GameState = GameState;\nGameState.descriptor = \"game\";\nexports.GameState = GameState = __decorate([\n    (0, utils_1.staticImplements)()\n], GameState);\n\n\n//# sourceURL=webpack://queensblood/./src/engine/state/GameState.ts?");

/***/ }),

/***/ "./src/engine/state/MainMenuState.ts":
/*!*******************************************!*\
  !*** ./src/engine/state/MainMenuState.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __metadata = (this && this.__metadata) || function (k, v) {\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.MainMenuState = void 0;\nconst utils_1 = __webpack_require__(/*! ../../utils */ \"./src/utils/index.ts\");\nlet MainMenuState = class MainMenuState {\n    constructor() {\n        this.menuItemWidth = 200;\n        this.menuItemHeight = 40;\n        this.menuItemYStart = 300;\n        this.menuItemPadding = 10;\n        this.selectedMenuItem = \"new-game\";\n    }\n    bindState() {\n        window.onkeydown = this.onKeyDown.bind(this);\n    }\n    unbindState() {\n        window.onkeydown = () => { };\n    }\n    onKeyDown(event) {\n        switch (event.key) {\n            case \"ArrowDown\":\n            case \"KeyS\":\n                this.onDownArrow();\n                break;\n            case \"ArrowUp\":\n            case \"KeyW\":\n                this.onUpArrow();\n                break;\n        }\n    }\n    onDownArrow() {\n        switch (this.selectedMenuItem) {\n            case \"new-game\":\n                this.selectedMenuItem = \"options\";\n                break;\n            case \"options\":\n                this.selectedMenuItem = \"new-game\";\n                break;\n        }\n    }\n    onUpArrow() {\n        switch (this.selectedMenuItem) {\n            case \"new-game\":\n                this.selectedMenuItem = \"options\";\n                break;\n            case \"options\":\n                this.selectedMenuItem = \"new-game\";\n                break;\n        }\n    }\n    render(context) {\n        this.drawCursor(context);\n        this.drawLogo(context);\n        this.drawNewGameMenuItem(context);\n        this.drawOptionsMenuItem(context);\n    }\n    drawCursor(context) {\n        let offsetY = 0;\n        switch (this.selectedMenuItem) {\n            case \"new-game\":\n                break;\n            case \"options\":\n                offsetY = this.menuItemHeight + this.menuItemPadding;\n                break;\n        }\n        context.fillStyle = \"black\";\n        context.fillRect((0, utils_1.getCenterX)(this.menuItemWidth) - 30, this.menuItemYStart + offsetY + 10, 20, 20);\n    }\n    drawLogo(context) {\n    }\n    drawNewGameMenuItem(context) {\n        context.strokeStyle = \"black\";\n        context.beginPath();\n        context.roundRect((0, utils_1.getCenterX)(this.menuItemWidth), this.menuItemYStart, this.menuItemWidth, this.menuItemHeight, 20);\n        context.stroke();\n        context.font = \"20px Arial\";\n        const textDims = context.measureText(\"New Game\");\n        context.fillText(\"New Game\", (0, utils_1.getCenterX)(this.menuItemWidth) + (textDims.width / 2), this.menuItemYStart + 26);\n    }\n    drawOptionsMenuItem(context) {\n        const offsetY = this.menuItemYStart + this.menuItemHeight + this.menuItemPadding;\n        context.strokeStyle = \"black\";\n        context.beginPath();\n        context.roundRect((0, utils_1.getCenterX)(this.menuItemWidth), offsetY, this.menuItemWidth, this.menuItemHeight, 20);\n        context.stroke();\n        context.font = \"20px Arial\";\n        const textDims = context.measureText(\"Options\");\n        context.fillText(\"Options\", (0, utils_1.getCenterX)(this.menuItemWidth) + (textDims.width / 2), offsetY + 26);\n    }\n};\nexports.MainMenuState = MainMenuState;\nMainMenuState.descriptor = \"main-menu\";\nexports.MainMenuState = MainMenuState = __decorate([\n    (0, utils_1.staticImplements)(),\n    __metadata(\"design:paramtypes\", [])\n], MainMenuState);\n\n\n//# sourceURL=webpack://queensblood/./src/engine/state/MainMenuState.ts?");

/***/ }),

/***/ "./src/engine/state/PregameDeckSelectionState.ts":
/*!*******************************************************!*\
  !*** ./src/engine/state/PregameDeckSelectionState.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __metadata = (this && this.__metadata) || function (k, v) {\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.PregameDeckSelectionState = void 0;\nconst utils_1 = __webpack_require__(/*! ../../utils */ \"./src/utils/index.ts\");\nlet PregameDeckSelectionState = class PregameDeckSelectionState {\n    constructor() {\n    }\n    bindState() {\n    }\n    unbindState() {\n        return [];\n    }\n    render(context) {\n    }\n};\nexports.PregameDeckSelectionState = PregameDeckSelectionState;\nPregameDeckSelectionState.descriptor = \"pregame-deck-selection\";\nexports.PregameDeckSelectionState = PregameDeckSelectionState = __decorate([\n    (0, utils_1.staticImplements)(),\n    __metadata(\"design:paramtypes\", [])\n], PregameDeckSelectionState);\n\n\n//# sourceURL=webpack://queensblood/./src/engine/state/PregameDeckSelectionState.ts?");

/***/ }),

/***/ "./src/engine/state/index.ts":
/*!***********************************!*\
  !*** ./src/engine/state/index.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n__exportStar(__webpack_require__(/*! ./MainMenuState */ \"./src/engine/state/MainMenuState.ts\"), exports);\n__exportStar(__webpack_require__(/*! ./PregameDeckSelectionState */ \"./src/engine/state/PregameDeckSelectionState.ts\"), exports);\n__exportStar(__webpack_require__(/*! ./GameState */ \"./src/engine/state/GameState.ts\"), exports);\n\n\n//# sourceURL=webpack://queensblood/./src/engine/state/index.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst QueensBlood_1 = __webpack_require__(/*! ./QueensBlood */ \"./src/QueensBlood.ts\");\nconsole.log(\"Running queensblood\");\nconst queensBlood = new QueensBlood_1.QueensBlood(document.getElementById(\"canvas\"));\nqueensBlood.run();\n\n\n//# sourceURL=webpack://queensblood/./src/index.ts?");

/***/ }),

/***/ "./src/utils/index.ts":
/*!****************************!*\
  !*** ./src/utils/index.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.getCenterY = exports.getCenterX = exports.shuffle = exports.staticImplements = void 0;\nfunction staticImplements() {\n    return (constructor) => { constructor; };\n}\nexports.staticImplements = staticImplements;\nfunction shuffle(array) {\n    let currentIndex = array.length;\n    // While there remain elements to shuffle...\n    while (currentIndex != 0) {\n        // Pick a remaining element...\n        let randomIndex = Math.floor(Math.random() * currentIndex);\n        currentIndex--;\n        // And swap it with the current element.\n        [array[currentIndex], array[randomIndex]] = [\n            array[randomIndex], array[currentIndex]\n        ];\n    }\n}\nexports.shuffle = shuffle;\n/**\n * Return the x value to center your item with width w in the view\n */\nconst getCenterX = (w) => {\n    var _a;\n    const canvasWidth = ((_a = document.getElementById(\"canvas\")) === null || _a === void 0 ? void 0 : _a.clientWidth) || 0;\n    return (canvasWidth / 2) - (w / 2);\n};\nexports.getCenterX = getCenterX;\n/**\n * Return the y value to center your item of height h\n */\nconst getCenterY = (h) => {\n    var _a;\n    const canvasHeight = ((_a = document.getElementById(\"canvas\")) === null || _a === void 0 ? void 0 : _a.clientHeight) || 0;\n    return (canvasHeight / 2) + (h / 2);\n};\nexports.getCenterY = getCenterY;\n\n\n//# sourceURL=webpack://queensblood/./src/utils/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;