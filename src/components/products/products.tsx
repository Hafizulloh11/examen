import React, { Component } from "react";
import { IProduct, IProducts } from "../../app";
import cls from "../../assets/style.module.css";
import Product from './product';

interface productsProps {
	products: IProduct[];
  isList: boolean;
}

export default class Products extends Component<productsProps> {
	render() {
		const { products, isList } = this.props;
		return (
		<div className={`${!isList ? cls.products : cls.list}`}>
				{products.map((product, idx) => (
					<Product product={product} isList={isList}/>
				))}
			</div>
		);
	}
}
