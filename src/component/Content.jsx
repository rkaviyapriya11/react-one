import React from 'react'

const Content = () => {
    function Changename() {
        const names = ["Page", "Website"]
        const int = Math.floor(Math.random() * 2)
        return names[int]
    }
  return (
    <p>Welcome To My {Changename()}</p>
    
  )
}

export default Content