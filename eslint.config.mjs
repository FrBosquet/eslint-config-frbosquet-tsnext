import simpleImportSort from "eslint-plugin-simple-import-sort";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [{
    ignores: ["components/ui/**/*", "**/next.config.js", "**/jest.config.js"],
}, ...compat.extends(
    "next/core-web-vitals",
    "plugin:tailwindcss/recommended",
    "plugin:prettier/recommended",
    "plugin:react/recommended",
), {
    plugins: {
        "simple-import-sort": simpleImportSort,
    },

    rules: {
        "prettier/prettier": ["error", {
            trailingComma: "none",
            singleQuote: true,
            semi: false,
            tabWidth: 2,
        }],

        quotes: ["error", "single"],
        "no-console": "error",
        "jsx-a11y/alt-text": 0,
        "react/react-in-jsx-scope": 0,
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/strict-boolean-expressions": "off",
        "@typescript-eslint/space-before-function-paren": "off",
        "@typescript-eslint/no-misused-promises": "off",
        "@typescript-eslint/no-non-null-assertion": "off",
        "@typescript-eslint/no-unsafe-argument": "off",
        "@typescript-eslint/no-non-null-asserted-optional-chain": "off",
        "@typescript-eslint/unbound-method": "off",

        "react/jsx-sort-props": ["warn", {
            callbacksLast: true,
            shorthandFirst: true,
            shorthandLast: false,
            ignoreCase: true,
            noSortAlphabetically: false,
            reservedFirst: true,
        }],

        "simple-import-sort/imports": "error",
        "simple-import-sort/exports": "error",
    },
}];