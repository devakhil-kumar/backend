import Church from '../model/churchModel.js';

export const addChurch = async (req, res) => {
  try {
    const { name, address, contact_no, city, state, country, api_key } = req.body;

    // Check if the church already exists
    const existingChurch = await Church.findOne({ name });
    if (existingChurch) {
      return res.status(400).json({ error: 'Church already exists' });
    }

    const newChurch = new Church({
      name,
      address,
      contact_no,
      city, 
      state,
      country,
      api_key
    });

    // Save the church to the database
    await newChurch.save();
    res.status(201).json({ message: 'Church registered successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


export const fetchAllChurch = async (req, res) => {
    try {
      const churches = await Church.find(); // Fetch all churches
      res.status(200).json(churches);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

  
  export const detailChurch = async (req, res) => {
    try {
      const { id } = req.params;
      const church = await Church.findById(id); // Fetch church by ID
      // console.log(church)
      if (!church) {
        return res.status(404).json({ error: 'Church not found' });
      }
  
      res.status(200).json(church);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

  
  export const updateChurch = async (req, res) => {
    try {
      const { id } = req.params;
      const updateFields = req.body;
  
      const updatedChurch = await Church.findByIdAndUpdate(id, { $set: updateFields }, { new: true });
  
      if (!updatedChurch) {
        return res.status(404).json({ error: 'Church not found' });
      }
  
      res.status(200).json({ message: 'Church updated successfully', church: updatedChurch });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };


  // Delete Church by ID
export const deleteChurch = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedChurch = await Church.findByIdAndDelete(id);

    if (!deletedChurch) {
      return res.status(404).json({ error: 'Church not found' });
    }

    res.status(200).json({ message: 'Church deleted successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

  
