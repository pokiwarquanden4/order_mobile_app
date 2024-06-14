import { sendRequest } from "@/app/config/axiosConfig"
import { IMenu } from "@/app/types/MenuTypes"

export interface ICreateAccount {
    account: string,
    password: string,
    phoneNumber?: string
    name: string
    avatar?: File,
    address?: string
    email: string
    gender: boolean,
    role: string
}


export const createMenu = async (menu: IMenu) => {
    const res = await sendRequest(`users/create/account`, {
        payload: menu,
        method: "POST"
    })
    return res
}