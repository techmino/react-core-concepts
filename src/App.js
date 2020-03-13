import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    const nayoks =['Anwar', 'Jafar', 'Alamgir', 'Salman']
    const products =[{name: 'Photoshop', price: '$90.90' },
                     {name: 'illustrator', Price: '$100.90' },
                     {name: 'Premier', Price: '$120.90' } 
  ]

 
 
  
  return (
    <div className="App">
      <header className="App-header">
        <p>My first react paragraph</p>
        <Counter></Counter>
        <ul>
          {
            nayoks.map(nayok => <li>{nayok}</li>)
          }
          {
            products.map(product => <li>{product.name}</li>)
          }
          <li>{nayoks[0]}</li>
          <li>{nayoks[1]}</li>
          <li>{nayoks[2]}</li>
          <li>{nayoks[3]}</li>
        </ul>

        {
          products.map(product => <Product product={product}></Product>)
        }

         {/*<Product name= {products[0].name} price= {products[0].price} ></Product>*/}
        <Product product= {products[0]} ></Product>
        <Product product= {products[1]} ></Product>

        <Person name="Munna" job="football" ></Person>
        <Person name="Masum" job = "dorshok"></Person>
        
      </header>
    </div>
  );
} 
function Person(props){
  return(
    <div style ={{border: '2px solid red', width: '400px'}}>
      <h3>My Name: {props.name}</h3>
  <p>My Profession: {props.job}</p>
    </div>
  )
}

function Counter(){
  const[count, setCount] = useState(10);
  
  
  return(
    <div>
      <h1>Count: {count}</h1>
      
      <button onClick = {() => setCount(count - 1)}>Decrease</button>
      <button onClick = {() => setCount(count + 1)}>increase</button>
    </div>
  )

}

function Product(props){
  const productStyle = {
    border: '1px solid gray',
    borderRadius: '5px',
    backgroundColor: 'lightgray',
    width: '200px',
    height: '200px',
    float: 'left'

  }
const {name, price} = props.product;

  return(
    <div style={productStyle}>
{/* <h3>{props.name} </h3>
  <h5>{props.price}</h5> */}
  {/* <h3>{props.product.name}</h3>
  <h3>{props.product.price }</h3> */}

<h3>{name}</h3>
<h4>{price}</h4>
      <button>Buy Now</button>
    </div>
  )
}
export default App;
