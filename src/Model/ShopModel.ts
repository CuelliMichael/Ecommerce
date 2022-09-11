
export class ShopModel{
    constructor(
        public id: number,
        public name: string,
        public imageUrl: string,
        public price: number
    ){}

    static getDefault = () => {
        return new ShopModel(-1,"","",0)
    }
}