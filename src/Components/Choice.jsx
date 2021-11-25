import React from 'react'

export default function Choice() {
    return (
        <div>
            <button class="rounded-lg px-4 py-2 bg-blue-500 text-blue-100 hover:bg-blue-600 duration-300">Primary</button>
      <button class="rounded-lg px-4 py-2 bg-gray-600 text-gray-100 hover:bg-gray-700 duration-300">Secondary</button>
      <button class="rounded-lg px-4 py-2 bg-green-700 text-green-100 hover:bg-green-800 duration-300">Success</button>
      <button class="rounded-lg px-4 py-2 bg-red-600 text-red-100 hover:bg-red-700 duration-300">Danger</button>
      <button class="rounded-lg px-4 py-2 bg-yellow-500 hover:bg-yellow-600 duration-300">Warning</button>
      <button class="rounded-lg px-4 py-2 bg-green-300 hover:bg-green-400 duration-300">Info</button>
      <button class="rounded-lg px-4 py-2 bg-gray-200 hover:bg-gray-300 duration-300">Light</button>
      <button class="rounded-lg px-4 py-2 bg-gray-900 text-gray-100">Dark</button>
        </div>
    )
}
