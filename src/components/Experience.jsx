export default function Experience() {
  const experience = [
    {
      comp: "I2C Inc.",
      desg: "Associate Software Engineer - WEB",
      time: "(July 2022 - Presant)",
      disc: "Have Experience in a product based company where I worked in securing its web applications",
    },
    {
      comp: "Nexusberry",
      desg: "Internee - WEB ",
      time: "(July 2021 - Sept-2021)",
      disc: "Have Experience in a service based company where I worked as a full stack developep from scratc from node.js to React.js as front end.",
    },
  ];

  return (
    <section id="experience" className="flex justify-center pt-16">
      <div className=" max-w-7xl w-10/12">
        <h2 className="py-4 font-bold text-3xl text-gray-100">Experience</h2>
        <div className="">
          <div className="flex flex-col">
            {experience.map((exp, index) => {
              return (
                <div key={index} className="hover:bg-slate-600 even:border-r odd:border-l border-y p-4 rounded-xl border-slate-500">
                  <h2 className="text-2xl font-bold">{exp.comp}</h2>
                  <div className="sm:flex">
                    <h3 className="text-lg font-bold text-gray-300 pl-4">
                      {exp.desg}
                    </h3>

                    <h3 className="text-lg text-gray-300 pl-4">{exp.time}</h3>
                  </div>
                  <p className="text-gray-300 text-sm pl-4">{exp.disc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
