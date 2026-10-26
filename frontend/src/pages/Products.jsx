
const watches = [
    {
        id: 1,
        name: "Classic Silver",
        category: "Classic Collection",
        price: 4999,
        image:
            "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80",
    },
    {
        id: 2,
        name: "Midnight Black",
        category: "Modern Collection",
        price: 6499,
        image:
            "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=800&q=80",
    },
    {
        id: 3,
        name: "Golden Heritage",
        category: "Premium Collection",
        price: 7999,
        image:
            "https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=800&q=80",
    },
    {
        id: 4,
        name: "Minimal Elegance",
        category: "Minimal Collection",
        price: 5499,
        image:
            "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=800&q=80",
    },
];

function Products() {

    return (
        <>
            <main className="products-page">
                <section className="products-header">
                    <p className="eyebrow">TIMELESS STYLE</p>
                    <h1>Explore Our Watches</h1>
                    <p className="products-description">
                        Discover thoughtfully designed watches that complement
                        every moment and every occasion.
                    </p>
                </section>

                <section className="products-section">
                    <div className="products-section-header">
                        <h2>Our Collection</h2>
                        <p>{watches.length} products</p>
                    </div>

                    <div className="products-grid">
                        {watches.map((watch) => (
                            <article className="product-card" key={watch.id}>
                                <div className="product-image-wrapper">
                                    <img
                                        src={watch.image}
                                        alt={watch.name}
                                        className="product-image"
                                        loading="lazy"
                                    />
                                </div>

                                <div className="product-info">
                                    <p className="product-category">
                                        {watch.category}
                                    </p>

                                    <h3>{watch.name}</h3>

                                    <div className="product-bottom">
                                        <p className="product-price">
                                            ₹{watch.price.toLocaleString("en-IN")}
                                        </p>

                                        <button
                                            type="button"
                                            className="product-button"
                                            onClick={() =>
                                                console.log(
                                                    `Selected product: ${watch.name}`
                                                )
                                            }
                                        >
                                            View Details
                                        </button>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </section>
            </main>
        </>


    );
}

export default Products;