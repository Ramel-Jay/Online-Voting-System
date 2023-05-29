module.exports = ( sequelize, DataTypes ) => {
    const Admin_Account = sequelize.define('Admin_Account', {
        avatar: {
            type:           DataTypes.STRING,
            allowNull:      true,
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
        },
    });
    return Admin_Account;
};