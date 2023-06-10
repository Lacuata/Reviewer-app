export const arrayItems =[
    {
    name: 'Question maker',
    id: 'question',
    description: 'Generate question multiple choice',
    categories:'Transformation, Generation',
    option: {
        model: "text-davinci-003",
        prompt: "Provide a paragraph of text on a topic of your choice, and ask the AI to generate multiple choice questions based on that text. For example, you could provide a paragraph about the history of the United States, and ask the AI to generate a multiple choice question about the American Revolution. The AI will use the information in the text to create a question and four answer options (A, B, C, D), which you can use to test your knowledge on the topic.",
        // prompt: "Generate  a questions multiple choices from this text or sentence:",
        temperature: 0.3,
        max_tokens: 64,
        top_p: 1.0,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
    }
},
    ,{
    name: 'True or False',
    id: 'True or false',
    description: 'Answer the question True or False',
    categories: 'Answer, Generation, Conversation',
    option: {
        model: "text-davinci-003",
        prompt: "Write a statement that could be either true or false, and ask the AI to determine whether it is true or false. For example: 'The earth is flat.' Is this statement true or false?",
        max_tokens: 100,
        top_p: 1,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
        }
},
{
    name: 'Chat',
    id: 'chat',
    description: 'Open ended Conversation with an AI assistant.',
    categories:'Conversation, Generation',
    option: {
        model: "text-davinci-003",
        prompt: "The following is a conversation with an AI assistant. The assistant is helpful, creative, clever, and very friendly. Imagine that you are a customer who wants to cancel their subscription to a streaming service. Start the conversation with the AI by saying, 'Hello, who are you?' and see where the conversation takes you.",
        temperature: 0.9,
        max_tokens: 150,
        top_p: 1,
        frequency_penalty: 0.0,
        presence_penalty: 0.6,
        stop: [" Human:", " AI:"],
    }
},
{
    name: 'Grammar Correction',
    id: 'grammarCorrection',
    description: 'Corrects sentence into standard English.',
    categories:'Transformation, Generation',
    option : {  
        model: "text-davinci-003",
        prompt: 'Generate question from this text or sentenced ',
        temperature: 0,
        max_tokens: 60,
        top_p: 1.0,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
    }
},
{
    name: 'English to other languages',
    id: 'translate',
    description: 'Translates English text into French, Spanish ',
    categories:'Transformation, Generation',
    option: {
        model: "text-davinci-003",
        temperature: 0.3,
        max_tokens: 100,
        top_p: 1.0,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
    }
},
{
    name: 'Summarize for a 2nd grader',
    id: 'summarize',
    description: 'Translates difficult text into simpler concepts.',
    categories:'Transformation, Generation',
     option: {
    model: "text-davinci-003",
    prompt: "Summarize this for a second-grade student:\n\nJupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass one-thousandth that of the Sun, but two-and-a-half times that of all the other planets in the Solar System combined. Jupiter is one of the brightest objects visible to the naked eye in the night sky, and has been known to ancient civilizations since before recorded history. It is named after the Roman god Jupiter.[19] When viewed from Earth, Jupiter can be bright enough for its reflected light to cast visible shadows,[20] and is on average the third-brightest natural object in the night sky after the Moon and Venus.",
    temperature: 0.7,
    max_tokens: 64,
    top_p: 1.0,
    frequency_penalty: 0.0,
    presence_penalty: 0.0,
     }
},
{
    name: 'Explain code',
    id: 'explainCode',
    description: 'Explain a complicated piece of code.',
    categories:'Code, Transformation',
    option: {
        model: "text-davinci-003",
        temperature: 0,
        max_tokens: 150,
        top_p: 1.0,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
        stop: ["\"\"\""],
    }
},
{
    name: 'Essay Outline',
    id: 'Essay',
    description: 'Generate an outline for a research topic.',
    categories: 'Generation',
    option: {
        model: "text-davinci-003",
        prompt: "Create an outline for an essay about Nikola Tesla and his contributions to technology:",
        temperature: 0.3,
        max_tokens: 150,
        top_p: 1.0,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
    }
},

{
    name: 'Study Notes',
    id: 'study',
    description: 'Provide a topic and get study notes.',
    categories: 'Generation',
    option: {
        model: "text-davinci-003",
        prompt: "What are 5 key points I should know when studying Ancient Rome?",
        temperature: 0.3,
        max_tokens: 150,
        top_p: 1.0,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
    }
},
{
    name: 'Interview Questions',
    id: 'interview',
    description: 'Create interview questions.',
    categories: 'Generation',
    option: {
        model: "text-davinci-003",
        prompt: "Create a list of 8 questions for my interview with a science fiction author:",
        temperature: 0.5,
        max_tokens: 150,
        top_p: 1.0,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
    }
},
{
    name: 'Science fiction book list maker',
    id: 'book',
    description: 'List of science fiction books and stops when it reaches 10.',
    categories: 'Generation',

    option: {
        model: "text-davinci-003",
        prompt: "List 10 science fiction books:",
        temperature: 0.5,
        max_tokens: 200,
        top_p: 1.0,
        frequency_penalty: 0.52,
        presence_penalty: 0.5,
        stop: ["11."],
    }
},
{
    name: 'JavaScript one line function',
    id: 'js',
    description: 'Turn a JavaScript function into a one liner.',
    categories: 'Code, Transformation, Translation',
    option: {
        model: "text-davinci-003",
        prompt: "Use list comprehension to convert this into one line of JavaScript:\n\ndogs.forEach((dog) => {\n    car.push(dog);\n});\n\nJavaScript one line version:",
        temperature: 0,
        max_tokens: 60,
        top_p: 1.0,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
        stop: [";"],
    }
},
];
// Working
// export const arrayItems =[{
//     name: 'Q&A',
//     id: 'q&a',
//     description: 'Generate Multiple question based on ',
//     option: {
//         model: "text-davinci-003",
//         temperature: 0,
//         max_tokens: 100,
//         frequency_penalty: 0.0,
//         presence_penalty: 0.0,
//     }
// },
// {
//     name: 'Chat',
//     id: 'chat',
//     description: 'Open ended Conversation with an AI assistant.',
//     option: {
//         model: "text-davinci-003",
//         prompt: "The following is a conversation with an AI assistant. The assistant is helpful, creative, clever, and very friendly.\n\nHuman: Hello, who are you?\nAI: I am an AI created by OpenAI. How can I help you today?\nHuman: I'd like to cancel my subscription.\nAI:",
//         temperature: 0.9,
//         max_tokens: 150,
//         top_p: 1,
//         frequency_penalty: 0.0,
//         presence_penalty: 0.6,
//         stop: [" Human:", " AI:"],
//     }
// },
// {
//     name: 'Grammar Correction',
//     id: 'grammarCorrection',
//     description: 'Corrects sentence into standard English.',
//     option : {
//         model: "text-davinci-003",
//         temperature: 0,
//         max_tokens: 60,
//         top_p: 1.0,
//         frequency_penalty: 0.0,
//         presence_penalty: 0.0,
//     }
// },
// {
//     name: 'English to other languages',
//     id: 'translate',
//     description: 'Translates English text into French, Spanish ',
//     option: {
//         model: "text-davinci-003",
//         temperature: 0.3,
//         max_tokens: 100,
//         top_p: 1.0,
//         frequency_penalty: 0.0,
//         presence_penalty: 0.0,
//     }
// },
// {
//     name: 'Movie to Emoji',
//     id: 'movieToEmoji',
//     description: 'Convert movie titles into emoji.',
//     option: {
//         model: "text-davinci-003",
//         temperature: 0.8,
//         max_tokens: 60,
//         top_p: 1.0,
//         frequency_penalty: 0.0,
//         presence_penalty: 0.0,
//         stop: ["\n"],
//     }
// },
// {
//     name: 'Explain code',
//     id: 'explainCode',
//     description: 'Explain a complicated piece of code.',
//     option: {
//         model: "text-davinci-003",
//         temperature: 0,
//         max_tokens: 150,
//         top_p: 1.0,
//         frequency_penalty: 0.0,
//         presence_penalty: 0.0,
//         stop: ["\"\"\""],
//     }
// },
// {
//     name: 'Javascript to Python',
//     id: 'jstopy',
//     description: 'Convert simple Javascript expression into Python',
//     option: {
//         model: "text-davinci-003",
//         temperature: 0,
//         max_tokens: 64,
//         top_p: 1.0,
//         frequency_penalty: 0.0,
//         presence_penalty: 0.0,
//     }
// },
// ];