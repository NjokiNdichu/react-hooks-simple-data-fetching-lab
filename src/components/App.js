// create your App component here
import React, { useState, useEffect }from 'react'
 

function App() {
    const [dogs, setDogs] = useState('')
    const [isLoaded, setIsLoaded ] = useState(false)
    useEffect (() => {
        fetch('https://dog.ceo/api/breeds/image/random')
        .then ((response) => response.json())
        .then ((data) => { 
            setDogs(data.message)
            setIsLoaded(true) 
    })

        }, [] )

        if (!isLoaded) return <h3>Loading...</h3>
    
  return (
    <div>
      <img src = {dogs} alt= "A Random Dog"/>
    </div>
  )
}

export default App
