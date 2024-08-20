import React, { useState, useEffect } from 'react';

// Componente Config atualizado
function Config() {
    const [color, setColor] = useState('#427bd1');

    useEffect(() => {
        // Carregar a cor salva do localStorage
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
        <div className="text-white p-4">
            <h2 className="text-xl mb-4">Configurações de Cor</h2>
            <div className="flex items-center">
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
            <p className="mt-2">
                Cor selecionada: <span style={{ color: color }}>{color}</span>
            </p>
        </div>
    );
}

// Novo componente de nível superior
export default function App() {
    useEffect(() => {
        // Carregar e aplicar a cor salva ao iniciar a aplicação
        const savedColor = localStorage.getItem('accentColor');
        if (savedColor) {
            document.documentElement.style.setProperty('--accent-color', savedColor);
        }
    }, []);

    return (
        <div>
            {/* Outros componentes da sua aplicação */}
            <Config />
        </div>
    );
}