import React from "react";
import { Navbar } from "reactstrap";

const Home = ({HomeToConnection}) => {
  return (
    <>     <div className=" flex items-center justify-between pt-8  pr-16 w-4/5">
        <h1 className="text-6xl font-Josefin   text-right text-white text-shadow w-screen  pr-8    ">
          Welcome <span>here !</span>
        </h1>
        <img src="src/Assets/dab1.png" ></img>
      </div>
      <div className="flex justify-around items-end">
        <div class="min-h-full flex items-center justify-center pl-32 ">
          <div class="max-w-md w-full space-y-8 pb-4">
            <form class="mt-8 space-y-6" action="#" method="POST">
              <input type="hidden" name="remember" value="true" />
              <div class="rounded-md shadow-sm -space-y-px"></div>

              <div class="text-sm">
                <a
                  href="#"
                  class="font-medium text-white "
                >
                  Join the experience
                </a>
              </div>

              <div>
                  <a to ="/connexion">
                <button
                onClick = {HomeToConnection}
                  type="submit"
                  class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                    <svg
                      class="h-5 w-5 text-indigo-500blue group-hover:text-indigo-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </span>
                  Sign up
                </button>
                </a>
              </div>
              <div class="text-sm">
                <a
                  href="#"
                  class="font-medium text-white "
                >
                  Or go anonymously
                </a>
              </div>
              <div>
                  <a to ="/choice">
                <button
                  class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                 
                  </span>
                   Get started
                </button>
                </a>
              </div>
            </form>
          </div>
        </div>

        <h2 className=" text-shadow pt-32 pl-8 text-white text-4xl text-center w-1/2   pr-32  ">
          With Boxify, discover a fun and innovative way to explore your local
          musical scene through the subscription of your choice !
        </h2>
      </div>
    </>
  );
};

export default Home;
