## getpkg
> Just returns the root-level package.json as an object


## Install
npm:
```
$ npm install getpkg --save
```

yarn:
```
$ yarn add getpkg
```


## Example
```js
const getpkg = require('getpkg');
console.log(getpkg()); /* >>
    { 
        name: "the-lost-package",
        version: "6.18.0",
        description: "4, 8, 15, 16, 23, 42",
        ...
    }
*/
```


## LICENSE
[MIT](./LICENSE "The MIT License")
