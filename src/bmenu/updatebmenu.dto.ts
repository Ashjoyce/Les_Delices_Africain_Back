import { PartialType } from "@nestjs/mapped-types";
import BmenuDto from "./bmenu.dto";


export class UpdateBmenuDto extends PartialType(BmenuDto){}