import { Injectable } from '@nestjs/common'
import { TaskRepository } from '../domain/task.repository';
import { Task } from '../domain/task.entity';

@Injectable()
export class TaskMemoryRepository implements TaskRepository {
    
    private tasks: Task[]=[]
    private id=1;

    createTask(task:Task): Task{
        const newTask= { ...task, id:this.id++}
        this.tasks.push(newTask)
        return newTask;        
    }

    updateTask(id:number, data: Partial<Task>):  Task | null{
        const task = this.tasks.find(task=>task.id === id)
        if (!task) return null;
        Object.assign(task,data);
        return task;    
    }

    findAllTask(){
        return this.tasks;
    }

    findTaskById(id:number){
        return this.tasks.find(task=>task.id===id)
        
    }

    deleteTaskById(id:number): void{
        this.tasks=this.tasks.filter(task=>task.id!==id)
    }    
}