module.exports = {
	// Server
	"server": {
		"port": 5000,
	},

	"telegram": { // from @botfather on telegram
		username: "BOT_USERNAME",
		token: "BOT_TOKEN",
	},

	mode: "poll", // or webhook

	poll: {
		timeout: 30,
		limit: 100,
	},
	webhook: {
		url: "https://sample.host.com:8443",
		port: 8443,
		certsPath: "certs",
		selfSigned: true
	},

	"databases": { users: "databases/users.json" },

	"tokens": {
		"SUPRA_COIN_ADDRESS": "0x1::supra_coin::SupraCoin",
		"SPIKE_TOKEN_ADDRESS": "0xfec116479f1fd3cb9732cc768e6061b0e45b178a610b9bc23c2143a6493e794::memecoins::SPIKE",
		"JOSH_TOKEN_ADDRESS": "0x4742d10cab62d51473bb9b4752046705d40f056abcaa59bcb266078c5945b864::JOSH::JOSH"
		"BABYJOSH_TOKEN_ADDRESS": "0x5678::babyjosh_coin::BabyJoshCoin"
	},

	"prices": {
		"SUPRA_USD_PRICE": 0.0032
	},
	},

	// Debug
	"debug": true,

	// LOGS
	"log": {
		"path": {
			"debug_log": "./logs/debug.log",
			"error_log": "./logs/errors.log"
		},
		"language": "en", // set language of log type, NOTE: please help with translations! (optional, default en - values: en|it|pl)
		"colors": "enabled",  // enable/disable colors in terminal (optional, default enabled - values: true|enabled or false|disabled)
		"debug": "enabled",   // enable/disable all logs with method debug (optional, default enabled - values: true|enabled or false|disabled)
		"info": "enabled",    // enable/disable all logs with method info (optional, default enabled - values: true|enabled or false|disabled)
		"warning": "enabled", // enable/disable all logs with method warning (optional, default enabled -  values: true|enabled or false|disabled)
		"error": "enabled",   // enable/disable all logs with method errors (optional, default enabled - values: true|enabled or false|disabled)
		"sponsor": "enabled", // enable/disable all logs with method sponsor (optional, default enabled - values: true|enabled or false|disabled)
		"write": "enabled",   // write the logs into a file, you need set path values (optional, default disabled - values: true|enabled or false|disabled)
		"type": "log"   // format of logs in files (optional, default log - values: log|json)
	}
};
