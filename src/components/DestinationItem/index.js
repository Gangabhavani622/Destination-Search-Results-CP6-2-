// Write your code here

const DestinationItem = props => {
  const {destinationItem} = props
  const {name, imgUrl} = destinationItem

  return (
    <li className="list-styling">
      <img src={imgUrl} alt={name} className="image" />
      <p className="image-label">{name}</p>
    </li>
  )
}

export default DestinationItem
