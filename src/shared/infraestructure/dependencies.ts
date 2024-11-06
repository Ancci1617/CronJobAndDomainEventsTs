import { JsonCronConfigRepository } from "./cron/JsonCronConfigRepository";
import { NodeSchedulerScheduler } from "./cron/NodeSchedulerScheduler";


export const cronConfig = new JsonCronConfigRepository();
export const scheduler = new NodeSchedulerScheduler(); 