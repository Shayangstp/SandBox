import Alert from "./Components/Alert";

function App() {
  return (
    <div className="container">
      <Alert alertText={"first alert"} alertColor={"primary"} />
      <Alert alertText={"popup alert"} alertColor={"danger"} delay={true} />
    </div>
  );
}

export default App;
