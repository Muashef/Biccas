import React, {useState} from 'react'

const Footer = () => {
    const [isOn, setIsOn] = useState(false);

    const handleToggle = () => {
        setIsOn(!isOn)
    }
  return (
    <div className={`flex items-center cursor-pointer w-16 p-1 rounded-full ${
        isOn ? 'bg-blue-500' : 'bg-gray-300'
    }`}
        onClick={handleToggle}
    >
    <div
      className={ `h-6 w-6 rounded-full bg-white shadow-md transform duration-300 ease-in-out ${
        isOn ? 'translate-x-6' : ''
      }`}
    >

    </div>
    </div>
  )
}

export default Footer