import { cronConfig, scheduler } from "../../shared/infraestructure/dependencies";
import { ActivarJornadaOnHorarioDeIngreso } from "../application/ActivarJornadaOnHorarioDeIngreso";


export const activarJornadaOnHorarioDeIngreso = new ActivarJornadaOnHorarioDeIngreso(cronConfig,scheduler);


