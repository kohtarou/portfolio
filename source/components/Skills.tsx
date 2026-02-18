import { skills } from '@/data/skills';
import {
    FaHtml5, FaCss3Alt, FaJs, FaPython, FaReact, FaGithub
} from 'react-icons/fa';
import {
    SiC, SiCplusplus, SiArduino, SiTypescript, SiGooglecolab
} from 'react-icons/si';
import { TbBrandVscode } from 'react-icons/tb';

// Simple mapping
import { ReactNode } from 'react';

const iconMap: Record<string, ReactNode> = {
    html: <FaHtml5 className="w-12 h-12 text-orange-500" />,
    css: <FaCss3Alt className="w-12 h-12 text-blue-500" />,
    javascript: <FaJs className="w-12 h-12 text-yellow-400" />,
    python: <FaPython className="w-12 h-12 text-blue-400" />,
    c: <SiC className="w-12 h-12 text-blue-600" />,
    cpp: <SiCplusplus className="w-12 h-12 text-blue-700" />,
    arduino: <SiArduino className="w-12 h-12 text-teal-600" />,
    typescript: <SiTypescript className="w-12 h-12 text-blue-600" />,
    react: <FaReact className="w-12 h-12 text-cyan-400" />,
    github: <FaGithub className="w-12 h-12 text-gray-800 dark:text-white" />,
    googlecolab: <SiGooglecolab className="w-12 h-12 text-orange-400" />,
    vscode: <TbBrandVscode className="w-12 h-12 text-blue-500" />,
    arduinoide: <SiArduino className="w-12 h-12 text-teal-600" />, // Reusing Arduino icon
    tinkercad: <span className="text-2xl font-bold text-blue-500">Tinker</span>, // No icon in main packs, text fallback
};

const Skills = () => {
    // Group by category
    const categories = Array.from(new Set(skills.map(s => s.category)));

    return (
        <section id="skills" className="py-20 bg-white dark:bg-gray-950">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white">SKILLS & TOOLS</h2>

                <div className="space-y-12">
                    {categories.map((category) => (
                        <div key={category}>
                            <h3 className="text-xl font-semibold mb-6 flex items-center justify-center after:content-[''] after:ml-4 after:h-px after:flex-grow after:bg-gray-200 dark:after:bg-gray-800 before:content-[''] before:mr-4 before:h-px before:flex-grow before:bg-gray-200 dark:before:bg-gray-800 text-gray-500 dark:text-gray-400">
                                {category}
                            </h3>

                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-items-center">
                                {skills.filter(s => s.category === category).map((skill) => (
                                    <div key={skill.name} className="flex flex-col items-center gap-3 group">
                                        <div className="w-24 h-24 flex items-center justify-center bg-gray-50 dark:bg-gray-900 rounded-2xl shadow-sm group-hover:shadow-md transition-all group-hover:-translate-y-1">
                                            {iconMap[skill.identifier] || <span className="text-xl">?</span>}
                                        </div>
                                        <span className="font-medium text-gray-700 dark:text-gray-300 group-hover:text-blue-600 transition-colors">
                                            {skill.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
