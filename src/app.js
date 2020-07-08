const PROMPTS = require("prompts");

const initPrompt = async (menu) => {
  return (response = await PROMPTS(menu()));
};
exports.app = initPrompt;
