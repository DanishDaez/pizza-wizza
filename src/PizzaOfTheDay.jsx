import {usePizzaOfTheDay} from "./usePizzaOfTheDay";

const intl = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
})

const PizzaOfTheDay = ()=>{
    const pizzaOfTheDay = usePizzaOfTheDay();
    if(!pizzaOfTheDay){
        return <div>Loading...</div>
    }

    return (
        <div className="pizza-of-the-day">
            <h2>Pizza of The Day</h2>
            <div>
                <div className="pizza-of-the-day-info">
                    <h3>{pizzaOfTheDay.name}</h3>
                    <p>{pizzaOfTheDay.description}</p>
                    <div className="pizza-of-the-day-price">
                        From: {intl.format(pizzaOfTheDay.sizes.S)}
                    </div>
                    <img src={pizzaOfTheDay.image} alt={pizzaOfTheDay.name}  className="pizza-of-the-day-image"/>
                </div>
            </div>
        </div>
    )

}

export default PizzaOfTheDay