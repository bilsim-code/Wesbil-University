/* eslint-disable react/prop-types */

const FacultyCarousel = ({item,}) => {
  return (
    <div className="mx-2 h-[380px] mb-5 w-full">
        <img src={item.image} alt="" className="w-[200px] max-w-full h-[200px]" />
        <h3 className="font-medium capitalize py-2.5">{item.name}</h3>
        <h4 className="bg-gold w-[300px] max-w-full font-medium p-1 font-serif mb-2">{item.qualifications}</h4>
        <p className="font-medium pb-2">{item.role}</p>
    </div>
  )
}

export default FacultyCarousel