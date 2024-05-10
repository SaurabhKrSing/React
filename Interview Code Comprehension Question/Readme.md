<div align="center">
  <img height="60" src="https://img.icons8.com/color/344/javascript.png">
  <h1>JavaScript Interview Code Comprehension Question</h1>
</div>

#### 1. What's the output?

```javascript
async function foo() {
  return 'Hello'
}
const result = foo();
console.log(result);
```

<details><summary><b>Answer</b></summary>
<p>

#### Answer: 

The output of this code will be:

```
Promise { 'Hello' }
```

Explanation:
- Since `foo` is declared as an async function, it always returns a promise.
- Even though `foo` immediately returns the string `'Hello'`, it wraps that string in a resolved promise.
- Therefore, when you log `result`, it's a promise object with the resolved value `'Hello'`.

</p>
</details>

---
