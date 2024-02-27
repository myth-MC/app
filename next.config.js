const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  redirects: async () => {
    return [
      {
        source: "/discord",
        destination: "https://discord.gg/9K3TgZaPkT",
        permanent: true,
      },
      {
        source: "/github",
        destination: "https://github.com/communitycenter/stardew.app",
        permanent: true,
      },
      {
        source: "/social",
        destination: "/relationships",
        permanent: true,
      },
      {
        source: "/artifacts",
        destination: "/museum",
        permanent: true,
      }
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "stardewvalleywiki.com",
        port: "",
        pathname: "/mediawiki/images/**",
      },
    ],
    domains: ['minotar.net']
  },
  async headers() {
    return [{ source: '/(.*)', headers: securityHeaders }]
  }
};

const securityHeaders = [
  {
    key: 'Access-Control-Allow-Credentials',
    value: "true"
  },
  {
    key: 'Access-Control-Allow-Origin',
    value: "*"
  },
  {
    key: 'Access-Control-Allow-Methods',
    value: "GET,OPTIONS,PATCH,DELETE,POST,PUT"
  },
  {
    key: 'Access-Control-Allow-Headers',
    value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, X-API-Key"
  }
]

module.exports = withBundleAnalyzer(nextConfig);
