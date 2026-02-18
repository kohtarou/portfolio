import Link from "next/link";
import { ArrowRight } from "lucide-react";

const Hero = () => {
    return (
        <section className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
            {/* Decorative Background Elements */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob dark:bg-purple-900 dark:opacity-30"></div>
            <div className="absolute top-20 right-10 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000 dark:bg-yellow-900 dark:opacity-30"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000 dark:bg-pink-900 dark:opacity-30"></div>

            <div className="container mx-auto px-4 z-10 text-center">
                <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 mb-6 drop-shadow-sm">
                    KOH&apos;s Portfolio
                </h1>
                <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                    Creating digital experiences with code and creativity.
                    <br />
                    <span className="text-base text-gray-500 dark:text-gray-400 mt-2 block">
                        大阪公立大学工業高等専門学校 4年 知能情報コース
                    </span>
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        href="#works"
                        className="inline-flex items-center justify-center px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
                    >
                        View Works <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                    <Link
                        href="#contact"
                        className="inline-flex items-center justify-center px-8 py-3 bg-white hover:bg-gray-50 text-gray-800 font-medium rounded-full border border-gray-200 transition-all transform hover:scale-105 shadow-sm hover:shadow-md dark:bg-gray-800 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700"
                    >
                        Contact Me
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Hero;
