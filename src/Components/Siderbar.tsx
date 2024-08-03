import React from 'react'
import { Link } from 'react-router-dom'

const Siderbar = () => {
  return (
    <div className="w-full sm:w-[20%] flex flex-row sm:flex-col gap-5 mt-0 p-5">
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