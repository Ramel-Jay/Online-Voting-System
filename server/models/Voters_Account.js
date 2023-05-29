module.exports = ( sequelize, DataTypes ) => {
    const Voters_Account = sequelize.define('Voters_Account', {
        avatar: {
            type:           DataTypes.STRING,
            allowNull:      false,
            unique:         true,
        },
        username: {
            type:           DataTypes.STRING,
            allowNull:      false,
            unique:         true,
        },
        email: {
            type:           DataTypes.STRING,
            allowNull:      false,
            unique:         true,
        },
        password: {
            type:           DataTypes.STRING,
            allowNull:      false,
        }
    });
    return Voters_Account;
};