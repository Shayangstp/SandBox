import { useState, useRef, useEffect } from "react";
import { BsSearch } from "react-icons/bs";

function App() {
  const [uiProps, setUiProps] = useState({
    bg: "purple",
    shadow: "",
    transition: "all .3s ease",
    showSearchBar: false,
    showSearchIcon: true,
  });

  const inputEl = useRef(null);

  let body = document.body.style;

  let inputStyle = {
    margin: "10vh 25vw",
    width: "30vh",
    height: "30px",
    padding: "1rem  .3rem",
    border: "none",
    outline: "none",
    background: "transparent ",
    borderBottom: "1px solid #fff",
    fontSize: ".3 rem",
    color: "#eee",
    boxShadow: "0x 55px -60px -15px rgba(0,0,0,.75)",
    transition: "all .2s ease-in",
  };

  let bsSearchStyle = {
    color: "#fff",
    fontSize: 50,
    position: "absolute",
    top: 20,
    right: 20,
    cursor: "pointer ",
  };

  useEffect(
    () => {
      body.background = uiProps.bg;
      body.boxShadow = uiProps.shadow;
      body.transition = uiProps.transition;

      uiProps.showSearchBar && inputEl.current.focus();
    },
    [uiProps.shadow],
    [uiProps.showSearchBar]
  );

  const showSearchBar = () => {
    setUiProps({
      opacity: "1",
      showSearchIcon: false,
      showSearchBar: true,
    });
  };

  const handleSearchFocus = () => {
    setUiProps({
      shadow: "inset 0 -60vh 30vw 200px rgba(0,0,0,0.8)",
    });
  };

  const searchBlur = () => {
    setUiProps({
      shadow: "none",
      showSearchIcon: true,
    });
  };

  return (
    <div className="container " style={{ height: "100vh" }}>
      {uiProps.showSearchIcon ? (
        <BsSearch style={bsSearchStyle} onClick={showSearchBar} />
      ) : (
        <input
          type="search"
          placeholder="Search"
          style={inputStyle}
          onFocus={handleSearchFocus}
          onBlur={searchBlur}
          ref={inputEl}
        />
      )}
    </div>
  );
}

export default App;
