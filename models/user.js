const { DataTypes, Model } = require('sequelize')
const bcrypt = require('bcrypt')
const sequelize = require('../config/connection')

class User extends Model {
    validatePassword(password) {
        return bycrpt.compareSync(password, this.password)
    }
}

User.init({
    id: {
        type: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,


    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [8, 20],
        },
        unique: true,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,

        }

    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            min: 8,

        }

    }

},
    {
        hooks: {
            beforeCreate: async(newUserData) => {
                newUserData.password = await bcrypt.hash(newUserData.password, 10)
                return newUserData
            },
            beforeUpdate: async(updatedUserData) => {
                updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10)
                return updatedUserData
            },
        },
        sequelize, modelName: 'User'

    })
module.exports = User


