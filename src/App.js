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
          <div className="texto">
            <p className="texto1">
              Venha conosco e descubra o mundo através dos nossos pacotes.
            </p>
            <p className="texto2">
              A viagem dos seus sonhos está a apenas um clique de distância.
            </p>
          </div>
        </div>
      </div>
      <div className="body"></div>
      <div className="main">
        <div className="pacote-body">
          <video
            className="video-container"
            autoplay=""
            muted=""
            plays-inline=""
            loop
            data-uia="nmhp-card-animation-asset-video"
          >
            <source
              className="video"
              src="cidade.mp4"
              type="video/mp4"
            ></source>
          </video>
        </div>
      </div>
    </div>
  );
}

export default App;
