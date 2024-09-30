import React from 'react'
import GoodItem from '../GoodItem/GoodItem'
import './GoodsList.scss'

const goodsData = [
    { imgSrc: 'img/Rectangle 1.jpg', 
    altDescr: 'товар1',
    heading: "ELLERY X M'O CAPSULE",
    description: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.', 
    price: '$52',}, 
    { imgSrc: 'img/Rectangle 2.png', 
    altDescr: 'товар2',
    heading: "ELLERY X M'O CAPSULE",
    description: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.', 
    price: '$52',}, 
    { imgSrc: 'img/Rectangle 3.png', 
    altDescr: 'товар3',
    heading: "ELLERY X M'O CAPSULE",
    description: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.', 
    price: '$52',}, 
    { imgSrc: 'img/Rectangle 4.png', 
    altDescr: 'товар4',
    heading: "ELLERY X M'O CAPSULE",
    description: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.', 
    price: '$52',}, 
    { imgSrc: 'img/Rectangle 5.png', 
    altDescr: 'товар5',
    heading: "ELLERY X M'O CAPSULE",
    description: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.', 
    price: '$52',}, 
    { imgSrc: 'img/Rectangle 6.png', 
    altDescr: 'товар6',
    heading: "ELLERY X M'O CAPSULE",
    description: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.', 
    price: '$52',}, 
]

const GoodsList = (children) => {
  return (
    <section className="catalogue_block center">
        <h2 className="heading_before_catalogue">Fetured Items</h2>
        <p className="description_before_catalogue">Shop for items based on what we featured in this week</p>
        <div className="catalogue">
            {goodsData.map(good => <GoodItem imgSrc={good.imgSrc} altDescr={good.altDescr} heading={good.heading} description={good.description} price={good.price}/>)}
            
        </div>
        <button className="catalogue_button">Browse All Product</button>
        </section>
  )
}

export default GoodsList