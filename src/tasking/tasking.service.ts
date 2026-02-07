import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './DTO/createTask.dto';
import {UpdateTaskDto} from './DTO/updateTask.dto'
import { Task } from './interface/task.interface';

@Injectable()
export class TaskingService {

    private id=1
    private task: Task[]=[]


    createTask(dto:CreateTaskDto){
        const task:Task= {
            id:this.id++,
            title:dto.title,
            description:dto.description,
            priority:dto.priority ?? 3,
            isCompleted:dto.isCompleted ?? false
        };

        this.task.push(task)
        return task;
    }

    updateTask(id:number,dto:UpdateTaskDto){
        const task=this.task.find(task=>task.id===id) 
            if (!task) return null;
            
            if(dto.title!==undefined){
                task.title=dto.title;
            } 
            if(dto.description!==undefined){
                task.description=dto.description;
            } 
            if(dto.priority!==undefined){
                task.priority=dto.priority;
            }    
            if(dto.isCompleted!==undefined){
                task.isCompleted=dto.isCompleted;
            }
            return task;    
    }

    getAllTask(){
        return this.task;
    }

    getTaskById(id:number){
        return this.task.find(task=>task.id===id)
        
    }

    deleteTaskById(id:number){
        this.task=this.task.filter(task=>task.id!==id)
        return `task with id : ${id} is deleted`
    }




}
