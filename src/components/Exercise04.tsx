import React from 'react'
import Children_Comp from './Children_Comp ';

const Parent_Comp = () => {
  const [name, setName] = React.useState("Parent");

  return (
    <div>
        <h2>Exercise04</h2>
      <h3>Parent Component</h3>
      <p>Name: {name}</p>
      <Children_Comp name={name} />
    </div>
  );
}

export default Parent_Comp;