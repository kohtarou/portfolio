const About = () => {
    return (
        <section id="about" className="py-20 bg-white dark:bg-gray-950">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">ABOUT</h2>
                    <div className="bg-blue-50 dark:bg-gray-900 p-8 rounded-2xl shadow-sm border border-blue-100 dark:border-gray-800">
                        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                            大阪公立大学工業高等専門学校<br />
                            4年知能情報コース
                        </p>
                        <p className="mt-4 text-gray-600 dark:text-gray-400">
                            Web開発やゲーム制作に関心があり、日々新しい技術を学んでいます。
                            ユーザビリティを意識したデザインと、効率的なコード設計を心がけています。
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
