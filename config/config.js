import dotEnv from "dotenv"

dotEnv.config({ path: `.env` });
export default {
    url: process.env.DATABASE_URL,
    dialect: 'postgres',
};
