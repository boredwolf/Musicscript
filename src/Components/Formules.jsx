import React from 'react'

export default function Formules({ScrollToFinish}) {
    return (

<div className="w-screen h-screen background-main">

<h1 className="text-center pt-12 w-5/6 mx-auto px-4 text-5xl font-extrabold text-white">
  Price range
</h1>
<hr className="mt-4 w-1/4 mx-auto"></hr>
<p className="mt-4 text-xl text-white text-center " >
  3 plans available matching your budget and your tastes 🎶
</p>

<div className="mt-8 flex flex-wrap justify-center items-center flex-col space-x-0 md:space-x-10 md:flex-row">

  <div className="bg-white w-80 flex flex-col h-1/2 max-w-sm border border-gray-200 rounded-lg mt-5 text-left">

    <div className="px-6 pt-6">
      <h2 className="text-2xl font-bold text-gray-900 ">Explorer</h2>
      <p className="text-md text-gray-800">
        Discover futur hits
      </p>
      <p className="mt-2">
        <span className="text-4xl font-extrabold text-gray-900">25€</span>
        <span className="font-medium text-black-800">/month</span>
      </p>
      <h3 className="text-xs font-medium text-gray-900 tracking-wide uppercase">
        Included:
      </h3>
    </div>

    <ul className="mt-6 px-6 flex flex-grow flex-shrink-0 flex-col flex-wrap">
      <li className="flex space-x-3 py-2">
        <span className="text-sm text-gray-800"
        >1 concert per month</span>
      </li>
      <li className="flex space-x-3 py-2">
        <span className="text-sm text-gray-800"
        >Discover independant artists in your area</span>
      </li>
      <li className="flex space-x-3 py-2">
        <span className="text-sm text-gray-800"
        >Be the firsts to assist to their concerts</span>
      </li>
      <li className="flex space-x-3 py-2">
        <span className="text-sm text-gray-800"
        >Futurs stars guaranted</span>
      </li>

      <li className="flex space-x-3 py-2 mt-auto">
        <div
        onClick={ScrollToFinish}
        className=" block w-full bg-gray-800 border border-gray-800 rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-gray-900"
        >Subscribe</div>
      </li>
    </ul>

  </div>

  <div className="flex flex-wrap justify-center items-center flex-col space-x-0 md:space-x-10 md:flex-row">

  <div className="bg-white w-80 flex flex-col h-1/2 max-w-sm border border-gray-200 rounded-lg mt-5 text-left">

    <div className="px-6 pt-6">
      <h2 className="text-2xl font-bold text-gray-900 ">Premium</h2>
      <p className="text-md text-gray-800">
         Stars only
      </p>
      <p className="mt-2">
        <span className="text-4xl font-extrabold text-gray-900">50€</span>
        <span className="font-medium text-black-800">/month</span>
      </p>
      <h3 className="text-xs font-medium text-gray-900 tracking-wide uppercase">
        Included:
      </h3>
    </div>

    <ul className="mt-6 px-6 flex flex-grow flex-shrink-0 flex-col flex-wrap">
      <li className="flex space-x-3 py-2">
        <span className="text-sm text-gray-800"
        >1 or 2 concert per month</span>
      </li>
      <li className="flex space-x-3 py-2">
        <span className="text-sm text-gray-800"
        >Assist to amazing concerts in your area</span>
      </li>
      <li className="flex space-x-3 py-2">
        <span className="text-sm text-gray-800"
        >Enjoy good placement guaranted</span>
      </li>
      <li className="flex space-x-3 py-2">
        <span className="text-sm text-gray-800"
        >National hits</span>
      </li>

      <li className="flex space-x-3 py-2 mt-auto">
        <div
        onClick={ScrollToFinish}
        className=" block w-full bg-gray-800 border border-gray-800 rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-gray-900"
        >Subscribe</div>
      </li>
    </ul>

  </div>

  <div className="flex flex-wrap justify-center items-center flex-col space-x-0 md:space-x-10 md:flex-row">

  <div className="bg-white w-80 flex flex-col h-1/2 max-w-sm border border-gray-200 rounded-lg mt-5 text-left">

    <div className="px-6 pt-6">
      <h2 className="text-2xl font-bold text-gray-900 ">Gold</h2>
      <p className="text-md text-gray-800">
        World stars incoming
      </p>
      <p className="mt-2">
        <span className="text-4xl font-extrabold text-gray-900">100€</span>
        <span className="font-medium text-black-800">/month</span>
      </p>
      <h3 className="text-xs font-medium text-gray-900 tracking-wide uppercase">
        Included:
      </h3>
    </div>

    <ul className="mt-6 px-6 flex flex-grow flex-shrink-0 flex-col flex-wrap">
      <li className="flex space-x-3 py-2">
        <span className="text-sm text-gray-800"
        >1 concert per month</span>
      </li>
      <li className="flex space-x-3 py-2">
        <span className="text-sm text-gray-800"
        >Assists world stars concert peacefully</span>
      </li>
      <li className="flex space-x-3 py-2">
        <span className="text-sm text-gray-800"
        >Good placement guaranted</span>
      </li>
      <li className="flex space-x-3 py-2">
        <span className="text-sm text-gray-800"
        >Amazing memories</span>
      </li>

      <li className="flex space-x-3 py-2 mt-auto">
        <div
        onClick={ScrollToFinish}
        className=" block w-full bg-gray-800 border border-gray-800 rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-gray-900"
        >Subscribe</div>
      </li>
    </ul>

  </div>
</div>
</div>
</div>
</div>


)}
