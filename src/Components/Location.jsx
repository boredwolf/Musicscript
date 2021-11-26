import { useState } from "react";

const Location = () => {
  const [maps, setMaps] = useState("bordeaux")
  const srcmap= `src/Assets/${maps}.png`

  const mapscreen = (event) => {
    setMaps(event)
  }
  console.log(maps)
  return (
  <div className="h-screen w-screen background-main">
    <div className="flex flex-col justify-center">
      <h1 className="mx-auto  text-5xl text-white">Choose your city</h1>
      <hr className="m-4 w-1/4 mx-auto"></hr>
      <div className="flex justify-center" >
        <button onClick={(event) => mapscreen(event.target.value)} value="paris" className="m-2 px-4 py-2 border-solid border-2 border-white text-white text-2xl rounded-full hover:bg-white hover:text-purple-700 transition duration-500 ease-in-out ">Paris</button>
        <button onClick={(event) => mapscreen(event.target.value)}  value="lyon"  className="m-2 px-4 py-2 border-solid border-2 border-white text-white text-2xl rounded-full hover:bg-white hover:text-purple-700 transition duration-500 ease-in-out ">Lyon</button>
        <button onClick={(event) => mapscreen(event.target.value)}  value="bordeaux"  className="m-2 px-4 py-2 border-solid border-2 border-white text-white text-2xl rounded-full hover:bg-white hover:text-purple-700 transition duration-500 ease-in-out ">Bordeaux</button>
        <button onClick={(event) => mapscreen(event.target.value)}  value="nantes"  className="m-2 px-4 py-2 border-solid border-2 border-white text-white text-2xl rounded-full hover:bg-white hover:text-purple-700 transition duration-500 ease-in-out ">Nantes</button>
        <button onClick={(event) => mapscreen(event.target.value)}  value="marseille"  className="m-2 px-4 py-2 border-solid border-2 border-white text-white text-2xl rounded-full hover:bg-white hover:text-purple-700 transition duration-500 ease-in-out ">Marseille</button>
        <button onClick={(event) => mapscreen(event.target.value)}  value="toulouse"  className="m-2 px-4 py-2 border-solid border-2 border-white text-white text-2xl rounded-full hover:bg-white hover:text-purple-700 transition duration-500 ease-in-out ">Toulouse</button>
        
      </div>
      <div className="mx-auto w-3/6 mt-12 overflow-hidden rounded-xl">
        <img src={srcmap} alt="maps"/>
      </div>
      <button className="mx-auto m-4 px-4 py-2 w-1/4 border-solid border-2 border-white text-white text-2xl rounded-full hover:bg-white hover:text-purple-700 transition duration-500 ease-in-out">Valider</button>
    </div>
  </div>
  );
}

export default Location;