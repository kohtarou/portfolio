import Image from 'next/image';

import { ExternalLink } from 'lucide-react';
import { works } from '@/data/works';

const Works = () => {
    return (
        <section id="works" className="py-20 bg-gray-50 dark:bg-gray-900">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white">WORKS</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {works.map((work) => (
                        <div key={work.id} className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col h-full group">
                            <div className="relative h-48 w-full overflow-hidden bg-gray-200 dark:bg-gray-700">
                                {work.images && work.images.length > 0 ? (
                                    <Image
                                        src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}${work.images[0]}`}
                                        alt={work.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                ) : (
                                    <div className="flex items-center justify-center h-full text-gray-400">
                                        No Image
                                    </div>
                                )}
                                {/* Overlay for tags maybe? */}
                            </div>

                            <div className="p-6 flex flex-col flex-grow">
                                <div className="mb-4">
                                    <div className="flex flex-wrap gap-2 mb-3">
                                        {work.tags.map(tag => (
                                            <span key={tag} className="px-2 py-1 text-xs font-semibold bg-blue-100 text-blue-800 rounded-md dark:bg-blue-900 dark:text-blue-200">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white line-clamp-1">{work.title}</h3>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-3">
                                        {work.description}
                                    </p>
                                </div>

                                <div className="mt-auto pt-4 border-t border-gray-100 dark:border-gray-700 flex justify-between items-center">
                                    {work.url ? (
                                        <a
                                            href={work.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors"
                                        >
                                            View Project <ExternalLink className="ml-1 w-4 h-4" />
                                        </a>
                                    ) : (
                                        <span className="text-sm text-gray-400">No Link</span>
                                    )}

                                    {/* If we had a separate repoUrl, we would use it here. 
                       For now, assuming url might be repo or demo. 
                       If the user wants rigorous separation, we can check types.
                   */}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Works;
