# React Interview Questions & Answers


### Table of Contents

| Questions                                                                               |
| --------------------------------------------------------------------------------------- |
| [What is React](#What-is-React)                                                         |
| [Why we use React](#Why-we-use-React)                                                   |
| [What is Components](#What-is-Components)                                               |
| [Type of Components](#Type-of-Components)                                               |
| [What is States](#What-is-States)                                                       |
| [Difference between components and states](#Difference-between-components-and-states)   |
| [What is Hooks](#What-is-Hooks)                                                         |
| [Type of Hooks](#Type-of-Hooks)                                                         |
| [What is JSX (JavaScript Syntax Extension)](#What-is-JSX-(JavaScript-Syntax-Extension)) |
| [What is SPA (Single Page Application)](#What-is-SPA-(Single-Page-Application))         |
| [What is SSR (Server Side Rendered)](#What-is-SSR-(Server-Side-Rendered))               |
| [What is SSG (Static Site Generation)](#What-is-SSG-(Static-Site-Generation))           |
| [What is Vite](#What-is-Vite)                                                           |
| [What is Fragments](#What-is-Fragments)                                                 |
| [Why we use Fragments](#Why-we-use-Fragments)                                           |
| [How to use Fragments](#How-to-use-Fragments)                                           |
| [What is Map Method](#What-is-Map-Method)                                               |
| [What is Conditional Rendering](#What-is-Conditional-Rendering)                         |
| [](#)                                                                                   |
| [](#)                                                                                   |
| [](#)                                                                                   |
| [](#)                                                                                   |
| [](#)                                                                                   |
| [](#)                                                                                   |
| [](#)                                                                                   |
| [](#)                                                                                   |
| [](#)                                                                                   |
| [](#)                                                                                   |
| [](#)                                                                                   |
| [](#)                                                                                   |
| [](#)                                                                                   |
| [](#)                                                                                   |
| [](#)                                                                                   |
| [](#)                                                                                   |
| [](#)                                                                                   |
| [](#)                                                                                   |
| [](#)                                                                                   |
| [](#)                                                                                   |
| [](#)                                                                                   |
| [](#)                                                                                   |
| [](#)                                                                                   |
| [](#)                                                                                   |
| [](#)                                                                                   |
| [](#)                                                                                   |




---

### What is React
   
  React is a JavaScript  library / Framework for building user interfaces. It's developed and maintained by Facebook.

  Websites/UIs are looked at in term of components.

  React is currently the most popular out of the major front-end frameworks.


  **[⬆ Back to Top](#table-of-contents)**

  ---


###  Why we use React

  React is a popular JavaScript library used for building user interfaces in web development. Here are some key points highlighting its significance:

  1. **Declarative**: React allows developers to describe the UI based on its current state, making it easier to understand and maintain code.
  2. **Component-Based**: UIs are broken down into reusable components, promoting code reusability and modularization.
  3. **Virtual DOM**: React uses a virtual representation of the DOM, improving performance by minimizing actual DOM manipulations.
  4. **Unidirectional Data Flow**: Data flows in one direction, simplifying state management and making applications more predictable.
  5. **Ecosystem**: React has a vast ecosystem with numerous libraries and tools for enhanced development, testing, and debugging.
  6. **Support**: Backed by Facebook and a large community, React receives regular updates and has extensive documentation and resources.
  7. **Cross-Platform**: React can be used to build not only web applications but also mobile apps using React Native, enabling code sharing between platforms.
  8. **Performance**: React's efficient rendering process and optimization techniques result in fast and responsive user interfaces.
  9. **Accessibility**: React provides features and tools to create accessible UIs, ensuring inclusivity for all users.
  10. **Flexibility**: React can be easily integrated with other libraries and frameworks, allowing developers to leverage existing tools and technologies.


  **[⬆ Back to Top](#table-of-contents)**

  ---


### What is Components

  A reusable piece of code used to construct elements on a page. Components enable the breakdown of complex UIs, enhancing maintenance and scalability. They can receive props and manage their own state, facilitating dynamic and interactive user interfaces.


  **[⬆ Back to Top](#table-of-contents)**

  ---


### Type of Components

  In React, components can be classified into two main types:

  1. **Functional Components**: Also known as stateless components, these are JavaScript functions that return JSX elements. They are simpler, easy to read, and maintain.

  2. **Class Components**: Also known as stateful components, these are ES6 classes that extend from `React.Component`. They have their own state and lifecycle methods.


  **[⬆ Back to Top](#table-of-contents)**

  ---


### Types of Exporting Components 

  There are two types of exporting components in React: default export and named export.

  1. **Default export** - A default export is a special type of export that can only be used once in a file. It is typically used to export a single component, value, or class to another component. To export a component as a default export, use the following syntax:
  
  ```JavaScript

  // MyComponent.js
  export default function MyComponent() {
    return <div>Hello, world!</div>;
  }
  To import a default export, use the following syntax:
  JavaScript

  // App.js
  import MyComponent from './MyComponent.js';

  function App() {
    return <MyComponent />;
  }
  ```

  2. **Named export** - A named export is a type of export that can be used multiple times in a file. It is typically used to export multiple components, values, or classes to another component. To export a component as a named export, use the following syntax:
  
  ```JavaScript

  // MyComponent.js
  export function MyComponent() {
    return <div>Hello, world!</div>;
  }
  To import a named export, use the following syntax:
  JavaScript

  // App.js
  import { MyComponent } from './MyComponent.js';

  function App() {
    return <MyComponent />;
  }
  ```
  

  **[⬆ Back to Top](#table-of-contents)**

  ---


### What is States

  State represents the data managed internally by a component, including form input, fetched data, and UI-related information like the visibility of a modal. Global state refers to data relevant to the entire app rather than a single component.


  **[⬆ Back to Top](#table-of-contents)**

  ---


### Difference between components and states

  | Feature         | Component                                                    | State                                                                   |
  | --------------- | ------------------------------------------------------------ | ----------------------------------------------------------------------- |
  | Definition      | A reusable UI element in React                               | Represents the current state of the component                           |
  | Purpose         | Represents the UI structure                                  | Manages the data and its changes                                        |
  | Type            | Can be functional or class-based                             | Internal object in class components                                     |
  | Initialization  | Can receive props from parent components                     | Initialized within the component constructor or useState hook           |
  | Update          | Can be updated by parent component or through internal logic | Updated through setState method or useState hook                        |
  | Scope           | Can have local or global scope                               | Limited to the component where it's defined                             |
  | Access          | Can access props passed from parent component                | Accessed and modified within the component itself                       |
  | Lifecycle Hooks | Can use lifecycle methods in class components                | Does not have lifecycle methods, but can be updated with useEffect hook |
  | Mutable         | Can be mutable or immutable                                  | Mutable; can be updated using setState                                  |
  | Examples        | Button, Card, Header                                         | Count, Text, Toggle                                                     |


  **[⬆ Back to Top](#table-of-contents)**

  ---


### What is Hooks

  Allows us to use state and other React features within functional components.


  **[⬆ Back to Top](#table-of-contents)**

  ---


### Types of Hooks

  Sure, here are definitions and code examples for seven commonly used React hooks:

  1. **useState**: useState hook manages component state by allowing functional components to hold and update state variables. 

  ```jsx
  import React, { useState } from 'react';
  function Counter() {
    const [count, setCount] = useState(0);
    return (
      <div>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>
    );
  }
  ```

  2. **useEffect**: useEffect handles side effects in functional components, such as data fetching or DOM manipulation, after component renders. 

  ```jsx
  import React, { useState, useEffect } from 'react';
  function Example() {
    const [count, setCount] = useState(0);
    useEffect(() => {
      document.title = `You clicked ${count} times`;
    }, [count]);
    return (
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
          Click me
        </button>
      </div>
    );
  }
  ```

  3. **useContext**: useContext provides access to React context within functional components, allowing them to consume context values. 

  ```jsx
  import React, { useContext } from 'react';
  import MyContext from './MyContext';
  function MyComponent() {
    const value = useContext(MyContext);
    return <div>{value}</div>;
  }
  ```

  4. **useReducer**: useReducer is an alternative to useState for managing complex state logic. 

  ```jsx
  import React, { useReducer } from 'react';
  const initialState = { count: 0 };
  function reducer(state, action) {
    switch (action.type) {
      case 'increment':
        return { count: state.count + 1 };
      case 'decrement':
        return { count: state.count - 1 };
      default:
        throw new Error();
    }
  }
  function Counter() {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
      <div>
        <p>Count: {state.count}</p>
        <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
        <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
      </div>
    );
  }
  ```

  5. **useCallback**: useCallback memoizes callback functions, preventing unnecessary re-renders. 

  ```jsx
  import React, { useState, useCallback } from 'react';
  function CounterButton({ onClick }) {
    return <button onClick={onClick}>Click Me</button>;
  }
  function ParentComponent() {
    const [count, setCount] = useState(0);
    const increment = useCallback(() => setCount(count + 1), [count]);
    return (
      <div>
        <p>Count: {count}</p>
        <CounterButton onClick={increment} />
      </div>
    );
  }
  ```

  6. **useMemo**: useMemo memoizes expensive computations, optimizing performance by caching computed values. 

  ```jsx
  import React, { useState, useMemo } from 'react';
  function ExpensiveCalculation({ count }) {
    // This expensive calculation will only run when `count` changes
    const result = useMemo(() => {
      console.log('Running expensive calculation');
      return count * 2;
    }, [count]);
    return <p>Result: {result}</p>;
  }
  function ParentComponent() {
    const [count, setCount] = useState(0);
    return (
      <div>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <ExpensiveCalculation count={count} />
      </div>
    );
  }
  ```

  7. **useRef**: useRef creates a mutable reference object that persists across component re-renders. 

  ```jsx
  import React, { useRef } from 'react';
  function FocusInput() {
    const inputRef = useRef(null);
    const handleClick = () => {
      inputRef.current.focus();
    };
    return (
      <div>
        <input ref={inputRef} type="text" />
        <button onClick={handleClick}>Focus Input</button>
      </div>
    );
  }
  ```


  **[⬆ Back to Top](#table-of-contents)**

  ---


### What is JSX (JavaScript Syntax Extension)

  JSX, or JavaScript XML, is a syntax extension in React that allows developers to write HTML-like code directly within JavaScript. JSX makes it easier to create and manipulate DOM elements, incorporating HTML-like syntax into React components, enhancing readability and simplifying the development process.


  **[⬆ Back to Top](#table-of-contents)**

  ---


### What is SPA (Single Page Application)

  SPA stands for Single Page Application, a web application that dynamically updates the current page rather than loading entire new pages from the server.


**[⬆ Back to Top](#table-of-contents)**

  ---

  
### What is SSR (Server Side Rendered)

  SSR stands for Server-Side Rendering, a technique where the server generates the initial HTML for a page, improving SEO and initial load times.


**[⬆ Back to Top](#table-of-contents)**

  ---


### What is SSG (Static Site Generation)

  SSG stands for Static Site Generation, where the server generates the entire site as static HTML files at build time, providing fast loading times and reduced server load.


**[⬆ Back to Top](#table-of-contents)**

  ---

### What is Vite
  * Vite is a super fast front-end toolkit that can be used for all kinds of JS projects including React.

  * It is built on top of ESBuild, which is a very fast JS Bundler

  * Fast Development server with hot-reload.

  * Installed with  npm via `npm init vite` or `yarn create vite`.


**[⬆ Back to Top](#table-of-contents)**

  ---


### What is Fragments

  Fragments in React are a feature that allows grouping multiple children elements without creating an additional DOM element, improving code readability and maintainability.


  **[⬆ Back to Top](#table-of-contents)**

  ---


### Why we use Fragments

  1. **Avoids unnecessary DOM elements:** Fragments allow grouping multiple React elements without adding extra nodes to the DOM.
  2. **Improved readability:** Helps keep JSX code cleaner and more concise by eliminating wrapper divs or spans.
  3. **Better performance:** Reduces the number of nodes in the DOM, leading to faster rendering and improved performance.


  **[⬆ Back to Top](#table-of-contents)**

  ---


### How to use Fragments

  1. Import `Fragment` from React: `import React, { Fragment } from 'react';`
  2. Use `<Fragment>` and `</Fragment>` to wrap multiple elements.
  3. Alternatively, use shorthand syntax `<>` and `</>` instead.
  4. This helps avoid unnecessary wrapper divs in the DOM.


  **[⬆ Back to Top](#table-of-contents)**

  ---


### What is Map Method

  The `map()` method in React is used to iterate over an array and return a new array of modified elements based on a provided function, allowing dynamic rendering of elements based on data.


  **[⬆ Back to Top](#table-of-contents)**

  ---


### What is Conditional Rendering

  Conditional rendering in React involves displaying different components or elements based on certain conditions. It allows developers to control what gets rendered in the UI based on variables, state, or props, enabling dynamic and interactive user interfaces.

  **[⬆ Back to Top](#table-of-contents)**

  ---


###  