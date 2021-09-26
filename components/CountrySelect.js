import React from 'react'

function CountrySelect({ options, value, handleSelectChange }) {
   
    return (
     <select name="title" value={value ? value : ''} onChange={handleSelectChange}
     className="mt-1 px-4 py-3 block w-full rounded-md border-gray-400 shadow-sm focus:border-green-600 
                focus:ring focus:ring-green-600 focus:ring-opacity-50 " >
      {options.map(option =>
        <option key={option.id} value={option.id} className="text-white" >
          {option.country}
        </option>
      )}
    </select>
    )
}

export default CountrySelect
