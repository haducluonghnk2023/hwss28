import React from 'react'

const Children_Comp = (props:any) => {
    return (
      <div>
        <h3>Children Component</h3>
        <p>Name from Parent: {props.name}</p>
      </div>
    );
  }
  
  export default Children_Comp;