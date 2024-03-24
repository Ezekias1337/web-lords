import express from "express";
import * as CaseController from "../controllers/cases";

const router = express.Router();

// GET requests
router.get("/get-case/:caseId", CaseController.getCase);
router.get("/get-all-cases", CaseController.getAllCases);
router.get("/get-pending-cases", CaseController.getPendingCases);
// POST requests
router.post("/create-case", CaseController.createCase);
// PATCH requests
router.patch("/approve-case", CaseController.approveCase);
router.patch("/reject-case", CaseController.rejectCase);
// DELETE requests
router.delete("/delete-case", CaseController.deleteCase);

export default router;
