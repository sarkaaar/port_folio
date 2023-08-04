import store from "../assets/projects/E-Commerce.png";
import { useRef } from "react";
import cam from "../assets/projects/open_cv.jpg";
import chat from "../assets/projects/connectX.jpeg";
import db from "../assets/projects/database.jpeg";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

const projects = [
  {
    image: store,
    name: "An E-Commerce Store",
    description:
      "A Full Fleged E-Commerce Store That has all the Roles on a single page, i.e. Different roles have different usages onto their Permitter Features and etc and well as some o thee clinical services were also there such as an appointment with a doctor as well as a life check up and payment methods and their ratings and etc",
    github: "https://github.com/sarkaaar/fyp_react",
    tech: ["Firebase", "React", "TailwindCSS", "MUI"],
  },
  {
    image: cam,
    name: "Survillance Systems Using OPEN_CV",
    description:
      "An application in Python that uses a simple camera to identify the intruder into the frame, it stores all the images at once in the begining of the excecuetion of the known faces and then matches that with th e face on the current frame and when an unknown person enters the frame the system captures the images of that intruder and will save in the local Storage",
    github: "https://github.com/sarkaaar/survilance-system-using-open-cv",
    tech: ["Python", "Open-CV", "face_recognition"],
  },
  {
    image: chat,
    name: "Messaging App (Connect X) ",
    description: "An interactive text messaging application in react native",
    github: "https://github.com/faseehahmad00/ConnectX",
    tech: ["React Native"],
  },
  {
    image: db,
    name: "Course Registeration System ",
    description:
      "It is just a database wthout any frontend. It is capable enough that can handle a 1000+ students in different standards as well as is able to manage the pre-requirite sourses and etc",
    tech: ["SQL Server", "MS SQL"],
  },
];

export default function Projects() {
  let [open, setOpen] = useState(false);
  const [obj, setObj] = useState({});

  function openModal(project) {
    setObj(project);
    setOpen(true);
  }
  const cancelButtonRef = useRef(null);


  return (
    <section id="projects" className="flex justify-center pt-16">
      <div className="max-w-7xl w-10/12">
        <div>
          <h2 className="py-4 font-bold text-3xl text-gray-100">Projects</h2>
          <div className="flex justify-center">
            <div className="sm:grid grid-cols-1 sm:justify-center md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
              {projects.map((project, index) => (
                <div
                  key={index}
                  onClick={() => openModal(project)}
                  className=" my-4 border-gray-600 border shadow-sm bg-gray-600  hover:shadow-2xl w-10/12 sm:w-72 m-auto rounded-lg"
                >
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
                      <span
                        className="font-bold text-sm hover:text-indigo-600"
                        onClick={() => {
                          openModal(project);
                        }}
                      >
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
      <>
        <Transition.Root show={open} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-10"
            initialFocus={cancelButtonRef}
            onClose={setOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            <div className="fixed inset-0 z-10 overflow-y-auto">
              <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                  enterTo="opacity-100 translate-y-0 sm:scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                  leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                >
                  <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                    <div className="bg-slate-800 px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                      <div className="">
                      
                        <div className=" ">
                          <Dialog.Title
                            as="h2"
                            className="pb-4 font-semibold leading-6 text-xl text-gray-100"
                          >
                            {obj?.name}
                          </Dialog.Title>
                          <img src={obj?.image} alt="img" className="w-full" />
                          <div className="mt-2">
                          <h3 className="text-lg pt-2 font-bold text-gray-200">
                              Description
                            </h3>
                            <p className="text-sm px-2">
                              {obj?.description}
                            </p>
                          </div>
                          <div className="mt-4 flex gap-4">
                          {obj?.tech?.map((tech_, index) => {
                                return (<p key={index} className="flex text-sm transition-transform hover:ease-in-out justify-center bg-gray-600 p-2 px-4 rounded-full hover:bg-gray-900">{tech_}</p>)
                            })}
                          </div>
                          <div className="mt-4 ">
                            <a className="text-sm text-gray-400 underline pt-12" href={obj?.github} >
                              View Source
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-slate-800 px-4 py-3 sm:flex pb-8 sm:flex-row-reverse sm:px-6">
                      <button
                        type="button"
                        className="mt-3 inline-flex w-full justify-center px-8 rounded-md bg-slate-600 text-white  py-2 text-sm font-semibold shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                        onClick={() => setOpen(false)}
                        ref={cancelButtonRef}
                      >
                        Close
                      </button>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition.Root>
      </>
    </section>
  );
}
