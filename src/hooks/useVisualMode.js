import { useState } from "react";

export default function useVisualMode(initial) {
  
  const [history, setHistory] = useState([initial])

  function transition (newMode) {
    setHistory(prev => [...prev, newMode])
  }

  function back() {
    //set history to the previous element of the array if array is greater than 1
    
    setHistory(prev => 
      (history.length > 1 ? [...prev.slice(0, prev.length - 1)] : [...prev])
    );
  
  }
    
  



  return {
    mode : (history[history.length - 1]),
    transition,
    back,
  };

}

//   //Keep track of all modes in a history array
//   const [history, setHistory] = useState([initialMode]); 

//   function transition(newMode, replace = true) {
 
//     // Replace the current mode if replace is true, otherwise add the new mode to history
//     setHistory((prev) =>
//       replace
//         ? [...prev.slice(0, prev.length - 1), newMode]
//         : [...prev, newMode]
//     );
    
//   };

//   function back() {
//     setHistory(prev => {
//       if (prev.length > 1) {
//         //Remove the last history and setHistory to the previous mode
//         return [...prev.slice(0, prev.length - 1)];
//       } else {
//         return [...prev];
//       }
//     });
     

//   }

//   return {
//     mode: history[history.length - 1],
//     transition,
//     back
//   };
// };
