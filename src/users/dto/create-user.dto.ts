import { ApiProperty } from "@nestjs/swagger";
import { IsAlphanumeric, Length, Max } from "class-validator";

export class CreateUserDto {
    @ApiProperty()
    @IsAlphanumeric()
    @Length(2,10)
    name: string;
}