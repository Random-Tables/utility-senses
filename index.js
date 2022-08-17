const index = require("./index.json");
const colorLight = require("./color-light.json");
const colorRed = require("./color-red.json");
const colorBlue = require("./color-blue.json");
const colorGreen = require("./color-green.json");
const colorYellow = require("./color-yellow.json");
const colorPurple = require("./color-purple.json");
const colorBrown = require("./color-brown.json");
const colorGrey = require("./color-grey.json");
const colorDark = require("./color-dark.json");
const colorMaterial = require("./color-material.json");
const smell = require("./smell.json");
const feel = require("./feel.json");
const sound = require("./sound.json");
const body = require("./body.json");

module.exports = {
  ...index,
  tableData: {
    "color-light": colorLight,
    "color-red": colorRed,
    "color-blue": colorBlue,
    "color-green": colorGreen,
    "color-yellow": colorYellow,
    "color-purple": colorPurple,
    "color-brown": colorBrown,
    "color-grey": colorGrey,
    "color-dark": colorDark,
    "color-material": colorMaterial,
    smell,
    feel,
    sound,
    body,
  },
};
