import React, { useState, useEffect } from 'react'
// import from openai
import { Configuration, OpenAIApi } from 'openai'
import Option from './component/Option'
import { arrayItems } from './Options/index'
import Generate from './component/Generate'
import './App.css'

function App() {
    const configuration = new Configuration({
        apiKey: import.meta.env.VITE_Open_AI_Key,
      });

      const openai = new OpenAIApi(configuration);
    // Generate
    const [result, setResult] = useState('');
const [option, setOption] = useState({}); //{objct}
const [input, setInput] = useState(''); //pass setInput in Generate

useEffect(() => {
    const storedResult = localStorage.getItem('generatedResult');
    if (storedResult) {
      setResult(storedResult);
    }
  }, []);

//   useEffect(() => {
//     localStorage.removeItem('generatedResult');
//   }, [option]);

  

// for result 
const selectOption = (option) => {
    // passing all option in item in array 
setOption(option);
console.log(option)

}

const onChangeHandler = (e) =>{
    setInput(e.target.value)
    e.preventDefault()
}

const handleSubmit = async (e) => {
    e.preventDefault();
    const resultText = await doStuff();
    localStorage.setItem('generatedResult', resultText);
    setResult(resultText);
  };

const doStuff = async () => {
    let object = { ...option, prompt: input };
    const response = await openai.createCompletion(object);
    const resultText = response.data.choices[0].text;
    localStorage.setItem('generatedResult', resultText);
    setResult(resultText);
    return resultText; //required to return the text
  };
  
  

  return (
    <div className='App'>
{Object.values(option).length === 0 ?  <Option configuration={configuration} arrayItems={arrayItems} selectOption={selectOption} doStuff={doStuff} /> : 
<Generate doStuff={doStuff} onChangeHandler={onChangeHandler} result={result} handleSubmit={handleSubmit}/>

        // handleSubmit={handleSubmit}  />
        }
    </div>
  )
}

export default App 

//////
// import React, { useState, useEffect } from 'react'
// // import from openai
// import { Configuration, OpenAIApi } from 'openai'
// import Option from './component/Option'
// import { arrayItems } from './Options/index'
// import Generate from './component/Generate'
// import './App.css'

// function App() {
//   const configuration = new Configuration({
//     apiKey: import.meta.env.VITE_Open_AI_Key,
//   });

//   const openai = new OpenAIApi(configuration);

//   // Generate
//   const [result, setResult] = useState('');
//   const [option, setOption] = useState({}); //{objct}
//   const [input, setInput] = useState(''); //pass setInput in Generate


// useEffect(() => {
//   const storedResult = localStorage.getItem(`generatedResult-${option.name}`);
//   if (storedResult) {
//     setResult(storedResult);
//   }
// }, [option.name]);


//   useEffect(() => {
//   setResult('');
// }, [option]); //to updated after deleted in the history-list

//   // for result 
//   const selectOption = (option) => {
//     // passing all option in item in array 
//     setOption(option);
//   }

//   const onChangeHandler = (e) =>{
//     setInput(e.target.value)
//     e.preventDefault()
//   }


// // store the generated result in local storage
// const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!option.name) return; // return if no option is selected
//     const resultText = await doStuff();
//     // store the generated result under the selected option name
//     localStorage.setItem(`generatedResult-${option.name}`, resultText);
//     setResult(resultText);
//   };
  

// // check if there is a stored result in local storage, and if there is, set the state variable
// useEffect(() => {
//     const storedResult = localStorage.getItem(`generatedResult-${option.name}`);
//     if (storedResult) {
//       setResult(storedResult);
//     }
//   }, [option.name]);
  

//   const doStuff = async () => {
//     let object = { ...option, prompt: input };
//     const response = await openai.createCompletion(object);
//     const resultText = response.data.choices[0].text;
//     localStorage.setItem('generatedResult', resultText);
//     setResult(resultText);
//     return resultText;
//   };

//   return (
//     <div className='App'>
//       {Object.values(option).length === 0 ? <Option configuration={configuration} arrayItems={arrayItems} selectOption={selectOption} doStuff={doStuff} /> :
//         <Generate doStuff={doStuff} onChangeHandler={onChangeHandler} result={result} handleSubmit={handleSubmit} selectedOption={option}/>
//       }
//     </div>
//   )
// }

// export default App

// // Working 4/27 Original
// import React, { useState, useEffect } from 'react'
// // import from openai
// import { Configuration, OpenAIApi } from 'openai'
// import Option from './component/Option'
// import { arrayItems } from './Options/index'
// import Generate from './component/Generate'
// import './App.css'

// function App() {
//     const configuration = new Configuration({
//         apiKey: import.meta.env.VITE_Open_AI_Key,
//       });

