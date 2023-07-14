import  * as React from 'react';


function getTitle(title){
  return title;
}

function  App() {
  return (
  <div>
  <h1>Hello {getTitle('World')}</h1>

    <lable htmlFor="search"> Search: </lable>
    <input id="search" type = "text" />

    </div>
  );
}

export default App;
