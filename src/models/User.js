import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const User = sequelize.define('User', {
    name : {
        type: DataTypes.STRING,
        allowNull: false
    },
    surname : {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: true,
    tableName: 'User'
});

console.log('Syncing User Table')
User.sync()

export default User