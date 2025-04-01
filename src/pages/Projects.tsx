import { useState } from "react";
import CardProject from "../components/CardProject";
import projects from "../data/Projects";

function Projects() {
  const [filter, setFilter] = useState("front-end");

  function handleFilterChange(newFilter: string) {
    setFilter(newFilter);
  }
  return (
    <div className="flex-1 flex flex-col px-7 min-h-screen pb-7 md:mx-28 text-white ">
      <div className=" flex flex-col bg-gradient-to-b min-h-full to-black-primary from-gray-primary rounded-xl p-8">
        <div className="flex w-full justify-center gap-3 md:gap-5 items-center border-b border-white md:pb-8 ">
          <button
            onClick={() => handleFilterChange("back-end")}
            className={filter === "back-end" ? "color-white" : "text-gray-400"}
          >
            <h1 className="font-bold text-lg md:text-2xl mb-6 md:mb-0">
              BACK-END
            </h1>
          </button>
          <button
            className={filter === "front-end" ? "color-white" : "text-gray-400"}
            onClick={() => handleFilterChange("front-end")}
          >
            <h1 className="font-bold text-lg md:text-2xl mb-6 md:mb-0">
              FRONT-END
            </h1>
          </button>
          <button
            className={filter === "design" ? "color-white" : "text-gray-400"}
            onClick={() => handleFilterChange("design")}
          >
            <h1 className="font-bold text-lg md:text-2xl mb-6 md:mb-0">
              DESIGN
            </h1>
          </button>
        </div>
        <div className="flex flex-row w-full flex-wrap gap-4 md:gap-10 mt-8 md:mx-25">
          {projects
            .filter((card) => card.tag?.includes(filter))
            .map((card, index) => (
              <CardProject
                key={index}
                title={card.title}
                description={card.description}
                image={card.image}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
