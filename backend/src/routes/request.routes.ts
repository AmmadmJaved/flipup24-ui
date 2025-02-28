import express from "express";
import requestModel from "../models/request.model";


const router = express.Router();

// Create a new request (Customer)
router.post("/create", async (req, res) => {
  try {
    
    const requestData = { customerId: req.body.customerId, service: req.body.serviceName, location: req.body.location, cost: req.body.cost };
    console.log("Request Body: ", requestData);
    const newRequest = new requestModel({ customerId: req.body.customerId, service: req.body.serviceName, location: req.body.location, cost: req.body.cost });
    console.log("Request format: ", newRequest);
    await newRequest.save();
    console.log("save newRequest: ", newRequest);
    res.status(201).json(newRequest);
  } catch (error) {
    res.status(500).json({ error: "Error creating request" });
  }
});

// Partner accepts request
router.put("/accept/:id", async (req, res) => {
  try {
    const request = await requestModel.findByIdAndUpdate(req.params.id, { partnerId: req.body.partnerId, status: "accepted" }, { new: true });
    res.json(request);
  } catch (error) {
    res.status(500).json({ error: "Error accepting request" });
  }
});

export default router;
