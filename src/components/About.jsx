import image from "../assets/image.png";

export default function About() {
  return (

    <div className="flex justify-center h-screen">
      {/* <div className=""> */}
        <div className="flex justify-center items-center">
          <div className=" lg:flex max-w-7xl">
            <div className="m-auto">
              <h1 className="text-8xl font-bold">Abdul Wali</h1>
              <h1 className="text-3xl text-gray-300 mb-4">Software Engineer</h1>
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

                <p className="text-gray-100 italic">
                  I'm passionate about helping others, and I'm always looking for
                  an opportunity to help someone out."
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="md:w-96">
                <img src={image} className=" rounded-full block md:w-fit" />
              </div></div>
          </div>
        {/* </div> */}

      </div>
    </div>
  );
}
