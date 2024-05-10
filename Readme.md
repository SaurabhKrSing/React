# React Interview Questions & Answers


### Table of Contents

| Questions                                                                                                                         |
| --------------------------------------------------------------------------------------------------------------------------------- |
| [What is React](#What-is-React)                                                                                                   |
| [Why React are so popular](#Why-React-are-so-popular)                                                                             |
| [Features of React](#Features-of-React)                                                                                           |
| [What is the folder structure in react](#What-is-the-folder-structue-in-react)                                                    |
| [Why we use React](#Why-we-use-React)                                                                                             |
| [What is Components](#What-is-Components)                                                                                         |
| [Type of Components](#Type-of-Components)                                                                                         |
| [What is States](#What-is-States)                                                                                                 |
| [Difference between components and states](#Difference-between-components-and-states)                                             |
| [What is Hooks](#What-is-Hooks)                                                                                                   |
| [Types of Hooks](#Types-of-Hooks)                                                                                                 |
| [What is JSX (JavaScript Syntax Extension)](#What-is-JSX-(JavaScript-Syntax-Extension))                                           |
| [What is SPA (Single Page Application)](#What-is-SPA-(Single-Page-Application))                                                   |
| [What is SSR (Server Side Rendered)](#What-is-SSR-(Server-Side-Rendered))                                                         |
| [What is SSG (Static Site Generation)](#What-is-SSG-(Static-Site-Generation))                                                     |
| [What is Vite](#What-is-Vite)                                                                                                     |
| [What is Fragments](#What-is-Fragments)                                                                                           |
| [Why we use Fragments](#Why-we-use-Fragments)                                                                                     |
| [How to use Fragments](#How-to-use-Fragments)                                                                                     |
| [What is Map Method](#What-is-Map-Method)                                                                                         |
| [What is React Render](#What-is-React-Render)                                                                                     |
| [What is Conditional Rendering](#What-is-Conditional-Rendering)                                                                   |
| [What is Props](#What-is-Props)                                                                                                   |
| [How to use Props](#How-to-use-Props)                                                                                             |
| [Usage of Props](#Usage-of-Props)                                                                                                 |
| [Difference between props and state](#Difference-between-props-and-state)                                                         |
| [What is CSS Modules](#What-is-CSS-Modules)                                                                                       |
| [What is Webpack in React](#What-is-Webpack-in-React)                                                                             |
| [What is lifecycle in React](#What-is-lifecycle-in-React)                                                                         |
| [What are two phases of the component lifecycle](#What-are-two-phases-of-the-component-lifecycle)                                 |
| [What is ref in React](#What-is-ref-in-React)                                                                                     |
| [What is React Router](#What-is-React-Router)                                                                                     |
| [What is handling form inputs](#What-is-handling-form-inputs)                                                                     |
| [What is approaches for handling form inputs in react](#What-is-approaches-for-handling-form-inputs-in-react)                     |
| [What is difference between Declerative and Imparative in React](#What-is-difference-between-Declerative-and-Imparative-in-React) |
| [](#)                                                                                                                             |
| [](#)                                                                                                                             |
| [](#)                                                                                                                             |
| [](#)                                                                                                                             |
| [](#)                                                                                                                             |
| [](#)                                                                                                                             |
| [](#)                                                                                                                             |
| [](#)                                                                                                                             |
| [](#)                                                                                                                             |
| [](#)                                                                                                                             |
| [](#)                                                                                                                             |
| [](#)                                                                                                                             |
| [](#)                                                                                                                             |




---

### What is React
   
  React is a JavaScript  library / Framework for building user interfaces. It's developed and maintained by Facebook.

  Websites/UIs are looked at in term of components.

  React is currently the most popular out of the major front-end frameworks.


  **[⬆ Back to Top](#table-of-contents)**

  ---


### Why React are so popular

  React's popularity stems from its efficient virtual DOM, which enhances performance. Its component-based architecture fosters modular and reusable code, easing development and maintenance. React's robust ecosystem, including libraries like Redux and Next.js, offers extensive tooling and support, making it a top choice for building dynamic and scalable web applications.


  **[⬆ Back to Top](#table-of-contents)**

  ---


### Features of React
  React offers several key features:

  1. **Virtual DOM**: React uses a virtual representation of the DOM to optimize updates and improve performance.

  2. **Component-Based Architecture**: UIs are built using reusable components, simplifying development and maintenance.

  3. **JSX**: JSX allows writing HTML-like syntax within JavaScript, facilitating the creation of UI components.

  4. **Unidirectional Data Flow**: Data flows in a single direction, making the application predictable and easier to debug.

  5. **React Hooks**: Hooks provide a way to use state and lifecycle features in functional components, reducing the need for class components.

  6. **Declarative**: React code is declarative, meaning it describes the desired result rather than the steps to achieve it, resulting in more concise and readable code.

  7. **Composition**: Components can be composed together to create complex UIs from simple building blocks.

  8. **React Router**: React Router enables client-side routing, allowing for navigation and handling of different views within a single-page application.

  9. **Server-Side Rendering**: React can be rendered on the server-side, improving performance and SEO.

  10. **Community and Ecosystem**: React has a vast ecosystem with libraries, tools, and community support, making it suitable for building various types of applications.
  
  
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


### What is the folder structure in react

  In React, a common folder structure includes:

  1. **src**: Contains the source code of the application.
  2. **public**: Houses static assets and the HTML file.
  3. **components**: Stores reusable UI components.
  4. **pages**: Contains top-level components for different routes.
  5. **assets**: Holds images, fonts, or other media files.
  6. **styles**: Stores CSS or SCSS files for styling.
  7. **utils**: Contains utility functions or helper classes.
  8. **tests**: Holds test files for unit or integration testing.
  9. **hooks**: Stores custom React hooks.
  10. **services**: Contains code for interacting with APIs or external services.
   
   
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


### What is Map() Method

  The `map()` method in React is used to iterate over an array and return a new array of modified elements based on a provided function, allowing dynamic rendering of elements based on data.

  ```jsx
  import React from 'react';

  function App() {
    const numbers = [1, 2, 3, 4, 5];

    return (
      <div>
        <h1>Numbers List:</h1>
        <ul>
          {numbers.map(number => (
            <li key={number}>{number}</li>
          ))}
        </ul>
      </div>
    );
  }

  export default App;
  ```

  In this example, `numbers.map()` iterates over the `numbers` array and returns a new array of `<li>` elements, each containing a number from the original array. The `key` prop is added to each `<li>` element to help React identify which items have changed, been added, or been removed efficiently.


  **[⬆ Back to Top](#table-of-contents)**

  ---


  **[⬆ Back to Top](#table-of-contents)**

  ---
  

### What is React Render

  React render is the process of converting React components into a DOM (Document Object Model) representation. It updates the UI based on changes in component state or props, ensuring a reactive user interface.


  **[⬆ Back to Top](#table-of-contents)**

  ---


### What is Conditional Rendering

  Conditional rendering in React involves displaying different components or elements based on certain conditions. It allows developers to control what gets rendered in the UI based on variables, state, or props, enabling dynamic and interactive user interfaces.


  **[⬆ Back to Top](#table-of-contents)**

  ---


### What is Props 

  Props (short for properties) are a way to pass data from parent to child components in React. They are read-only and help make components reusable by allowing dynamic data to be passed down to child components, influencing their behavior and appearance.

  Props Data flows one-way (downwards).
  Props are immutable.
  Used for communication between components.


  **[⬆ Back to Top](#table-of-contents)**

  ---


### How to use Props

  To implement props in React, follow these steps:

  1. Pass data from a parent component to a child component by adding attributes to the child component's JSX tag.
  2. Access the passed data in the child component using the `props` object.
  3. Use the data received via props to render dynamic content or influence the behavior of the child component.

  Here's an example:

  Parent Component:

  ```jsx
  import React from 'react';
  import ChildComponent from './ChildComponent';

  function ParentComponent() {
    return (
      <div>
        <ChildComponent name="John" age={30} />
      </div>
    );
  }

  export default ParentComponent;
  ```

  Child Component:

  ```jsx
  import React from 'react';

  function ChildComponent(props) {
    return (
      <div>
        <p>Name: {props.name}</p>
        <p>Age: {props.age}</p>
      </div>
    );
  }

  export default ChildComponent;
  ```


  **[⬆ Back to Top](#table-of-contents)**

  ---


### Usage of Props

  1. Pass data from  parent to child component.
  2. Make components reusable.
  3. Defined as attributes in JSX.


  **[⬆ Back to Top](#table-of-contents)**

  ---


### Difference between props and state 

  | Props                                                                                       | State                                                                                                                   |
  | ------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
  | Received from parent component.                                                             | Managed internally within the component.                                                                                |
  | Immutable and read-only.                                                                    | Mutable and can be updated using setState().                                                                            |
  | Passed down from parent to child components.                                                | Local to the component where it's defined.                                                                              |
  | Used to pass data from parent to child components.                                          | Used to manage component-specific data.                                                                                 |
  | Props changes trigger re-rendering in child components.                                     | State changes trigger re-rendering in the component itself.                                                             |
  | Can be accessed using `this.props` in class components and directly in function components. | Can be accessed using `this.state` in class components and using array destructuring in function components with hooks. |


  **[⬆ Back to Top](#table-of-contents)**

  ---


### What is CSS Modules

  1. Localized class names to avoid global conflicts.
  2. Styles are scoped to individual components.
  3. Helps in creating components-specific styles.
  4. Automatically generates unique class names.
  5. Promotes modular and maintainable CSS.
  6. Can use alongside global CSS when needed.


  **[⬆ Back to Top](#table-of-contents)**

  ---


### What is Webpack in React

  Webpack is a module bundler for JavaScript applications. It processes various modules, such as JavaScript, CSS, and images, and generates optimized bundles for the browser. It enables features like code splitting, hot module replacement, and tree shaking, enhancing the development and performance of React applications.


  **[⬆ Back to Top](#table-of-contents)**

  ---


### What is lifecycle in React

  In React, the lifecycle refers to the sequence of events that occur during the lifespan of a component, from its creation to its destruction. It includes mounting, updating, and unmounting phases, each with corresponding lifecycle methods that allow developers to hook into and execute code at specific points.


  **[⬆ Back to Top](#table-of-contents)**

  ---


### What are two phases of the component lifecycle

  In React, mounting and unmounting are two phases of the component lifecycle.

  1. **Mounting**: This phase occurs when a component is first created and inserted into the DOM. During mounting, the following methods are called in order:
     - `constructor()`
     - `static getDerivedStateFromProps()`
     - `render()`
     - `componentDidMount()`

  2. **Unmounting**: This phase occurs when a component is removed from the DOM. During unmounting, the `componentWillUnmount()` method is called, allowing the component to perform any necessary cleanup, such as cancelling network requests or removing event listeners.
  
  
  **[⬆ Back to Top](#table-of-contents)**

  ---


### What is ref in React

  In React, a ref is an object that provides a way to reference a DOM element or a React component instance directly. Refs are commonly used to access or modify the DOM or component outside of the typical React data flow. They are created using the useRef() hook or the React.createRef() method. Refs are particularly useful for managing focus, accessing DOM measurements, or integrating with third-party libraries that require direct access to DOM elements.

  **[⬆ Back to Top](#table-of-contents)**

  ---


### What is React Router

  React Router is a popular library for declaratively managing routing and navigation in React applications. It enables client-side routing by synchronizing the UI with the URL, allowing for dynamic rendering of different views based on the current URL, enhancing the user experience in single-page applications.


  **[⬆ Back to Top](#table-of-contents)**

  ---


### What is handling form inputs

  Handling form inputs in React involves managing the state of form data and responding to user interactions, such as changes to input values or form submissions. This can be done using controlled components, where form data is controlled by React state, or uncontrolled components, where the DOM handles form data. Handling form inputs typically includes tasks such as updating state, validating input, and submitting form data.


  **[⬆ Back to Top](#table-of-contents)**

  ---


### What is approaches for handling form inputs in react

  In React, there are several approaches for handling form inputs:

  1. **Controlled Components**: Form inputs whose values are controlled by React state. Changes to the input value are handled by updating the state, allowing React to manage and synchronize the form state with the component's state.

  2. **Uncontrolled Components**: Form inputs whose values are controlled by the DOM itself. React does not maintain the state of the input value; instead, you rely on DOM refs to access the input value when needed.

  3. **Formik**: A popular form management library for React that simplifies form handling by abstracting away the complexities of controlled components and providing utilities for validation, submission, and error handling.

  4. **React Hook Form**: Another form management library for React that emphasizes simplicity and performance. It uses React hooks to manage form state and provides a lightweight and flexible approach to form handling.

  5. **Third-party Libraries**: There are several third-party form management libraries available for React, each offering its own set of features and advantages, such as Redux Form, Final Form, and Formsy React. These libraries often provide advanced form handling capabilities and integrations with validation libraries and UI frameworks.
  

  **[⬆ Back to Top](#table-of-contents)**

  ---


### What is difference between Declerative and Imparative in React

  In React, the concepts of declarative and imperative programming styles refer to different approaches for defining how the UI should be rendered and updated:

  1. **Declarative**: In a declarative approach, you describe what you want the UI to look like based on the current application state. React components are primarily declarative, meaning you define the UI structure and behavior using JSX and component composition. React takes care of updating the DOM to match the desired state based on changes in the application data.

  2. **Imperative**: In an imperative approach, you explicitly define step-by-step instructions for how to achieve a desired UI state. This often involves directly manipulating the DOM through imperative APIs like `getElementById` or `appendChild`. While imperative programming can be more flexible, it can also lead to more complex and error-prone code, especially in larger applications.

  In summary, React encourages a declarative programming style, where you focus on defining the desired UI state based on application data, while React handles the underlying DOM manipulation. This leads to cleaner, more maintainable, and more predictable code compared to an imperative approach.

  
  **[⬆ Back to Top](#table-of-contents)**

  ---
  **[⬆ Back to Top](#table-of-contents)**

  ---
  **[⬆ Back to Top](#table-of-contents)**

  ---
  **[⬆ Back to Top](#table-of-contents)**

  ---
  **[⬆ Back to Top](#table-of-contents)**

  ---
  **[⬆ Back to Top](#table-of-contents)**

  ---
  **[⬆ Back to Top](#table-of-contents)**

  ---
  **[⬆ Back to Top](#table-of-contents)**

  ---
  **[⬆ Back to Top](#table-of-contents)**

  ---
  **[⬆ Back to Top](#table-of-contents)**

  ---
  **[⬆ Back to Top](#table-of-contents)**

  ---
  **[⬆ Back to Top](#table-of-contents)**

  ---
  **[⬆ Back to Top](#table-of-contents)**

  ---
  **[⬆ Back to Top](#table-of-contents)**

  ---
  **[⬆ Back to Top](#table-of-contents)**

  ---
  **[⬆ Back to Top](#table-of-contents)**

  ---
  **[⬆ Back to Top](#table-of-contents)**

  ---
  **[⬆ Back to Top](#table-of-contents)**

  ---
  **[⬆ Back to Top](#table-of-contents)**

  ---
  **[⬆ Back to Top](#table-of-contents)**

  ---
  **[⬆ Back to Top](#table-of-contents)**

  ---
  **[⬆ Back to Top](#table-of-contents)**

  ---
  **[⬆ Back to Top](#table-of-contents)**

  ---
  **[⬆ Back to Top](#table-of-contents)**

  ---
  **[⬆ Back to Top](#table-of-contents)**

  ---
  **[⬆ Back to Top](#table-of-contents)**

  ---
  **[⬆ Back to Top](#table-of-contents)**

  ---
  **[⬆ Back to Top](#table-of-contents)**

  ---
  **[⬆ Back to Top](#table-of-contents)**

  ---
  **[⬆ Back to Top](#table-of-contents)**

  ---
