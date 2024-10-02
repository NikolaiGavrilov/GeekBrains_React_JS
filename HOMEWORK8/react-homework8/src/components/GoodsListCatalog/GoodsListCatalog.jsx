import React from 'react';
import './GoodsListCatalog.scss';
import GoodItem from '../GoodItem/GoodItem';

const GoodsListCatalog = ({ children}) => {

    const goodsData = [
        { id: 1,
        imgSrc: 'img/Rectangle 1.jpg', 
        altDescr: 'товар1',
        heading: "ELLERY X M'O CAPSULE",
        description: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.', 
        color: 'Blue',
        size: 'XL',
        price: 134,}, 
        { id: 2,
            imgSrc: 'img/Rectangle 8.png', 
        altDescr: 'товар8',
        heading: "ELLERY X M'O CAPSULE",
        description: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.', 
        color: 'Red',
        size: 'L',
        price: 45,}, 
        { id: 3,
            imgSrc: 'img/Rectangle 3.png', 
        altDescr: 'товар3',
        heading: "ELLERY X M'O CAPSULE",
        description: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.', 
        color: 'Blue',
        size: 'L',
        price: 76,}, 
        { id: 4,
            imgSrc: 'img/Rectangle 4.png', 
        altDescr: 'товар4',
        heading: "ELLERY X M'O CAPSULE",
        description: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.', 
        color: 'Blue',
        size: 'XS',
        price: 66,}, 
        { id: 5,
            imgSrc: 'img/Rectangle 9.png', 
        altDescr: 'товар9',
        heading: "ELLERY X M'O CAPSULE",
        description: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.', 
        color: 'White',
        size: 'XXL',
        price: 45,}, 
        { id: 6,
            imgSrc: 'img/Rectangle 11.png', 
        altDescr: 'товар11',
        heading: "ELLERY X M'O CAPSULE",
        description: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.', 
        color: 'White',
        size: 'M',
        price: 123,}, 
        { id: 7,
            imgSrc: 'img/Rectangle 7.png', 
        altDescr: 'товар7',
        heading: "ELLERY X M'O CAPSULE",
        description: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.', 
        color: 'White',
        size: 'M',
        price: 100,}, 
        { id: 8,
            imgSrc: 'img/Rectangle 10.png', 
        altDescr: 'товар10',
        heading: "ELLERY X M'O CAPSULE",
        description: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.', 
        color: 'Black',
        size: 'XL',
        price: 77,}, 
        { id: 9,
            imgSrc: 'img/Rectangle 12.png', 
        altDescr: 'товар12',
        heading: "ELLERY X M'O CAPSULE",
        description: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.', 
        color: 'Green',
        size: 'S',
        price: 52,}, 
    ]

    

    return (
        <div className="prod-catalogue__items-box">
        {goodsData.map(good => <GoodItem id={good.id} imgSrc={good.imgSrc} altDescr={good.altDescr} heading={good.heading} description={good.description} color={good.color} size={good.size} price={good.price}/>)}
        </div>
  )
}

export default GoodsListCatalog;