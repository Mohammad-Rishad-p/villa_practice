import React from 'react'

const NavbarButton = ({text}) => {
  return (
    <div>
        <button className='hover:text-red-500'> {text}</button>
    </div>
  )
}

export default NavbarButton