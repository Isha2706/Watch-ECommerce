import { Link } from "react-router-dom";

function Home() {

    const categories = [
"Classic Watches",
"Luxury Watches",
"Sports Watches",
];

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

        <section className="content-page">
            <p className="eyebrow">FIND YOUR STYLE</p>
            <h2>Shop by Category</h2>

            <div className="category-list">
                {categories.map((category) => (
                    <Link
                        to="/products"
                        className="category-card"
                        key={category}
                    >
                        <h3>{category}</h3>
                        <span>Explore Collection →</span>
                    </Link>
                ))}
            </div>
        </section>
        </>

    );
}

export default Home;
