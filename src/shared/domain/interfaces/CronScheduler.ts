import { CronService } from "../../application/cron/CronService";
import { CronConfiguration } from "../cron/CronConfiguration";

import { CronConfigurationPorLote } from "../cron/CronConfigurationPorLote";

export interface CronScheduler{
    
    schedule(config : CronConfiguration,service : CronService) : void;

    scheduleByLote(config : CronConfigurationPorLote,service : CronService) : void;

    

}