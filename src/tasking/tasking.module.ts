import { Module } from '@nestjs/common';
import { TaskingService } from './tasking.service';
import { TaskingController } from './tasking.controller';

@Module({
  controllers: [TaskingController],
  providers: [TaskingService],
})
export class TaskingModule {}
