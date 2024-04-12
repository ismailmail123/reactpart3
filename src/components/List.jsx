


function List ({data, handleUpdate, handleDelete}) {
    return(
        <div className="list">
            <h3>Product List</h3>
            { 
            
            data.length === 0 ? (
                <p>Data tidak ditemukan</p>
                ) : (            
                data.map((products) => {
                    return (
                        <div className="container-list"> 
                            <div className="product-list">
                                <h4>{products.productName}</h4>
                                <p>Price : {products.price}</p>
                            </div>
                            <div className="button-product">
                                <button onClick={() => handleUpdate(products.id)} >Update</button>
                                <button onClick={() => handleDelete(products.id)} >Delete</button>
                            </div>
                        </div>
                    )
                })
            )
            }
        </div>
    )
}
export default List;