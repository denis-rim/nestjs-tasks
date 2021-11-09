import { EntityRepository, Repository } from 'typeorm';
import { Task } from './task.entity';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { CreateTaskDto } from './dto/create-task.dto';
import { TaskStatus } from './task-status';

@EntityRepository(Task)
export class TasksRepository extends Repository<Task> {}