//       const openai = new OpenAIApi(configuration);
//     // Generate
//     const [result, setResult] = useState('');
// const [option, setOption] = useState({}); //{objct}
// const [input, setInput] = useState(''); //pass setInput in Generate

// useEffect(() => {
//     const storedResult = localStorage.getItem('generatedResult');
//     if (storedResult) {
//       setResult(storedResult);
//     }
//   }, []);
  

// // for result 
// const selectOption = (option) => {
//     // passing all option in item in array 
// setOption(option);
// console.log(option)

// }

// const onChangeHandler = (e) =>{
//     setInput(e.target.value)
//     e.preventDefault()
// }

// const handleSubmit = async (e) => {
//     e.preventDefault();
//     const resultText = await doStuff();
//     localStorage.setItem('generatedResult', resultText);
//     setResult(resultText);
//   };

// //original 
// // const handleSubmit = (e) => {
// //     e.preventDefault()
// // }
  
// // // Generate original
// // const doStuff = async () => {
// //     let object = {...option, prompt: input };
// //     const response = await openai.createCompletion(object);
// //     setResult(response.data.choices[0].text);
// //   };

// const doStuff = async () => {
//     let object = { ...option, prompt: input };
//     const response = await openai.createCompletion(object);
//     const resultText = response.data.choices[0].text;
//     localStorage.setItem('generatedResult', resultText);
//     setResult(resultText);
//     return resultText; //required to return the text
//   };
  
  

//   return (
//     <div className='App'>
// {Object.values(option).length === 0 ?  <Option configuration={configuration} arrayItems={arrayItems} selectOption={selectOption} doStuff={doStuff} /> : 
// <Generate doStuff={doStuff} onChangeHandler={onChangeHandler} result={result} handleSubmit={handleSubmit}/>

//         // handleSubmit={handleSubmit}  />
//         }
//     </div>
//   )
// }

// export default App 

// Working den 4/19
// import React, { useState } from 'react'
// // import from openai
// import { Configuration, OpenAIApi } from 'openai'
// import Option from './components/Option'
// import { arrayItems } from './Options/index'
// import Translation from './components/Translation'
// import './App.css'

// function App() {
//     const configuration = new Configuration({
//         apiKey: import.meta.env.VITE_Open_AI_Key,
//       });

//       const openai = new OpenAIApi(configuration);
//     // translation
//     const [result, setResult] = useState('');
// const [option, setOption] = useState({}); //{objct}
// const [input, setInput] = useState(''); //pass setInput in translation

// // for result 
// const selectOption = (option) => {
//     // passing all option in item in array 
// setOption(option);
// }

// // translation
// const doStuff = async () => {

//   let object = {...option, prompt: input };
// //   console.log(object)

//   const response = await openai.createCompletion(object);
//   setResult(response.data.choices[0].text); //store result 

// }



//   return (
//     <div className='App'>
    
//         {Object.values(option).length === 0 ?  <Option arrayItems={arrayItems} selectOption={selectOption}/> : 
//         <Translation doStuff={doStuff} setInput={setInput} result={result} />
//         }
//     </div>
//   )
// }

// export default App 



// Working
// import React, { useState } from 'react'
// // import from openai
// import { Configuration, OpenAIApi } from 'openai'
// import Option from './components/Option'
// import { arrayItems } from './Options/index'
// import Translation from './components/Translation'
// import './App.css'

// function App() {
//     // required key to connect in OpenAi
//     const configuration = new Configuration({
//         apiKey: import.meta.env.VITE_Open_AI_Key,
//       });

//       const openai = new OpenAIApi(configuration);
//     // translation
//     const [result, setResult] = useState('');
// const [option, setOption] = useState({}); //{objct}
// const [input, setInput] = useState(''); //pass setInput in translation
// // for result 

// const selectOption = (option) => {
//     // passing all option in item in array 
// setOption(option);
// }

// // translation
// const doStuff = async () => {
//     // console.log option to check if working and passing all input in textarea
// //   setOption({...option, prompt: input })
//   let object = {...option, prompt: input };
// //   console.log(object)

//   const response = await openai.createCompletion(object);
//   setResult(response.data.choices[0].text); //store result 

// }
// // convert to array
// // console.log(option)
// // console.log(Object.values(option).length);


//   return (
//     <div className='App'>
//         {/* pass arrayItems props and selectOption to Option */}
//         {/* <Option arrayItems={arrayItems} selectOption={selectOption}/>
//         <Translation /> */}
//         {/* if object values === 0 show the Option else Translation */}
//         {Object.values(option).length === 0 ?  <Option arrayItems={arrayItems} selectOption={selectOption}/> : 
//         // pass the props doStuff and setInput and pass result
//         <Translation doStuff={doStuff} setInput={setInput} result={result} />
//         }
//     </div>
//   )
// }

// export default App