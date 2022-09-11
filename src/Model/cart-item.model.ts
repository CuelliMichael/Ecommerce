export class CartItemModel {
    constructor(
        public id: number,
        public name: string,
        public imageUrl: string,
        public price: number,
        public quantity: number
    ){}

    static getDefault = () => {
        return new CartItemModel(-1,"","",0,0)
    }
    
}