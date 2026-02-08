import { Task } from './task.entity';

export const TASK_REPOSITORY = 'TASK_REPOSITORY';

export interface TaskRepository {
    createTask(task:Task):Task;
    updateTask(id:number,task: Partial<Task>): Task | null;
    findAllTask():Task[];
    findTaskById(id:number): Task | undefined;
    deleteTaskById(id:number):void;
} 
