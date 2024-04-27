"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gameManager = void 0;
const store_1 = require("./store");
const logger_1 = require("./logger");
exports.gameManager = new store_1.GameManager();
(0, logger_1.startLogger)();
setInterval(() => {
    exports.gameManager.addGame(Math.random().toString());
}, 5000);
