import http from "./http/httpAxios";
import HttpInterface from "./http/interface/http";

interface Util {
    http?: HttpInterface
}

const util: Util = {
    http,
}

export default util;