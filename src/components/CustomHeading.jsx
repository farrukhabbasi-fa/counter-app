import React from 'react'

const CustomHeading = ({level}) => {
  return (
    level === 1 ? <h1>Test</h1>
    : level ===2 ? <h2>TEst</h2>
    : level ===3 ? <h3>TEst</h3>
    : level ===4 ? <h4>TEst</h4>
    : level ===5 ? <h5>TEst</h5>
    : <h6>test</h6>
  )
}

export default CustomHeading