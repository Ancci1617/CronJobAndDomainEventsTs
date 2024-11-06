import { CronConfiguration } from "../cron/CronConfiguration";
import { CronConfigurationPorLote } from "../cron/CronConfigurationPorLote";

export interface CronConfigurationRepository{


    save(config : CronConfiguration) : Promise<void>;

    getByModule(moduleName : string) : Promise<CronConfiguration | null>;



}