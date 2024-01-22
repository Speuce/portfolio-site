import ProjectItem from "./projectItem";

const Projects = () => {
    return (
        <div id="portfolio" className="bg-slate-500 w-full rounded-md shadow-md p-16 ">
          <h1 className="text-2xl font-bold sm:text-6xl text-slate-100 mb-12">
            Portfolio
          </h1>
          <div className="flex flex-col gap-16">
            <ProjectItem name="ContextCrunch" description="
            ContextCrunch is an AI startup concept that aims to reduce token usage and increase the relevancy of prompts fed into Large Language Models. 
            It operates using a custom LLM deployed on a hybrid serverless architecture. 
            The API is built using FastAPI, the proxy backend and frontent in NextJS, and deployed on Vercel.
            Using ContextCrunch, prompts can be compressed as much as 90%-95% while still retaining the necessary information to generate a response." 
              image={"/contextcrunch.png"} 
              imageRight={true}
              url="https://contextcrunch.com"
            />

            <ProjectItem name="DeployDuo" description="
              An AI-based application that combines multiple LLM Agents to create a webapp with mininal user input. 
              Agents act in different capacities, such as project manager, developer, and tester, and communicate to accomplish the user's central goal.
              This is a work-in-progress project."
              image={"./deployduo.png"} 
              imageRight={false}
            />

            <ProjectItem name="Traffic Accident Data Explorer" description="
            Using multilevel multidimensional quantitative association rule mining, we analyzed a public dataset of UK traffic accidents, and generated over 27,000 association rules. 
            The rule generation was done using python, and the subsequent data explorer is built in Angular. 
            
            The associated paper was published and awarded Best Paper in the 2022 IEEE International Conference on Information Reuse and Integration for Data Science (IRI 2022)."
              image={"dataexplorer.png"} 
              imageRight={true}
              url="https://mkcodes.ca/dataexplorer"
            />
            <ProjectItem name="Poker Timer" description="A customizable poker blind timer built using angular. Used regularly during poker nights with friends."
              image={"/pokertimer.png"} 
              imageRight={false}
              url="https://mkcodes.ca/pokertimer"
            />

            <ProjectItem name="Previous Project Site" description="
              Built as an experiment to explore the possibilities of ThreeJS,
              this previous version of my portfolio site is a 3D environment that can be explored using a first person camera."
              image={"./old_site.png"} 
              imageRight={true}
              url="https://mkcodes.ca/oldportfolio"
            />
            </div>
        </div>
    );
}

export default Projects;