//      useState() = re-render the component when the state value changes 
//      
//      useRef() = "Use reference" Does not cayse re-renders when its value changes
//              when you want a component to remember some informations,
//               but you dont want that inforemation to triggewr new renders
//
//
//                      1. accesing/interactiong with dom elements
//                      2. handling focus, animations, and transitions
//                      3. managing timers and intervals

import React, { useState, useRef, useEffect } from 'react';

function MyComponent() {
   const inputRef1 = useRef(null);
   const inputRef2 = useRef(null);
   const inputRef3 = useRef(null);

  

   useEffect(() => {
       console.log("Component Renders");
   }, []);

   function handleClick1() {
       inputRef1.current.focus();
       inputRef1.current.style.backgroundColor = "red";
       inputRef2.current.style.backgroundColor = "";
       inputRef3.current.style.backgroundColor = "";
   }

   function handleClick2() {
       inputRef2.current.focus();
       inputRef1.current.style.backgroundColor = "";
       inputRef2.current.style.backgroundColor = "red";
       inputRef3.current.style.backgroundColor = "";
   }

   function handleClick3() {
       inputRef3.current.focus();
       inputRef1.current.style.backgroundColor = "";
       inputRef2.current.style.backgroundColor = "";
       inputRef3.current.style.backgroundColor = "red";
   }

   return (
       <div>
           <button onClick={handleClick1}>
               Click me 1
           </button>
           <input ref={inputRef1} />
           <button onClick={handleClick2}>
               Click me 2
           </button>
           <input ref={inputRef2} />
           <button onClick={handleClick3}>
               Click me 3
           </button>
           <input ref={inputRef3} />
       </div>
   );
}

export default MyComponent;