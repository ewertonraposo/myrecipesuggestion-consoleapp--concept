const INITAPP = require("./src/app");
const INITIAL_MENU = require("./src/menu.js");

exports.index = INITAPP.app(INITIAL_MENU.menu);
