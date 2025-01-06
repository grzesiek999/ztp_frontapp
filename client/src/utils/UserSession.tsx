type User = {
    id: number;
    email: string;
    name: string;
    surname: string;
    phone: string;
    card_number: string;
    role: string;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function mapApiResponseToUser(data: any): User {
    return {
        id: data.user_data.id,
        email: data.user_data.email,
        name: data.user_data.name,
        surname: data.user_data.surname,
        phone: data.user_data.phone,
        card_number: data.user_data.card_number,
        role: data.role,
    };
}