function Dashboard(props) {
  return (
    <div className="sm:h-56 h-28 min-[420px]:h-48 lg:h-96">
      <div className=" flex flex-row justify-center items-center relative">
        <div className="flex flex-row justify-center items-center absolute lg:-top-72 md:-top-48 sm:-top-40 -top-24">
          <img src="./images/dashboard.png" alt="" className="w-4/5" />
        </div>
      </div>
    </div>
  );
}

function Partners(props) {
  return (
    <div className="flex flex-row items-center justify-center pb-14">
      <div className="flex flex-col items-center justify-center  text-[#21263C] gap-3">
        <div className="sm:w-1/2 w-5/6 text-center font-semibold text-2xl">
          MORE THAN 10,000 USERS USE{" "}
          <span className="text-[#2B59FF]"> Stract.</span>
        </div>
        <div className="flex flex-row gap-5 justify-center  items-center w-11/12">
          <div>
            <img src="./images/givaudan.svg" alt="" />
          </div>
          <div>
            <img src="./images/certina.svg" alt="" />
          </div>
          <div>
            <img src="./images/drom.png" alt="" />
          </div>
          <div>
            <img src="./images/google.svg" alt="" />
          </div>
          <div>
            <img src="./images/amazon.svg" alt="" />
          </div>
          <div>
            <img src="./images/godaddy.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
export { Partners };
