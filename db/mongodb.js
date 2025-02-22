import mongoose from "mongoose";

const connectDB = async () => {
  await mongoose;
  mongoose
    .set("strictQuery", true)
    .connect("mongodb+srv://alexandrewaitlist:%3CSam%40alexandrewaitlist1%3E@waitlist.6own1.mongodb.net/?authSource=Waitlist&authMechanism=SCRAM-SHA-1/email", {
      useNewUrlParser: "true",
      useUnifiedTopology: "true",
    })
    .then(() => {
      console.log("connected to db");
    })
    .catch((error) => console.log(error));
};

export default connectDB;
