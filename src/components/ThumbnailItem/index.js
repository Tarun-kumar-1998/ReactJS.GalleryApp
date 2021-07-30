const ThumbnailItem = props => {
  const {image} = props
  const {imageUrl, imageAltText, thumbnailAltText, thumbnailUrl} = image

  return <img className="img" src={thumbnailUrl} alt={thumbnailAltText} />
}
export default ThumbnailItem
