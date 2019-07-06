# How to create a pure static component

## Prerequisite
Sincerely, only a notepad and a sufficiently updated node.js version is necessary. However I suggest the following to speed up seamlessy the develop

 - An IDE (I'm using Visual Studio Code, but also Atom or WebStorm could fit)
 - create-react-app (for the init part)
 - If you're using VSCode, some helper package such as ES7 React/Redux/GraphQl/React-Native snippets

## How to create this component
I assume you've already set up an application using `create-react-app`, please follow these instruction first


- Create a new JS file. The first letter must be a capital one
- Every component is a class, that must implement the `render()` method.
- Import the corresponding tag (i.e., the class name) into App.js and apply it into the `render()` function.
- That's it!