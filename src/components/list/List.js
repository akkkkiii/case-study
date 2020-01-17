import React, { useState, useEffect } from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import Cards from '../card/Cards';

const List = () => {

  const [list, setList] = useState([]);
  const [sortTitle, setSortTitle] = useState('Sort by ID');

  useEffect(() => {
    const fetchData = async () => {
      let options = {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
      }

      /**
       * I have used JSON server to mock the data of API https://rickandmortyapi.com/api/character/ because
       * I was unable to get the response from the API when I'm calling it from react. It's showing CORS error. Maybe it's not accessible from untrusted domain.
       * The file db.json can be found in the project directory which is used to get the mock data.
      **/

      const result = await fetch('http://localhost:3001/data', options);
      const response = await result.json();
      setList(response);
    }
    fetchData();
  }, []);

  const onSorting = (title) => {
    setSortTitle(title);
    let sortedList = list;
    sortedList.sort((a,b) => {
      if(title === 'Ascending') {
        return a.id - b.id;
      } else {
        return b.id - a.id;
      }
    });
    setList(sortedList);
  };

  return (
      <div className="main">
        <h3> List of Characters </h3>
        <div className="filterContainer">
        <DropdownButton title={sortTitle} className="sort"> 
          <Dropdown.Item as="button"><div onClick={(e) => onSorting(e.target.textContent)}>Ascending</div></Dropdown.Item>
          <Dropdown.Item as="button"><div onClick={(e) => onSorting(e.target.textContent)}>Descending</div></Dropdown.Item>
        </DropdownButton>
        </div>
        <Cards list={list} />
      </div>
  );
}

export default List;
