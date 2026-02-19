/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';
const repoName = 'kohportwork.github.io'; // Update this if your repo name changes

const nextConfig = {
    output: "export",
    distDir: "../out",
    images: {
        unoptimized: true,
    },
    // If deploying to impactful-username.github.io/repo-name/, set basePath.
    // If deploying to impactful-username.github.io (User Site), basePath should be empty.
    // However, sometimes assets need explicit handling.
    // If deploying to impactful-username.github.io (User Site), basePath should be empty.
    basePath: '',
    env: {
        NEXT_PUBLIC_BASE_PATH: '',
    },
    // For User Site (username.github.io), basePath is usually not needed.
    // But if the user is seeing 404s for /images/..., let's try to ensure paths are root-relative.
};

export default nextConfig;
