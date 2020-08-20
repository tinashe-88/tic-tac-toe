import React from 'react'
import 'tachyons'

const CustomButton = ({ children, ...props }) => (
  <button className="f6 link dim br1 ba bw1 ph3 pv2 mb2 dib black" 
    {...props}
  >
    {children}
  </button>
)

export default CustomButton