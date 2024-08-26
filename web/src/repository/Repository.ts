import axios from "axios";
import config from "@src/config";
import Response from "@repository/Response";

const usAxios = axios.create({
    baseURL: config.baseUrl,
});

class Repository {
    async ai1(prompt: string): Promise<Response> {
        const {data} = await usAxios.post('ai/1', {
            text: prompt
        });
        return data;
    }

    async ai2(prompt: string): Promise<Response> {
        const {data} = await usAxios.post('ai/2', {
            text: prompt
        });
        return data;
    }

    async ai3(prompt: string): Promise<Response> {
        const {data} = await usAxios.post('ai/3', {
            text: prompt
        });
        return data;
    }
}

const repository = new Repository();

export default repository;