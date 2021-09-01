export type todo = {
  id: string;
  content: string;
  isCheck: boolean;
  createAt: Date;
  dueAt: Date;
};

export type modal = {
  show: boolean;
  content: string;
  onChangeContent: void;
  endDate: Date;
  onChangeDueDate: void;
};

interface storeType {
  todos: todo[];
  modals: modal;
}

export default storeType;
