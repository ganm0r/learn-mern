const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI);

        console.log(`[database] mongodb connected: ${conn.connection.host}`.green);
    } catch (error) {
        console.log(error);

        process.exit(1);
    }
};

module.exports = connectDB;