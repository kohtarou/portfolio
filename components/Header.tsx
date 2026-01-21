import Link from 'next/link';
import { Github, Mail } from 'lucide-react';

const Header = () => {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 dark:bg-gray-900/80 dark:border-gray-800">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                <Link href="/" className="text-xl font-bold tracking-tight hover:text-blue-600 transition-colors">
                    KOH&apos;s Portfolio
                </Link>

                <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600 dark:text-gray-300">
                    <Link href="#about" className="hover:text-blue-600 transition-colors">ABOUT</Link>
                    <Link href="#works" className="hover:text-blue-600 transition-colors">WORKS</Link>
                    <Link href="#skills" className="hover:text-blue-600 transition-colors">SKILLS</Link>
                    <Link href="#contact" className="hover:text-blue-600 transition-colors">CONTACT</Link>
                </nav>

                <div className="flex items-center gap-4">
                    <a
                        href="https://github.com/kohtarou"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-black dark:hover:text-white transition-colors"
                        aria-label="GitHub"
                    >
                        <Github className="w-5 h-5" />
                    </a>
                    <a
                        href="mailto:koh89011412@gmail.com"
                        className="text-gray-500 hover:text-blue-600 transition-colors"
                        aria-label="Email"
                    >
                        <Mail className="w-5 h-5" />
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;
