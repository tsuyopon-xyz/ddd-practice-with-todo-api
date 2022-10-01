import express, { Router } from 'express';
import { TodoCreateService } from './app/TodoCreateService';
import { TodoFindAllService } from './app/TodoFindAllService';
import { TodoFindByIdService } from './app/TodoFindByIdService';
import { TodoCreateCommand } from './domain/command/TodoCreateCommand';
import { TodoFindByIdCommand } from './domain/command/TodoFindByIdCommand';
import { TodoFactory } from './domain/TodoFactory';
import { TodoRepository } from './infra/TodoRepository';
import { NotFoundError } from './shared/error/NotFoundError';
import { ErrorResponse } from './shared/error/ErrorResponse';
import { TodoUpdateCommand } from './domain/command/TodoUpdateCommand';
import { TodoUpdateService } from './app/TodoUpdateService';

const router = Router();
const repository = new TodoRepository();
const factory = new TodoFactory();

router.use(express.json());

router.post('/', async (req, res) => {
  const title: string = req.body.title;
  const command = new TodoCreateCommand({ title });
  const service = new TodoCreateService(repository, factory);
  const todoResponse = await service.handle(command);

  res.status(201).json(todoResponse);
});

router.get('/', async (_, res) => {
  const service = new TodoFindAllService(repository);
  const todoResponses = await service.handle();

  res.status(201).json(todoResponses);
});

router.get('/:id', async (req, res) => {
  const id: string = req.params.id;
  const command = new TodoFindByIdCommand({ id: parseInt(id) });
  const service = new TodoFindByIdService(repository);
  const todoResponse = await service.handle(command);
  if (!todoResponse) {
    const error = new NotFoundError();
    const errorResponse = new ErrorResponse(error);
    return res.status(404).json(errorResponse);
  }

  res.status(200).json(todoResponse);
});

router.put('/:id', async (req, res) => {
  const id: string = req.params.id;
  const title: string = req.body.title;
  const command = new TodoUpdateCommand({ id: parseInt(id), title });
  const service = new TodoUpdateService(repository);
  const todoResponse = await service.handle(command);
  if (!todoResponse) {
    const error = new NotFoundError();
    const errorResponse = new ErrorResponse(error);
    return res.status(404).json(errorResponse);
  }

  res.status(200).json(todoResponse);
});

export { router };
