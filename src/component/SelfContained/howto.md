# Self-contained component

It's a component with some variables that lives only inside this component

## How to build that

- create a pure static component (see the folder `/static`)
- This component has a self-contained state, to be defined as a collection of property (in this case, the name)
- To change this state, we need an `input`. Its value is binded via the `value` property of HTML. 
- When this input change, we trigger a function (`changeName()`), whose purpouse is to change the whole state. Event is passed as a parameter