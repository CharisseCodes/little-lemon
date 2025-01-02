import hero from './assets/restaurant.jpg';

function Header() {
    return (
        <>
            <article className="hero">
                <div className="container hero-flex">
                    <section className="hero-text">
                        <h1>Little Lemon</h1>
                        <h2>Chicago</h2>
                        <h3>Welcome to Little Lemon, where Mediterranean flavors come alive in the heart of Chicago, our family-owned restaurant serves up a delightful fusion of Italian, Greek, and Turkish cuisines.</h3>
                        <a className="cta">Reserve a table</a>
                    </section>
                    <section className="hero-image">
                        <img src= {hero}/>
                    </section>
                </div>
            </article>
        </>
    )
}

export default Header;