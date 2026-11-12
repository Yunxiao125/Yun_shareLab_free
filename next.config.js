// next.config.js
/**
 * Next.js configuration for static export.
 */
module.exports = {
  output: "export",
  // Image optimization disabled for static export
  images: {
    unoptimized: true,
  },
};
