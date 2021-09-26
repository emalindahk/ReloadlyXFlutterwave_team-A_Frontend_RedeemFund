import React, { useState } from 'react'

function TextInputWithCount() {
 
    const [state, setState] = useState({
        lettersCount: 0,
        inputValue:'',
        countLimit: 60,
        errorLimit:false
    });

    const handleType = (e) => {
        const val = e.target.value;
        console.log(val.length, val)
        if(val.length <= state.countLimit){
            setState((prev) => {
            return{
              lettersCount:val.length,
              inputValue:val,
              errorLimit:false,
            }
          })
        }
        else{
            setState(prev => {
            return {
              inputValue: prev.inputValue,
              errorLimit:true
            }        
          })
        }
      }

     const handleChange = (e) => {
         const val = e.target.value;
         console.log(val.length, val)
            if(val.length > state.countLimit){
                setState(prev => {
                    return {
                      errorLimit:true
                    }        
                  })
            }
     }

    return (
        <div className={`w-72 ${state.errorLimit ? 'text-red-700' : ''}`}>
        <input type="text" value={state.inputValue} onChange={handleChange} placeholder="write some thing here.."/>
        <div className="w-full">
          <span className="relative block text-right text-md mt-3 text-black">{state.lettersCount}/{state.countLimit}</span>  
        </div>
      </div> 
    )
}

export default TextInputWithCount
