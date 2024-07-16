const mongoose = require("mongoose")

const connectiontodb = mongoose.connect("mongodb://localhost:27017/UngrayDashboard")


module.exports = {
    connectiontodb
}