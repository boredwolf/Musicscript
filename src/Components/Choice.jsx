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

  const [componentReggae, setComponentReggae] = useState(false);
  const showReggae = () => {
    setComponentReggae(!componentReggae);
  };

  const [componentRap, setComponentRap] = useState(false);
  const showRap = () => {
    setComponentRap(!componentRap);
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
        <button className="rounded-lg text-xl px-4 py-2 bg-gray-300 hover:bg-purple-400  transition duration-700 ease-in-out transform hover:scale-110 "
        onClick={showReggae}>
          Reggae
        </button>
        <button className="rounded-lg text-xl px-4 py-2 bg-gray-300 hover:bg-purple-400  transition duration-700 ease-in-out transform hover:scale-110 "
        onClick={showReggae}>
          Rap
        </button>
      </div>
      <div> {componentRock ? <Rock /> : null}</div>
      <div> {componentPop ? <Pop /> : null}</div>
      <div> {componentJazz ? <Jazz /> : null}</div>
      <div> {componentElectro ? <Electro /> : null}</div>
      <div> {componentMetal ? <Metal /> : null}</div>
      <div> {componentHiphop ? <Hiphop /> : null}</div>
      <div> {componentReggae ? <Reggae /> : null}</div>
      <div> {componentRap ? <Rap /> : null}</div>
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
          Pop is the best !!!
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

  function Jazz() {
    return (
      <div className="m-auto w-1/3 py-10 bg-gray-200 rounded-lg mt-10 flex items-center flex-col">
        <h1 className="text-gray-300 font-bold text-xl pb-2 text-gray-800">
          Jazz is the best !!!
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
  function Electro() {
    return (
      <div className="m-auto w-1/3 py-10 bg-gray-200 rounded-lg mt-10 flex items-center flex-col">
        <h1 className="text-gray-300 font-bold text-xl pb-2 text-gray-800">
          Electro is the best !!!
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
  function Metal() {
    return (
      <div className="m-auto w-1/3 py-10 bg-gray-200 rounded-lg mt-10 flex items-center flex-col">
        <h1 className="text-gray-300 font-bold text-xl pb-2 text-gray-800">
          Metal is the best !!!
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
  function Hiphop() {
    return (
      <div className="m-auto w-1/3 py-10 bg-gray-200 rounded-lg mt-10 flex items-center flex-col">
        <h1 className="text-gray-300 font-bold text-xl pb-2 text-gray-800">
          Hip-Hop is the best !!!
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
  function Reggae() {
    return (
      <div className="m-auto w-1/3 py-10 bg-gray-200 rounded-lg mt-10 flex items-center flex-col">
        <h1 className="text-gray-300 font-bold text-xl pb-2 text-gray-800">
          Reggae is the best !!!
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
  function Rap() {
    return (
      <div className="m-auto w-1/3 py-10 bg-gray-200 rounded-lg mt-10 flex items-center flex-col">
        <h1 className="text-gray-300 font-bold text-xl pb-2 text-gray-800">
          Rap is the best !!!
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