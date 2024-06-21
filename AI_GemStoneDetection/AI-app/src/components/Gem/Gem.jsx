import React from 'react'
import "./Gem.css"


// eslint-disable-next-line react/prop-types
const Gem = ({url, prediction}) => {
   const gemNames = [
    'Alexandrite', 'Almandine', 'Amazonite', 'Amber', 'Amethyst',
    'Ametrine', 'Andalusite', 'Andradite', 'Aquamarine',
    'Aventurine Green', 'Aventurine Yellow', 'Benitoite', 'Beryl Golden',
    'Bixbite', 'Bloodstone', 'Blue Lace Agate', 'Brazilianite',
    'Carnelian', 'Cats Eye', 'Chalcedony', 'Chalcedony Blue',
    'Chrome Diopside', 'Chrysoberyl', 'Chrysocolla', 'Chrysoprase',
    'Citrine', 'Coral', 'Danburite', 'Diamond', 'Diaspore',
    'Dumortierite', 'Emerald', 'Fluorite', 'Garnet Red',
    'Goshenite', 'Grossular', 'Hessonite', 'Hiddenite', 'Iolite',
    'Jade', 'Jasper', 'Kunzite', 'Kyanite', 'Labradorite',
    'Lapis Lazuli', 'Larimar', 'Malachite', 'Moonstone', 'Morganite',
    'Onyx Black', 'Onyx Green', 'Onyx Red', 'Opal', 'Pearl',
    'Peridot', 'Prehnite', 'Pyrite', 'Pyrope', 'Quartz Beer',
    'Quartz Lemon', 'Quartz Rose', 'Quartz Rutilated', 'Quartz Smoky',
    'Rhodochrosite', 'Rhodolite', 'Rhodonite', 'Ruby',
    'Sapphire Blue', 'Sapphire Pink', 'Sapphire Purple', 'Sapphire Yellow',
    'Scapolite', 'Serpentine', 'Sodalite', 'Spessartite',
    'Sphene', 'Spinel', 'Spodumene', 'Sunstone', 'Tanzanite',
    'Tigers Eye', 'Topaz', 'Tourmaline', 'Tsavorite', 'Turquoise',
    'Variscite', 'Zircon', 'Zoisite',
  ];
  return (
    <div className='gem'>
        <img src = {url} alt = {"gem"} />
        <div className="right-section">
        <h1>
            <strong style = {{color:"teal", fontWeight:"bolder"}}>Gem Probability:</strong> {`${(prediction.probability[0][prediction.gem_class - 1] * 100).toFixed(2)}%`}
        </h1>

        <h1><strong style = {{color:"teal", fontWeight:"bolder"}}>Gem Name:</strong> {gemNames[prediction.gem_class-1]}</h1>
        </div>
    </div>
  )
}

export default Gem