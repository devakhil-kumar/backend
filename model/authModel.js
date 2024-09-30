import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true},
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    address: { type: String, required: true },
    country: { type: String,  },
    phone: { type: String,  },
    pincode: { type: String,  },
    state: { type: String,  },

    userRole: { type: String,  },
    status: { type: String,  },
    created_at: { type: Date, default: Date.now },              // Timestamp for user creation
    updated_at: { type: Date, default: Date.now },  

});

const User = mongoose.model('users', UserSchema, 'users');
export default User;
