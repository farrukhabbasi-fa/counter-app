// App.js file
import React from 'react'
import CustomHeading from './components/CustomHeading'
import CustomButton from './components/CustomButton'

const App = () => {
  return (
    <div>
      <CustomHeading level={1}/>
      <CustomHeading level={2}/>
      <CustomHeading level={3}/>
      <CustomHeading level={4}/>
      <CustomHeading level={5}/>
      <CustomHeading level={6}/>
      <CustomButton />
    </div>
  )
}


export default App