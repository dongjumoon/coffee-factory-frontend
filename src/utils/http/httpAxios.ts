import axios from "axios";
import config from "../config";
import HttpInterface, { Options } from "./interface/http";
axios.defaults.baseURL = `${config.http.memberServiceUrl}`

const http: HttpInterface = {
    get(options: Options){

    },
    post(options: Options, callback){
        axios({
            ...options,
            method: 'post',
        }).then(callback);
    },
    put(options: Options){

    },
    delete(options: Options) {
    }
}

export default http;