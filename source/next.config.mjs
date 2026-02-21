/** @type {import('next').NextConfig} */

const nextConfig = {
    output: "export",
    basePath: "/portfolio", // ← リポジトリ名がportfolioに変更されているため、こちらが正解です
    images: {
        unoptimized: true,
    },
};

export default nextConfig;