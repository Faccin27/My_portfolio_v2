import IconApp from '../assets/svgs/icon-app.svg';
import IconDesign from '../assets/svgs/icon-design.svg';
import IconDev from '../assets/svgs/icon-dev.svg';
import IconNote from '../assets/svgs/icon-note.svg';


export default function AboutMe() {

    const services = [
        {
            icon: IconDev,
            title: "Web design",
            description: "The most modern and high-quality design made at a professional level."
        },
        {
            icon: IconDesign,
            title: "Web development",
            description: "High-quality development of sites at the professional level."
        },
        {
            icon: IconApp,
            title: "Mobile apps",
            description: "Professional development of applications for iOS and Android."
        },
        {
            icon: IconNote,
            title: "Content Creation",
            description: "Development of creative and persuasive texts for websites, blogs, social media, and advertising campaigns."
        }
    ];

    return (
        <div className="p-6">
            <p className="text-white">
                I'm a passionate full-stack developer with a strong foundation in both frontend and backend development.
                Over the years, I have evolved from focusing solely on frontend to mastering the complete software development lifecycle.
                My journey began with a deep curiosity for technology, which led me to explore various fields, including industrial automation and cybersecurity.
                Today, I bring a well-rounded skill set that combines creativity, technical expertise, and a problem-solving mindset.
            </p>
            <p className="text-white mt-4">
                Whether it's designing intuitive user interfaces or architecting robust backend systems,
                I approach every project with the same dedication and attention to detail that I've had since I started coding at 15.
                I am continuously learning and adapting to new technologies,
                ensuring that I can deliver scalable, secure, and innovative solutions for any challenge.
            </p>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2 mt-10">
                {services.map((service, index) => (
                    <div key={index} className="bg-zinc-900 border border-gray-700 rounded-lg overflow-hidden shadow-lg">
                        <div className="p-5">
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 rounded-full flex items-center justify-center mr-4">
                                    <img src={service.icon} alt={`${service.title} icon`} className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-lg font-semibold text-gray-100">{service.title}</h3>
                            </div>
                            <p className="text-sm text-gray-300">{service.description}</p>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
}




