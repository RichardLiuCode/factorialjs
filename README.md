# FactorialJS

A JavaScript Library that can calculate factorial numbers

# Installation

**For Browser**

Add this script tag to your HTML code

```html
<script src="https://cdn.jsdelivr.net/npm/@richardliucode/factorial/browser.min.js"></script>
```

**For Node.js**

Install cmd

```bash
npm install @richardliucode/factorial
```

----

# Usage

For example, you want to calculate 10!.
 
**For Browser**

```JavaScript
let input = 10;
let result = getFactorial(input);
console.log(result); //3628800
```

**Node.js**

```javascript
const factorial = require("@richardliucode/factorial");
const input = 10
factorial.calc(input).then(function(result) {
    console.log(result); //3628800
});
```
