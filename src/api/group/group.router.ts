import {Router} from "express";
import {addGroup, getGroups} from "./group.controller";
import {validate} from "../../utils/validation.middleware";
import {AddGroupDTO} from "./group.dto";


const router = Router();

router.get("/get", getGroups);
router.post("/add", validate(AddGroupDTO), addGroup);

export default router;