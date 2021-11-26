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
    <div className="h-screen pt-10 background-main flex flex-col">
      <h1 className="text-center w-5/6 mx-auto px-4 text-5xl font-extrabold text-gray-50  text-shadow">
        Select three genre of your choice
      </h1>
      <hr className="mt-4 w-1/4 mx-auto"></hr>
      <div className="mx-auto flex justify-between w-4/5 mt-10 ">
        <button
          className="m-2 px-4 py-2 border-solid border-2 border-white text-white text-2xl rounded-full hover:bg-white hover:text-purple-700 transition duration-500 ease-in-out transform hover:scale-125"
          onClick={showRock}
        >
          Rock
        </button>
        <button
          className="m-2 px-4 py-2 border-solid border-2 border-white text-white text-2xl rounded-full hover:bg-white hover:text-purple-700 transition duration-500 ease-in-out transform hover:scale-125"
          onClick={showPop}
        >
          Pop
        </button>
        <button
          className="m-2 px-4 py-2 border-solid border-2 border-white text-white text-2xl rounded-full hover:bg-white hover:text-purple-700 transition duration-500 ease-in-out transform hover:scale-125"
          onClick={showJazz}
        >
          Jazz
        </button>
        <button
          className="m-2 px-4 py-2 border-solid border-2 border-white text-white text-2xl rounded-full hover:bg-white hover:text-purple-700 transition duration-500 ease-in-out transform hover:scale-125"
          onClick={showElectro}
        >
          Electro
        </button>
        <button
          className="m-2 px-4 py-2 border-solid border-2 border-white text-white text-2xl rounded-full hover:bg-white hover:text-purple-700 transition duration-500 ease-in-out transform hover:scale-125"
          onClick={showMetal}
        >
          Metal
        </button>
        <button
          className="m-2 px-4 py-2 border-solid border-2 border-white text-white text-2xl rounded-full hover:bg-white hover:text-purple-700 transition duration-500 ease-in-out transform hover:scale-125"
          onClick={showHiphop}
        >
          Hip-Hop
        </button>
        <button
          className="m-2 px-4 py-2 border-solid border-2 border-white text-white text-2xl rounded-full hover:bg-white hover:text-purple-700 transition duration-500 ease-in-out transform hover:scale-125"
          onClick={showReggae}
        >
          Reggae
        </button>
        <button
          className="m-2 px-4 py-2 border-solid border-2 border-white text-white text-2xl rounded-full hover:bg-white hover:text-purple-700 transition duration-500 ease-in-out transform hover:scale-125"
          onClick={showRap}
        >
          Rap
        </button>
      </div>
      <div className="flex w-screen justify-center">
        <div> {componentRock ? <Rock /> : null}</div>
        <div> {componentPop ? <Pop /> : null}</div>
        <div> {componentJazz ? <Jazz /> : null}</div>
        <div> {componentElectro ? <Electro /> : null}</div>
        <div> {componentMetal ? <Metal /> : null}</div>
        <div> {componentHiphop ? <Hiphop /> : null}</div>
        <div> {componentReggae ? <Reggae /> : null}</div>
        <div> {componentRap ? <Rap /> : null}</div>
      </div>
<<<<<<< HEAD
      <button className=" mx-auto m-12 px-4 py-2 w-1/4 border-solid border-2 border-white text-white text-2xl rounded-full hover:bg-white hover:text-purple-700 focus:bg-white focus:text-purple-700 transition duration-500 ease-in-out transition duration-500 ease-in-out transform hover:scale-125">Confirm</button>
=======
      <div className="flex flex-col items-center">
      <button className="mx-auto m-12 px-4 py-2 w-1/4 border-solid border-2 border-white text-white text-2xl rounded-full hover:bg-white hover:text-purple-700 focus:bg-white focus:text-purple-700 transition duration-500 ease-in-out">Valider</button>
      <div className="flex flex-col items-center">
      <button type="button" className="px-4 mt-2  flex justify-center items-center w-auto transition duration-200 bg-gray-800 hover:bg-gray-600 focus:bg-gray-700 focus:shadow-sm focus:ring-4 focus:ring-gray-500 focus:ring-opacity-50 text-green-500 py-2.5 rounded-lg shadow-sm hover:shadow-md text-center inline-block">
            <span className="text-2xl inline-block mr-2">Import directly your preferences from your Spotify account</span>
            <img className="h-8 max-w-none" src="src/Assets/spotify.png" alt="spotify-logo"/>
        </button>
        </div>
        </div>
>>>>>>> bcbeafb348f5e8c77accf139572475e18916e7f0
    </div>
  );
}

export default Choice;

