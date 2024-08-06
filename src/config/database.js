import { Sequelize } from "sequelize"
import {HOST, USR, PORT, SSL, DB, PASS, DIALECT} from  './dotenv.js'


const sequelize = new Sequelize(DB, USR, PASS, {
    host: HOST,
    port: PORT,
    dialect: DIALECT,
    dialectOptions: {
        ssl: {
            require: SSL, 
            rejectUnauthorized: false
        }
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
    },
    logging: (msg) => {
        //Filter Syncing
        if (!msg.includes('Executing (default):')) {
            console.log(msg);
        }
    }
});


export const open = async() =>{
    try {
        await sequelize.authenticate()
        console.log('Pool Query Created')
    } catch (error) {
        throw error
    }
}

export default sequelize