import delivery from '../assets/delivery.svg';

function CardSpecials(props) {
    return (
        <>
            <article className="specials-card">
                <img src= {props.image} />
                <section className="specials-card-text">
                    <section className="specials-card-flex">
                        <h5> {props.name} </h5>
                        <h6> {props.price} </h6>
                    </section>
                    <p> {props.description} </p>
                    <section className="specials-delivery-flex">
                        <h6>Order a delivery</h6>
                        <span><img src={delivery}/></span>
                    </section>
                </section>
            </article>
        </>
    )
}

export default CardSpecials;