function Rock() {
  return (
    <div className="mx-10 w-96 h-96 py-10 text-gray-50 border-gray-50 border-4 rounded-lg mt-10 flex items-center flex-col">
      <h1 className="text-gray-300 font-bold text-xl pb-2 text-gray-50">
        Rock is the best !!!
      </h1>
      <img
        className="w-5/6 h-80 rounded-lg"
        src="https://c0.wallpaperflare.com/preview/285/1009/176/concery-wallpaper-festival-party.jpg"
        alt="rock-concert"
      />
      <p className="">Enjoy the Rock'n'Roll attitude</p>
    </div>
  );
}

function Pop() {
  return (
    <div className="mx-10 w-96 h-96 py-10 text-gray-50 border-gray-50 border-4 rounded-lg mt-10 flex items-center flex-col">
      <h1 className="text-gray-300 font-bold text-xl pb-2 text-gray-50">
        Pop is the best !!!
      </h1>
      <img
        className="w-5/6 h-80 rounded-lg"
        src="https://pyxis.nymag.com/v1/imgs/3a3/b1f/2141226b8ab1ae07afe4b541ee0d2b0825-11-yic-pop-essay.rsocial.w1200.jpg"
        alt="rock-concert"
      />
      <p className="">Enjoy the best Pop music of your area</p>
    </div>
  );
}

function Jazz() {
  return (
    <div className="mx-10 w-96 h-96 py-10 text-gray-50 border-gray-50 border-4 rounded-lg mt-10 flex items-center flex-col">
      <h1 className="text-gray-300 font-bold text-xl pb-2 text-gray-50">
        Jazz is the best !!!
      </h1>
      <img
        className="w-5/6 h-80 rounded-lg"
        src="http://www.jazzradio.fr/media/news/1bebe8759e23ab6a1b92e1d46e2e7f12.png"
        alt="jazz-illus"
      />
      <p className="">Jazz never gets old</p>
    </div>
  );
}
function Electro() {
  return (
    <div className="mx-10 w-96 h-96 py-10 text-gray-50 border-gray-50 border-4 rounded-lg mt-10 flex items-center flex-col">
      <h1 className="text-gray-300 font-bold text-xl pb-2 text-gray-50">
        Electro is the best !!!
      </h1>
      <img
        className="w-5/6 h-80 rounded-lg"
        src="https://thetravelshots.com/wp-content/uploads/2021/04/dance-music.jpg"
        alt="electro-illus"
      />
      <p className="">Keep Calm and enjoy the rythm</p>
    </div>
  );
}
function Metal() {
  return (
    <div className="mx-10 w-96 h-96 py-10 text-gray-50 border-gray-50 border-4 rounded-lg mt-10 flex items-center flex-col">
      <h1 className="text-gray-300 font-bold text-xl pb-2 text-gray-50">
        Metal is the best !!!
      </h1>
      <img
        className="w-5/6 h-80 rounded-lg"
        src="https://i2.wp.com/dynamhit.org/wp-content/uploads/2015/02/439970-metal-music-heavy-metal-fans.jpg?fit=1920%2C1200"
        alt="rock-concert"
      />
      <p className="">Le rock c'est cool</p>
    </div>
  );
}
function Hiphop() {
  return (
    <div className="mx-10 w-96 h-96 py-10 text-gray-50 border-gray-50 border-4 rounded-lg mt-10 flex items-center flex-col">
      <h1 className="text-gray-300 font-bold text-xl pb-2 text-gray-50">
        Hip-Hop is the best !!!
      </h1>
      <img
        className="w-5/6 h-80 rounded-lg"
        src="https://media.timeout.com/images/101659805/image.jpg"
        alt="rock-concert"
      />
      <p className="">Le rock c'est cool</p>
    </div>
  );
}
function Reggae() {
  return (
    <div className="mx-10 w-96 h-96 py-10 text-gray-50 border-gray-50 border-4 rounded-lg mt-10 flex items-center flex-col">
      <h1 className="text-gray-300 font-bold text-xl pb-2 text-gray-50">
        Reggae is the best !!!
      </h1>
      <img
        className="w-5/6 h-80 rounded-lg"
        src="https://gonzomusic.fr/files/bob-marley-03.jpg"
        alt="rock-concert"
      />
      <p className="">Le rock c'est cool</p>
    </div>
  );
}
function Rap() {
  return (
    <div className="mx-10 w-96 h-96 py-10 text-gray-50 border-gray-50 border-4 rounded-lg mt-10 flex items-center flex-col">
      <h1 className="text-gray-300 font-bold text-xl pb-2 text-gray-50">
        Rap is the best !!!
      </h1>
      <img
        className="w-5/6 h-80 rounded-lg"
        src="https://i.pinimg.com/originals/6a/a4/bc/6aa4bcba8736155a31eadbd87332dc93.jpg"
        alt="rock-concert"
      />
      <p className="">Le J c'est le S </p>
    </div>
  );
}
