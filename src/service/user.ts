import { BASE_URL, USER_LOGIN, USER_REGISTER } from "../constants/urls";
import { TLoginPayload, TResponse, TUsePayload } from "../types";
import { post } from "./utils/api";
import axios from 'axios'
export const register = async (body: TUsePayload): Promise<TResponse> => {
    try {
        const response = await post({ url: USER_REGISTER, body })
        return { status: 'SUCCESS', response }
    } catch (err) {
        console.log('Error: Register user failed')
        return { status: 'ERROR', response: String(err) }
    }
}

export const login = async (body: TLoginPayload): Promise<TResponse> => {
    try {
        const url = USER_LOGIN
        console.log('url -->> ', url)
        const response = await axios.post(url, body)
        console.log('login service ->>',response)
        response.data
        // if (response.status !== 200) {
        //     return { status: 'ERROR', response: String(response) }
        // }
        return { status: 'SUCCESS', response }
    } catch (err) {
        console.log('Error: Unable to login', String(err), JSON.stringify(err))
        return { status: 'ERROR', response: String(err) }
    }
}