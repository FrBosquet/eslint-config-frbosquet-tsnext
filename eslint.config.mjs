import { FlatCompat } from '@eslint/eslintrc'
import stylistic from '@stylistic/eslint-plugin'
import tanstackQuery from '@tanstack/eslint-plugin-query'
import tailwind from 'eslint-plugin-tailwindcss'
import { dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
    baseDirectory: __dirname,
})

const eslintConfig = [
    ...compat.extends('next/core-web-vitals', 'next/typescript'),
    ...tailwind.configs['flat/recommended'],
    ...tanstackQuery.configs['flat/recommended'],
    {
        plugins: {
            '@stylistic': stylistic
        },
        rules: {
            '@stylistic/indent': ['error', 2],
            'semi': ['error', 'never'],
            'quotes': ['error', 'single'],
            'max-len': ['error', { code: 80, ignoreUrls: true, ignoreStrings: true, ignoreComments: true, ignoreTemplateLiterals: true }],
            'react/react-in-jsx-scope': 'off',
            'react/jsx-max-props-per-line': ['error', { 'maximum': { 'single': 2, 'multi': 1 } }],
            'tailwindcss/no-custom-classname': ['error']
        }
    }
]

export default eslintConfig