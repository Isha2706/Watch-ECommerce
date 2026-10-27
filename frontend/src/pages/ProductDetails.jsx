import { useParams, Link } from "react-router-dom";

function ProductDetails() {
    const { id } = useParams();

    return (
        <>
        <section className="products-page">
            <p className="eyebrow">WATCH DETAILS</p>
            <h1>Watch #{id}</h1>
            <p>Product information and pricing will appear here.</p>

            <div className="product-info">
                <h2>Classic Collection</h2>
                <p>Elegant design for every occasion.</p>
                <p className="product-price">Price: ₹12,999</p>
                <>
                <button className="button" type="button">
                    Add to Wishlist
                </button>
                
                <Link className="button" to="/cart" type="button">
                Add to Cart
            </Link>
                </>
                
            </div>

            
        </section>
        </>
        
    );
}

export default ProductDetails;