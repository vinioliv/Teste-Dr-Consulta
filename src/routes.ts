import { Router } from "express";
import { ConsultAllBanks, ConsultOneBank, ConsultCep } from "./controllers/BankController";


const consultAllBanks = new ConsultAllBanks();
const consultOneBank = new ConsultOneBank();
const consultCep = new ConsultCep();


const router = Router();

router.get('/api/consult/allbanks', consultAllBanks.handle);
router.get('/api/consult/bankbycode/:code', consultOneBank.handle)
router.get('/api/consult/consultbycep/:cep', consultCep.handle);


export{router};