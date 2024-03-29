export default function Skills() {
    const skills = ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'SQL', 'React.js', 'Next.js', 'Python'];
    return (
        <div className="flex justify-center">
            <div className="pt-16  max-w-7xl w-10/12">
                <div>
                    <h2 className="py-4 font-bold text-3xl">Skills</h2>
                    <div className="flex justify-center">
                        <div className="justify-center sm:w-11/12 grid grid-cols-2 sm:grid-cols-4 sm:justify-center md:grid-cols-6 lg:grid-cols-8 gap-4">
                            {skills.map((obj, index) => {
                                return (<p key={index} className="flex transition-transform hover:ease-in-out justify-center bg-gray-600 p-4 rounded-full hover:bg-gray-800">{obj}</p>)
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}