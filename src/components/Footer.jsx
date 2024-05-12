function Footer(props) {
  // Footer Section

  const date = new Date();

  return (
    // Blue Box structure
    <div className="relative">
      <div className="bg-[#2B59FF] w-3/4 m-auto flex flex-col h-64 justify-center items-center text-[#FFFFFF] gap-3 text-center rounded-xl absolute lg:-top-32 lg:left-40 sm:left-28 -top-16 left-12">
        <div className="font-bold sm:text-3xl text-xl">Ready to Get Started?</div>
        <div className="text-[#FAFAFA] text-sm w-3/4 ">
          Data analysis software is a type of software tool used for data
          analysis and reporting. It is designed to help businesses,
          organizations.
        </div>
        <button className="bg-[#12141D] h-10 w-40 text-center rounded-full">
          Contact Us
        </button>
      </div>
      {/* Main Footer */}
      <div className="sm:h-96 h-auto bg-[#12141D] sm:pt-60 lg:pt-48 pt-56 sm:pb-96 md:pb-64">
        <div className=" flex sm:flex-row flex-col sm:w-5/6 w-4/5 md:w-4/5 m-auto gap-5 border-b-2 pb-14">
          <div className="flex flex-col gap-5">
            <div className="text-[#FAFAFA] font-bold text-3xl">Stract</div>
            <div className="text-[#B9B3B3] text-xs w-2/3">
              Data analysis software is a type of software tool used for data
              analysis and reporting.
            </div>
            <div className="flex flex-row gap-1">
              <img src="./images/twitter.svg" alt="" />
              <img src="./images/facebook.svg" alt="" />
              <img src="./images/instagram.svg" alt="" />
              <img src="./images/github.svg" alt="" />
            </div>
          </div>
          <div className="flex sm:flex-row flex-col gap-16">
            <div className="flex flex-col text-[#B9B3B3] text-xs gap-4 pt-9 sm:pt-0">
              <p className="text-[#FAFAFA] text-sm">Company</p>
              <p>Service</p>
              <p>Resources</p>
              <p>About Us</p>
            </div>
            <div className="flex flex-col text-[#B9B3B3] text-xs gap-4">
              <p className="text-[#FAFAFA] text-sm">Help</p>
              <p>Customer Support</p>
              <p>Terms & Conditions</p>
              <p>Privacy Policy</p>
            </div>
            {/* Subscribe to Newsletter */}
            <div className="flex flex-col gap-5">
              <div className="text-[#FAFAFA] text-sm">
                Subscribe to Newsletter
              </div>
              <div className="flex flex-row gap-0 ">
                <input
                  type="email"
                  placeholder="Enter email address"
                  className="w-35 h-10 text-center  rounded-l-lg"
                />
                <button
                  type="submit"
                  className="w-20 h-10 text-center bg-[#2B59FF] rounded-r-lg text-[#FAFAFA]"
                >
                  Join
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center text-[#FAFAFA] pt-3 text-sm">
          © Copyright {date.getFullYear()}, All Rights Reserved by stract
        </div>
      </div>
    </div>
  );
}

export default Footer;
