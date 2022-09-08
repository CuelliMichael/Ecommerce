export class SingUpFormModel{

    constructor(
        public displayName:string,
        public email: string,
        public password: string, 
        public confirm_password: string
    ){}

    static getDefault = () => {
        return (
            new SingUpFormModel("","","","")
        )
    }
}