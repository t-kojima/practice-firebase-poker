# practice-firebase-poker

https://qiita.com/magaming/items/6ee5318c581d34c4c932

## react-app

```sh
yarn create react-app . --typescript
yarn add typescript @types/node @types/react @types/react-dom @types/jest
yarn add firebase @types/firebase
```

## firebase

- firebase/config.js
- firebase/index.js

## router

```sh
yarn add react-router-dom @types/react-router-dom
```

### ブラケット記法でエラー

- [【TypeScript】 Object[key]() （ブラケット記法）で関数呼び出ししたら Element implicitly has an 'any' type でハマった話](https://qiita.com/Nossa/items/e01d0bce67b760c0bcb9)

```ts
// OK記述
interface IProvider {
  [key: string]: firebase.auth.AuthProvider;
  Google: firebase.auth.AuthProvider;
}

signIn = (providerName: string) => {
  const providers: IProvider = {
    Google: new firebase.auth.GoogleAuthProvider(),
  };
  auth.signInWithRedirect(providers[providerName]);
};
```

### 分割代入の型指定

- [TypeScript で関数の引数に分割代入したときの型指定方法](https://teratail.com/questions/63145)

```ts
signInSuccessWithAuthResult: ({ user, operationType }: { user: any, operationType: string}) => {
  console.log(user, operationType);
  return false;
},
```

## bulma

```sh
yarn add bulma node-sass
```

```scss
// Import only what you need from Bulma
@import '../node_modules/bulma/sass/utilities/_all.sass';
@import '../node_modules/bulma/sass/base/_all.sass';
@import '../node_modules/bulma/sass/elements/button.sass';
@import '../node_modules/bulma/sass/elements/container.sass';
@import '../node_modules/bulma/sass/elements/form.sass';
@import '../node_modules/bulma/sass/elements/title.sass';
@import '../node_modules/bulma/sass/components/navbar.sass';
@import '../node_modules/bulma/sass/layout/hero.sass';
@import '../node_modules/bulma/sass/layout/section.sass';
```

### 謎のスクロール領域

なぜか縦のスクロール領域が出っ放しになる。（スクロールはできないからバーは表示されない）
`base/_all.sass`を無効化したら消えた。

```scss
// @import '../../../node_modules/bulma/sass/base/_all.sass';
```

他のスタイルは生きてる（`base/_all.sass`がどこに影響しているかわからない？）のでこのままにしとく

## theme

#70732D
#A62F03
#731702
#400101
#0D0D0D

## firebaseui

https://qiita.com/musatarosu/items/5411772d97f72d00d267
https://qiita.com/cola119/items/99350f2c34c51378777e

```sh
yarn add react-firebaseui
```

- components/SigninScreen.tsx
