import React, { Component } from "react";
import Categories from "./components/categories";
import Products from "./components/products/products";
import cls from "./assets/style.module.css";
import axios from "axios";
export const BASE_URL = "https://dummyjson.com";

export interface IProducts {
	limit: number;
	products: IProduct[];
	skip: number;
	total: number;
}

export interface IProduct {
	brand: string;
	category: string;
	description: string;
	discountPercentage: number;
	id: number;
	images: string[];
	price: number;
	rating: number;
	stock: number;
	thumbnail: string;
	title: string;
}

interface appState {
	products: IProduct[];
	categories: any[];
	categorie: string;
  isList: boolean;
  isLoading: boolean;
  inputValue: any;
}
export default class App extends Component<{}, appState> {
	state: appState = {
		products: [
				{
					brand: "",
					category: "",
					description: "",
					discountPercentage: 0,
					id: 0,
					images: [],
					price: 0,
					rating: 0,
					stock: 0,
					thumbnail: "",
					title: "",
				}],
		categories: [],
		categorie: "all",
    isList: false,
    isLoading: false,
    inputValue: "",
	};

	handleCategorie = (categorie: string) => {
		this.setState({ categorie });
	};

  handleList = () => {
    this.setState({isList: !this.state.isList});
  }

  handleSearch = (value: string) => {
    console.log(value);
  }

	async componentDidMount() {
		const { data: categories } = await axios(`${BASE_URL}/products/categories`);
		const { data: products } = await axios(`${BASE_URL}/products`);
		this.setState({ categories: ["all", ...categories], products: products.products, isLoading: false });
		console.log(products.products);
	}

	render() {
		const { categories, categorie, products, isList, isLoading } = this.state;

    const filterProducts: IProduct[] = categorie === "all" ? products : products.filter((product) => categorie === product.category);

    // const searchProducts: IProduct[] = products.filter((product) => )


      return (
        <div className={`${cls.app}`}>
          {isLoading ?
          <p>Sorry, no products matched your search...</p> :
          <>
          <Categories categories={categories} onCategorie={this.handleCategorie} onSearch={this.handleSearch} />
          <div>
          <div className="buttons">
          <button className={!isList ? cls.active : ""} onClick={this.handleList}>
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M1 2.5A1.5 1.5 0 012.5 1h3A1.5 1.5 0 017 2.5v3A1.5 1.5 0 015.5 7h-3A1.5 1.5 0 011 5.5v-3zm8 0A1.5 1.5 0 0110.5 1h3A1.5 1.5 0 0115 2.5v3A1.5 1.5 0 0113.5 7h-3A1.5 1.5 0 019 5.5v-3zm-8 8A1.5 1.5 0 012.5 9h3A1.5 1.5 0 017 10.5v3A1.5 1.5 0 015.5 15h-3A1.5 1.5 0 011 13.5v-3zm8 0A1.5 1.5 0 0110.5 9h3a1.5 1.5 0 011.5 1.5v3a1.5 1.5 0 01-1.5 1.5h-3A1.5 1.5 0 019 13.5v-3z" clip-rule="evenodd"></path></svg>
          </button>
          <button className={isList ? cls.active : ""} onClick={this.handleList}>
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M2.5 11.5A.5.5 0 013 11h10a.5.5 0 010 1H3a.5.5 0 01-.5-.5zm0-4A.5.5 0 013 7h10a.5.5 0 010 1H3a.5.5 0 01-.5-.5zm0-4A.5.5 0 013 3h10a.5.5 0 010 1H3a.5.5 0 01-.5-.5z" clip-rule="evenodd"></path></svg>
          </button>
          </div>
          <Products products={filterProducts} isList={isList}/>
          </div>
          </>
          }
        </div>
      );
	}
}
