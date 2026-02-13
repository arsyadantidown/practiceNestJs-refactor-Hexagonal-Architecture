import { Injectable, Inject } from '@nestjs/common';
import { TASK_REPOSITORY } from '../domain/task.repository';
import type { TaskRepository } from '../domain/task.repository';
import { Task } from '../domain/task.entity';
import { CreateTaskDto } from '../dto/createTask.dto';
import { UpdateTaskDto } from '.../framework/dto/updateTask.dto';


@Injectable()
export class TaskingService {
  private id = 1;

  constructor(
    @Inject(TASK_REPOSITORY)
    private readonly taskRepo: TaskRepository,
) {}

  createTask(dto: CreateTaskDto): Task {
    const task: Task = {
      id: this.id++,
      title: dto.title,
      description: dto.description,
      priority: dto.priority ?? 3,
      isCompleted: dto.isCompleted ?? false,
    };

    return this.taskRepo.createTask(task);
  }

  updateTask(id: number, dto: UpdateTaskDto) {
    return this.taskRepo.updateTask(id, dto);
  }

  getAllTask() {
    return this.taskRepo.findAllTask();
  }

  getTaskById(id: number) {
    return this.taskRepo.findTaskById(id);
  }

  deleteTaskById(id: number) {
    this.taskRepo.deleteTaskById(id);
    return `task with id : ${id} is deleted`;
  }
}
