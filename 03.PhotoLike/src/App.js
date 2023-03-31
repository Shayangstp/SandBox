import React, { useState } from "react";

import dog from "./assets/dog.jpg";
import { Card } from "react-bootstrap";
import { AiOutlineHeart, AiFillHeart, AiOutlineComment } from "react-icons/ai";

function App() {
  const [like, setLike] = useState(false);
  const [count, setCount] = useState("");

  const likeHandler = () => {
    if (!like) {
      setLike(true);
      setCount(count + 1);
    } else {
      setLike(false);
      setCount(count - 1);
    }
  };

  return (
    <div className="container d-flex flex-column justify-content-center align-items-center">
      <h1 className="text-center mt-5">Do you like it ? </h1>
      <h1 className="text-center mt-5">{`like ${count}`}</h1>

      <Card
        style={{
          width: 400,
          height: "fit-content",
          marginTop: "20px",
          background: "#2a3536",
        }}
      >
        <h1 className="text-center fs-2  text-white">Poppy</h1>
        <img
          src={dog}
          alt="the dog"
          onDoubleClick={likeHandler}
          role="button"
        />
        <div
          className="d-flex justify-content-between"
          style={{ fontSize: "32px" }}
        >
          <AiOutlineComment style={{ color: "#fff" }} />
          {like ? (
            <AiFillHeart
              className="text-danger"
              role="button"
              onClick={likeHandler}
            />
          ) : (
            <AiOutlineHeart
              role="button"
              className="text-white"
              onClick={likeHandler}
            />
          )}
        </div>
      </Card>
    </div>
  );
}

export default App;
