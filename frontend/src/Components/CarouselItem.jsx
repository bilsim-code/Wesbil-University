import PropTypes from 'prop-types'

const CarouselItem = ({image}) => {
  return (
    <>
        <img src={image} alt="" className='w-full nav-ul-md:h-[530px] nav-ul-md:object-cover shrink-0' />
    </>
  )
}

CarouselItem.propTypes = {
    image: PropTypes.node.isRequired,
}

export default CarouselItem