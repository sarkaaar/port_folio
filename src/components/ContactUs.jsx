import { useEffect, useState } from "react";
// import { useForm } from "react-hook-form";
import { useForm, ValidationError } from "@formspree/react";
import "react-toastify/dist/ReactToastify.min.css";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ContactUs() {
  const [state, handleSubmit] = useForm("xrgweqdo");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(true);

  // if (state.succeeded) {
  //   setSubmitted(false);
  //   return <p>Thanks for joining!</p>;
  // }

  useEffect(() => {
    if (state.succeeded) {
      setSubmitted(false);
    }
  }, [state.succeeded]);

  return (
    <section id="contactUs" className="bg-slate-800 flex justify-center">
      <div className="max-w-7xl w-full">
        <div className="isolate px-6 py-24 sm:py-32 lg:px-8 bg-slate-">
          <div
            className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
            aria-hidden="true"
          >
            <div
              className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
          <div className="lg:flex">
            <div className="w-1/2">
              <div className="flex justify-center items-center">
                <div className="w-10/12 lg:pt-48 text-6xl sm:text-8xl pb-8">
                  <h1 className="">Wanna</h1>
                  <h1 className="">make</h1>
                  <h1 className="">Something</h1>
                  <h1 className="animate-pulse font-bold text-slate-600">
                    Incredible.
                  </h1>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 bg-slate-900 rounded-lg p-8">
              <div className="mx-auto max-w-2xl text-center">
                <p className="mt-2 text-lg leading-8">
                  Feel free to reach out if you're looking for a developer, have
                  a question, or just want to connect.{" "}
                </p>
              </div>
              <form
                onSubmit={handleSubmit}
                className="mx-auto mt-16 max-w-xl sm:mt-20"
              >
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="first-name"
                      className="block text-sm font-semibold leading-6"
                    >
                      Username
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="text"
                        name="username"
                        id="username"
                        autoComplete="given-name"
                        className="block w-full text-white  bg-slate-800 rounded-md border-0 px-3.5 py-2  shadow-sm ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold leading-6"
                    >
                      Email
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        autoComplete="email"
                        className="block w-full bg-slate-800 rounded-md border-0 px-3.5 py-2  shadow-sm ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="subject"
                      className="block text-sm font-semibold leading-6 "
                    >
                      Subject
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="text"
                        name="subject"
                        id="subject"
                        className="block w-full bg-slate-800 rounded-md border-0 px-3.5 py-2  shadow-sm ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold leading-6 "
                    >
                      Message
                    </label>
                    <div className="mt-2.5">
                      <textarea
                        name="message"
                        id="message"
                        rows={4}
                        className="block w-full bg-slate-800 rounded-md border-0 px-3.5 py-2 text-white  shadow-sm ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                        defaultValue={""}
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-10">
                  <button
                    type="submit"
                    onClick={() => {
                      setLoading(true);
                    }}
                    className="block w-full rounded-md bg-slate-800 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Let's talk
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {loading ? (
        <div
          className="relative z-10"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div
            className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
            aria-hidden="true"
          ></div>

          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white h-48 px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="flex justify-center">
                    <div className=" m-auto w-fit">
                      {submitted ? (
                        <>
                          <label className="text-lg pb-8">Submitting</label>
                          <svg
                            className="border-gray-300 h-20 mt-8 w-20 animate-spin rounded-full border-8 border-t-blue-600"
                            viewBox="0 0 24 24"
                          ></svg>
                        </>
                      ) : (
                        <>
                          <label className="text-lg pb-8">
                            Thanks for joining!
                          </label>
                          <button
                            onClick={() => setLoading(false)}
                            className=" mt-16 block w-full rounded-md bg-slate-800 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                          >
                            Close
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </section>
  );
}
