// import React, { useState } from 'react';
// import { Configuration, OpenAIApi } from '@openai/api';

// // Create a configuration object with your OpenAI API key
// const configuration = new Configuration({
//   apiKey:  import.meta.env.VITE_Open_AI_Key,// Replace with your actual API key
// });

// // Create an instance of the OpenAIApi using the configuration
// const openai = new OpenAIApi(configuration);

// // Your React component
// function MyComponent() {
//   const [questions, setQuestions] = useState([]);

//   const generateQuestions = async (input) => {
//     try {
//       const response = await openai.createQuestions({
//         prompt: input,
//         n: 5, // number of questions to generate
//       });
//       setQuestions(response.choices[0].questions);
//     } catch (error) {
//       console.error('Failed to generate questions:', error);
//     }
//   };

//   return (
//     <div>
//       {/* Render your UI */}
//       <button onClick={() => generateQuestions('Paste your sentence here')}>
//         Generate Questions
//       </button>
//       {/* Display the generated questions */}
//       <ul>
//         {questions.map((question, index) => (
//           <li key={index}>{question}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default MyComponent;
import React, { useState } from "react";
import axios from "axios";

function App() {
  const [sentence, setSentence] = useState("");
  const [questions, setQuestions] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const encodedParams = new URLSearchParams();
    encodedParams.append("topic", "Reviewer application");
    encodedParams.append("content", sentence);

    const options = {
      method: 'POST',
      url: 'https://prepai-generate-questions.p.rapidapi.com/getQuestions',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'X-RapidAPI-Key': '77d3885331mshb15aae4ea28e90fp15d24cjsne458b6fcea61',
        'X-RapidAPI-Host': 'prepai-generate-questions.p.rapidapi.com'
      },
      data: encodedParams
    };

    axios.request(options).then(function (response) {
      setQuestions(response.data);
    }).catch(function (error) {
      console.error(error);
    });
  };

  const handleInputChange = (event) => {
    setSentence(event.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Input Sentence:
          <input type="text" value={sentence} onChange={handleInputChange} />
        </label>
        <button type="submit">Generate Questions</button>
      </form>

      <h1>Generated Questions:</h1>
      <ul>
        {questions.map((question, index) => (
          <li key={index}>{question}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
