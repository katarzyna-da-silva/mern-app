import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const postsSchema = new Schema({

});

export default mongoose.model('Posts', postsSchema);
