import React from 'react';
import HeadBurger from './assets/photo_5319010061009404922_x.jpg';
import FooterBurger from './assets/photo_5319010061009404918_x.jpg';
import tomato from './assets/photo_5319010061009404921_x.jpg';
import meatimg from './assets/photo_5319010061009404920_x.jpg';
import lettuceimg from './assets/photo_5319010061009404919_x.jpg';
import cheeseimg from './assets/cheese.jpg'
import '../App.css'
import {useState} from 'react';

export default function Hamburger() {
    const [meat, setMeat] = useState(0);
    const [lettuce, setLettuce] = useState(0);
    const [cheese, setCheese] = useState(0)
    const [totalPrice, setTotalPrice] = useState(150)

    const addMeat = (amount, price) => {
        if (meat + amount <= 3) {
            setMeat(meat + amount)
            setTotalPrice(totalPrice + amount * price)
        }
    }
    const addLettuce = (amount, price) => {
        if (lettuce + amount <= 3) {
            setLettuce(lettuce + amount)
            setTotalPrice(totalPrice + amount * price)
        }
    }
    const addCheese = (amount, price) => {
        if (cheese + amount <= 3) {
            setCheese(cheese + amount)
            setTotalPrice(totalPrice + amount * price)
        }
    }

    const renderIngredients = (ingredient, image) => {
        return Array.from(Array(ingredient)).map((_, index) => (
            <img key={index} src={image} alt={image}/>
        ));
    };


    return (

        <div className='container__burger'>
            <div className='price__block'>
                <h1>Total price: {totalPrice} som </h1>
            </div>

            <div className='burger'>
                <img src={HeadBurger} alt="headBurger"/>
                <img src={tomato} alt="tomato"/>
                {
                    renderIngredients(meat, meatimg)
                }
                {
                    renderIngredients(cheese, cheeseimg)
                }
                {
                    renderIngredients(lettuce, lettuceimg)
                }
                <img src={FooterBurger} alt="footerBurger"/>
            </div>

            <div className='btn__block'>
                <div className='btn__block_price'>
                    <p>Price 30</p>
                    <button onClick={() => addCheese(1, 30)}>Cheese</button>

                </div>
                <div className='btn__block_price'>
                    <p>Price 20</p>
                    <button onClick={() => addLettuce(1, 20)}>Lettuce</button>

                </div>
                <div className= 'btn__block_price'>
                    <p>Price: 30</p>
                    <button onClick={() => addMeat(1, 30)}>Meat</button>

                </div>
            </div>


        </div>

    )
}
