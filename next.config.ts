// import type { NextConfig } from "next";
// import { hostname } from "os";

// const nextConfig: NextConfig = {
//   /* config options here */
//   images: {
//     dangerouslyAllowSVG:true,
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'placehold.co',
//         pathname: '/**',
//       },

//     ]
//   }
// };

// export default nextConfig;


// import { withSentryConfig } from "@sentry/nextjs";
// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   typescript: {
//     ignoreBuildErrors: true,
//   },
//   eslint: {
//     ignoreDuringBuilds: true,
//   },
//   images: {
//     dangerouslyAllowSVG: true,
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'placehold.co',
//         pathname: '/**',
//       },
//       {
//         protocol: 'https',
//         hostname: 'yt3.googleusercontent.com',
//         pathname: '/**',
//       },
//     ]
//   },
//   experimental: {
//     ppr: "incremental",
//     after: true,
//   },
//   // devIndicators: {
//   //   appIsrStatus: true,
//   //   buildActivity: true,
//   //   buildActivityPosition: "bottom-right",
//   // },
// };

// export default nextConfig;



// import { withSentryConfig } from "@sentry/nextjs";
// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   typescript: {
//     ignoreBuildErrors: true,
//   },
//   eslint: {
//     ignoreDuringBuilds: true,
//   },
//   images: {
//     dangerouslyAllowSVG: true,
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: 'placehold.co',
//         // hostname: "*",
//         pathname: '/**',
//       },
//       {
//         protocol: 'https',
//         hostname: 'yt3.googleusercontent.com',
//         pathname: '/**',
//       },
//     ],
//   },
//   experimental: {
//     ppr: "incremental",
//     after: true,
//   },
//   devIndicators: {
//     appIsrStatus: true,
//     buildActivity: true,
//     buildActivityPosition: "bottom-right",
//   },
// };

// export default withSentryConfig(nextConfig, {

//   // For all available options, see:
//   // https://github.com/getsentry/sentry-webpack-plugin#options

//   org: "js-mastery-dk",
//   project: "javascript-nextjs",

//   // Only print logs for uploading source maps in CI
//   silent: !process.env.CI,

//   // For all available options, see:
//   // https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/

//   // Upload a larger set of source maps for prettier stack traces (increases build time)
//   widenClientFileUpload: true,

//   // Automatically annotate React components to show their full name in breadcrumbs and session replay
//   reactComponentAnnotation: {
//     enabled: true,
//   },

//   // Uncomment to route browser requests to Sentry through a Next.js rewrite to circumvent ad-blockers.
//   // This can increase your server load as well as your hosting bill.
//   // Note: Check that the configured route will not match with your Next.js middleware, otherwise reporting of client-
//   // side errors will fail.
//   // tunnelRoute: "/monitoring",

//   // Hides source maps from generated client bundles
//   hideSourceMaps: true,

//   // Automatically tree-shake Sentry logger statements to reduce bundle size
//   disableLogger: true,

//   // Enables automatic instrumentation of Vercel Cron Monitors. (Does not yet work with App Router route handlers.)
//   // See the following for more information:
//   // https://docs.sentry.io/product/crons/
//   // https://vercel.com/docs/cron-jobs
//   automaticVercelMonitors: true,
// });





// next.config.js or next.config.ts (لو TypeScript)

const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "yt3.googleusercontent.com",
        pathname: "/**",
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    // ppr: "incremental",
    after: true,
  },
  devIndicators: {
    appIsrStatus: true,
    buildActivity: true,
    buildActivityPosition: "bottom-right",
  },
};

export default nextConfig;
