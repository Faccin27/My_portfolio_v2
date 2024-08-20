import React, { useState } from 'react';
import { Eye, X, Github } from 'lucide-react';
import p1 from '../assets/images/project-1.jpg';
import p2 from '../assets/images/project-2.png';
import p3 from '../assets/images/project-3.jpg';
import p4 from '../assets/images/project-4.png';

const Modal = ({ isOpen, onClose, project }) => {
    if (!isOpen || !project) return null;

    return (
        <div className="fixed inset-0 bg-zinc-900 bg-opacity-80 flex justify-center items-center z-50">
            <div className="bg-zinc-900 rounded-lg p-6 max-w-3xl w-1/2 mx-4 relative">
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-gray-400 hover:text-white transition-colors duration-200 bg-black bg-opacity-20 hover:bg-opacity-30 rounded-full p-1"
                >
                    <X size={24} />
                </button>
                <div className="flex flex-col gap-4 mt-10">
                    <div className="flex justify-center items-center rounded-md">
                        <img
                            src={project.imageUrl}
                            alt={project.title}
                            className="object-cover max-w-[500px] max-h-[500px] rounded-md"
                        />
                    </div>
                    <h2 className="text-3xl font-bold text-white">{project.title}</h2>
                    <p className="text-lg text-gray-300">{project.category}</p>
                    <div className="max-h-48 overflow-y-auto">
                        <p className="text-base text-gray-200">
                            {project.description}
                        </p>
                    </div>
                    <div className="h-px bg-gray-700 my-2"></div>
                    <div className="flex justify-between items-center text-sm text-gray-400">
                        <p>Autor: {project.author}</p>
                        <p>Data de criação: {project.createdAt}</p>
                    </div>
                    <button
                        className="bg-[var(--accent-color)] text-white py-2 px-4 rounded hover:bg-opacity-80 transition duration-300 flex items-center justify-center mt-4"
                        onClick={() => window.open(project.githubUrl, '_blank')}
                    >
                        <Github className="mr-2" size={18} /> Ver no GitHub
                    </button>
                </div>
            </div>
        </div>
    );
};

const Card = ({ project, onOpenModal }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="group relative w-full max-w-sm mx-auto"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="relative w-full h-52 rounded-2xl overflow-hidden mb-4">
                <div className={`absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
                <img
                    src={project.imageUrl}
                    alt={project.title}
                    className={`w-full h-full object-cover transition-transform duration-300 ${isHovered ? 'scale-110' : 'scale-100'}`}
                />
                <button
                    className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#2b2c2f] text-[var(--accent-color)] p-4 rounded-xl transition-all duration-300 ${isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-80'
                        }`}
                    onClick={() => onOpenModal(project)}
                >
                    <Eye size={24} />
                </button>
            </div>
            <h3 className="text-white text-lg font-normal capitalize mb-1">{project.title}</h3>
            <p className="text-gray-400 text-sm font-light">{project.category}</p>
        </div>
    );
};

const Portfolio = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const projects = [
        {
            title: "Finance",
            category: "Web development",
            imageUrl: p1,
            description: "Um de finanças pessoais para ajudar no controle de gastos.",
            author: "João Silva",
            createdAt: "2024-03-15",
            githubUrl: "https://github.com/example/finance"
        },
        {
            title: "Orizon",
            category: "Web development",
            imageUrl: p2,
            description: "Plataforma de e-commerce com design moderno e responsivo.",
            author: "Maria Santos",
            createdAt: "2024-02-28",
            githubUrl: "https://github.com/example/orizon"
        },
        {
            title: "Fundo",
            category: "Web design",
            imageUrl: p3,
            description: "Site de crowdfunding para projetos criativos e inovadores.",
            author: "Pedro Oliveira",
            createdAt: "2024-01-10",
            githubUrl: "https://github.com/example/fundo"
        },
        {
            title: "Yep",
            category: "Web design",
            imageUrl: p4,
            description: "Aplicativo de avaliações e recomendações de serviços locais.",
            author: "Ana Rodrigues",
            createdAt: "2024-03-01",
            githubUrl: "https://github.com/example/yep"
        },
    ];

    const handleOpenModal = (project) => {
        setSelectedProject(project);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedProject(null);
    };

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-5">
            {projects.map((project, index) => (
                <Card key={index} project={project} onOpenModal={handleOpenModal} />
            ))}
            <Modal isOpen={isModalOpen} onClose={handleCloseModal} project={selectedProject} />
        </div>
    );
};

export default Portfolio;
