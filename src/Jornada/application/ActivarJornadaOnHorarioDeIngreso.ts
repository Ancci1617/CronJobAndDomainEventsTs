import { CronService } from "../../shared/application/cron/CronService";

import { CronConfigurationPorLote } from "../../shared/domain/cron/CronConfigurationPorLote";
import { CronConfigurationRepository } from "../../shared/domain/interfaces/CronConfigurationRepository";
import { CronScheduler } from "../../shared/domain/interfaces/CronScheduler";


export class ActivarJornadaOnHorarioDeIngreso extends CronService{

    HORARIOS_DE_INGRESO = ['09:00','11:00','20:00']; 
    constructor(

        private cronConfigurationRepository : CronConfigurationRepository,
        scheduler : CronScheduler,
        

    ){
        super(scheduler);
    }

    

    async schedule(): Promise<void> {
        const horario = this.HORARIOS_DE_INGRESO //Esto deberia venir de una DB        

        const config = new CronConfigurationPorLote(horario,'activar.jornada.usuarios');
        this.scheduler.scheduleByLote(config,this);;

    }


    async run(): Promise<void> {
        
        console.log("EJECUTANDO ACTIVACION DE JORNADA A CADA USUARIO");

    }
    
    
}