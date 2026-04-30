module.exports = {
  apps: [{
    name: "telegram-bot",
    script: "npx",
    args: "ts-node -r tsconfig-paths/register app/core/bot.ts",
    interpreter: "none",
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: "production",
    },
    error_file: "logs/error.log",
    out_file: "logs/out.log",
    log_date_format: "YYYY-MM-DD HH:mm:ss",
    merge_logs: true,
    autorestart: true,
    restart_delay: 5000
  }]
}
