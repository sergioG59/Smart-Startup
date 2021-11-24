import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Reserva {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    ciudad_origen: string;

    @Column()
    ciudad_destino: string;

    @Column()
    fecha: Date;

    @Column()
    tipo_reserva: String;

}