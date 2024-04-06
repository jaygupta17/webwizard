import React from "react";

function About() {
  const team = [
    {
      name: "Jay Gupta",
      branch: "Data Science",
      skills: ["NextJs", "Tailwind CSS", "Appwrite", "Figma"],
      LinkedIn : "https://www.linkedin.com/in/jaygupta17",
      github:"https://www.github.com/jaygupta17",

    },
    {
      name: "Krishna Vijaywargiy",
      branch: "Data Science",
      skills: ["NextJs", "Tailwind CSS","Figma" , "Java"],
      LinkedIn : "https://www.linkedin.com/in/krishna-vijaywargia-404895201",
      github:"https://github.com/KrishnaV2",
    },
    {
      name: "Om Chillure",
      branch: "ENCS",
      skills: [ "ML", "Gen AI" ,"NextJs", "Tailwind CSS"],
      LinkedIn : "https://www.linkedin.com/in/omChillure",
      github:"https://github.com/omchillure",
    },
  ];
  const stack = ["Next.js", "Appwrite", "Python"];
  return (
    <div className="h-[190vh] w-full flex justify-center items-center flex-col">
      <div className="h-[150vh] w-[98%] flex justify-evenly items-center flex-col">
        <h1 className="text-white/70 font-semibold text-1xl my-2">
          Team Members
        </h1>
        {team.map((member) => (
          <div className="rounded-[15px] h-[40vh] w-[55%] bg-black/25 border-[1px] border-purple-500/10 flex justify-center items-center text-white gap-x-14 max-[700px]:flex-col max-[700px]:h-70vh max-[700px]:w-[70%]">
            <div className="h-[90%] aspect-square rounded-[50%] bg-purple-700 flex justify-center items-center">
              Image
            </div>
            <div className="flex max-[700px]:w-full justify-center items-start flex-col gap-y-2">
              <h1 className=" max-[700px]:text-center  max-[700px]:w-full">{member.name}</h1>
              <h1 className="text-white/40  max-[700px]:text-center  max-[700px]:w-full">{member.branch}</h1>
              <h1 className="flex gap-x-2 max-[700px]:flex-wrap w-full  max-[700px]:w-full  max-[700px]:justify-center">
                {member.skills.map((skill) => (
                  <div className="py-1 px-2 rounded-md text-center bg-black/45 text-purple-700">
                    {skill}
                  </div>
                ))}
              </h1>
              <div className='flex gap-x-3 justify-center items-center w-full'>
                  <a href={member.LinkedIn} target='_blank'>LinkedIn</a>
                  <a href={member.github} target='_blank'>Github</a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="h-[40vh] w-[98%] flex justify-evenly items-center flex-col">
        <h1 className="text-white/70 font-semibold text-1xl my-2">
          Tech Stack
        </h1>
        <div className=" h-[30vh] w-[55%] flex justify-evenly items-center  max-[700px]:flex-col  max-[700px]:gap-y-2">
          {stack.map((ele) => (
            <div className="bg-purple-900 h-[20vh] text-white aspect-square flex justify-center items-center">
              {ele}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
