import React, { useState, useEffect } from 'react'
import { getParagraph, getSentence } from './modules/bsGenerator'

const App = () => {
  const [paragraph, setParagraph] = useState(null)
  const [sentence, setSentence] = useState(null)
  useEffect(()=>{
    console.log('This happend just ONCE....')
    setParagraph(getParagraph())
  }, [])
  useEffect(()=>{
    console.log('You just got some new BS to share....')
  }, [paragraph])
  return (
    <>
      <h1>Welcome to the BS Generator</h1>
      <p><strong>{paragraph}</strong></p>
      { sentence &&
        <p><strong>{sentence}</strong></p>
      }
      <button
        onClick={() => setParagraph(getParagraph())}>
        Give me another one!
      </button>
      <button
        onClick={() => setSentence(getSentence())}
      >
        Give me a short one!
      </button>
    </>
  )
}

export default App


// import React, { Component } from 'react';
// import { getParagraph, getSentence } from './modules/bsGenerator'

// class App extends Component {
//   state = {
//     paragraph: getParagraph(),
//     sentence: null
//   }
//   render() {
//     return (
//       <>
//         <h1>Welcome to the BS Generator</h1>
//         <p>
//           <strong>{this.state.paragraph}</strong>
//         </p>
//         { this.state.sentence &&
//           <p>

//             <strong>{this.state.sentence}</strong>
//           </p>
//         }
//         <button
//           onClick={() => this.setState({ paragraph: getParagraph() })}
//         >
//           Give me another one!
//           </button>

//         <button
//           onClick={() => this.setState({ sentence: getSentence() })}
//         >
//           Give me a short one!
//           </button>
//       </>
//     );
//   }
// }

// export default App;
