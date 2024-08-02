import React from 'react'
import { Link } from 'react-router-dom'

const Siderbar = () => {
  return (
    <div className="w-[20%] flex flex-col gap-7 mt-0 p-5 max-[450px]:flex-row max-[450px]:w-[90%]">
    <div>
        <Link className="text-md font-bold text-blue-500" to="/">
            Contacts
        </Link>
    </div>
    <div>
        <Link className=" text-md font-bold text-blue-500" to="/chartsandmaps">
            Charts & Maps
        </Link>
    </div>
</div>
  )
}

export default Siderbar