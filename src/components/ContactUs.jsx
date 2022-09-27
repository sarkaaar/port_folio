import image from "../assets/image.png";

export default function Example() {
  return (
 
      <div className="flex justify-center">
        <div>
          <div className="m-8 lg:flex max-w-7xl">
            <div className="mr-8 mt-16 ">
              <p className="text-gray-100 mb-2">
                Hi there, I'm a web developer. I love building and rebuilding
                programs using color, fonts, and illustrations.
              </p>

              <p className="text-gray-100 mb-2">
                I'm a great admirer of attention to detail and beautifully
                crafted designs that not only look exceptional but also are easy
                to use. I specialize in creating user interfaces and user
                experiences utilizing the latest web technologies.
              </p>

              <p className="text-gray-100">
                I'm passionate about helping others, and I'm always looking for
                an opportunity to help someone out.
              </p>
            </div>

            <img src={image} className="w-80 h-80 rounded-full block" />
          </div>
        </div>
     
      </div>
    
  );
}
