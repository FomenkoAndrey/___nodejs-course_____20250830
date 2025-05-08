## Ставимо debug

https://www.npmjs.com/package/debug

yarn add debug

## Ставимо cross-env

https://www.npmjs.com/package/cross-env

yarn add -D cross-env

## Ставимо cross-env

https://www.npmjs.com/package/winston

yarn add winston

## Для Windows (повинно працювати і для Mac)

`
"scripts": {
"start:dev": "cross-env NODE_ENV=development DEBUG='server:*' node server.mjs",
"start:prod": "cross-env NODE_ENV=production node server.mjs"
},
`

## Запуск скрипта

yarn start:dev
yarn start:prod
