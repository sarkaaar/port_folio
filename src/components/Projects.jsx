import store from "../assets/projects/E-Commerce.png"
import cam from "../assets/projects/open_cv.jpg"
import chat from "../assets/projects/connectX.jpeg"
import db from "../assets/projects/database.jpeg"
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

export default function Projects() {
  let [isOpen, setIsOpen] = useState(true)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }
  const projects = [
    {
      image: store,
      name: "An E-Commerce Store",
      description:
        "A Full Fleged E-Commerce Store That has all the Roles on a single page, i.e. Different roles have different usages onto their Permitter Features and etc and well as some o thee clinical services were also there such as an appointment with a doctor as well as a life check up and payment methods and their ratings and etc",
    },
    {
      image: cam,
      name: "Survillance Systems Using OPEN_CV",
      description:
        "An application in Python that uses a simple camera to identify the intruder into the frame, it stores all the images at once in the begining of the excecuetion of the known faces and then matches that with th e face on the current frame and when an unknown person enters the frame the system captures the images of that intruder and will save in the local Storage",
    },
    {
      image: chat,
      name: "Messaging App (Connect X) ",
      description:
        "An interactive text messaging application in react native",
    },
    {
      image: db,
      name: "Course Registeration System ",
      description:
        "It is just a database wthout any frontend. It is capable enough that can handle a 1000+ students in different standards as well as is able to manage the pre-requirite sourses and etc",
    }

  ];

 
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
      <>
      <div className="fixed inset-0 flex items-center justify-center">
        <button
          type="button"
          onClick={openModal}
          className="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          Open dialog
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Payment successful
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Your payment has been successfully submitted. We’ve sent
                      you an email with all of the details of your order.
                    </p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Got it, thanks!
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
    </section>
  );
}
