import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskingModule } from './tasking/tasking.module';

@Module({
  imports: [TaskingModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
