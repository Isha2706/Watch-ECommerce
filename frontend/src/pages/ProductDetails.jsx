
function ProductDetails() {
    const { id } = useParams();

    return (
        <>
            <p className="eyebrow">WATCH DETAILS</p>
            <h1>Watch #{id}</h1>
            <p>Product information and pricing will appear here.</p>

            <div className="product-reviews">
                <h2>Customer Reviews</h2>
                <p>5 stars: * * * * *</p>
                <p>Customers love the timeless design of this watch.</p>
            </div>
        </>

    );
}

export default ProductDetails;