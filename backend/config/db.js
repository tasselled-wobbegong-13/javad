import mongoose from 'mongoose';


const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      //Aaron's Mongo URI:
      // 'mongodb+srv://yelpScratchProject:airplanefox-456@cluster0.4mb5rwm.mongodb.net/'

      //Ando's Mongo URI:
      //'mongodb+srv://arivreduce:g9pOctOjyaU8DtYh@quizzine.pnx3hgq.mongodb.net/?retryWrites=true&w=majority'

      //Jason's Mongo URI:
      'mongodb+srv://jasonkuroda:mongo@cluster0.ngx3ozr.mongodb.net/?retryWrites=true&w=majority'

      //Daniel's Mongo URI:
      // 'mongodb+srv://sindaniel:h1JbOxNssdjuw6zA@cluster0.vvtsenh.mongodb.net/?retryWrites=true&w=majority'


    );
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
