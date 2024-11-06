import { JsonCronConfigRepository } from "./cron/JsonCronConfigRepository";
import { NodeSchedulerScheduler } from "./cron/NodeSchedulerScheduler";
import { InMemoryEventBus } from "./InMemoryEventBus";


export const cronConfig = new JsonCronConfigRepository();
export const scheduler = new NodeSchedulerScheduler(); 
export const eventBus = new InMemoryEventBus();