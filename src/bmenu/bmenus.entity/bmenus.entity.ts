import { Entity,Column,PrimaryGeneratedColumn, Double } from "typeorm";

@Entity()
export class BmenusEntity {

    @PrimaryGeneratedColumn()
    id:number;

    @Column({length:200})
    name:string;

    @Column({type: "float"})
    price:number;

    @Column({length:200})
    description:string;

    @Column()
    image:string;
}
