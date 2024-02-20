import {CreateUserDto} from "./create-user.dto";
import {PartialType} from "@nestjs/mapped-types";


export class UpdateUserDto extends PartialType(CreateUserDto) {
    name:string;
    email:string;
    role:'INTERN' | 'ENGINEER' | 'ADMIN';
}

