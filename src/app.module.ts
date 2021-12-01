import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoService } from './todo/todo.service';
import { TodoModule } from './todo/todo.module';
import { MongooseModule } from '@nestjs/mongoose';
@Module({
  imports: [TodoModule,MongooseModule.forRoot('mongodb+srv://root:Admin123@cluster0.uu10f.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')],
  controllers: [AppController],
  providers: [AppService, TodoService],
})
export class AppModule {}
