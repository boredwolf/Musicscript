import React from 'react'

function BoxContent() {
    return (
        <div className="background-main w-screen h-screen flex flex-col ">
        <div className="flex flex-col items-center rounded-lg pt-4 text-gray-50 border-gray-50 w-3/5 m-auto h-5/6">
            <h1 className="text-center w-5/6 mx-auto px-4 text-5xl font-extrabold pb-4 text-shadow">
  Content of your Boxify
</h1>
<div className="flex mt-4 border-4 border-gray-50 h-96 w-auto items-center rounded-lg">
<ul className="w-5/6 pb-4 m-8  ">
    <li className="text-2xl">1 concert per month in your area</li>
    <li className="text-2xl">Concert matching your subsciption and music style</li>
    <li className="text-2xl">From small independant artists to world wide stars</li>
    <li className="text-2xl">Artists finely selected by our experts</li>
    <li className="text-2xl">Satisfaction guaranted</li>
</ul>
            <img className="rounded-lg h-1/2 m-8" src="https://unblast.com/wp-content/uploads/2019/10/Event-Ticket-Mockup-1.jpg" alt="ticket"/>
            </div>
        </div>
        </div>
    )
}

export default BoxContent;