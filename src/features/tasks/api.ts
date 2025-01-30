import axios, { AxiosResponse } from "axios";
import { Task } from "./tasksSlice";


const url = "http://localhost:3000/todos/";

export function fetchTasksApi(): Promise<AxiosResponse<Task[]>> {
    return axios.get<Task[]>(url);
}

export function deleteTaskApi(id: string): Promise<AxiosResponse<void>> {
    return axios.delete(url + id);
}

export function addTaskApi(task: Task): Promise<AxiosResponse<Task>> {
    return axios.post<Task>(url, task);
}

export function toggleTaskApi(task: Task): Promise<AxiosResponse<Task>> {
    return axios.put<Task>(url + task.id, task);
}