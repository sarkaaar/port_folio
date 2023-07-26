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
        <div className="flex justify-center mt-16">
            <div className=" max-w-7xl w-full">
                <h2 className="py-4 font-bold text-3xl text-gray-100">Education</h2>
                <div className="">
                    <div className="flex flex-col gap-8">
                        {experience.map((exp, index) => {
                            return (<div className="hover:bg-slate-600 border-r border-t p-4 rounded-lg">
                                <h2 className="text-2xl font-bold">{exp.comp}</h2>
                                <div className="flex">
                                    <h3 className="text-lg font-bold text-gray-300 pl-4">{exp.desg}</h3>
                                    <h3 className="text-md mt-1 text-gray-300 pl-4">{exp.time}</h3>
                                </div>
                            </div>)
                        })}

                    </div>

                </div>
            </div>
        </div>
    )
}