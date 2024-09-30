import User from '../model/authModel.js';
import bcrypt from 'bcrypt';


export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user || !(await bcrypt.compare(password, user.password))) 
        {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
        res.status(200).json({ message: 'Login successful', user: { id: user._id, name: user.name, email: user.email, userRole: userRole } });
    } 
    catch (error) {
        res.status(400).json({ error: error.message });
    }
};


