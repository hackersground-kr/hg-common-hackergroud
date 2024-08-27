import axios from "axios";
import Response from "@repository/Response";
import config from "@src/config";
import ValueResponse from "@repository/ValueResponse";
import ImgGenReq from "@repository/ImgGenReq";

const usAxios = axios.create({
    baseURL: config.baseUrl,
    headers: {
        Accept: "application/json",
    },
});

class Repository {
    async ai1(prompt: string): Promise<Response> {
        const {data} = await usAxios.post("ai/1", {
            text: prompt,
        });
        return data;
    }

    async ai2(prompt: string, problem: string): Promise<Response> {
        const {data} = await usAxios.post("ai/2", {
            text: prompt,
            problem
        });
        return data;
    }

    async ai3(prompt: string): Promise<Response> {
        const {data} = await usAxios.post("ai/3", {
            text: prompt,
        });
        return data;
    }

    async ai4(req: ImgGenReq): Promise<ValueResponse> {
        const {data} = await usAxios.post("ai/4", req);
        return data;
    }
}

const repository = new Repository();

export default repository;
