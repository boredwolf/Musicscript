const Finish = ({FinishToHome}) => {
  return (
    <div className="h-screen w-screen background-main flex flex-col items-center justify-center">
      <h1 className="x-auto mt-12  text-5xl text-white text-shadow">Thank you for your order 🎉</h1>
      <p className="x-auto mt-12  text-3xl text-white text-center">You will receive your tickets for the upcoming event on the adress mail you used to register</p>
      <button onClick={FinishToHome} className="mx-auto m-12 px-4 py-2 w-1/4 border-solid border-2 border-white text-white text-2xl rounded-full hover:bg-white hover:text-purple-700 focus:bg-white focus:text-purple-700 transition duration-500 ease-in-out transition duration-500 ease-in-out transform hover:scale-125" >Back to home</button>
    </div>
  )
}

export default Finish;