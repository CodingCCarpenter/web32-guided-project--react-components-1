// 👉 Importing React libs from node_modules folder (see package.json)
// to make React components
// to append a React tree of components to the DOM
import React from 'react';
import render from 'react-dom';
// 👉 Importing a React component from another file
// RockPaperScissors
// FamilyTree


/*
💥💥💥 TASK 1A- Mounting a React element to the DOM (often only once per app) 💥💥💥
  👉 execute the 'render' named export from react-dom
  👉 1st ARG - React element (or React component "invoked")
  👉 2nd ARG - DOM element to append to
*/
const name='Maryam';

render (
  //what React elements do we want to inject (not DOM elements)
  <HelloWorld name={name} age='25'></HelloWorld>,
  //where actual DOM node
  document.getElementById('helloWorld'),
)

function HelloWorld(props) {
  return (
    <div className='container'>Hello {props.name}!!! You are {props.age}</div>
  )
}
/*
💥💥💥 TASK 1B- Example of a React component `Greet` being DECLARED 💥💥💥

  - Name is capitalized
  - Takes an object ("props") as its one argument
  - We often destructure the individual props
  - Must return SOMETHING (null, empty string, elements...)
  - React provides some built-in components (h1, div, etc)
  - Attribute names with dashes are camelCased (except data- & aria-)
  - The `class` attribute is `className`, `for` attribute is `htmlFor`
  - We can INTERPOLATE 🔥 expressions 🔥 using curly braces
  - We can interpolate attribute values, and content
  - We can validate the props
*/

function Greet(props) { // takes data => returns elements
  const { name } = props;
  const className = 'container'
  //must return something
  // return `Hello ${name}`
  // return null
  return (
    //do wrap everything in a top level div
    <div className={className}>
      <h1>Greet Component</h1>
      <div>Hello, {name}</div>
    </div>
  )
}
render(
  <Greet />,
  document.getElementById('greet')
)


/*
💥💥💥 TASK 1C- Examples of a `Greet` component being INVOKED 💥💥💥

  - Components are "invoked" so they return elements
  - Instead of invoking with parens, we invoke with < />
  - Instead of passing args with parens, we pass them with attribute-like syntax
  - Don't forget all tags need to close correctly

  <Greet person='Ian' emphasis />              // props is object with { person: 'Ian', emphasis: true }
  <Greet person='Michael' emphasis={false} />  // props is object with { person: 'Michael', emphasis: false }
  <Greet person='Sarah' />                     // props is object with { person: 'Sarah' }
*/



// render the Greet to div#greet passing the correct props


// 💥💥💥 TASK 2: render the FamilyTree to div#familyTree
// FamilyTree expects no props
// Work on the FamilyTree component


// 💥💥💥 TASK 3: render the RockPaperScissors to div#rockPaperScissors
// RockPaperScissors expects a 'player' prop
// Work on the RockPaperScissors component
