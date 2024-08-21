/* eslint-disable react/prop-types */
import CarouselItem from "./CarouselItem"

const Carousel = ({carouselImages, index}) => {
  return (
    <div className="flex w-full transition-all duration-500" style={{
        transform: `translateX(-${index * 100}%)`
    }}>
        {carouselImages.map((image, index) => (
            <CarouselItem key={index} image={image}/>
        ))}
    </div>
  )
}

export default Carousel