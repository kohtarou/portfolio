import { Mail, Github } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">CONTACT</h2>

                <div className="max-w-2xl mx-auto text-center">
                    <p className="text-lg text-gray-600 dark:text-gray-400 mb-12">
                        お問い合わせは、SNSかメールにてお願いいたします。<br />
                        お気軽にご連絡ください。
                    </p>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                        <a
                            href="https://github.com/kohtarou"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 px-8 py-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-all hover:scale-105 border border-gray-100 dark:border-gray-700 w-full md:w-auto justify-center"
                        >
                            <Github className="w-6 h-6" />
                            <span className="font-medium">GitHub Profile</span>
                        </a>

                        <a
                            href="mailto:koh89011412@gmail.com"
                            className="flex items-center gap-3 px-8 py-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-all hover:scale-105 border border-gray-100 dark:border-gray-700 w-full md:w-auto justify-center"
                        >
                            <Mail className="w-6 h-6 text-blue-600" />
                            <span className="font-medium">koh89011412@gmail.com</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
