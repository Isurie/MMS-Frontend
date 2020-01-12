export class SignUpInfo {
    lname: string;
    fname: string;
    gender: string;
    birthday: string;
    address: string;
    telephone: string;
    username: string;
    email: string;
    role: string[];
    password: string;

    constructor( fname: string, lname: string, gender: string, birthday: string, address: string, telephone: string, username: string, email: string, password: string) {
        this.fname = fname;        
        this.lname = lname;
        this.gender = gender;
        this.birthday = birthday;
        this.address = address;
        this.telephone = telephone;
        this.username = username;
        this.email = email;
        this.password = password;
        this.role = ['user'];
    }

}
