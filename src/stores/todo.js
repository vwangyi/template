import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import * as todoAPI from '@/api/todo';

/* todo模块 */
export const useTodoStore = defineStore('todo', () => {
  const todoInp = ref('');
  const todoList = ref([]);
  const todoTotal = ref(0);

  function updateTodoInp(val) {
    todoInp.value = val;
  }

  async function createTodo(data) {
    const vto = await todoAPI.createTodo(data);
    return { ...vto, data: null };
  }

  async function findAll(pageIndex, pageSize) {
    const dto = await todoAPI.findAll(pageIndex, pageSize);
    todoList.value = dto?.data?.list || [];
    todoTotal.value = dto?.data?.total || 0;
    return { ...dto, data: null };
  }

  return {
    todoInp,
    todoList,
    updateTodoInp,
    createTodo,
    findAll
  };
});
