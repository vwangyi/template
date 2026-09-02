// src/db/services/todoService.ts
import { db } from '../index';
import { TodoItem } from '../models/todo';
import { v4 as uuidv4 } from 'uuid';

/**
 * 站在indexedDB的角度 封装 增删改查 CURD  给Store调用  store给页面调用
 */

export async function getAllByStatus(status) {
  return db.todos.where('status').equals(status).toArray();
}

export async function getById(id) {
  return db.todos.get(id);
}

export async function add(
  item) {
  const id = uuidv4();
  await db.todos.add({
    ...item,
    id,
    createdAt: Date.now()
  });
  return id;
}

export async function update(
  id,
  changes
) {
  return db.todos.update(id, changes);
}

export async function remove(id) {
  await db.todos.delete(id);
}

export async function bulkCreate(items) {
  await db.todos.bulkAdd(items);
}

export async function clearCompleted() {
  await db.todos.where('status').equals('completed').delete();
}
