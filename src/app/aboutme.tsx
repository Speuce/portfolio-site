const AboutMe = () => {
    return (
        <div id="aboutme" className="bg-slate-500 w-full rounded-md shadow-md p-16">
          <h1 className="text-2xl font-extrabold tracking-tight sm:text-6xl text-slate-100 mb-12">
            Hey, <span className="text-green-400"> I&apos;m Matt</span>
          </h1>
          <div className="flex flex-row-reverse flex-wrap sm:flex-nowrap justify-center gap-12 items-center">
            <div className="flex-grow flex-shrink-0 basis-1/3">
              <img className="rounded-lg shadow-md w-full" src="/IMG_6490.png" alt="Matt Kwiatkowski"/>
              <div className="text-m text-slate-700 text-center mt-2 italic">
                  At the Top of Half Dome, Yosemite National Park
              </div>
          </div>


            <span className="text-l font-normal text-slate-100 sm:text-[1.5rem] leading-relaxed">
              I&apos;m a software developer and BCSc Honours graduate based in Canada, passionate about software <b>architecture</b> and <b>AI</b>.<br/>
              I&apos;ve honed my skills with 2.5 years of technical experience in the agri-tech and energy sectors, and running the University of Manitoba AI Club. <br/>
              I&apos;m also the driving force behind <a href="https://contextcrunch.com" className="underline" target="_blank">ContextCrunch</a>, an AI-driven startup concept.<br/>
              If I&apos;m not coding, you can find me backpacking or skiing, depending on the season.
            </span>
          </div>
        </div>
    );
}

export default AboutMe;