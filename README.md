### Context API

- We can share data with context api, without using props drilling.
- Context provides a way to pass data through the component tree without having to pass props down manually at every level.
- 3 steps in context api
  - Declare a context:- export const MyContext = React.createContext(defaultValue);
  - Set area/ set context provider:- <MyContext.Provider value={/_ some value _/}>
  - Use context where you want to get the context:- const watch = useContext(WatchContext);

### Conditional rendering:

1. Use element is a variable and then use if else to set value

```
let message;
if (cart.length === 0) {
message = <p className="cart"> Buy at least one item !!!</p>;
} else if (cart.length === 1) {
message = (
<div className="cart">
<p>Thanks for buying one item!!!</p>
<p>Look further for another item !!!</p>
</div>
);
} else {
message = <p className="cart"> Thanks for buying more !!!</p>;
}
{message}
```

2. \*\*\*Ternary operator: operation condition? True : false

```
   {cart.length < 3 ? (

<p className="cart">Buy three item for Ratul</p>
) : (
<p className="cart">Don't buy number forth item.</p>
)}
```

3. \*\*\*&& operator : if true then execute

```
{cart.length === 4 && (

<p className="cart">You just buy number forth item with && operator.</p>)}
```

4. || operator: if false then execute
5. Conditional class

```
<h2 className={cart.length === 5 ? `orange-cart` : `blue-cart`}>
       This is Cart. Order summary</h2>
```

```
Another system
<p className={` items ${cart.length === 6 ? `green-cart` : `purple-cart`}`}>
       Selected Items: {cart.length}</p>
```
