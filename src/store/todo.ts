import { writable } from "svelte/store";

// Types

type Todo = {
  userId: number;
  item: string;
  isDone: boolean;
};

type User = {
  id: number;
  name: string;
};

type Data = {
  currentUserId: number;
  users: Array<User>;
  newItem: string;
  todos: Array<Todo>;
};

// Smart Constructors

const createTodo = (userId: number, item: string): Todo => {
  return {
    userId,
    item,
    isDone: false,
  };
};

// Init

const init: Data = {
  currentUserId: 1,
  users: [
    { id: 1, name: "ユーザー1" },
    { id: 2, name: "ユーザー2" },
    { id: 3, name: "ユーザー3" },
  ],
  newItem: "",
  todos: [],
};

// Helpers

const addItem = ({ currentUserId, users, newItem, todos }: Data): Data => {
  return {
    currentUserId,
    users,
    newItem: "",
    todos: [createTodo(currentUserId, newItem), ...todos],
  };
};

const deleteItem = (index: number) => (data: Data): Data => {
  return {
    todos: data.todos.splice(index, 1),
    ...data,
  };
};

const resetItem = (data: Data): Data => {
  return {
    newItem: "",
    ...data,
  };
};

// Writable

export const data = (() => {
  const { set, subscribe, update } = writable(init);

  return {
    set,
    subscribe,
    update,
    addItem: () => update(addItem),
    deleteItem: (index: number) => () => update(deleteItem(index)),
    resetItem: () => update(resetItem),
  };
})();
