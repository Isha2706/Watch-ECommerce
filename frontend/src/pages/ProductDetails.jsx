
function ProductDetails() {
    const { id } = useParams();

    return (
        <>
            <p className="eyebrow">WATCH DETAILS</p>
            <h1>Watch #{id}</h1>
            <p>Product information and pricing will appear here.</p>
        </>

    );
}

export default ProductDetails;