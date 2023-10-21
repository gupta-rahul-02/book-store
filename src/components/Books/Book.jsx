import { Button } from "@mui/material";
import React from "react";
import "./Book.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Book(props) {
  const history = useNavigate();
  const deleteHandler = async () => {
    await axios
      .delete(`http://localhost:5000/books/${_id}`)
      .then((res) => res.data)
      .then(() => history('/'))
      .then(() => history("/books"));
  };
  const { _id, name, author, description, price, imageUrl } = props.book;
  return (
    <div className="card">
      <img src={imageUrl} alt={name}></img>
      <article>By {author}</article>
      <h3>{name}</h3>
      <p>{description}</p>
      <h2>Rs {price}</h2>
      <Button LinkComponent={Link} to={`/books/${_id}`} sx={{ mt: "auto" }}>
        Update
      </Button>
      <Button onClick={deleteHandler} sx={{ mt: "auto" }}>
        Delete
      </Button>
    </div>
  );
}

export default Book;
