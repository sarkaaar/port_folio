export default function Skills() {
    const skills = ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'SQL', 'React.js', 'Next.js', 'Python'];
    return (
        <div className="flex justify-center">
            <div className="py-16  max-w-7xl w-full">
                <div>
                    <h2 className="py-4 font-bold text-3xl text-gray-100">Skills</h2>
                    <div className="flex justify-center">
                        <div className="flex gap-12">
                            {skills.map((obj, index) => {
                                return (<h3 className="bg-gray-600 p-4 rounded-full hover:bg-gray-500">{obj}</h3>)
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}