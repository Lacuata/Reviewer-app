import React, { useEffect, useState } from 'react';
import { FaTrash } from 'react-icons/fa';

import '../App.css'
import ErrorBoundary from './ErrorBoundary';

function Option({ arrayItems, selectOption, doStuff }) {
    const [selectedCategory, setSelectedCategory] = useState('All Categories');
    const [history, setHistory] = useState([]);

    useEffect(() => {
        const storedHistory = JSON.parse(localStorage.getItem('history'));
        if (storedHistory) {
            setHistory(storedHistory);
        }
    }, []);
    

    useEffect(() => {
        const storedHistory = JSON.parse(localStorage.getItem('history'));
        if (storedHistory) {
        setHistory(storedHistory);
    }
    }, []);
    
    const handleClick = (item) => {
        const newHistory = [...history, item.name];
        setHistory(newHistory);
        localStorage.setItem('history', JSON.stringify(newHistory));
        selectOption(item.option);
    };
    
    const CategoryHandle = (e) => {
        setSelectedCategory(e.target.value);
    };

    const handleDelete = (index) => {
        const newHistory = [...history];
        newHistory.splice(index, 1);
        setHistory(newHistory);
        localStorage.setItem('history', JSON.stringify(newHistory));
    };

    const filteredItems = selectedCategory === 'All Categories'
        ? arrayItems
        : arrayItems.filter((item) => item.categories.includes(selectedCategory));


    return (
        <div className='App'>
            <div className='side-bar'>
                <h3>His<span>tory</span></h3>
                <ul className='history-list'>
                    {history.map((item, index) => (
                        <ErrorBoundary fallback="Error">
                        <li key={index} onClick={() => selectOption(item)}>
                            {item}
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


// // Working
// import React, { useEffect, useState } from 'react';
// import '../App.css'

// function Option({ arrayItems, selectOption }) {
//     const [selectedCategory, setSelectedCategory] = useState('All Categories');
//     const [history, setHistory] = useState([]);
  
//     useEffect(() => {
//         const storedHistory = JSON.parse(localStorage.getItem('history'));
//         if (storedHistory) {
//           setHistory(storedHistory);
//         }
//       }, []);
      
  
//     useEffect(() => {
//       const storedHistory = JSON.parse(localStorage.getItem('history'));
//       if (storedHistory) {
//         setHistory(storedHistory);
//       }
//     }, []);
  
//     const handleItemClick = (item) => {
//         const newHistory = [...history, item.name];
//         setHistory(newHistory);
//         localStorage.setItem('history', JSON.stringify(newHistory));
//         selectOption(item.option);
//     };
    
  
//     const CategoryHandle = (e) => {
//       setSelectedCategory(e.target.value);
//     };

//     const handleDelete = (index) => {
//         const newHistory = [...history];
//         newHistory.splice(index, 1);
//         setHistory(newHistory);
//         localStorage.setItem('history', JSON.stringify(newHistory));
//       };

//           const filteredItems = selectedCategory === 'All Categories'
//       ? arrayItems
//       : arrayItems.filter((item) => item.categories.includes(selectedCategory));
      

//     return (
//       <div className='App'>
// <div className='side-bar'>
//   <button>History</button>
//   <ul className='history-list'>
//     {history.map((item, index) => (
//   <li key={index} onClick={() => selectOption(item)}>
//   {item}
//   <button className='delete' onClick={(event) => {event.stopPropagation(); handleDelete(index)}}>X</button>
// </li>
//     ))}
//   </ul>
// </div>

//         <select
//           className="category"
//           value={selectedCategory}
//           onChange={CategoryHandle}
//         >
//           <option value="All Categories">All Categories</option>
//           <option value="Answer">Answer</option>
//           <option value="Code">Code</option>
//           <option value="Conversation">Conversation</option>
//           <option value="Generation">Generation</option>
//           <option value="Translation">Translation</option>
//           <option value="Transformation">Transformation</option>
//         </select>
//         <h1 className="heading">RevApp</h1>
//         <div className='items'>
//           {filteredItems.map((item) => {
//             return (
//             <div className='item' key={item.name} onClick={() => handleItemClick(item)}>
//               <h4>{item.name}</h4>
//               <p>{item.description}</p>
//             </div>
//             );
//           })}

//         </div>
//       </div>
//     );
//   }
  

// export default Option;


// import React, { useState } from 'react';
// import '../App.css'

// function Option( {arrayItems, selectOption} ) {
//   const [selectedCategory, setSelectedCategory] = useState('All Categories');

//   const filteredItems = selectedCategory === 'All Categories'
//     ? arrayItems
//     : arrayItems.filter((item) => item.categories.includes(selectedCategory));

//   return (
//     <div>
//       <select
//         className="category"
//         value={selectedCategory}
//         onChange={(e) => setSelectedCategory(e.target.value)}
//       >
//         <option value="All Categories">All Categories</option>
//         <option value="Answer">Answer</option>
//         <option value="Code">Code</option>
//         <option value="Conversation">Conversation</option>
//         <option value="Generation">Generation</option>
//         <option value="Translation">Translation</option>
//         <option value="Transformation">Transformation</option>
//       </select>
//       <h1 className="heading">RevApp</h1>

//       <div className='items'>
//             {/* map arrayItems */}
//             {filteredItems.map((item) => {
//                 return (                            //if selectOption clicked it will send the option in item
// <div className='item' onClick={(e) => selectOption(item.option)}>
//                     <h4>{item.name}</h4>
//                         <p>{item.description}</p>
//                         </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// export default Option;

// Working

// import React from 'react'
//                     // props
// function Option( {arrayItems, selectOption} ) {
//   return (
//     <div>
//         <h1 className='heading'>RevApp</h1>

//         <div className='items'>
//             {/* map arrayItems */}
//             {arrayItems.map((item) => {
//                 return (                            //if selectOption clicked it will send the option in item
//                     <div className='item' onClick={(e) => selectOption(item.option)}>
//                         <h4>{item.name}</h4>
//                         <p>{item.description}</p>
//                         </div>
//                 );
//             })}
//         </div>
//     </div>
//   )
// }

// export default Option