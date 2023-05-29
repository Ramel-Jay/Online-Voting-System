module.exports = ( sequelize, DataTypes ) => {
    const Voters_Profile = sequelize.define('Voters_Profile', {
        first_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        gender:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        number: {
            type: Datatypes.BIGINT,
            allowNull: false
        }
    });
    return Voters_Profile;
}