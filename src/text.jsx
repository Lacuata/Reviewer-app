import React, { useState } from 'react'
// import from openai
import { Configuration, OpenAIApi } from 'openai'
import Option from './components/Option'
import { arrayItems } from './Options/index'
import Translation from './components/Generate'
import './App.css'

function App() {
    // required key to connect in OpenAi
    const configuration = new Configuration({
        apiKey: import.meta.env.VITE_Open_AI_Key,
      });

      const openai = new OpenAIApi(configuration);
    // translation
    const [result, setResult] = useState('');
const [option, setOption] = useState({}); //{objct}
const [input, setInput] = useState(''); //pass setInput in translation
// for result 

const selectOption = (option) => {
    // passing all option in item in array 
setOption(option);
}

// translation
const doStuff = async () => {
    // console.log option to check if working and passing all input in textarea
//   setOption({...option, prompt: input })
  let object = {...option, prompt: input };
//   console.log(object)

  const response = await openai.createCompletion(object);
  setResult(response.data.choices[0].text); //store result 

}
// convert to array
// console.log(option)
// console.log(Object.values(option).length);


  return (
    <div className='App'>
        {/* pass arrayItems props and selectOption to Option */}
        {/* <Option arrayItems={arrayItems} selectOption={selectOption}/>
        <Translation /> */}
        {/* if object values === 0 show the Option else Translation */}
        {Object.values(option).length === 0 ?  <Option arrayItems={arrayItems} selectOption={selectOption}/> : 
        // pass the props doStuff and setInput and pass result
        <Translation doStuff={doStuff} setInput={setInput} result={result} />
        }
    </div>
  )
}

export default App