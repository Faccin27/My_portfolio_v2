import React, { useState, useEffect } from 'react';

function Config() {
    const [color, setColor] = useState('#427bd1');

    useEffect(() => {
        const savedColor = localStorage.getItem('accentColor');
        if (savedColor) {
            setColor(savedColor);
            document.documentElement.style.setProperty('--accent-color', savedColor);
        }
    }, []);

    const handleColorChange = (e) => {
        const newColor = e.target.value;
        setColor(newColor);
        document.documentElement.style.setProperty('--accent-color', newColor);
        localStorage.setItem('accentColor', newColor);
    };

    return (
        <div className="flex text-white p-4">
            <div className="w-1/2 pr-4">
                <h2 className="text-xl mb-4">Configurações de Cor</h2>
                <div className="flex items-center mb-6">
                    <label htmlFor="colorPicker" className="mr-2">
                        Escolha a cor de destaque:
                    </label>
                    <input
                        type="color"
                        id="colorPicker"
                        value={color}
                        onChange={handleColorChange}
                        className="w-10 h-10 rounded"
                    />
                </div>
                <p>
                    Cor selecionada: <span style={{ color: color }}>{color}</span>
                </p>
            </div>

            <div className="w-px bg-gray-500"></div>

            <div className="w-1/2 pl-4">
                <h2 className="text-xl mb-4">Configurações de Idioma</h2>
                <label htmlFor="option" className="block mb-2">
                    Escolha seu idioma:
                </label>
                <select
                    id="options"
                    className="block w-full p-2 bg-zinc-800 text-white border border-transparent rounded focus:outline-none focus:border-accent-color mb-6"
                >
                    <option value="Portugues">Portugues - BRA</option>
                    <option value="Ingles">Ingles - EUA</option>
                </select>

                <label htmlFor="textinfo" className="block mt-4">
                    Criado por:
                </label>
                <input type="text" value="Guilherme Faccin" readOnly className="bg-zinc-700 rounded-lg p-2 w-full mt-2" />
            </div>
        </div>
    );
}

export default function App() {
    useEffect(() => {
        const savedColor = localStorage.getItem('accentColor');
        if (savedColor) {
            document.documentElement.style.setProperty('--accent-color', savedColor);
        }
    }, []);

    return (
        <div>
            <Config />
        </div>
    );
}
