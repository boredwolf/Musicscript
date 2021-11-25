import { useState } from "react";

const Location = () => {
  const [maps, setMaps] = useState("bordeaux")
  const srcmap= `src/Assets/${maps}.png`

  const mapscreen = (event) => {
    setMaps(event)
  }
  console.log(maps)
  return (
    <div className="flex flex-col justify-center">
      <div className="flex justify-center mt-4" >
        <button onClick={(event) => mapscreen(event.target.value)} value="paris" className="m-2 px-4 py-2 border-solid border-2 border-white text-white text-2xl rounded-full hover:bg-white hover:text-purple-700 transition duration-500 ease-in-out ">Paris</button>
        <button onClick={(event) => mapscreen(event.target.value)}  value="lyon"  className="m-2 px-4 py-2 border-solid border-2 border-white text-white text-2xl rounded-full hover:bg-white hover:text-purple-700 transition duration-500 ease-in-out ">Lyon</button>
        <button onClick={(event) => mapscreen(event.target.value)}  value="bordeaux"  className="m-2 px-4 py-2 border-solid border-2 border-white text-white text-2xl rounded-full hover:bg-white hover:text-purple-700 transition duration-500 ease-in-out ">Bordeaux</button>
        <button onClick={(event) => mapscreen(event.target.value)}  value="nantes"  className="m-2 px-4 py-2 border-solid border-2 border-white text-white text-2xl rounded-full hover:bg-white hover:text-purple-700 transition duration-500 ease-in-out ">Nantes</button>
        <button onClick={(event) => mapscreen(event.target.value)}  value="marseille"  className="m-2 px-4 py-2 border-solid border-2 border-white text-white text-2xl rounded-full hover:bg-white hover:text-purple-700 transition duration-500 ease-in-out ">Marseille</button>
        <button onClick={(event) => mapscreen(event.target.value)}  value="toulouse"  className="m-2 px-4 py-2 border-solid border-2 border-white text-white text-2xl rounded-full hover:bg-white hover:text-purple-700 transition duration-500 ease-in-out ">Toulouse</button>
        
      </div>
      <div className="mx-auto w-6/12 mt-28 overflow-hidden rounded-xl">
        <img src={srcmap} alt="maps"/>
      </div>
    </div>
  );
}

export default Location;