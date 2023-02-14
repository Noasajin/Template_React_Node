import express from "express";
import testController from "../controllers/testController.js";
import GetUsers from "../controllers/getUsers.js";
import Signup from "../controllers/signup.js";
import GetUsersById from "../controllers/getUsersById.js";
import EditUsersById from "../controllers/editUsersById.js";
import DeleteUsersById from "../controllers/deleteUsersById.js";
import middlewareUploadFile from "../controllers/middlewareUploadFile.js";
import StockUploadFile from "../controllers/stockUploadFile.js";

const router = express.Router();

/* Routes GET */
router.get("/", testController)
router.get("/getUsers", GetUsers)

/* Routes POST */
router.post("/signup", Signup)
router.post("/getUsersById", GetUsersById)
router.post("/editUsersById", EditUsersById)
router.post("/deleteUsersById", DeleteUsersById)
router.post("/stockUploadFile", middlewareUploadFile, StockUploadFile)

export default router;
