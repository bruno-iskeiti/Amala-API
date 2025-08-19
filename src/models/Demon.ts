import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database";

class Demon extends Model {
  declare id: number;
  declare name: string;
  declare race: string;
  declare alignment: string;
  declare compendiumEntry: string;
  declare skills: string;
}

Demon.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(128),
      allowNull: false,
      unique: true,
    },
    race: {
      type: DataTypes.STRING(128),
      allowNull: false,
    },
    alignment: {
      type: DataTypes.STRING(40),
    },
    compendiumEntry: {
      type: DataTypes.STRING(3000),
    },
  },
  {
    tableName: "demons",
    sequelize,
    timestamps: true,
  }
);

export default Demon;
