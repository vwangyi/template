import request from '@/utils/request';

export function findAll(pageIndex, pageSize) {
  return request.get('/api/todo/list', {
    query: { pageIndex, pageSize }
  });
}

export function createTodo(data) {
  return request.post('/api/todo/create', {
    data
  });
}
