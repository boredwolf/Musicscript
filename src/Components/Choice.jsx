import React from "react";
import { useState } from "react";

function Choice() {
  const [componentRock, setComponentRock] = useState(false);
  const showRock = () => {
    setComponentRock(!componentRock);
  };

  const [componentPop, setComponentPop] = useState(false);
  const showPop = () => {
    setComponentPop(!componentPop);
  };

  const [componentJazz, setComponentJazz] = useState(false);
  const showJazz = () => {
    setComponentJazz(!componentJazz);
  };

  const [componentElectro, setComponentElectro] = useState(false);
  const showElectro = () => {
    setComponentElectro(!componentElectro);
  };

  const [componentMetal, setComponentMetal] = useState(false);
  const showMetal = () => {
    setComponentMetal(!componentMetal);
  };

  const [componentHiphop, setComponentHiphop] = useState(false);
  const showHiphop = () => {
    setComponentHiphop(!componentHiphop);
  };
  
  return (
    <div>
      <div className="flex justify-between w-4/5 m-auto mt-10">
        <button
          className="rounded-lg text-xl px-4 py-2 bg-gray-300 hover:bg-purple-400 transition duration-700 ease-in-out transform hover:scale-125"
          onClick={showRock}
        >
          Rock
        </button>
        <button className="rounded-lg text-xl px-4 py-2 bg-gray-300 hover:bg-purple-400  transition duration-700 ease-in-out transform hover:scale-110 "
        onClick={showPop}>
          Pop
        </button>
        <button className="rounded-lg text-xl px-4 py-2 bg-gray-300 hover:bg-purple-400  transition duration-700 ease-in-out transform hover:scale-110 "
        onClick={showJazz}>
          Jazz
        </button>
        <button className="rounded-lg text-xl px-4 py-2 bg-gray-300 hover:bg-purple-400  transition duration-700 ease-in-out transform hover:scale-110 "
        onClick={showElectro}>
          Electro
        </button>
        <button className="rounded-lg text-xl px-4 py-2 bg-gray-300 hover:bg-purple-400  transition duration-700 ease-in-out transform hover:scale-110 "
        onClick={showMetal}>
          Metal
        </button>
        <button className="rounded-lg text-xl px-4 py-2 bg-gray-300 hover:bg-purple-400  transition duration-700 ease-in-out transform hover:scale-110 "
        onClick={showHiphop}>
          Hip-Hop
        </button>
        <button className="rounded-lg text-xl px-4 py-2 bg-gray-300 hover:bg-purple-400  transition duration-700 ease-in-out transform hover:scale-110 ">
          Reggae
        </button>
        <button className="rounded-lg text-xl px-4 py-2 bg-gray-300 hover:bg-purple-400  transition duration-700 ease-in-out transform hover:scale-110 ">
          Rap
        </button>
      </div>
      <div> {componentRock ? <Rock /> : null}</div>
    </div>
  );
}

export default Choice;

function Rock() {
  return (
    <div className="m-auto w-1/3 py-10 bg-gray-200 rounded-lg mt-10 flex items-center flex-col">
      <h1 className="text-gray-300 font-bold text-xl pb-2 text-gray-800">
        Rock is the best !!!
      </h1>
      <img
        className="w-5/6 h-96 rounded-lg"
        src="https://c0.wallpaperflare.com/preview/285/1009/176/concery-wallpaper-festival-party.jpg"
        alt="rock-concert"
      />
      <p className="">Le rock c'est cool</p>
    </div>
  );
}

function Pop() {
    return (
      <div className="m-auto w-1/3 py-10 bg-gray-200 rounded-lg mt-10 flex items-center flex-col">
        <h1 className="text-gray-300 font-bold text-xl pb-2 text-gray-800">
          Rock is the best !!!
        </h1>
        <img
          className="w-5/6 h-96 rounded-lg"
          src="https://c0.wallpaperflare.com/preview/285/1009/176/concery-wallpaper-festival-party.jpg"
          alt="rock-concert"
        />
        <p className="">Le rock c'est cool</p>
      </div>
    );
  }