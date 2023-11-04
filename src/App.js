import { useState, useEffect } from "react"
import { useRef } from "react"
import Alert from "@mui/material/Alert"
import AlertTitle from "@mui/material/AlertTitle"
import Stack from "@mui/material/Stack"
import "./index.css"
import React from "react"
import { Toast } from "primereact/toast"
import { Button } from "primereact/button"

const App = () => {
  const [heart1, setHeart1] = useState(false)
  const [heart2, setHeart2] = useState(false)
  const [heart3, setHeart3] = useState(false)
  const [alert1, setAlert1] = useState(false)
  const toast = useRef(null)

  const ChangeStateButtom1 = () => {
    setHeart1(!heart1)
    setAlert1(!alert1)
  }

  const ChangeStateButtom2 = () => {
    setHeart2(!heart2)
  }

  const ChangeStateButtom3 = () => {
    setHeart3(!heart3)
  }

  const Timer = setTimeout(() => {
    setAlert1(true)
  }, 1000)

  const Desejos = () => {
    console.log("oi")
    return (
      <div
        style={{
          background: "white",
          width: "100px",
          height: "90px",
          marginBottom: "100px",
        }}
      >
        <p>Olá</p>
      </div>
    )
  }

  return (
    <>
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
        <div className="picture">
          <div className="containerPic1">
            <img
              className="pic1"
              src="https://images.pexels.com/photos/15889175/pexels-photo-15889175/free-photo-of-fofo-macio-peludo-panorama.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
            />
            <div className="containerTextHeart">
              <div className="containerText">
                <p className="textPic1">Lorem Ipsum</p>
                <p className="textPic2">AAA-OOO</p>
                <p className="textPic3">R$ 000,00</p>
              </div>
              <div className="containerHeart">
                {heart1 === false ? (
                  <>
                    <img
                      className="heartImage"
                      style={{ cursor: "pointer" }}
                      name="heart1"
                      value={heart1}
                      onClick={ChangeStateButtom1}
                      src="/heart1.png"
                    />
                  </>
                ) : (
                  <>
                    <img
                      className="heartImage"
                      style={{ cursor: "pointer" }}
                      value={heart1}
                      onClick={ChangeStateButtom1}
                      src="/heart2.png"
                    />
                  </>
                )}
              </div>
            </div>
          </div>
          <div className="containerPic1">
            <img
              className="pic2"
              src="https://images.pexels.com/photos/16913242/pexels-photo-16913242/free-photo-of-nuvem-terra-cultivada-plantacao-alvorecer.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            ></img>

            <div className="containerTextHeart">
              <div className="containerText">
                <p className="textPic1">Lorem Ipsum</p>
                <p className="textPic2">AAA-OOO</p>
                <p className="textPic3">R$ 000,00</p>
              </div>
              <div className="containerHeart">
                {heart2 === false ? (
                  <img
                    className="heartImage"
                    style={{ cursor: "pointer" }}
                    value={heart2}
                    onClick={ChangeStateButtom2}
                    src="/heart1.png"
                  />
                ) : (
                  <>
                    <img
                      className="heartImage"
                      style={{ cursor: "pointer" }}
                      value={heart2}
                      onClick={ChangeStateButtom2}
                      src="/heart2.png"
                    />
                  </>
                )}
              </div>
            </div>
          </div>
          <div className="containerPic1">
            <img
              className="pic3"
              src="https://images.pexels.com/photos/3254549/pexels-photo-3254549.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            ></img>
            <div className="containerTextHeart">
              <div className="containerText">
                <p className="textPic1">Lorem Ipsum</p>
                <p className="textPic2">AAA-OOO</p>
                <p className="textPic3">R$ 000,00</p>
              </div>
              <div className="containerHeart">
                {heart3 === false ? (
                  <img
                    className="heartImage"
                    style={{ cursor: "pointer" }}
                    value={heart3}
                    onClick={ChangeStateButtom3}
                    src="/heart1.png"
                  />
                ) : (
                  <img
                    className="heartImage"
                    style={{ cursor: "pointer" }}
                    value={heart3}
                    onClick={ChangeStateButtom3}
                    src="/heart2.png"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
