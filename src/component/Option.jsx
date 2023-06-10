import React, { useEffect, useState } from 'react';
import { FaTrash } from 'react-icons/fa';

import '../App.css'
import ErrorBoundary from './ErrorBoundary';


function Option({ arrayItems, selectOption }) {
    const [selectedCategory, setSelectedCategory] = useState('All Categories');
    const [history, setHistory] = useState([]);

    useEffect(() => {
        const storedHistory = JSON.parse(localStorage.getItem('chatHistory'));
        if (storedHistory) {
            setHistory(storedHistory);
        }
    }, []);
    
    

    const handleClick = (item) => {
        const newHistoryItem = {...item, selectedOption: item.option}; //to get item.name and item.option =selectOption
        const newHistory = [...history, newHistoryItem]; //to store it 
        setHistory(newHistory);
        localStorage.setItem('chatHistory', JSON.stringify(newHistory));
        selectOption(item.option);  //this will run after clicking the handleClick it will run the option we have in array
    };
    
    const CategoryHandle = (e) => {
        setSelectedCategory(e.target.value);
    };

    const handleDelete = (index) => {
        const newHistory = [...history];
        newHistory.splice(index, 1);
        setHistory(newHistory);
        localStorage.setItem('chatHistory', JSON.stringify(newHistory));
        localStorage.removeItem('generatedResult');
    };
    

    const filteredItems = selectedCategory === 'All Categories'
        ? arrayItems
        : arrayItems.filter((item) => item.categories.includes(selectedCategory));


   
    
    return (
        <div className='App'>
            <div className='side-bar'>
                <h3>His<span>tory</span></h3>
                <ul className='history-list'>
{/* // in the history list, render only the name of the item */}
{history.map((item, index) => (
    <ErrorBoundary fallback="Error">
        <li key={index} onClick={() => selectOption(item.selectedOption)}>
            {item.name}
            <button className='delete' onClick={(event) => { event.stopPropagation(); handleDelete(index) }}>
                <FaTrash />
            </button>
        </li>
    </ErrorBoundary>
))}
                </ul>
            </div>

            <select
                className="category"
                value={selectedCategory}
                onChange={CategoryHandle}
            >
                <option value="All Categories">All Categories</option>
                <option value="Answer">Answer</option>
                <option value="Code">Code</option>
                <option value="Conversation">Conversation</option>
                <option value="Generation">Generation</option>
                <option value="Translation">Translation</option>
                <option value="Transformation">Transformation</option>
            </select>
            <h1 className="heading">RevApp</h1>
            <div className='items'>
                {filteredItems.map((item) => {
                    return (
                    <div className='item' key={item.name} onClick={() => handleClick(item)}>
                        <h4>{item.name}</h4>
                        <p>{item.description}</p>
                    </div>
                    );
                })}
            </div>
      </div>
    );
  }
export default Option;

// import React, { useEffect, useState } from 'react';
// import { FaTrash } from 'react-icons/fa';

// import '../App.css'
// import ErrorBoundary from './ErrorBoundary';


// function Option({ arrayItems, selectOption, doStuff }) {
//     const [selectedCategory, setSelectedCategory] = useState('All Categories');
//     const [history, setHistory] = useState([]);

//     useEffect(() => {
//         const storedHistory = JSON.parse(localStorage.getItem('history'));
//         if (storedHistory) {
//             setHistory(storedHistory);
//         }
//     }, []);
    

//     useEffect(() => {
//         const storedHistory = JSON.parse(localStorage.getItem('history'));
//         if (storedHistory) {
//         setHistory(storedHistory);
//     }
//     }, []);
    
//     const handleClick = (item) => {
//         const newHistory = [...history, item.name];
//         setHistory(newHistory);
//         localStorage.setItem('history', JSON.stringify(newHistory));
//         selectOption(item.option);
//     };
    
//     const CategoryHandle = (e) => {
//         setSelectedCategory(e.target.value);
//     };

//     const handleDelete = (index) => {
//         const newHistory = [...history];
//         newHistory.splice(index, 1);
//         setHistory(newHistory);
//         localStorage.setItem('history', JSON.stringify(newHistory));
//     };

//     const filteredItems = selectedCategory === 'All Categories'
//         ? arrayItems
//         : arrayItems.filter((item) => item.categories.includes(selectedCategory));

//         const filteredHistory =
//         selectedCategory === 'All Categories'
//           ? history
//           : history.filter((item) => {
//               const matchedItem = arrayItems.find((e) => e.name === item);
//               return matchedItem && matchedItem.categories.includes(selectedCategory);
//             });

//     return (
//         <div className='App'>
//             <div className='side-bar'>
//                 <h3>His<span>tory</span></h3>
//                 <ul className='history-list'>
//                 {filteredHistory.map((item, index) => (
//             <ErrorBoundary key={index} fallback='Error'>
//               <li onClick={() => handleClick(arrayItems.find((e) => e.name === item))}>
//                             {item}
//                             <button className='delete' onClick={(event) => { event.stopPropagation(); handleDelete(index) }}>
//                             <FaTrash />
//                             </button>
//                         </li>
//                         </ErrorBoundary>
//                     ))}
//                 </ul>
//             </div>

//             <select
//                 className="category"
//                 value={selectedCategory}
//                 onChange={CategoryHandle}
//             >
//                 <option value="All Categories">All Categories</option>
//                 <option value="Answer">Answer</option>
//                 <option value="Code">Code</option>
//                 <option value="Conversation">Conversation</option>
//                 <option value="Generation">Generation</option>
//                 <option value="Translation">Translation</option>
//                 <option value="Transformation">Transformation</option>
//             </select>
//             <h1 className="heading">RevApp</h1>
//             <div className='items'>
//                 {filteredItems.map((item) => {
//                     return (
//                     <div className='item' key={item.name} onClick={() => handleClick(item)}>
//                         <h4>{item.name}</h4>
//                         <p>{item.description}</p>
//                     </div>
//                     );
//                 })}
//             </div>
//       </div>
//     );
//   }
  

// export default Option;

