function Dataservices(props) {
  return (
    // Data Services Section
    <div>
      <div className="flex flex-col justify-center items-center pb-10">
        <div className="text-center font-semibold text-3xl">
          Explore Our Data <span className="text-[#2B59FF]">Services</span>
        </div>
        <div className="text-sm text-center font-normal text-[#4B4B4B] w-10/12 sm:w-1/2 sm:px-16">
          Data analysis software is a type of software tool used for data
          analysis and reporting. It is designed to help businesses,
          organizations.
        </div>
        <div className="flex flex-row flex-wrap gap-6 items-center justify-center px-3 mt-10">
          {services.map((item, index) => {
            return (
              <Service
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

// Box Structure
function Service(props) {
  return (
    <div className="flex flex-col gap-3 justify-start w-72 bg-[#FAFAFA] hover:bg-[#2B59FF]   rounded-xl p-3">
      <div>
        <img src={props.logo} alt="" />
      </div>
      <div className="text-[#12141D] font-semibold text-2xl">{props.title}</div>
      <div className="text-xs text-[#8A8A8A]">{props.description}</div>
    </div>
  );
}

// Boxes Contents
const services = [
  {
    logo: "./images/security.svg",
    title: "Security Testing",
    description:
      "Security testing is a type of software testing that is focused determining if an information.",
  },
  {
    logo: "./images/data.svg",
    title: "Data Forensics",
    description:
      "Security testing is a type of software testing that is focused  determining if an information.",
  },
  {
    logo: "./images/penetration.svg",
    title: "Penetration Testing",
    description:
      "Security testing is a type of software testing that is focused  determining if an information.",
  },
  {
    logo: "./images/red.svg",
    title: "Red Team",
    description:
      "Security testing is a type of software testing that is focused  determining if an information.",
  },
  {
    logo: "./images/digital.svg",
    title: "Digital Hardening",
    description:
      "Security testing is a type of software testing that is focused  determining if an information.",
  },
  {
    logo: "./images/source.svg",
    title: "Source Code Audit",
    description:
      "Security testing is a type of software testing that is focused  determining if an information.",
  },
  {
    logo: "./images/software.svg",
    title: "Software Development",
    description:
      "Security testing is a type of software testing that is focused  determining if an information.",
  },
  {
    logo: "./images/software.svg",
    title: "Software Development",
    description:
      "Security testing is a type of software testing that is focused  determining if an information.",
  },
];
export default Dataservices;
