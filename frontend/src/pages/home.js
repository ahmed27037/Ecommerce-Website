import React from 'react';
import NavigationBar from '../components/navigation-bar/navigationBar'; // Adjusted import
import Items from '../components/items/items';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

export default function Home({handleOnCart, cartitemcount}) {
  
  const [items, setItems] = useState([]);
  const [originalItems, setOriginalItems] = useState([]);
  const [query, setQuery] = useState("");
  


  useEffect(() => {
    const fetchItems = async () => {
      try {
        const { data } = await axios.get('https://shopsprint.onrender.com/api/items/');
  
        setItems(data);
        setOriginalItems(data); 
        console.log(data);
      } catch (error) {
        console.error('Error fetching items:', error.message);
        // Log the entire error object for more details
        console.error(error);
      }
    };
    fetchItems();
  }, []);


  
  

  function ClearFields() {

    setQuery('')
}

  const handleOnChange = (e, empty) => {
    if (empty) {
      setQuery('');

    }
    if (e) {
    setQuery(e.target.value);
    }
  };

  const handleOnClick = (e, customQuery) => {
    e.preventDefault();
    const queryToUse = customQuery !== undefined ? customQuery : query;

    if (!queryToUse) {
      setItems(originalItems);
    } else {
      const filteredItems = getFilteredItems(originalItems, queryToUse);
      setItems(filteredItems);
    }
  };
  function getFilteredItems(items, query) {
    const normalizedQuery = query.trim().toLowerCase();
    if (!normalizedQuery) {
      return items;
    } else {
      return items.filter(
        (item) =>
          item.product_name &&
          item.product_name.toLowerCase().includes(normalizedQuery)
      );
    }
  }

  





  return (
    <div className='container'
    style={{ background: 'linear-gradient(45deg, yellow, lightyellow)' }}>
      <NavigationBar
  cartitemcount={cartitemcount}
  handleOnClick={handleOnClick}
  handleOnChange={handleOnChange}
  ClearFields={ClearFields}
  setQuery = {setQuery}
  query = {query}
/>
      <Items
       items = {items}
       handleOnCart={handleOnCart}
        />
    </div>
  );
}

