const withPlugins = require("next-compose-plugins");

const { i18n } = require("./next-i18next.config");

const defaultConfig = {
  i18n,
};

module.exports = withPlugins([], defaultConfig);
