export class SingInFormModel{

    constructor(
        public email: string,
        public password: string
    ){}

    static getDefault = () => {
        return new SingInFormModel("","");
    }
}