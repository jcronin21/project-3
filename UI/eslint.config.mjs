import globals from "globals";
import { configs as pluginJsConfigs } from "@eslint/js";
import { configs as pluginReactConfigs } from "eslint-plugin-react";

export default {
    globals: {
        browser: globals.browser,
    },
    extends: [
        pluginJsConfigs.recommended,
        pluginReactConfigs.recommended,
    ],
};
