import { CronConfiguration } from "../../domain/cron/CronConfiguration";
import { CronConfigurationRepository } from "../../domain/interfaces/CronConfigurationRepository";
import fs from "fs";
import path from "path";


type primitiveData = ReturnType<CronConfiguration["toPrimitives"]>;
export class JsonCronConfigRepository implements CronConfigurationRepository{
    URL = path.join(__dirname,"db.json");
    constructor(){

    }

    private getDb(){
        const db : Array<primitiveData> = JSON.parse(fs.readFileSync(this.URL,"utf-8"));
        return db.map(data => new CronConfiguration(data.time,data.jobName));
    }
    private saveDb(db : Array<CronConfiguration>){
        fs.writeFileSync(this.URL,JSON.stringify(db.map(d => d.toPrimitives())));
    }
    getByModule(moduleName: string): Promise<CronConfiguration | null> {
        const db = this.getDb();
        const founded = db.find(d => d.getJobName() == moduleName);
        if(!founded) return Promise.resolve(null);

        return Promise.resolve(founded);
    }
    async save(config: CronConfiguration): Promise<void> {
        const db = this.getDb();

        const filtered = db.filter(d => d.getJobName() != config.getJobName());

        
        filtered.push(config);
        this.saveDb(filtered);
    }

}