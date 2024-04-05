function List({ data, handleUpdate, handleDelete, handleDeleteAll }) {
  return (
    <div className="list">
      <h3>Product List</h3>
      <div className="delete-all">
      <input type="checkbox" 
      /> 
      <p>Select All</p>       
      </div>
      {data.length === 0 ? (
        <p >Data tidak ditemukan</p>
      ) : (
        data.map((products, index) => {
          return (
            <>
              <div key={index} className="list-row">
                <input
                className="checkbox"
                type="checkbox"
                value={products.id}
                ></input>
                <div className="container-list">
                  <div className="product-list">
                    <h4>{products.productName}</h4>
                    <p>Price : {products.price}</p>
                  </div>
                  <div className="button-product">
                    <button onClick={() => handleUpdate(products.id)}>
                      Update
                    </button>
                    <button onClick={() => handleDelete(products.id)}>
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </>
          );
        })
      )}
      
      <button
      onClick={handleDeleteAll} 
      style={{marginTop : "10px", width: "50%", background: "Red", borderRadius: "8px"}}>Delete Selected</button>
    </div>
  );
}
export default List;
