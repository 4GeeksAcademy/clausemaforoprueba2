import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [colorR, setRed] = useState(25)
	const [colorY, setYellow] = useState(25)
	const [colorG, setGreen] = useState(25)


	//funcion para cambiar de color

	function cambiarColor() {
		if (colorR === 25) {
			setYellow(25)
			setGreen(25)
			setRed(100)
		} else {
			setRed(25)
		}
	}

	function cambiarColorY() {
		if (colorY === 25) {
			setGreen(25)
			setRed(25)
			setYellow(100)
		} else {
			setYellow(25)
		}
	}

	function cambiarColorG() {
		if (colorG === 25) {
			setYellow(25)
			setRed(25)
			setGreen(100)
		} else {
			setGreen(25)
		}
	}

	const palito = { height: "150px", width: "10px" }
	const semaforo = { height: "300px", width: "200px" }
	const luces = { height: "100px", width: "100px" }

	// const colores 

	// function aleatoria() {
	// 	return mathfloor(mathRandon());
	// }





	return (
		<div className="text-center">
			<div className=" row h-100 w-25 m-auto d-flex justify-content-center">
				<div className="bg-black" style={palito}></div>
			</div>
			<div className="bg-dark m-auto p-4 d-flex flex-column justify-content-center align-items-center " style={semaforo}>

				<button type="button" style={luces} onClick={cambiarColor} className={"btn m-1 rounded-circle btn-danger opacity-" + colorR}></button>
				<button type="button" style={luces} onClick={cambiarColorY} className={"m-1 rounded-circle btn btn-warning opacity-" + colorY}></button>
				<button type="button" style={luces} onClick={cambiarColorG} className={"m-1 rounded-circle btn btn-success opacity-" + colorG} ></button>
				
			</div>

				<button type="button" class="btn btn-primary m-1">Encender</button>
				<button type="button" class="btn btn-primary m-1">Otraluz</button>
		</div>

	);
};

export default Home;
