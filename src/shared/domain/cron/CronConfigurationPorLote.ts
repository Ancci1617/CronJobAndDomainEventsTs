
export class CronConfigurationPorLote{

    constructor(
        private time : Array<string>,
        private jobName : string,
        
    ){
    }

    getJobName(){
        return this.jobName;
    }
    getTime(){
        return this.time;
    }

    toPrimitives(){
        return {
            time : this.time,
            jobName : this.jobName
        }
    }

}

