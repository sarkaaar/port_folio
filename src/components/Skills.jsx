export default function Skills() {
    const skills = ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'SQL', 'React.js', 'Next.js', 'Python'];
    return (
        <div className="flex justify-center">
            <div className="py-16  max-w-7xl w-10/12">
                <div>
                    <h2 className="py-4 font-bold text-3xl text-gray-100">Skills</h2>
                    <div className="">
                        <div className="justify-center grid grid-cols-2 sm:grid-cols-4 sm:justify-center md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-4">
                            {skills.map((obj, index) => {
                                return (<h3 className="flex justify-center bg-gray-600 p-4 rounded-full hover:bg-gray-500">{obj}</h3>)
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}