import mongoose from 'mongoose';
const schema = mongoose.Schema({ // create/define the schema
  tuit: String, // tuit property of type String
  likes: Number,
  liked: Boolean,
}, {collection: 'tuits'});// collection name where tuits are stored in tuiter database
export default schema;// export schema so it can be used elsewhere
