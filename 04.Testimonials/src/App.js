import React, { useState, useEffect } from "react";
import "./App.css";
import Title from "./Components/Title";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { BsFilePost } from "react-icons/bs";
import { BiCommentDetail } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";

function App() {
  const [testi, setTesti] = useState("");
  const [items, setItems] = useState();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${testi}`)
      .then((response) => response.json())
      .then((json) => setItems(json));
  }, [testi]);

  return (
    <div className="container">
      <div className="text-center mt-3">
        <Title className="text-center" text={"Testimonails"} />
      </div>
      <div className="d-flex gap-2 justify-content-center mt-5">
        <Button
          onClick={() => {
            setTesti("posts");
          }}
        >
          <BsFilePost className="me-2" />
          Posts
        </Button>
        <Button
          onClick={() => {
            setTesti("users");
          }}
        >
          <AiOutlineUser className="me-2" />
          Users
        </Button>
        <Button
          onClick={() => {
            setTesti("comments");
          }}
        >
          <BiCommentDetail className="me-2" />
          Comments
        </Button>
      </div>
      <div className="text-center mt-5">
        <Title text={!testi ? "Select above" : testi} />
      </div>
      <div>
        {!items
          ? null
          : items.map((item) => {
              return (
                <div className="text-center card" key={item.id}>
                  {item.name && (
                    <h2 className="card-header bg-primary text-white">
                      {item.name}
                    </h2>
                  )}
                  <div className="card-body">
                    <h4>{item.title}</h4>
                    <p>{item.body}</p>
                  </div>
                  {item.email && (
                    <small className="card-footer bg-primary text-white">
                      {item.email}
                    </small>
                  )}
                </div>
              );
            })}
      </div>
    </div>
  );
}

export default App;
