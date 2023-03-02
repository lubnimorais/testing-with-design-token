module.exports = {
    source: ["../tokens/tokens.json"],
    platforms: {
      css: {
        transformGroup: "css",
        buildPath: "styles/css/",
        files: [
          {
            destination: "colors.css",
            format: "css/variables",
            options: {
              outputReferences: true,
            },
            filter: {
              "type": "color"
            }
          },
        ],
      },
      ts: {
        transformGroup: "js",
        buildPath: "styles/js/",
        files: [
          {
            destination: "colors.js",
            format: "javascript/es6",
            options: {
              outputReferences: true,
            },
            filter: {
              "type": "color"
            }
          },
        ],
      },
      js: {
        transformGroup: "web",
        buildPath: "styles/json/",
        files: [{
          destination: "colors.json",
          format: "json/nested",
          options: {
            outputReferences: true,
          },
          filter: {
            "type": "color"
          }
        }]
      },
    },
  };