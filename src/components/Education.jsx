export default function Education() {

    const experience = [{
        comp: "BS CS",
        desg: "COMSATS University",
        time: "(July 2018 - July 2022)",
    },
    {
        comp: "ICS",
        desg: "FFC Higher Secondary School and College",
        time: "(June 2016 - June 2018)",
    },
    {
        comp: "Matriculation",
        desg: "FFC Higher Secondary School and College",
        time: "(June 2014 - June 2016)",
    }]

    return (
        <section id="education" className="flex justify-center pt-16">
            <div className=" max-w-7xl w-10/12 sm:flex sm:gap-8">
                <h2 className="py-4 font-bold text-3xl text-gray-100 w-1/5">Education</h2>
                <hr className=" h-full border-l border-slate-400 " />

                    <div className="w-4/5">
                        {experience.map((exp, index) => {
                            return (
                            <div key={index} className="hover:bg-slate-600 border-r border-t p-4 rounded-lg my-8">
                                <h2 className="text-2xl font-bold">{exp.comp}</h2>
                                <div className="sm:flex">
                                    <h3 className="text-lg font-bold text-gray-300 pl-4">{exp.desg}</h3>
                                    <h3 className="text-md mt-1 text-gray-300 pl-4">{exp.time}</h3>
                                </div>
                            </div>)
                        })}

                    </div>

            </div>
        </section>
    )
}