import React from 'react'

const ChangeMessageState = ({ handleMessage }) => {
    
const minhasMensagens = ["Oi", "Olá", "Tudo bem ?"]

  return (
    <React.Fragment>
        <div className="flex justify-center mt-5">
            <button className='flex-row p-3 bg-black w-56 foint-bold' onClick={() => handleMessage(minhasMensagens[0])}>1</button>
            <button className='flex-row p-3 bg-lime-500 w-56 text-black font-bold' onClick={() => handleMessage(minhasMensagens[1])}>2</button>
            <button className='flex-row p-3 bg-blue-600 w-56 font-bold' onClick={() => handleMessage(minhasMensagens[2])}>3</button>
        </div>
    </React.Fragment>
  )
}

export default ChangeMessageState