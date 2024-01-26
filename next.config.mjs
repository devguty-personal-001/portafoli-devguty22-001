/** @type {import('next').NextConfig} */
export default {
    async redirects() {
      return [
        // Basic redirect
        {
          source: '/',
          destination: '/HomePortfoli',
          permanent: true,
        },
        // Wildcard path matching
        {
          source: '/blog/:slug',
          destination: '/news/:slug',
          permanent: true,
        },
      ];
    },
  };
