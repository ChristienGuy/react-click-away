## React hook for handling click away

Useful for when you need to handle a user clicking on something that _isn't_ your component.

For instance when showing in-page menus, dialogues, and modal.

install:

```bash
yarn add react-click-away-hook
```

usage:

```jsx
import useClickAway from "react-click-away-hook";

const MyApp = () => {
  const elementRef = useClickAway(() => {
    console.log("Clicked Away");
  });

  return <div ref={elementRef}>Some content</div>;
};
```
