export interface Todo {
    id: number;
    title: string;
    completed: boolean;
    date?: Date
}
export enum FilterType {
    'all' = 0,
    'active',
    'completed'
}
