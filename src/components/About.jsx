import image from "../assets/image.png";
import resume from "../assets/Abdul_Wali_Resume.pdf";

export default function About() {
  return (
    <section
      id="home"
      className="flex justify-center h-full pt-12 pb-12 sm:h-screen bg-slate-800"
    >
      <div className="flex justify-center items-center">
        <div className=" lg:flex max-w-7xl w-10/12">
          <div className="m-auto pt-12 sm:pt-0 pb-12 lg:pb-0">
            <h1 className="text-3xl sm:text-8xl font-bold">Abdul Wali</h1>
            <h1 className="text-2xl sm:text-3xl text-gray-300 mb-4">
              Software Engineer
            </h1>
            <div>
              <p className="text-gray-100 mb-2 italic">
                "Hi there, I'm a web developer. I love building and rebuilding
                programs using color, fonts, and illustrations.
              </p>

              <p className="text-gray-100 mb-2 italic">
                I'm a great admirer of attention to detail and beautifully
                crafted designs that not only look exceptional but also are easy
                to use. I specialize in creating user interfaces and user
                experiences utilizing the latest web technologies.
              </p>

              <p className="text-gray-100 italic pb-12">
                I'm passionate about helping others, and I'm always looking for
                an opportunity to help someone out."
              </p>
              <a
                href={resume}
                download="Abdul Wali Resume"
                target="_blank"
                rel="noreferrer"
                className=" text-slate-200 bg-slate-900 p-4 rounded-md mt-12 hover:text-slate-100  hover:bg-slate-500"
              >
                Download Resume
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="md:w-96">
              <img src={image} className=" rounded-full block md:w-fit" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
