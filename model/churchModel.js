import mongoose from 'mongoose';

const churchSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    
  },
  contact_no: {
    type: String,
    
  },
  city: {
    type: String,
    
  },
  state: {
    type: String,
    
  },
  country: {
    type: String,  
  },
  api_key: {
    type: String,  
  },
 
}, { timestamps: true });

const Church = mongoose.model('church', churchSchema, 'church');

export default Church;
