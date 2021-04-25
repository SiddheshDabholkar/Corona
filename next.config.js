const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = {
  future: {
    webpack5: true,
  },
};

module.exports = withBundleAnalyzer();
