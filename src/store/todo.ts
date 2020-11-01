import { writable } from "svelte/store";

// Types

type Todo = {
  item: string;
  isDone: boolean;
};

type Data = {
  newItem: string;
  todos: Array<Todo>;
};

// Smart Constructors

const createTodo = (item: string): Todo => {
  return {
    item,
    isDone: false,
  };
};

// Init

const init: Data = {
  newItem: "",
  todos: [],
};

// Helpers

const addItem = ({ newItem, todos }: Data): Data => {
  return {
    newItem: "",
    todos: [createTodo(newItem), ...todos],
  };
};

const deleteItem = (index: number) => (data: Data): Data => {
  return {
    todos: data.todos.splice(index, 1),
    ...data,
  };
};

const resetItem = ({ todos }: Data): Data => {
  return {
    newItem: "",
    todos,
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
