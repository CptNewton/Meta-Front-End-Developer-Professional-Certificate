### 1. Considering the MousePosition component receives a prop called render, which is a function, what are valid options of JSX returned from the component?

- [x] `return render({ mousePosition });`.
- [ ] `return render(<div>{mousePosition}</div>);`.
- [ ]

```
return (
  <div>
    render({mousePosition})
  </div>
);
```

### 2. The `PointMouseLogger` component returns the below JSX.

```
<p>
 ({mousePosition.x}, {mousePosition.y})
</p>
```

After incorporating the `MousePosition` component as part of the JSX returned by `PointMouseLogger`, what should be the new JSX that `PointMouseLogger` returns?

- [ ]

```
return(
  <MousePosition>
    <p>
      ({mousePosition.x}, {mousePosition.y})
    </p>
  </MousePosition>
);
```

- [x]

```
return(
  <MousePosition
    render={({ mousePosition }) => (
      <p>
        ({mousePosition.x}, {mousePosition.y})
      </p>
    )}
  />
);
```

- [ ]

```
  <MousePosition>
    {({ mousePosition }) => (
      <p>
        ({mousePosition.x}, {mousePosition.y})
      </p>
    )}
  </MousePosition>
);
```

### 3. The App component initially presents the below output structure

```
function App() {
  return(
    <div className="App">
      <header className="Header">Little Lemon Restaurant 🍕</header>
      <PanelMouseLogger />
      <PointMouseLogger />
    </div>
  );
}
```

After adding the MousePosition component into the mix, would you still have to perform any changes to the App component?

- [ ] Yes.
- [x] No.
