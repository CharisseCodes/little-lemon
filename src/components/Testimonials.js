import CardTestimonials from './CardTestimonials.js'

function Testimonials() {
    const testimonials = [
        {
            name: "Jessie",
            comment: "Awesome service.",
            image: require("../assets/greeksalad.jpg")
        },
        {
            name: "Charm",
            comment: "Great food!",
            image: require("../assets/greeksalad.jpg")
        },
        {
            name: "Honey",
            comment: "Definitely coming back.",
            image: require("../assets/greeksalad.jpg")
        },
        {
            name: "John",
            comment: "Best place in town.",
            image: require("../assets/greeksalad.jpg")
        },
    ]

    return (
        <>
            <article id="testimonials" className="testimonials">
                <div className="container">
                    <h4>Testimonials</h4>
                    <section className="testimonials-grid">
                        {testimonials.map((testimonial, index) => (
                            <CardTestimonials
                                key= {index}
                                image= {testimonial.image}
                                name= {testimonial.name}
                                comment= {testimonial.comment}
                            />
                        ))}
                    </section>
                </div>
            </article>
        </>
    )
}

export default Testimonials;