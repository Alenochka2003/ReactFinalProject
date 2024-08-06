import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import styles from './CategoriesHeader.module.css';

const CategoriesHeader = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('http://localhost:3333/categories/all');
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="HauptContainer">
      <div className={styles.categoriesBlock}>

        <div className="titleContainer">
          <h2>Categories</h2>
          <div className="titleContainerLine"></div>
          <Link to="/categories" className="titleContainerButton">
            All categories
          </Link>
        </div>

        <ul className={styles.setCategoriesContainer}>
          {categories.slice(0, 4).map((category) => (
            <li key={category.id} className={styles.setCategoriesItem}>
              <Link to={`/categories/${category.id}`} className={styles.categoryItem}>
                <img src={`http://localhost:3333${category.image}`} alt={category.title} className={styles.categoryImage} />
                <h3 className={styles.categoryName}>
                  {category.title}
                </h3>
              </Link>
            </li>
          ))}
        </ul>

      </div>
    </div>
  );
};

export default CategoriesHeader;