const Role = require('../models/Role');

module.exports = {
  async createRoles(req, res) {
    try {
      // Assuming the request body contains role data
      const { name, permissions } = req.body;
      const newRole = new Role({ name, permissions });
      await newRole.save();
      res.status(201).json({ message: 'Role created successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
};

