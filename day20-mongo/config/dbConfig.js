const mongoose = require("mongoose");

const connectToDb = async () => {
    try {
        await mongoose.connect(
            "mongodb+srv://cloudfile2024:passeasy@cluster0.vvnax.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
        );
        console.log("---------- ✅ Database Connected ---------");
        console.log("------------------------------------------");
    } catch (err) {
        console.log("-------- ❌ Database NOT Connected -------");
        console.log("------------------------------------------");
    }
};

connectToDb();
