// Write your code here
import Slider from 'react-slick'

import PlanetItem from '../PlanetItem'

import './index.css'

const PlanetsSlider = props => {
  const {planetsList} = props

  const settings = {
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <div className="bg-container" data-testid="planets">
      <h1 className="main-heading">PLANETS</h1>
      <ul className="ul-list">
        <Slider {...settings} className="slider">
          {planetsList.map(planet => (
            <PlanetItem key={planet.id} planetDetails={planet} />
          ))}
        </Slider>
      </ul>
    </div>
  )
}

export default PlanetsSlider
