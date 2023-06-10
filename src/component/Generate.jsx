import React from 'react'
import Button from 'react-bootstrap/Button';

                        //received
function Generate({doStuff, onChangeHandler, result, handleSubmit }) {

    
      
  return (
    <div className='textarea'>
        {/* result output */}
        <div className='result'>{result.length > 0 ? result : ''}</div>
        {/* if clicked it will changed the value of text */}
        <form onSubmit={handleSubmit}>
            <textarea type='text' className="text"  
            onChange={onChangeHandler} />
            <button type='submit' className='button' >➢</button>
            {/* onClick={doStuff} */}
        </form>
        <Button variant="outline-secondary">
        <a href='/' className='back'>Back</a>
        </Button>
    </div>
  )
}

export default Generate;




// Working den 4/19
// import React from 'react'
//                         //received
// function Translation({doStuff, setInput, result}) {
//   return (
//     <div className='textarea'>
//             <div className='result'>{result.length > 0 ? result : ''}</div>
//         {/* if clicked it will changed the value of text */}
//     <textarea className="text" cols="45" rows="2" 
//     onChange={(e) => setInput(e.target.value)}></textarea> 
//     <button className='button' onClick={doStuff}>Do your stuff!</button>
//     {/* result output         show result if > 0 else nothing  */}

//     </div>
//   )
// }

// export default Translation

// Working
// import React from 'react'
//                         //received
// function Translation({doStuff, setInput, result}) {
//   return (
//     <div className='textarea'>
//             <div className='result'>{result.length > 0 ? result : ''}</div>
//         {/* if clicked it will changed the value of text */}
//     <textarea className="text" cols="45" rows="2" 
//     onChange={(e) => setInput(e.target.value)}></textarea> 
//     <button className='button' onClick={doStuff}>Do your stuff!</button>
//     {/* result output         show result if > 0 else nothing  */}

//     </div>
//   )
// }

// export default Translation