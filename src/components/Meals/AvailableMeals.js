import Card from '../UI/Card';
import Card2 from '../UI/Card2';
import MealItem from './MealItem/MealItem';
import Pagination from './../Layout/Pagination';
import classes from './AvailableMeals.module.css';
import { useEffect, useState } from 'react';
// const DUMMY_MEALS = [
//   {
//     id: 'm1',
//     name: 'Sushi',
//     description: 'Finest fish and veggies',
//     price: 22.99,
//   },
//   {
//     id: 'm2',
//     name: 'Schnitzel',
//     description: 'A german specialty!',
//     price: 16.5,
//   },
//   {
//     id: 'm3',
//     name: 'Barbecue Burger',
//     description: 'American, raw, meaty',
//     price: 12.99,
//   },
//   {
//     id: 'm4',
//     name: 'Green Bowl',
//     description: 'Healthy...and green...',
//     price: 18.99,
//   },
// ];

const AvailableMeals = () => {

  //Fetching data
  const [products, setProducts] = useState([]);
 
  // Fetch all Products 
  const fetchProducts = async () => {
    const response = await fetch(
      "https://react-shopping-cart-67954.firebaseio.com/products.json"
    );
    const data = await response.json();
    if (data && data.products) {
      setProducts(data.products);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log(products);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(5);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = products.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  const mealsList = currentPosts.map((meal) => (
    <MealItem
      id= {meal.id}
      key={meal.id}
      name={meal.title}
      description={meal.style}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
        
      </Card>
      <Card2>
      <Pagination
    postsPerPage={postsPerPage}
    totalPosts={products.length}
    paginate={paginate}
  /></Card2>
    </section>
  );
};

export default AvailableMeals;
