# smart-boolean

Convert various values to booleans and check if they are boolean-like.

# Installation

Install the package using npm:

```bash
npm i smart-boolean
```

Or with yarn:

```bash
yarn add smart-boolean
```

# Usage

```js
const { boolean, isBooleanable } = require('smart-boolean');

console.log(boolean('yes'));           // true
console.log(boolean('maybe'));         // false
console.log(isBooleanable('false'));   // true
console.log(isBooleanable('123'));     // false
```
