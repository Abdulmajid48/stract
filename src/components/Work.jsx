function Work(props) {
  // Work Section
  return (
    <div className="h-96 flex flex-row justify-center pt-10 mb-60 sm:mb-32 md:mb-24">
      <div className="flex flex-col items-center">
        <div className="text-center w-3/5">
          <div className="text-[#12141D] font-bold text-3xl pb-3">
            How Stract Works
          </div>
          <div className="text-[#4B4B4B] text-sm">
            Data analysis software is a type of software tool used for data
            analysis and reporting. It is designed to help businesses,
            organizations.
          </div>
        </div>
        <div className="flex flex-row w-5/6 sm:w-3/4 mt-8">
          {stractworks.map((item, index) => {
            return (
              <Stractwork
                logo={item.logo}
                title={item.title}
                description={item.description}
                middle={item.middle}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

// Box Structure
function Stractwork(props) {
  return (
    <div className="flex flex-col text-center gap-3">
      <img
        src={props.logo}
        alt=""
        style={{ marginTop: props.middle ? "1.5rem" : null }}
      />
      <div>{props.title}</div>
      <div className="text-[#8A8A8A] text-sm">{props.description}</div>
    </div>
  );
}

// Boxes Contents
const stractworks = [
  {
    logo: "./images/one.svg",
    title: "Ensure Data Accuracy",
    description:
      "Ensuring data accuracy is crucial for making informed decisions and ensuring the reliability.",
  },
  {
    logo: "./images/arrow.svg",
    title: "",
    description: "",
    middle: true,
  },
  {
    logo: "./images/two.svg",
    title: "Better Data Sources",
    description:
      "Ensuring data accuracy is crucial for making informed decisions and ensuring the reliability.",
  },
  {
    logo: "./images/arrow2.svg",
    title: "",
    description: "",
    middle: true,
  },
  {
    logo: "./images/three.svg",
    title: "Business Analytics",
    description:
      "Ensuring data accuracy is crucial for making informed decisions and ensuring the reliability.",
  },
];
export default Work;
