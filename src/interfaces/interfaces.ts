export interface Task {
    id: number;
    text: string | null;
}

export interface TaskState {
    tasks: Task[];
}

export interface ActionTask {
    type: string,
    payload: Task[]
}