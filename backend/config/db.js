


import mongoose from 'mongoose';


const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      // 'mongodb+srv://yelpScratchProject:airplanefox-456@cluster0.4mb5rwm.mongodb.net/'
      'mongodb+srv://arivreduce:g9pOctOjyaU8DtYh@quizzine.pnx3hgq.mongodb.net/?retryWrites=true&w=majority'
    );
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
