import './imageContainer.css'


const ImageContainer = ({image, title, author}) => {
  return (
    <div className='ImageContainer'  >
        <img src={image}  />
        <div className= 'footerImage'>
        <h3>{title}</h3>
        <p>{author}</p>
        </div>
    </div>
  )
}

export default ImageContainer
