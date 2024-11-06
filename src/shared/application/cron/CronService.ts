import { CronConfiguration } from "../../domain/cron/CronConfiguration";
import { CronConfigurationPorLote } from "../../domain/cron/CronConfigurationPorLote";
import { CronScheduler } from "../../domain/interfaces/CronScheduler";


export abstract class CronService{

    constructor(
        protected scheduler : CronScheduler
    ){}



    abstract schedule() : Promise<void>;
    
    
    abstract run() : Promise<void>;    
    
}