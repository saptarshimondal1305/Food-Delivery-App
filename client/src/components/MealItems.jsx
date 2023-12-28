import React, {useState, useCallback, useContext } from 'react'
import { currencyFormatter } from '../util/formatting';
import Button from '../UI/Button';
import CartContext from '../store/CartContext';
import NotificationComponent from './Notification';
import { backendUrl } from '../url';

function MealItems({meal}) {
  console.log(backendUrl)
  const cartCtx=useContext(CartContext);
  const [notification, setNotification] = useState(null);

  function handleAddMealToCart(){
    cartCtx.addItem(meal);
    setNotification(`Item added to cart : ${meal.name}`);

    // Set a timeout to remove the notification after a certain period
    setTimeout(() => {
      setNotification(null);
    }, 2000);
  }

  return (
    <>
    {notification && <NotificationComponent message={notification} />}

    <li className='meal-item'>
    <article>
        <img src={`${backendUrl}/${meal.image}`} alt={meal.name}></img>
        <div>
            <h3>{meal.name}</h3>
            <p className='meal-item-price'>{currencyFormatter.format(meal.price)}</p>
            <p className='meal-item-description'>{meal.description}</p>
        </div>
        <p className='meal-item-actions'>
            <Button onClick={handleAddMealToCart}>Add to Cart</Button>
        </p>       
    </article>
    </li>
    </>
  )
}

export default MealItems
