"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsdom_1 = require("jsdom");
var jquery_1 = __importDefault(require("jquery"));
var jsWindow = new jsdom_1.JSDOM("").window;
var $ = jquery_1.default(jsWindow, true);
exports.default = $;
module.exports = $;
