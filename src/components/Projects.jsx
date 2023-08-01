import { render } from "react-dom";
import Modal from "./Modal";

export default function Projects() {
  const projects = [
    {
      image: "src/assets/projects/E-Commerce.png",
      name: "An E-Commerce Store",
      description:
        "A Full Fleged E-Commerce Store That has all the Roles on a single page, i.e. Different roles have different usages onto their Permitter Features and etc and well as some o thee clinical services were also there such as an appointment with a doctor as well as a life check up and payment methods and their ratings and etc",
    },
    {
      image: "src/assets/projects/open_cv.jpg",
      name: "Survillance Systems Using OPEN_CV",
      description:
        "An application in Python that uses a simple camera to identify the intruder into the frame, it stores all the images at once in the begining of the excecuetion of the known faces and then matches that with th e face on the current frame and when an unknown person enters the frame the system captures the images of that intruder and will save in the local Storage",
    },
    {
      image: "src/assets/projects/connectX.jpeg",
      name: "Messaging App (Connect X) ",
      description:
        "An interactive text messaging application in react native",
    },
    {
      image: "src/assets/projects/database.jpeg",
      name: "Course Registeration System ",
      description:
        "It is just a database wthout any frontend. It is capable enough that can handle a 1000+ students in different standards as well as is able to manage the pre-requirite sourses and etc",
    }

  ];

  const openModal = (obj) => {
    // console.log(obj);
    return(<><Modal obj={true} />
    <>Hello World</></>)
  };
  return (
    <section id="projects" className="flex justify-center pt-16">
      <div className="max-w-7xl w-10/12">
        <div>
          <h2 className="py-4 font-bold text-3xl text-gray-100">Projects</h2>
          {/* <div className="flex gap-4 items-center flex-col sm:flex-row sm:justify-center"> */}
          <div className="flex justify-center">
            <div className="sm:grid grid-cols-1 sm:justify-center md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
              {projects.map((project, index) => (
                <div key={index} className=" my-4 border-gray-600 border shadow-sm bg-gray-600  hover:shadow-2xl w-10/12 sm:w-72 m-auto rounded-lg">
                  <img
                    src={project?.image}
                    className=" h-48 w-full rounded-t-lg overflow-auto"
                  />
                  <div className="p-3">
                    <h3 className="font-bold text-lg text-gray-200 h-16 overflow-y-hidden ">
                      {project?.name}
                    </h3>
                    <h4 className="text-gray-300 text-sm">
                      {project?.description.slice(0, 70) + "..."}
                      <span className="font-bold text-sm hover:text-indigo-600" onClick={()=>{openModal(project)}}>
                        See More
                      </span>
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
