import User from '../model/authModel.js';
import bcrypt from 'bcrypt';

export const addUser = async (req, res) => {
    try {
        const { name, email, password, address, country, phone, pincode, state, userRole, status, created_at, updated_at } = req.body;
        
        // Check if the email already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: 'Email already exists' });
        }
  
        // Hash the password before saving
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ 
            name, 
            email, 
            password: hashedPassword, 
            address, 
            country, 
            phone, pincode, state,
            userRole, status, created_at, updated_at
        });
  
        // Save the user to the database
        await newUser.save();
        res.status(201).json({ message: 'User registered successfully' });
    } 
    catch (error) {
        res.status(400).json({ error: error.message });
    }
  };

// In your user controller (e.g., userController.js)
export const fetchAllUser = async (req, res) => {
  try {
    const users = await User.find({ type: 3 }); // Assuming 'type' is the field for roles
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

  

  export const detailUser = async (req, res) => {
    try {
      const { id } = req.params;
      const user = await User.findById(id); // Fetch user by ID
  
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      res.status(200).json(user);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

  export const editUser = async (req, res) => {
    try {
      const { id } = req.params;
      const updateFields = req.body;
  
      // If the password is being updated, hash it
      if (updateFields.password) {
        updateFields.password = await bcrypt.hash(updateFields.password, 10);
      }
  
      // Update only the fields provided in the request
      const updatedUser = await User.findByIdAndUpdate(id, { $set: updateFields }, { new: true });
  
      if (!updatedUser) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      res.status(200).json({ message: 'User updated successfully', user: updatedUser });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };


export const deleteUser = async (req, res) => {
    try {
      const { id } = req.params;
      const deletedUser = await User.findByIdAndDelete(id);
  
      if (!deletedUser) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  