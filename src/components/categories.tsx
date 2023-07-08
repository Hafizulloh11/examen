import React, { Component, RefObject } from 'react'
import cls from "../assets/style.module.css";

interface categoriesProps {
 categories: any[];
 onCategorie: (category: string) => void;
 onSearch: (value: any) => void;
}

export default class Categories extends Component<categoriesProps> {
  render() {
   const { categories, onCategorie } = this.props;
    return (
      <div className={cls.categories}>
       <input type="text" className={cls.searchInput} placeholder='Search'/>
       <h3>Categories</h3>
       {categories.map((categorie, idx) => (
        <p key={idx} className={`${cls.cp} mb-0`} onClick={() => onCategorie(categorie)}>{categorie}</p>
       ))}
      </div>
    )
  }
}
