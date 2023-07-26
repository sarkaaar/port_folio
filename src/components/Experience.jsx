export default function Experience() {

    const experience = [{
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
    }]

    return (
        <div className="flex justify-center">
            <div className=" max-w-7xl w-full">
                <h2 className="py-4 font-bold text-3xl text-gray-100">Experience</h2>
                <div className="">
                    <div className="flex flex-col gap-8">
                        {experience.map((exp, index) => {
                            return (<div className="hover:bg-slate-600 border-l border-b p-4 rounded-lg">
                                <h2 className="text-2xl font-bold">{exp.comp}</h2>
                                <div className="flex">
                                <h3 className="text-lg font-bold text-gray-300 pl-4">{exp.desg}</h3>
                                
                                <h3 className="text-lg text-gray-300 pl-4">{exp.time}</h3>
                                
                                </div>
                                <p className="text-gray-300 text-sm pl-4">{exp.disc}</p>
                            </div>)
                        })}

                    </div>

                </div>
            </div>
        </div>
    )
}