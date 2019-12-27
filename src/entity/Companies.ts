import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Company {

	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	name: string;

	@Column()
	createdAt: Date;

	@Column()
	updatedAt: Date;

}
