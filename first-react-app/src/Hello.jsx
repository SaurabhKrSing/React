import React from 'react'

function Hello() {

  var myName = 'Saurabh';

  let fullName = () => {
    return 'Saurabh Kumar'
  }

  let number = 1;

  return (
    <div>
      <h3>This is the future Speaking. Number {number} AI Assistent. I am you master {myName} and your AI Assistant {fullName()}</h3>
    </div>
  )
}

export default Hello
