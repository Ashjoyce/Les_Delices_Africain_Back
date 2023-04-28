import { IsString } from "class-validator";
import { IsNumber } from "class-validator/types/decorator/decorators";

export default class BmenuDto {

    @IsString()
    name:string;

    @IsNumber()
    price:number;

    @IsString()
    description:string;

    @IsString()
    image:string;
}
