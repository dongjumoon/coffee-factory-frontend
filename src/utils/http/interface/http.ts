import {AxiosResponse as Response} from "axios";

interface Http {
    get(options: Options, callback: (res: Response<any>) => void);
    post(options: Options, callback: (res: Response<any>) => void);
    put(options: Options, callback: (res: Response<any>) => void);
    delete(options: Options, callback: (res: Response<any>) => void);
}

export interface Options {
    data?: object,
    url?: string,
}

export default Http;