function CardTestimonials(props) {
    return (
        <>
            <article className="testimonials-card">
                <h6>Rating:</h6>
                <section className="testimonials-image-flex">
                    <img src= {props.image} />
                    <h6> {props.name} </h6>
                </section>
                <p> {props.comment} </p>
            </article>
        </>
    )
}

export default CardTestimonials;