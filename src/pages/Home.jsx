import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock';
import PizzaBlockSkeleton from '../components/PizzaBlock/PizzaBlockSkeleton';
import Pagination from '../components/Pagination';
import { SearchContext } from '../App';
import { setCategoryId, setCurrentPage } from '../redux/slices/filterSlice';

const Home = () => {
  // React skeleton use for blank fake data
  const { searchValue } = React.useContext(SearchContext);
  const [pizzas, setPizzas] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  const dispatch = useDispatch();
  const { categoryId, sort, currentPage } = useSelector(
    (store) => store.filter
  );

  React.useEffect(() => {
    setIsLoading(true);

    const sortBy = sort.sortProperty;
    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const order = 'asc';
    const search = searchValue ? `&search=${searchValue}` : '';

    axios
      .get(
        `https://62cbabe13e924a012869fe7d.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`
      )
      .then((response) => {
        setPizzas(response.data);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [categoryId, sort.sortProperty, searchValue, currentPage]);

  const onChangePage = (number) => {
    dispatch(setCurrentPage(number));
  };

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          value={categoryId}
          onChangeCategory={(index) => dispatch(setCategoryId(index))}
        />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(6)].map((_, index) => (
              <PizzaBlockSkeleton key={index} />
            ))
          : pizzas.map((pizza) => (
              <PizzaBlock
                key={pizza.id}
                title={pizza.name}
                price={pizza.price}
                imageUrl={pizza.imageUrl}
                sizes={pizza.sizes}
                types={pizza.types}
              />
            ))}
      </div>
      <Pagination currentPage={currentPage} onChangePage={onChangePage} />
    </div>
  );
};

export default Home;
