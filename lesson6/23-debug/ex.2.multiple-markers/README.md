## Ставимо debug

https://www.npmjs.com/package/debug

yarn add debug

## Ставимо cross-env

https://www.npmjs.com/package/cross-env

yarn add -D cross-env

## Для Windows (повинно працювати і для Mac)

`
"scripts": {
"start": "cross-env DEBUG='marker:*' node index.mjs",
"start1": "cross-env DEBUG='marker:1' node index.mjs",
"start2": "cross-env DEBUG='marker:2' node index.mjs",
"start12": "cross-env DEBUG='marker:1,marker:2' node index.mjs"
},
`

## Запуск скрипта

yarn start
yarn start1
yarn start2
yarn start12
