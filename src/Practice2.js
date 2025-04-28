import React, { useEffect, useState } from "react";
import { people } from "./data";

const Practice2 = () => {
  const [data2, setData] = useState(people);
  const [itemsPerPage, setItemsPerPage] = useState(20);
  const [totalPages, setTotalPages] = useState(
    Math.ceil(people.length / itemsPerPage)
  );
  const [page, setPage] = useState(0);
  const [previousButton, setPreviousButton] = useState(true);
  const [nextButton, setNextButton] = useState(false);

  const handleChange = (e) => {

    setItemsPerPage(e.target.value);
    const data1 = people.slice(0, e.target.value);
    setData(data1);
    setTotalPages(Math.ceil(people.length / e.target.value));
    setPage(0);
    setPreviousButton(true);
    setNextButton(false);
  };

  const handleNext = () => {
    let page1 = page + 1;
    let endIndex = Number(page1 * itemsPerPage + parseInt(itemsPerPage));

    const data1 = people.slice(page1 * itemsPerPage, endIndex);
    setData(data1);

    setPage(page + 1);
    setPreviousButton(false);

    if (page1 + 1 == totalPages) {
      setNextButton(true);
    }
  };

  const handlePrevious = () => {
    let page1 = page - 1;
    let endIndex = Number(page1 * itemsPerPage + parseInt(itemsPerPage));

    const data1 = people.slice(page1 * itemsPerPage, endIndex);
    setData(data1);

    setPage(page - 1);

    if (page1 == 0) {
      setPreviousButton(true);
      setNextButton(false);
    }
  };
  useEffect(() => {
    if (itemsPerPage == people.length) {
      setNextButton(true);
    }
  }, []);
  return (
    <>
      <div className="container">
        <header className="header">
          <h1>People List</h1>
        </header>

        <div className="table-container">
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Age</th>
              </tr>
            </thead>
            <tbody>
              {data2.map((person) => (
                <tr key={person.id}>
                  <td>{person.id}</td>
                  <td>{person.name}</td>
                  <td>{person.age}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="pagination">
          <button disabled={previousButton} onClick={handlePrevious}>
            Previous
          </button>
          <span>
            Page {page + 1} of {totalPages}
          </span>
          <button className="button" disabled={nextButton} onClick={handleNext}>
            Next
          </button>
        </div>

        <div className="items-per-page">
          <label htmlFor="itemsPerPage">Show</label>
          <select
            id="itemsPerPage"
            value={itemsPerPage}
            onChange={handleChange}
          >
          <option value={itemsPerPage}>{itemsPerPage}</option>
            <option value={3}>3</option>
            <option value={5}>5</option>
            <option value={10}>10</option>
          </select>
          <span>Rows per page</span>
        </div>
      </div>
    </>
  );
};

export default Practice2;
