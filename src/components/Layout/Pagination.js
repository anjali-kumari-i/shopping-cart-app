import React from "react";
import "./Pagination.css";

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          backgroundColor: "#11cea5",
          color: "white", 

        }}
      >
        {pageNumbers.map((number) => (
          <li
            key={number}
            style={{
              margin: "5px",
              padding: "5px",
              border: "2px solid #015a53",
              borderRadius: "20px",
              cursor: "pointer",
              backgroundColor: '#015a53'
            }}
          >
            <a onClick={() => paginate(number)}>{number}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
