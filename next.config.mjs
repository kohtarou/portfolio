/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export", // Enable static HTML export for GitHub Pages
    images: {
        unoptimized: true, // Required for static export unless using a custom loader
    },
};

export default nextConfig;
