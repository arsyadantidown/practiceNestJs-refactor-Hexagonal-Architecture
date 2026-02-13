import { Module } from '@nestjs/common';
import { TaskingService } from './application/tasking.service';
import { TaskingController } from './presentation/tasking.controller';
import { TaskMemoryRepository } from './infrastructure/task.repository.memory';

@Module({
  controllers: [TaskingController],
  providers: [
    TaskingService,
  {
    provide:'TASK_REPOSITORY',
    useClass:TaskMemoryRepository,
  }],
})

export class TaskingModule {}
