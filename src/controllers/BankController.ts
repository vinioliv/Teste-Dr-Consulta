import { BankService } from "../services/BankService"
import { Request, Response } from "express";


const bankService = new BankService();

class ConsultAllBanks {
    async handle(request: Request, response: Response) {
        const consult = await bankService.listAllBanks();
        return response.status(200).json(consult);
    }
}
class ConsultOneBank {
    async handle(request: Request, response: Response) {
        const { code } = request.params;
        const consult = await bankService.listBankBycode({ code });
        return response.status(200).json(consult);
    }
}

class ConsultCep{
    async handle(request: Request, response: Response){
        const {cep} = request.params;
        const consult = await bankService.listByCep({cep});

        return response.status(200).json(consult);
    }
}
export { ConsultAllBanks, ConsultOneBank, ConsultCep };