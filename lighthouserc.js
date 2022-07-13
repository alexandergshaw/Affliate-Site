module.exports = {
  ci: {
    collect: {
      startServerCommand: "npm start",
    },
    upload: {
      target: "temporary-public-storage",
    },
    assert: {
      assertions: {
        "first-contentful-paint": ["error", { minScore: 0.6 }],
      },
    },
  },
};
