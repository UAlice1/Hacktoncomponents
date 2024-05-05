import React from 'react'

function Button() {
  return (
    <div>
       <div className="flex justify-center bg-slate-500 ">
        <img src='my-project/src/assets/pages/download.jpg'></img>
        <div className="flex flex-row">
          <h1 className="flex text-white left-48">Setting a DisplayName for you React<br/> styled-components</h1>
         
          <div className="card">
            <h2 className="text-black"><PiSmileyStickerBold/>I don't have a displayName</h2>
            <p>Go ahead and inspect me with the<br/>React Developer Tools!</p>
            <button className="button"><h1 className="text-white text-15">Don't click me</h1></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Button;