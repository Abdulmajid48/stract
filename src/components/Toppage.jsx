function Toppage(props) {
  return (
    <div className="bg-[#12141D] lg:min-h-[550px] md:min-h-[500px] sm:min-h-[450px] min-h-[350px] w-auto flex flex-col items-center">
      <div className="flex flex-col justify-center items-center md:w-3/4 sm:w-3/4 w-11/12 min-[1008px]:px-16 sm:px-10 gap-6 pt-8">
        <div className="text-white md:text-5xl sm:text-4xl text-xl text-center font-bold md:px-20 lg:px-32">
          <span className="text-[#2B59FF] underline">Secure</span> your
          business, Secure your{" "}
          <span className="text-[#2B59FF] underline">future</span>
        </div>
        <div className="text-sm text-[#BAB7B7] text-center md:px-36 px-0 ">
          Data analysis software is a type of software tool used for data
          analysis and reporting. It is designed to help businesses,
          organizations, and individuals process, visualize,
        </div>
        <div className="flex flex-row justify-center items-center">
          <button className="flex flex-row justify-center items-center bg-[#2B59FF] text-xs text-[#FAFAFA] h-10 w-36 rounded-full">
            Get Started Free
          </button>
        </div>
      </div>
    </div>
  );
}

export default Toppage;
