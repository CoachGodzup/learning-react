# How to create an updatable component

This component is very similar to the self contained, with the exception that the state is kept in the father component (in this case, `App.js`).

So, it's strongly recommended to follow the Self Contained tutorial first.

## How to build an updatable container

- Move the state into the father component.
- Create a function that maps properties into states
- Pass the state from parent to child

Actually there are several methods to map props into states:
- I've applied the most simple one: do that explicitly inside component `constructor()`.
- Teorically, You should have `props` and a function to map them from `state` (`mapStateToProps()`). I've left the related code commented in the class, because it throws me a warning ( `make sure to pass up the same props that your component's constructor was passed` )

I've included them both. I hope I can fix it as soon as I can.


