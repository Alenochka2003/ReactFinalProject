import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import styles from './Sale.module.css';
import ProductCard from '../ProductCard/ProductCard';

const Sale = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:3333/products/all');
        // Фильтруем товары, чтобы оставить только те, у которых есть discont_price
        const discountedProducts = response.data.filter(product => product.discont_price);
        // Ограничиваем количество товаров до 4
        setProducts(discountedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="HauptContainer">
      <div className={styles.saleBlock}>
        
        <div className="titleContainer">
          <h2>Sale</h2>
          <div className="titleContainerLine"></div>
          <Link to="/discounted-products" className="titleContainerButton">
            All sales
          </Link>
        </div>

        <ul className={styles.gridProductContainer}>
          {products.slice(0, 4).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ul>
        
      </div>
    </div>
  );
};

export default Sale;
