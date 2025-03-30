import { Sequelize } from "sequelize";

const conn = new Sequelize("discord_api", "root", "2905", {
    host: "localhost",
    dialect: "mysql"
});

export default conn;