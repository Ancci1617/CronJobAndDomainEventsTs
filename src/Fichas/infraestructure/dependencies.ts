
import { EnviarVencimientosService } from "../application/EnviarVencimientosService";
import { InMemoryFichasRepository } from "./memoryFichasRepository";
import {cronConfig,scheduler} from "../../shared/infraestructure/dependencies"
const fichasRepository = new InMemoryFichasRepository();

export const enviarVencimientosCron = new EnviarVencimientosService(scheduler,fichasRepository,cronConfig);
