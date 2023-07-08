import React, { Component } from 'react'
import { IProduct, IProducts } from "../../app";
import cls from "../../assets/style.module.css";

interface productProps {
 product: IProduct;
 isList: boolean;
}

export default class Product extends Component<productProps> {
  render() {
   const { product, isList } = this.props;
   return (
    <>
   {!isList ?
   <div className={`${cls.product}`}>
    <img className={cls.img} src={product.images[0]} alt="" />
    <div className={`${cls.footer} d-flex`}>
     <h6 className="mb-0">{product.title}</h6>
     <p className={`mb-0 ${cls.price}`}>${product.price}</p>
    </div>
   </div>
   :
   <div className={`${cls.productList}`}>
    <img className={cls.img} src={product.images[0]} alt="" />
    <div className={`${cls.footer} d-flex`}>
     <div className={cls.info}>
     <h5 className='mb-0'>{product.title}</h5>
     <p className={`${cls.price} mb-0`}>${product.price}</p>
     <p>{product.description}</p>
     <button className={cls.detailsBtn}>details</button>
     </div>
    </div>
   </div>
   }
   </>
   )
}}
