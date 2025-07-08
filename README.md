# 🧠 What I Learned Today — Redux Toolkit + React

---

## 🔁 1. Why Redux Toolkit (RTK)?

- **Props** are limited when passing data deep into component trees.
- **React Context** works for small apps but not scalable.
- **Redux** solves global state management but comes with boilerplate.
- **Redux Toolkit (RTK)** simplifies Redux by:
  - Reducing setup
  - Managing immutability with Immer
  - Allowing concise reducer logic

---

## 📦 2. Mutability vs. Immutability

- **Mutable** = change original structure (e.g., `arr.push()`)
- **Immutable** = create a new structure (e.g., `[...arr, item]`)
- React checks for reference change (not deep value change)
- **Immer** allows writing “mutable-style” code that remains immutable

---

## 🧩 3. Store & Slice

- One **store** holds all slices (state logic)
- Store lives in `app/store.js`
- Slices:
  - Have a `name`, `initialState`, `reducers`
  - `reducers` receive `(state, action)`
  - Action types auto-prefixed with slice name (e.g., `todo/addTodo`)

---

## 🛠️ 4. Dispatching & Payloads

- `dispatch(addTodo(payload))` is how you trigger reducers
- Payload can be a string, object, array, etc.
- Example:
  ```js
  dispatch(addTodo({ text, done, createdAt }))
```
---
## In reducers:
``` js
Object.assign(todo, action.payload)
```
---
## 🔍 5. Accessing State — useSelector

- Use `useSelector` to read from Redux state.
- Must match your store structure exactly.
- Example:
  ```js
  const todos = useSelector(state => state.todo.todos);
## 🔗 6. Provider — Connecting React with Redux

- Wrap your app with `<Provider store={store}>` in your main file (usually `main.jsx` or `index.js`).
- This allows all React components to access Redux state.
- It's required for `useSelector` and `useDispatch` to function.
- The `store` prop is where you pass your Redux store — the one you created with `configureStore()`.

---

## 🧠 7. Best Practices

- Match the **slice name**, **file name**, and **store key** — this keeps things consistent and understandable.
- Always send structured **objects** as payloads — gives you flexibility when the data grows.
- You **don’t need to return state** in reducers — RTK with Immer does that automatically.
- Use `Object.assign(target, payload)` if you want to update multiple keys in a single reducer.
- Name your **React components using PascalCase**:  
  ✅ `TodoItem`  
  ❌ `todoItem`

---

## 🤘 Bonus Understanding

- Redux actions carry **data inside `payload`** — you define what data to send and how to use it.
- `createSlice` automatically generates action types for your reducers:
  - e.g. `todo/addTodo` (from `name: "todo"` and `reducer: addTodo`)
- The `Provider` component is what **bridges React and Redux** — without it, your app won’t connect to the store.
- Think of the **store** as the manager of global state, and each **slice** as a department that handles one specific concern (like `todo`, `auth`, `cart`, etc).

---
