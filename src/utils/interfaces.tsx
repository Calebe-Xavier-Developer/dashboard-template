export interface CarsType {
    id: number, 
    name: string,
    model: string,
    year: string,
    typeFuel: string,
    exchange: string,
    mileage: string,
    price: string,
    minPrice: string,
    img: any,
};

export interface Intention {
    id: number,
    name: string,
    rating: number,
    image: any,
};

export interface UserType {
    id: number,
    name: string,
    status: string,
    tel: string,
    email: string,
}
