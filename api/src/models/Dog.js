const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
require('dotenv').config();
const INIT_ID=parseInt(process.env.INIT_ID)

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('dog', {
    id:{
      type:DataTypes.INTEGER,
      primaryKey:true,
      autoIncrement:true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    weight:{
      type:DataTypes.STRING,
      set(value){
        this.setDataValue('weight',JSON.stringify(value))
      },
      get(){
        const rawValue=this.getDataValue('weight')
        return JSON.parse(rawValue)
      },
      allowNull:false
    },
    height:{
      type:DataTypes.STRING,
      set(value){
        this.setDataValue('height',JSON.stringify(value))
      },
      get(){
        const rawValue=this.getDataValue('height')
        return JSON.parse(rawValue)
      },
      allowNull:false
    },
    life_span:{
      type:DataTypes.STRING,
      allowNull:false
    },
    image:{
      type:DataTypes.STRING,
      allowNull:false,
      get(){
        const rawValue=this.getDataValue('image')
        return `https://cdn2.thedogapi.com/images/${rawValue}.jpg`
      }
    }
  },{
    timestamps:false
  });
};
