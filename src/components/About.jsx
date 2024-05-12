function About(props) {
  // About Section
  return (
    <div className="bg-[#12141D] flex flex-row justify-center items-center sm:h-96 h-auto py-20">
      <div className="flex flex-col sm:flex-row justify-center w-1/2 gap-3">
        <div className="relative">
          <img
            src="./images/people.png"
            alt=""
            className="h-48 w-[800px] mb-10 sm:mb-0"
          />
          <img
            src="./images/computer.svg"
            alt=""
            className="sm:absolute top-24 right-28 hidden sm:block"
          />
        </div>
        <div className="text-[#FAFAFA] flex flex-col gap-3 ">
          <div className="font-semibold text-xl">Know More About Stract</div>
          <div className="text-xs italic leading-5 text-[#dad4d4]">
            Stract is very important because of some security threats and
            cyber-attacks. This software protects the data. Cybersecurity is
            important because not only it helps to secure information but also
            our system from virus attack. Cybersecurity is important because not
            only it helps to secure information but also our system.
          </div>
          <div className="flex flex-row gap-4">
            <div>
              <p className="font-bold text-3xl text-[#2B59FF]">4.5/5</p>
              <p className="text-xs">Customer Rating</p>
            </div>
            <div>
              <p className="font-bold text-3xl text-[#2B59FF]">425</p>
              <p className="text-xs">Security Rating</p>
            </div>
          </div>
          <button className="bg-[#2B59FF] text-xs rounded-full w-24 h-8">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}
export default About;
