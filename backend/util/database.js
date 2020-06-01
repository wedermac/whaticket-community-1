const Sequelize = require("sequelize");

const sequelize = new Sequelize("econo_whatsbot", "root", "nodecomplete", {
	define: {
		charset: "utf8mb4",
		collate: "utf8mb4_bin",
	},
	dialect: "mysql",
	host: "localhost",
	logging: false,
});

module.exports = sequelize;
