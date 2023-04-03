import React, { useContext } from "react";
import { ThemeContext } from "../Context/Theme-context";
import { Button } from "react-bootstrap";

const Blog = () => {
  const { theme, themeChangeHandler } = useContext(ThemeContext);

  return (
    <div className="position-relative">
      <Button
        size="lg"
        variant="dark"
        className="position-absolute"
        style={{ right: 20, top: -70 }}
        onClick={themeChangeHandler}
      >
        {theme === "light" ? "dark" : "light"}
      </Button>

      <div className="container">
        <h1
          className="text-center"
          style={{ top: 100, left: 150, marginTop: "100px" }}
        >
          Theme is {theme}
        </h1>
        <p className="text-center mt-3 p-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit incidunt
          ducimus, vel explicabo repudiandae sit? Iure rem accusantium
          cupiditate ipsam vel explicabo officia deserunt deleniti est sint
          magnam quas quibusdam necessitatibus nisi accusamus fugiat, facere,
          unde sapiente quam itaque rerum? Necessitatibus, ipsa. Error,
          obcaecati eveniet. Veniam ad harum beatae animi reiciendis laudantium
          facilis labore reprehenderit, rem velit aspernatur non? Fugit eaque
          repellendus molestiae beatae nam, quae nemo voluptate inventore magnam
          fugiat labore cumque quasi laudantium sequi numquam ab dolores natus.
          Commodi mollitia veniam, aliquid officiis repellendus facere. Qui
          doloremque quibusdam repudiandae ipsa laboriosam eos asperiores saepe
          quasi, deserunt ea animi.
        </p>
      </div>
    </div>
  );
};

export default Blog;
