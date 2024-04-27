"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.startLogger = void 0;
const index_1 = require("./index");
function startLogger() {
    setInterval(() => {
        console.log(index_1.gameManager.log());
    }, 5000);
}
exports.startLogger = startLogger;
