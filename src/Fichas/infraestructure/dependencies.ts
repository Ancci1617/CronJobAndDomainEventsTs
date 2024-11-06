
import { EnviarVencimientosService } from "../application/EnviarVencimientosService";
import { InMemoryFichasRepository } from "./memoryFichasRepository";
import {cronConfig,scheduler} from "../../shared/infraestructure/dependencies"
import { EnviarMensajeOnPagoCargado } from "../application/EnviarMensajeOnPagoCargado";
const fichasRepository = new InMemoryFichasRepository();

export const enviarVencimientosCron = new EnviarVencimientosService(scheduler,fichasRepository,cronConfig);
export const enviarMensajeOnPagoCargado = new EnviarMensajeOnPagoCargado()