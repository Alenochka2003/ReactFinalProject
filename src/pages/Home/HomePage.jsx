

import React from 'react';

import CheckOutButton from '../../components/Buttons/CheckOutButton/CheckOutButton';
import CategoriesHeader from '../../components/CategoriesHeader/CategoriesHeader';
import DiscountForm from '../../components/DiscountForm/DiscountForm';
import Sale from '../../components/Sale/Sale';
import styles from './HomePage.module.css';

import backgroundImg from '../../assets/images/banner.jpg';
import animation from '../../assets/images/animation.gif'; 

function HomePage() {
  return (
    <div>
      <div className="HauptContainer">
        <div className={styles.contentStyle}>
          <h1>Amazing Discounts <br/> on Pets Products!</h1>
          <CheckOutButton />
        </div>
      </div>
      <div className={styles.mainBgStyle} style={{ backgroundImage: `url(${backgroundImg})` }}>
        <img src={animation} alt="Animation" className={styles.animationStyle} />
      </div>

      <CategoriesHeader />
      <DiscountForm />
      <Sale />
    </div>
  );
}

export default HomePage;

