import axios from "axios";
import { ErrorHandler } from "../services/ErrorHandler"



interface IBankRequestConsult {
    code: string;
}

interface ICepRequestConsult {
    cep: string;
}

const errorHandler = new ErrorHandler();

class BankService {
    async listAllBanks() {
        const url = "https://brasilapi.com.br/api/banks/v1"

        const data = await axios({
            method: 'get',
            url: url,
        }).then(function (response) {
                return response.data;
            });

        const response = errorHandler.theresResponse(data);
        return { data: response };
    }

    async listBankBycode({ code }: IBankRequestConsult) {
        const url = `https://brasilapi.com.br/api/banks/v1/${code}`
        const data = await axios({
            method: 'get',
            url: url
        }).then(function (response) {
                return response.data;
            });

        const response = errorHandler.theresResponse(data);
        return { data: response };
    }

    async listByCep({ cep }: ICepRequestConsult) {
        const url = `https://brasilapi.com.br/api/cep/v1/${cep}`

        const data = await axios({
            method: 'get',
            url: url,
        }).then(function (response) {
                return response.data;
            });

        const response = errorHandler.theresResponse(data);
        return { data: response };
    }
}

export { BankService }