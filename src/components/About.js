import about1 from '../assets/about1.jpg';
import about2 from '../assets/about2.jpg';

function About() {
    return (
        <>
            <article className="about">
                <section className="container">
                    <section className="about-grid">
                        <section className="about-grid-text">
                            <h1>Little Lemon</h1>
                            <h2>Chicago</h2>
                            <p>Little Lemon is a family-owned Mediterranean restaurant in Chicago, Illinois, known for its rustic charm and relaxed atmosphere. With moderate prices and authentic flavors, Little Lemon offers a delightful culinary experience.</p>
                        </section>
                        <section className="about-grid-image">
                            <img src= {about1} className="image1" />
                            <img src= {about2} className="image2"/>
                        </section>
                    </section>
                </section>
            </article>
        </>

    )
}

export default About;

