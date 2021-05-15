module.exports = {
  apps: [{
    name: 'app',
    script: './index.js',
    watch: true,
    watch_delay: 1000,
    ignore_watch: ['node_modules', 'client/img'],
    watch_options: {
      followSymlinks: false,
    },
    env: {
      NODE_ENV: 'development',
    },
  }],
};
