import './scss/app.scss';
import React from 'react';

import Header from './components/Header';
import Categories from './components/Categories';
import Sort from './components/Sort';
import PizzaBlock from './components/PizzaBlock';
import PizzaBlockSkeleton from './components/PizzaBlock/PizzaBlockSkeleton';
// import pizzas from './assets/pizzas.json';


function App() {

  // React skeleton use for blank fake data
  const [pizzas, setPizzas] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    fetch('https://62cbabe13e924a012869fe7d.mockapi.io/items')
      .then((res) => res.json())
      .then((data) => {
        setPizzas(data);
        setIsLoading(false);
      });
  }, []);


  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <div className="content">
          <div className="container">
            <div className="content__top">
              <Categories />
              <Sort />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
              {
                isLoading ?
                  [...new Array(6)].map((_, index) => <PizzaBlockSkeleton key={index} />)
                  :
                  pizzas.map((pizza) => (<PizzaBlock key={pizza.id} title={pizza.name} price={pizza.price} imageUrl={pizza.imageUrl} sizes={pizza.sizes} types={pizza.types} />))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
