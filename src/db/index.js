import { Dexie } from 'dexie';

const db = new Dexie('FriendsDatabase') 

db.version(1).stores({
  friends: '++id, name, age' // primary key "id" (for the runtime!)
});

// 导出数据库对象  外部使用 db.xxTable.add() 给这张表新增一条数据
export { db };
