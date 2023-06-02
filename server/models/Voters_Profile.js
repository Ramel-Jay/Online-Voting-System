module.exports = ( sequelize, DataTypes ) => {
    const Voters_Profile = sequelize.define('Voters_Profile', {
        first_name: {
            type:       DataTypes.STRING,
            allowNull:  false,
        },
        last_name: {
            type:       DataTypes.STRING,
            allowNull:  false,
        },
        address: {
            type:       DataTypes.STRING,
            allowNull:  false,
        },
        gender:{
            type:       DataTypes.STRING,
            allowNull:  false,
        },
        mobile_number: {
            type:       DataTypes.BIGINT,
            allowNull:  false
        },
        email: {
            type:       DataTypes. STRING,
            allowNull:  false,
        },
        password: {
            type:       DataTypes.STRING,
            allowNull:  false,
        },
        avatar_url: {
            type:       DataTypes.STRING,
            allowNull:  false,
        }

    });
    return Voters_Profile;
}