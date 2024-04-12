import { uid } from 'uid';
import './App.css';
import List from './components/List';
import { useState } from 'react';



function App() {

  const [products, setProducts] = useState([
    {
    id : 1,
    productName : "Asus",
    price : 5000000
    }
]);
  console.log(products)

  const [formData, setFormData] = useState({
    productName : "",
    price : ""
  });

  const [isUpdate, setIsUpdate] = useState({
    id : null,
    status : true
  });

  function handleChange (e) {
    let data = { ...formData };
    data[e.target.name] = e.target.value;
    setFormData(data);
  }

  function handleSubmit (e) {
    e.preventDefault()
    alert("ok")
    let data = [ ...products ];
    if(formData.productName === "") {
      return false
    }
    if(formData.price === "") {
      return false
    }
    if(isUpdate.status){
      data.forEach((product) => {
        if(product.id === isUpdate.id){
          product.productName = formData.productName;
          product.price = formData.price;
        }
      });
    }
    else{
      data.push({ id : uid(), productName : formData.productName, price : formData.price});
      
    }
    setIsUpdate({id : null, status: false})
    setProducts(data);
    setFormData({productName : "", price: ""})
  }

  function handleUpdete (id) {
    let data = [...products];
    let foundData = data.find((product)=> product.id === id);
    setFormData({productName : foundData.productName, price : foundData.price});
    setIsUpdate({id : id, status : true});
  }
  function handleDelete (id) {
    let data = [...products];
    let filteredData = data.filter((product) => product.id !== id)
    setProducts(filteredData)
  }

  return (
    <>
    <div className="App">
      <div className='container'>
          <form onSubmit={handleSubmit}>
            <label for="productName" >Product Name</label><br/>
            <input
            type="text"
            name="productName"
            onChange={handleChange}
            value={formData.productName}/><br/>
            <label for="price">Price</label><br/>
            <input
            type="text"
            name="price"
            onChange={handleChange}
            value={formData.price}/>
            <button className='save' >Save</button>
          </form><br/>
        </div>
      </div>
          <List handleDelete={handleDelete} handleUpdate={handleUpdete} data= {products} />
      
    </>
  );
}

export default App;
