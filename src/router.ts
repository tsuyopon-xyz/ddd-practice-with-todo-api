import express, { Router } from 'express';
import { TodoCreate } from './app/TodoCreate';
import { TodoCreateCommand } from './domain/command/TodoCreateCommand';
import { TodoFactory } from './domain/TodoFactory';
import { TodoRepository } from './infra/TodoRepository';

const router = Router();
const repository = new TodoRepository();
const factory = new TodoFactory();

router.post('/', express.json(), (req, res) => {
  console.log(req.body);
  const id: number = req.body.id;
  const title: string = req.body.title;
  const command = new TodoCreateCommand({ id, title });
  const todoCreate = new TodoCreate(repository, factory);
  const dto = todoCreate.handle(command);

  res.status(201).json(dto);
});

export { router };
