import CardSpecials from './CardSpecials.js'

function Specials() {
    const foods = [
        {
            name: "Greek salad",
            description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
            price: "$12.99",
            image: require("../assets/greeksalad.jpg")
        },
        {
            name: "Bruchetta",
            description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
            price: "$5.99",
            image: require("../assets/sandwich.jpg")
        },
        {
            name: "Lemon Dessert",
            description: "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
            price: "$4.99",
            image: require("../assets/lemondessert.jpg")
        }
    ]
    return (
        <>
            <article id="specials" className="specials">
                <div className="container">
                    <section className="specials-header-flex">
                        <h1>This week's specials</h1>
                        <a className="cta">Online Menu</a>
                    </section>
                    <section className="specials-flex">
                        {foods.map((food, index) => (
                            <CardSpecials
                                key= {index}
                                image= {food.image}
                                price= {food.price}
                                name= {food.name}
                                description= {food.description}
                            />
                        ))}
                    </section>
                </div>
            </article>
            <article className="about">ABOUT</article>
        </>
    )
}

export default Specials;