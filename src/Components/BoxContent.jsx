import React from 'react'

function BoxContent() {
    return (
        <div className="background-main w-screen h-screen flex flex-col ">
        <div className="flex flex-col items-center rounded-lg pt-4 text-gray-50 border-gray-50 border-4 w-3/5 m-auto h-5/6">
            <h1 className="text-center w-5/6 mx-auto px-4 text-5xl font-extrabold pb-4">
  Content of the monthly box
</h1>
<p className="text-center w-5/6 pb-4">Each month in your Boxify, you'll find a ticket for a concert. The artists will depend on the music style you have choosen to discover more about and on your subsciption.
The aim of this box is for you to enjoy and discover the musical scene in the selected area. From small independant artists to world wide stars, Boxify has been specifically design for those who love live music.
The artits are finely selected by our experts to make sure that you'll will be pleased with the event.
</p>
            <img className="rounded-lg h-1/2 mb-4" src="https://unblast.com/wp-content/uploads/2019/10/Event-Ticket-Mockup-1.jpg" alt="ticket"/>
            
        </div>
        </div>
    )
}

export default BoxContent;