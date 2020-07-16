<div align="center">
<img src='https://blog.wearelua.com/images/general/logo.png' title='LUA Logo' height='70' />
<h1>LUApp® | cra-template</h1>
<img src='https://img.shields.io/npm/v/cra-template-luapp?style=for-the-badge' title='NPM Version'/>

<img src='https://img.shields.io/badge/LUABuild-template-green?style=for-the-badge' title='NPM Version'/>

<img src='https://img.shields.io/badge/PoweredBy-LUADevStudio-blue?style=for-the-badge' title='NPM Version'/>

<p>LUApp it's a typescript cra-template with firebase, react-router, react-feather, react-snapshot, prettier and ts-lint for code linting, it also includes HOC for app strings like Android App structure.</p>
</div>

----

## 🛠 Start building from our app template
### • replace [project-name] with your app name

yarn:
```
    npx create-react-app [project-name] --template luapp
```

npm:
```
    npm init react-app [project-name] --template luapp
```

## 🔌 Install optional dependencies (prettier, tslint, react-snapshot)

npm:
```
    npm run config
```

yarn:
```
    yarn config
```

-----

## 🏗 App Structure
```
|-- 📁 public/
|   |-- 📑 index.html
|   |-- 📜 manifest.json
|   |-- 🤖 robots.txt
|-- 📁 src/
|   |-- 📚 Components/
|   |    |-- 💻 App/
|   |        |-- ⚛️ App.tsx
|   |-- 🗃 Context/
|   |    |-- 📦 MainContext.ts
|   |-- 🔑 Keys/
|   |    |-- 📦 firebase.ts
|   |    |-- 🗝 keys.json
|   |-- 🉐 Lang/
|   |    |-- 📄 Strings.json
|   |-- 🌎 LocalGlobals/
|   |    |-- 📦 global.d.ts
|   |-- 📖 Pages/
|   |    |-- 📝 Index/
|   |        |-- ⚛️ Index.tsx
|   |-- 🖌 index.css
|   |-- ⚛️ index.tsx
|   |-- 📦 react-app-env.d.ts
|   |-- 📦 serviceWorker.ts
|-- ⚙️ .editorconfig
|-- 💅🏽 .prettierrc
|-- ⛔️ .gitignore
|-- 🗳 tsconfig.json
|-- 🎀 tslint.json
```

## 🤔 How it works
When you create a page you must create a folder on 📖 src/Pages and then edit 💻 src/Components/App to add the page on router. If you work on SPA (Single Page Application) just add components to 📝 Pages/Index/Index.tsx

When you write strings to your app, edit on 🉐 Lang/Strings.json and consume the strings from Context Provider, example:

``` javascript
// Pages/MyPage.tsx
import React, { useContext } from 'react'
import MainContext from '../Context/MainContext.ts'

const MyPage:React.FC = () => {
    const { lang } = useContext(MainContext)

    return <h1>{ lang.hello }</h1>
}
```

#### IMPORTANT! Remember to edit ILangPackage interface on 🌎 LocalGlobals/global.d.ts to add strings on 🉐 Lang/Strings.json
``` typescript
// LocalGlobals/global.d.ts
interface ILangs {
    es: ILangPackage
}

interface ILangPackage {
    hello: string
}
```

``` typescript
// Lang/Strings.json
{
    "es": {
        "hello": "Hello World"
    }
}
```

----

This template it's very useful for large or complex projects with many developers, at LUA Development Studio all of our apps are written with this template.
'We use Context Api instead of Redux or MobX, just for performance"

----
### LICENSE MIT
All rights reserved LUA Development Studio ®
