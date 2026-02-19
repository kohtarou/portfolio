/** @type {import('next').NextConfig} */

const nextConfig = {
    output: "export",
    images: {
        unoptimized: true,
    },
    // kohportwork.github.io is a User Site (root domain), so basePath is not needed.
};

export default nextConfig;
