export type brandsType = {
    id: number,
    name: string
}

export type userType = {
    id: number,
    email: string,
    password: string,
    role: string,
    name: string
}

export type typeOfDevice = {
    id: number,
    name: string
}

export type devicesType = {
    id: number,
    name: string,
    price: number,
    rating: number,
    img: string,
    typeId: number,
    brandId: number
}