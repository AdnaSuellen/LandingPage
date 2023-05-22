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
          <div className="titulo-1">
            <h1 className="titulo-2">BELO</h1>
            <h2 className="titulo-3">DESTINO</h2>
          </div>
        </div>
      </div>
      <div className="body"></div>
      <div className="footer"></div>
    </div>
  );
}

export default App;
