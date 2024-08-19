import { useState } from 'react';
import AboutMe from './AboutMe';
import Resume from './Resume';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Config from './Config';

export default function Component() {
    const [selected, setSelected] = useState('about me');

    const handleSelection = (section) => {
        setSelected(section);
    };

    const renderContent = () => {
        switch (selected) {
            case 'about me':
                return <AboutMe />;
            case 'resume':
                return <Resume />;
            case 'portfolio':
                return <Portfolio />;
            case 'contact':
                return <Contact />;
            case 'config':
                return <Config />;
            default:
                return <AboutMe />;
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-zinc-950 p-6">
            <div className="bg-zinc-900 rounded-lg w-full max-w-3xl mx-auto border-white border-opacity-10 border-[0.5px]">
                <div className="relative flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-semibold text-white relative mt-7 ml-8">
                        {selected.charAt(0).toUpperCase() + selected.slice(1)}
                        <div className="article-title mt-5"></div>
                    </h2>
                    <nav className="flex items-center">
                        <div className="bg-zinc-800 mb-6 flex items-center rounded-bl-lg rounded-tr-lg overflow-hidden  border-white border-opacity-10 border-[0.5px]">
                            <a
                                href="#about"
                                className={`text-white hover:scale-95 px-6 py-4 transition-transform duration-300 ${selected === 'about me' ? 'selected' : ''}`}
                                onClick={() => handleSelection('about me')}
                            >
                                About me
                            </a>
                            <a
                                href="#resume"
                                className={`text-white hover:scale-95 px-6 py-4 transition-transform duration-300 ${selected === 'resume' ? 'selected' : ''}`}
                                onClick={() => handleSelection('resume')}
                            >
                                Resume
                            </a>
                            <a
                                href="#portfolio"
                                className={`text-white hover:scale-95 px-6 py-4 transition-transform duration-300 ${selected === 'portfolio' ? 'selected' : ''}`}
                                onClick={() => handleSelection('portfolio')}
                            >
                                Portfolio
                            </a>
                            <a
                                href="#contact"
                                className={`text-white hover:scale-95 px-6 py-4 transition-transform duration-300 ${selected === 'contact' ? 'selected' : ''}`}
                                onClick={() => handleSelection('contact')}
                            >
                                Contact
                            </a>
                            <a
                                href="#config"
                                className={`text-white hover:scale-95 px-6 py-4 transition-transform duration-300 ${selected === 'config' ? 'selected' : ''}`}
                                onClick={() => handleSelection('config')}
                            >
                                Config
                            </a>
                        </div>
                    </nav>
                </div>
                <div className="p-6">
                    {renderContent()}
                </div>
            </div>
        </div>
    );
}
