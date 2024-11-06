export class CronConfiguration{

    constructor(
        private time : string,
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