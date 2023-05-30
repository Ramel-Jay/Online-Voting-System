module.exports = ( sequelize, DataTypes ) => {
    const Admin_Profile = sequelize.define('Admin_Profile', {
        first_name: {
            type:           DataTypes.STRING,
            allowNull:      false,
        },
        last_name: {
            type:           DataTypes.STRING,
            allowNull:      false,
        },
        gender: {
            type:           DataTypes.STRING,
            allowNull:      false,
        },
        address: {
            type:           DataTypes.STRING,
            allowNull:      false,
        },
        number: {
            type:           DataTypes.BIGINT,
            allowNull:      false,
        },
        role: {
            type:           DataTypes.STRING,
            allowNull:      false,
        },
    });
    // Admin_Profile.associate = (models) => {
    //     Admin_Profile.hasMany(models.Admin_Account, {
    //         onDelete: "cascade",
    //     });
    // };
    return Admin_Profile;
};