import { CronConfiguration } from "../../domain/cron/CronConfiguration";
import { CronScheduler } from "../../domain/interfaces/CronScheduler";
import nodeSchedule from "node-schedule";
import { CronConfigurationPorLote } from "../../domain/cron/CronConfigurationPorLote";
import { CronService } from "../../application/cron/CronService";

export class NodeSchedulerScheduler implements CronScheduler{

    jobs = new Map<string,nodeSchedule.Job>();

    jobsByLote = new Map<string,Array<nodeSchedule.Job>>();

    schedule(config: CronConfiguration, service: CronService): void {
        const jobsFound = this.jobs.get(config.getJobName());

        if(jobsFound) 
            jobsFound.cancel();

        this.jobs.delete(config.getJobName());

        const job = this.scheduleJob(config.getTime(),service);
        
        console.log("Job ", (service as Object).constructor.name , "proxima invocacion : ",job.nextInvocation().toISOString())
        // console.log("Proxima ejecucion de ",(service as Object).constructor.name," horario : ",job.nextInvocation().toISOString());
        
        this.jobs.set(config.getJobName(),job);
    }


    scheduleByLote(config: CronConfigurationPorLote, service: CronService): void {
        
        const jobsFound = this.jobsByLote.get(config.getJobName());
        if(jobsFound){
            jobsFound.forEach(j => j.cancel());
        }

        const jobs = config.getTime().map(time => {
            return this.scheduleJob(time,service);
        })

        console.log("Jobs proximas invocaciones : de ", 
                (service as Object).constructor.name," \n- ", jobs.map(j => j.nextInvocation().toISOString()));
        
        
        this.jobsByLote.set(config.getJobName(),jobs);

    }

    private scheduleJob(time : string,service : CronService) : nodeSchedule.Job{
        
        const [hora,minutos] = time.split(":");
        const job = 
            nodeSchedule.scheduleJob(`${minutos} ${hora} * * *`, 
                service.run.bind(service));

        return job;
    }

}

