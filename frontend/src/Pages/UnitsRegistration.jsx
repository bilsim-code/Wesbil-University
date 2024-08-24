import { useContext, useState } from "react"
import { AppContext } from "../Components/AppContext"
import {Check} from 'react-feather'

const UnitsRegistration = () => {
  const {unitDetails} = useContext(AppContext);
  const [registerChecked, setRegisterChecked] = useState(null);

  function handleRegister(index) {
    if(index === null) {
      setRegisterChecked(index)
    }
    else {
      setRegisterChecked(null);
    }
  }
  return (
    <div className="">
    <h2 className="text-center text-red text-3xl mt-10 ">Register for this semester&apos;s Units</h2>
    {/* grid */}
    <div className="grid grid-cols-4 mt-10 place-items-center border-b max-430px:grid-cols-3
     max-430px:grid-rows-2 font-bold">
      <p>Unit</p>
      <p>Code</p>
      <p>Register Unit</p>
      <p>Drop Unit</p>
    </div>

    {/* remove the items inside so they only appear once the student registers for the units */}
    {unitDetails.map((item, index) => (
      <div key={index} className="grid grid-cols-4 place-items-center border-b py-4 mb-3 max-430px:grid-cols-3 max-430px:grid-rows-2 font-semibold">
      <p className="">{item.name}</p>
      <p>{item.code}</p>
      <p className="bg-gold p-2 rounded-md cursor-pointer text-royalblue hover:bg-gold-fade" onClick={() => handleRegister(index)}>{registerChecked === index ? <Check/> : "Register"}</p>
      <p className="bg-gold p-2 rounded-md cursor-pointer text-red hover:bg-gold-fade">Drop</p>
      </div>
    ))}

    <button className="bg-royalblue grid mx-auto mt-10 p-2 w-1/2 max-w-[200px] mb-10 text-white font-bold uppercase rounded-md hover:text-gold shadow-md shadow-black">Confirm</button>
    
  </div>
  )
}

export default UnitsRegistration