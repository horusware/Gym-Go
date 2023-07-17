import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { orderByName} from '../../redux/actions';
import GoalFilterDropdown from './GoalFilterDropdown';
import 'tailwindcss/tailwind.css';
import SearchBar from '../SearchBar/SearchBar';

const FilterandSort = () => {
  const dispatch = useDispatch();
  
  const handlerSort = (e) => {
    e.preventDefault();
    dispatch(orderByName(e.target.value));
  };  

  return (
    <div class=" bg-green.claro mb-2 w-auto mt-8 mx-auto md:w-2/3 py-3 px-2 rounded-lg">
	
	  <div class="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-4 mt-4">    

    <select class="px-1 py-1 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm" onChange={handlerSort}>
      <option value="all">Ordena</option>
      <option value="a">A - Z</option>
      <option value="z">Z - A</option>
		</select>   
    <div>
      <SearchBar/>	  
	  </div>
	  </div>
	</div>
  
    
  );
};

export default FilterandSort;

