import { useEffect, useState } from "react";

function Navbar(props) {
  const [matches, setMatches] = useState(
    window.matchMedia("(max-width: 1000px)").matches
  );

  useEffect(() => {
    window
      .matchMedia("(max-width: 1000px)")
      .addEventListener("change", (e) => setMatches(e.matches));
  }, []);

  const [bar, toggleBar] = useState(false);

  function setBar() {
    return toggleBar((prev) => {
      return !prev;
    });
  }

  // Navbar Section
  return (
    <div className="bg-[#12141D] text-white font-normal">
      {/* For Smaller screen */}
      {matches ? (
        <div className="h-24 sm:w-11/12 flex flex-row justify-between mr-4 ml-4 items-center">
          <div className=" flex flex-row items-center text-xl gap-2">
            <div>
              <img src="./images/logo.svg" alt="" className="h-10" />
            </div>
            <div className="text-[#FAFAFA] font-bold text-3xl align-middle text-center">
              Stract
            </div>
          </div>
          <div onClick={setBar}>
            {/* change navbar icon */}
            {bar ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-10 h-10"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-10 h-10"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                />
              </svg>
            )}
          </div>
          {/* Navbar Options */}
          <div
            style={{ visibility: bar ? "visible" : "hidden" }}
            className="absolute right-5 top-20 leading-loose bg-white text-black rounded-lg w-44 p-4 h-48 text-left text-lg flex flex-col gap-2 py-4 "
          >
            <div>Home</div>
            <div>Service</div>
            <div>Resources</div>
            <div>About Us</div>
          </div>
        </div>
      ) : (
        //Larger screen
        <div className="h-20 sm:w-11/12 flex flex-row justify-between mr-4 ml-9 items-center">
          <div className=" flex flex-row items-center text-xl gap-2">
            <div className="font-bold text-3xl align-middle text-center">
              Stract
            </div>
          </div>
          <div className="flex flex-row justify-between gap-4 text-base ml-16 text-[#BAB7B7] ">
            <div>Home</div>
            <div>Service</div>
            <div>Resources</div>
            <div>About Us</div>
          </div>

          <div className=" flex flex-row text-lg justify-center gap-4 text-center align-middle">
            <div className="bg-[#2B59FF] w-32 leading-3 rounded-3xl h-10 flex justify-center flex-row items-center text-sm text-[#FAFAFA]">
              Contact Us
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
