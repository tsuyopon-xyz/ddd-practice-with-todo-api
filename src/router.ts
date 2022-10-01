import express, { Router } from 'express';
import { TodoCreate } from './app/TodoCreateService';
import { TodoFindAll } from './app/TodoFindAllService';
import { TodoCreateCommand } from './domain/command/TodoCreateCommand';
import { TodoFactory } from './domain/TodoFactory';
import { TodoRepository } from './infra/TodoRepository';

const router = Router();
const repository = new TodoRepository();
const factory = new TodoFactory();

router.use(express.json());

router.post('/', (req, res) => {
  const title: string = req.body.title;
  const command = new TodoCreateCommand({ title });
  const todoCreate = new TodoCreate(repository, factory);
  const dto = todoCreate.handle(command);

  res.status(201).json(dto);
});

router.get('/', (req, res) => {
  const todoFindAll = new TodoFindAll(repository);
  const dtos = todoFindAll.handle();

  res.status(201).json(dtos);
});

export { router };
