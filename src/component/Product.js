import React, { useState, useEffect } from "react";

import axios from "axios";
const Product = () => {

const [product_list,setProductList]=useState([]);

  useEffect(() => {
    handleProductData();
  }, []);

  const handleProductData = () => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        console.log(res.data);
        if(res.data){
            setProductList(res.data)
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
// console.log(product_list)
  return (
    <div className="container">
          <div className="title" style={{fontSize:"40px"}}>Product List</div>
      <div className="row">
           {product_list.map((data,index)=>{
    return(
       <div className="col-sm-4" key={index}>
        <div className="card my-2">
            <div className="card-body ">
            <img className=" image-container" src={data.image} alt="img..." />
            <div>{data.category}</div>
            <div className="title" style={{fontWeight:"bold"}}>{data.title}</div>
            <div className="description" style={{fontSize:"10px"}}>{data.description}</div>
            <div className="price" style={{fontWeight:"bold"}}> ${data.price}</div>
           <div> Rating :{data.rating.rate}</div>
           <div> Count :{data.rating.count}</div>
            </div>
        </div>
       </div>
    )
  })}
      </div>
    </div>
  );
};

export default Product;
