## Ставимо debug

https://www.npmjs.com/package/debug

yarn add debug

## Ставимо cross-env

yarn add -D cross-env

https://www.npmjs.com/package/cross-env

## Для Windows (повинно працювати і для Mac)

`
"scripts": {
"start": "cross-env DEBUG='server:*' node server.mjs"
},
`

## Запуск скрипта

yarn start
yarn start:data
yarn start:connect
