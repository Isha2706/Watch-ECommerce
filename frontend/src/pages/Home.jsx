import { Link } from "react-router-dom";

function Home() {
    return (
        <>
            <section className="hero">
                <p className="eyebrow">TIMELESS COLLECTION</p>

                <h1>Time is your most valuable luxury.</h1>

                <p>
                    Discover watches that combine timeless design
                    with exceptional craftsmanship.
                </p>

                <Link to="/products" className="button">
                    Explore Collection
                </Link>
            </section>
        </>

    );
}

export default Home;
