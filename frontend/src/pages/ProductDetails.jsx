import { useParams, Link } from "react-router-dom";

function ProductDetails() {
    const { id } = useParams();

    return (
        <>
        <section className="product-details">
            <p className="eyebrow">WATCH DETAILS</p>
            <h1>Watch #{id}</h1>
            <p>Product information and pricing will appear here.</p>

            <div className="product-info">
                <h2>Classic Collection</h2>
                <p>Elegant design for every occasion.</p>
                <p className="price">Price: ₹12,999</p>
                <button type="button">Add to Wishlist</button>
            </div>

            <Link to="/products">Back to Products</Link>
        </section>

            <div className="product-reviews">
                <h2>Customer Reviews</h2>
                <p>5 stars: * * * * *</p>
                <p>Customers love the timeless design of this watch.</p>
            </div>

        </>
        
    );
}

export default ProductDetails;