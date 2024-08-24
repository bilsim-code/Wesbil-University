import { useContext } from "react"
import { AppContext } from "./AppContext"

const EregistrarHome = () => {
const {unitDetails} = useContext(AppContext);
  return (
    <div className="">
      <h2 className="text-center text-red text-3xl mt-10 ">Registered Units</h2>
      {/* grid */}
      <div className="grid grid-cols-4 mt-10 place-items-center border-b max-430px:grid-cols-3
       max-430px:grid-rows-2 font-bold">
        <p>Unit</p>
        <p>Code</p>
        <p>View Unit</p>
        <p>Drop Unit</p>
      </div>

      {/* remove the items inside so they only appear once the student registers for the units */}
      {unitDetails.map((item, index) => (
        <div key={index} className="grid grid-cols-4 place-items-center border-b py-4 max-430px:grid-cols-3 max-430px:grid-rows-2 font-semibold">
        <p className="">{item.name}</p>
        <p>{item.code}</p>
        <p className="bg-gold p-2 rounded-md cursor-pointer text-royalblue hover:bg-gold-fade">View</p>
        <p className="bg-gold p-2 rounded-md cursor-pointer text-red hover:bg-gold-fade">Drop</p>
        </div>
      ))}
      
    </div>
  )
}

export default EregistrarHome