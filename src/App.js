import "./index.css";
function App() {
  return (
    <div className="App">
      <div className="image" style={{ backgroundColor: "black" }}>
        <div className="container-inicio">
          <div className="container">
            <a href="#" className="head">
              HOME
            </a>
            <a href="#" className="head">
              QUEM SOMOS
            </a>
            <a href="#" className="head">
              PACOTES
            </a>
            <a href="#" className="head">
              FALE CONOSCO
            </a>
          </div>
          <div className="titulo">
            <img className="img-titulo" />
          </div>
        </div>
      </div>
      <div className="body"></div>
      <div className="footer"></div>
    </div>
  );
}

export default App;
