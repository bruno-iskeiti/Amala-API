import { error } from "console";
import sequelize from "../config/database";
import Demon from "./Demon";

const connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log("conexão com o db bem-sucedida!")

        await sequelize.sync({alter: true})

        console.log("models sincronizados com sucesso!")
    } catch {
        console.error("deu ruim :(", error)
    }
}

export { sequelize, Demon, connectDB}