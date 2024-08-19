import { progress } from "framer-motion";
import CustomProgressBar from "./ui/ProgressBar";
import { BookOpen, Briefcase, Code } from "lucide-react"


export default function Resume() {
    const educationItems = [
        {
            school: "High School",
            period: "2022 — 2024",
            description: "Completed high school with a focus on personal and academic growth."
        },
        {
            school: "Industrial automation technician",
            period: "2021 — 2022",
            description: "Trained in industrial automation systems and control processes."
        },
        {
            school: "Internet computer technician",
            period: "2023 — 2024",
            description: "Finished a course in internet computing, covering web development and programming."
        }
    ]

    const workExperiences = [
        {
            company: "Yours Company",
            position: "Be generous",
            period: "Today - ?",
            description: "Your decision, you have the chance to mark this field forever ❤ "
        }
    ]

    const skills = [
        { name: "React", progress: 65 },
        { name: "Node.js", progress: 85 },
        { name: "TypeScript", progress: 20 },
        { name: "UI/UX Design", progress: 90 },
        { name: "Python", progress: 55}
    ]

    return (
        <div className="text-white p-6">
            <section>
                <div className="flex items-center mb-8 relative">
                    <div className=" absolute w-12 h-12 bg-selected rounded-lg transform rotate-45 left-[-8px] top-[-8px]"></div>
                    <div className=" absolute w-12 h-12 bg-yellow-500 rounded-lg transform rotate-45 left-[-4px] top-[-4px]"></div>
                    <div className=" relative z-10 bg-yellow-700 p-3 rounded-lg mr-3">
                        <BookOpen className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold relative z-10">Education</h2>
                </div>
                <div className="relative pl-8 border-l border-gray-700">
                    {educationItems.map((item, index) => (
                        <div key={index} className="mb-10 relative">
                            <div className="absolute -left-10 mt-1.5 w-4 h-4 bg-yellow-500 rounded-full border-4 border-gray-900"></div>
                            <h3 className="text-xl font-semibold mb-1">{item.school}</h3>
                            <p className="text-yellow-500 text-sm mb-2">{item.period}</p>
                            <p className="text-gray-400">{item.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section>
                <div className="flex items-center mb-8 relative">
                    <div className="absolute w-12 h-12 bg-blue-600 rounded-lg transform rotate-45 left-[-8px] top-[-8px]"></div>
                    <div className="absolute w-12 h-12 bg-blue-500 rounded-lg transform rotate-45 left-[-4px] top-[-4px]"></div>
                    <div className="relative z-10 bg-blue-700 p-3 rounded-lg mr-3">
                        <Briefcase className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold relative z-10">Work Experience</h2>
                </div>
                <div className="relative pl-8 border-l border-gray-700">
                    {workExperiences.map((job, index) => (
                        <div key={index} className="mb-10 relative">
                            <div className="absolute -left-10 mt-1.5 w-4 h-4 bg-blue-500 rounded-full border-4 border-gray-900"></div>
                            <h3 className="text-xl font-semibold mb-1">{job.company}</h3>
                            <h4 className="text-lg text-blue-400 mb-1">{job.position}</h4>
                            <p className="text-blue-300 text-sm mb-2">{job.period}</p>
                            <p className="text-gray-400">{job.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Skills Section */}
            <section>
                <div className="flex items-center mb-8 relative">
                    <div className="absolute w-12 h-12 bg-green-600 rounded-lg transform rotate-45 left-[-8px] top-[-8px]"></div>
                    <div className="absolute w-12 h-12 bg-green-500 rounded-lg transform rotate-45 left-[-4px] top-[-4px]"></div>
                    <div className="relative z-10 bg-green-700 p-3 rounded-lg mr-3">
                        <Code className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold relative z-10">Skills</h2>
                </div>
                <div className="space-y-6">
                    {skills.map((skill, index) => (
                        <div key={index} className="space-y-2">
                            <div className="flex justify-between">
                                <span className="text-sm font-medium text-white">{skill.name}</span>
                                <span className="text-sm font-medium text-gray-400">{skill.progress}%</span>
                            </div>
                            <CustomProgressBar value={skill.progress} className="bg-gray-700" />
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}
