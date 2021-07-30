module.exports = {
  apps: [
    {
      name: "mysql-store-api",
      script: "./src/server.js",
      watch: ".",
      ignore_watch: [
        "[/\\]./",
        "node_modules",
        ".heroku",
        ".profile.d",
        ".pm2",
        ".config",
        ".npm",
      ],
    },
  ],

  deploy: {
    production: {
      user: process.env.USER,
      host: process.env.HOST,
      ref: "origin/main",
      path: "/app",
      "pre-deploy-local": "",
      "post-deploy":
        "npm install && pm2 reload ecosystem.config.js --env production",
      "pre-setup": "",
    },
  },
};
