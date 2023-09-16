// Write your code here

import './index.css'

const PlanetItem = props => {
  const {planetDetails} = props
  const {name, imageUrl, description} = planetDetails

  return (
    <li className="li-container">
      <img src={imageUrl} alt={`planet ${name}`} className="img" />
      <h2 className="name">{name}</h2>
      <p className="description">{description}</p>
    </li>
  )
}

export default PlanetItem
