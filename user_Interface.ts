//Export Interface
export interface User {
    name : string;
    email : string;
    phone : string;
    address ?: string;
    isLogin(): boolean;
    getAge(): number;
};

// add new properties to interface
export interface User{
    canDrive() : boolean;
};