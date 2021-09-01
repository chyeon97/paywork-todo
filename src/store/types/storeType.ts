export type todo = {
  id: string;
  content: string;
  isCheck: boolean;
  createAt: Date;
  dueAt: Date;
};

interface storeType {
  todos: todo[];
}

export default storeType;
