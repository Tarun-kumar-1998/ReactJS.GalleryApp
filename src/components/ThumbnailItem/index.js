const ThumbnailItem = props => {
  const {image, isActive, clickThumbnailItem} = props
  const {id, imageUrl, imageAltText, thumbnailAltText, thumbnailUrl} = image
  const thumbnailClassName = isActive ? `thumbnail active` : `thumbnail`
  const onClickThumbnail = () => {
    clickThumbnailItem(id)
  }

  return (
    <li className="thumbnail-list-item">
      <button
        type="button"
        className="thumbnail-button"
        onClick={onClickThumbnail}
      >
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={thumbnailClassName}
        />
      </button>
    </li>
  )
}
export default ThumbnailItem
