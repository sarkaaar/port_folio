import Tilt from "react-parallax-tilt";

export default function Skills() {
  // const skills = [

  //   "HTML",
  //   "CSS",
  //   "JavaScript",
  //   "TypeScript",
  //   "SQL",
  //   "React.js",
  //   "Next.js",
  //   "Python",
  // ];

  const skills = [
    { name: "Frontend Technologies", type: ["ReactJS", "NextJS"] },
    { name: "Backend Technologies", type: ["JAVA", "Spring Boot"] },
    { name: "Web Technologies", type: ["HTML", "CSS", "JavaScript"] },
    { name: "Scripting", type: ["Python (Web Scrapping)", "JavaScript"] },
    { name: "DevOps", type: ["Docker"] },
  ];
  return (
    <div className="flex justify-center">
      <div className="pt-16  max-w-7xl w-10/12">
        <div>
          <h2 className="py-4 font-bold text-3xl">Skills</h2>
          <div className="flex justify-center">
            <div className="justify-center sm:w-11/12 w-full grid grid-cols-2 sm:grid-cols-4 sm:justify-center   gap-8">
              {skills.map((obj, index) => {
                return (
                  <Tilt>
                    <div className="bg-slate-600 border border-slate-200">
                      <p
                        key={index}
                        className="transition-transform hover:ease-in-out text-lg font-bold justify-center   p-4 pb-0 rounded-sm"
                      >
                        {obj.name}
                      </p>
                      <p
                        key={index}
                        className="pl-2 transition-transform hover:ease-in-out justify-center h-24   p-4 rounded-sm"
                      >
                        {obj.type.map((item, index) => {
                          return <p className="pl-4">&rarr; {item}</p>;
                        })}
                      </p>
                    </div>
                  </Tilt>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      {/* <Tilt>
        <div className="w-96 h-96 bg-slate-500 flex justify-center align- mt-36">
          <h1>Hi!!</h1>
        </div>
      </Tilt> */}
    </div>
  );
}
