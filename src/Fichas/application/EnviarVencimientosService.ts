import { FichaRepository } from "../domain/interfaces/FichaRepository";
import { CronService } from "../../shared/application/cron/CronService";
import { CronConfiguration } from "../../shared/domain/cron/CronConfiguration";

import { CronConfigurationRepository } from "../../shared/domain/interfaces/CronConfigurationRepository";
import { CronScheduler } from "../../shared/domain/interfaces/CronScheduler";
import { ConfigChangedDomainEvent } from "../../shared/domain/ConfigChangedDomainEvent";

export class EnviarVencimientosService extends CronService{
    MODULE_NAME = 'FICHAS_VENCIMIENTOS';
    constructor(
        cron : CronScheduler,
        private fichasRepository : FichaRepository,
        private cronConfigurationRepository : CronConfigurationRepository
    ){
        super(cron);
    }
    
    listeningEvent(){

        return ConfigChangedDomainEvent;
    }

    

    async schedule(): Promise<void> {

        const config = await this.cronConfigurationRepository.getByModule(this.MODULE_NAME);
        if(!config) throw new Error("Cron para vencimientos no configurado");

        this.scheduler.schedule(config,this);

    }

    async run(){
        console.log("EXECUTE ENVIAR VENCIMIENTOS");
        const fichas = await this.fichasRepository.getByVencimiento(new Date());
        console.log("Enviando mensaje a fichas vencidas: ",fichas);

    }


}

