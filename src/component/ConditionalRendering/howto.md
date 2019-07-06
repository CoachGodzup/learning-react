# How to render some piece of interface conditionally

This component is based on SelfContained part, using two static component, I suggest to do these lesson before this one.

## How to build an conditionally rendered component

- render does not `return` immediately anymore, but it is made iteratively.
- For the if statement, it's possible to use a variable to be rendered inside the return statement.
- The same for For component. In this case, you have to fulfill an array of components, a list wrapper (i.e., `iterableComponent`)