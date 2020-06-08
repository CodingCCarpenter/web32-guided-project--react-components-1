https://github.com/CodingCCarpenter/web32-guided-project--react-components-1.git


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
function Greet() { // takes data => returns elements

}


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
function HelloWorld(props) {
  return (
    <div>Hello World!!!</div>
  )
}



// render the Greet to div#greet passing the correct props


// 💥💥💥 TASK 2: render the FamilyTree to div#familyTree
// FamilyTree expects no props
// Work on the FamilyTree component


// 💥💥💥 TASK 3: render the RockPaperScissors to div#rockPaperScissors
// RockPaperScissors expects a 'player' prop
// Work on the RockPaperScissors component
