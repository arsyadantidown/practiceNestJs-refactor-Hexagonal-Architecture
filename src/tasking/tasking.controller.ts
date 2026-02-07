import { Controller, Post, Body, Get, Param, ParseIntPipe, Delete} from '@nestjs/common';
import { TaskingService } from './tasking.service';
import { CreateTaskDto } from './DTO/createTask.dto';

@Controller('task')
export class TaskingController {
  constructor(private readonly taskingService: TaskingService) {}

  @Post()
  createTask(@Body()createTaskDto:CreateTaskDto){
    return this.taskingService.createTask(createTaskDto)
  }

  @Get()
  getAllTask(){
    return this.taskingService.getAllTask()
  }

  @Get(':id')
  getTaskById(@Param('id',ParseIntPipe)id:number){
    return this.taskingService.getTaskById(id)
  }  

  @Delete(':id')
  deleteTaskById(@Param('id',ParseIntPipe)id:number){
    return this.taskingService.deleteTaskById(id)
  }

  
}

