"use strict";
// import { GameManager, gameManager } from "./store"
// import { startLogger } from "./logger"
Object.defineProperty(exports, "__esModule", { value: true });
// startLogger();
// setInterval(()=>{
//     gameManager.addGame(Math.random().toString())
// },5000)
const PubSubManager_1 = require("./PubSubManager");
setInterval(() => {
    PubSubManager_1.PubSubManager.getInstance().userSubscribe(Math.random().toString(), "APPL");
}, 5000);
