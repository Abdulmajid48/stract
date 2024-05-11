function Cybersecurity(props) {
  return (
    <div className="bg-[#F9FAFC] pt-10">
      <div className="flex flex-col justify-center items-center gap-4">
        <div className="text-center font-semibold text-3xl w-5/6 sm:w-3/4 lg:w-1/3 lg:px-6">
          Cyber Security Penetration Testing Data
        </div>
        <div className="text-sm text-center font-normal text-[#4B4B4B] w-10/12 sm:w-3/4 sm:px-16 lg:px-56">
          Data analysis software is a type of software tool used for data
          analysis and reporting. It is designed to help businesses,
          organizations.
        </div>
      </div>
      <div className="flex flex-col sm:flex-row w-3/4 m-auto">
        <div className="flex flex-col justify-center items-center">
          <div className="relative ">
            <img src="./images/monthly.svg" alt="" className="" />
            <img
              src="./images/userdata.svg"
              alt=""
              className="sm:absolute sm:top-16 sm:-left-20 sm:h-4/5 sm:-mt-0 -mt-20"
            />
          </div>
        </div>
        <div className="flex flex-col gap-3 sm:mt-20">
          {securities.map((item, index) => {
            return (
              <Security
                logo={item.logo}
                title={item.title}
                description={item.description}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

function Security(props) {
  return (
    <div className="flex flex-row gap-2 justify-center rounded-xl">
      <img src={props.logo} alt="" className="self-start h-10" />
      <div className="flex flex-col gap-2">
        <div className="font-bold text-xl">{props.title}</div>
        <div className="text-[#4B4B4B] text-sm">{props.description}</div>
      </div>
    </div>
  );
}

const securities = [
  {
    logo: "./images/easy.svg",
    title: "Use data as you need",
    description:
      "Many desktop publishing packages and web page editors now use for them.",
  },
  {
    logo: "./images/easy.svg",
    title: "Easy to Customize",
    description:
      "Many desktop publishing packages and web page editors now use for them.",
  },
  {
    logo: "./images/easy.svg",
    title: "Analytics Business",
    description:
      "Many desktop publishing packages and web page editors now use for them.",
  },
];

export default Cybersecurity;
export { securities };
