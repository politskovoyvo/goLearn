export interface User {
    id: number;
    name: string;
    token: string;
    refresh_token: string;
    employee_id: number;
    family_name: string;
    phone?: number;
    email?: string;
    password?: string;
}
