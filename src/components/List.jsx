function List({
  data,
  deleteAll,
  handleUpdate,
  handleDelete,
  handleDeleteSelected,
  handleChecked,
  isChecked
}) {
  const locale = "id-ID";
  const option = {
    style: "currency",
    currency: "IDR",
  };
  return (
    <div className="list">
      <h3>Product List</h3>
      {data.length <= 1 ? (
        ""
      ) : (
        <>
          <div className="select-all">
            <input
              type="checkbox"
              name="allselect"
              checked={!data.some((product) => product?.isChecked !== true)}
              onChange={handleChecked}
            ></input>
            <p>Select All</p>
          </div>
        </>
      )}
      {data.length === 0 ? (
        <p>Data tidak ditemukan</p>
      ) : (
        data.map((products) => {
          return (
            <div key={products.id} className="list-row">
              <input
                className="checkbox"
                type="checkbox"
                // value={products.id}
                name={products.id}
                checked={products.isChecked || false}
                onChange={handleChecked}
              ></input>
              <div className="container-list">
                <div className="product-list">
                  <h4>{products.productName}</h4>
                  <p>
                    Price :{" "}
                    {new Intl.NumberFormat(locale, option).format(
                      products.price
                    )}
                  </p>
                </div>
                <div className="button-product">
                  <button
                    style={{ background: "lightBlue", borderRadius: "5px" }}
                    onClick={() => handleUpdate(products.id)}
                  >
                    Update
                  </button>
                  <button
                    style={{ background: "red", borderRadius: "5px" }}
                    onClick={() => handleDelete(products.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          );
        })
      )}
      {data.length === 0 ? (
        ""
      ) : (
        <div className="delete-option">
          <button onClick={handleDeleteSelected}>Delete Selected</button>
          {data.length <= 1 ? (
            ""
          ) : (
            <button onClick={deleteAll}>Delete All</button>
          )}
        </div>
      )}
    </div>
  );
}
export default List;
