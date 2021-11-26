const Finish = ({FinishToHome}) => {
  return (
    <div className="h-screen w-screen background-main flex flex-col items-center justify-center">
      <h1 className="x-auto mt-12  text-5xl text-white">Thanh You for your commande BoxSpotify</h1>
      <p className="x-auto mt-12  text-3xl text-white">You will receive your email with your tickets for your next concert</p>
      <button onClick={FinishToHome} className="mx-auto m-12 px-4 py-2 w-1/4 border-solid border-2 border-white text-white text-2xl rounded-full hover:bg-white hover:text-purple-700 focus:bg-white focus:text-purple-700 transition duration-500 ease-in-out" >Back to home</button>
    </div>
  )
}

export default Finish;