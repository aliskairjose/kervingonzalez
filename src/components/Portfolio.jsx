import React, { useContext } from 'react'
import { UserContext } from '../App';

export default function Portfolio() {
    const data = useContext(UserContext);
    const {title} = data.portfolio
  return (
    <div className="w-full min-h-max lg:px-24 px-4">
        <h1 className="title text-yellow-600">
            {title}
      </h1>
      <div>
        
      </div>
    </div>
  )
}
