//todas las clases que heredan de CronService aca se ejecutan 
//su metodo schedule;

import {enviarVencimientosCron} from "../Fichas/infraestructure/dependencies"
import {activarJornadaOnHorarioDeIngreso} from "../Jornada/infraestructure/dependencies"
import { CronService } from "../shared/application/cron/CronService"

export function registerCron(){

    const services : Array<CronService> = [enviarVencimientosCron,activarJornadaOnHorarioDeIngreso];

    services.forEach(service => {
        service.schedule();
    })
        
}



