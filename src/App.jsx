import React from 'react'
import ListItems from "./components/ListItems"

function App() {

  return(
    <div className="container">
        <h1 className="container-title">
            Our Tours
        </h1>
        <hr className='container-sep'/>
        <ListItems />
    </div>
  )

}

export default App
