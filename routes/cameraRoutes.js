// cameraRoutes.js

const express = require('express');
const router = express.Router();
const cameraController = require('../controllers/cameraController');

// Get all cameras
router.get('/', cameraController.getAllCameras);

// Get a camera by ID
router.get('/:id', cameraController.getCameraById);

// Add a new camera
router.post('/', cameraController.createCamera);

// Update a camera by ID
router.put('/:id', cameraController.updateCamera);

// Delete a camera by ID
router.delete('/:id', cameraController.deleteCamera);

module.exports = router;
