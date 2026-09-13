# 🧱 Dev Stack Builder

A responsive React website for exploring development technologies and building a personalized technology stack.

## ✨ Features

- Responsive navbar with mobile hamburger menu
- Technology cards loaded from a separate JSON file
- Add/remove technologies with duplicate protection
- Live "Your Stack" sidebar and Remove All action
- React-Toastify notifications
- Loading spinner while JSON data is loaded
- Shared orange → pink → violet gradient theme
- Responsive desktop, tablet, and mobile layouts

## 🛠️ Technologies

- React.js
- JavaScript (ES6+)
- CSS
- React-Toastify
- JSON
- Vite

## 🚀 Run locally

```bash
npm install
npm run dev
```

Then open the local Vite URL shown in the terminal.

## 🧠 React Questions

### 1. What is JSX, and why is it used in React?
JSX is a syntax that lets us write HTML-like UI inside JavaScript. React uses it to describe what the interface should look like.

### 2. What is the difference between props and state?
Props are data passed from a parent to a child component. State is data managed inside a component that can change and trigger a re-render.

### 3. What does the `useState` hook do, and where did you use it?
`useState` creates component state and a function to update it. This project uses it for the selected technology stack, loading state, and mobile menu.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?
`useEffect` runs side effects after rendering. It is used here to simulate/facilitate the JSON loading step and update the technology list after the component mounts.

### 5. Why does every item in a `.map()` list need a unique `key` prop?
React uses the key to identify which list item changed, was added, or was removed. A stable unique key helps React update the UI efficiently.

### 6. What is conditional rendering? Show one place you used it.
Conditional rendering means showing different UI depending on a condition. The stack panel shows an empty-state message when `stack.length === 0`; otherwise it shows selected technologies.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
A parent passes data through props. A child can call a callback function passed through props to send an event or value back to the parent.
