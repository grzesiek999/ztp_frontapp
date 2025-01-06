export const ROUTER_PATH = {
    HOME: '/',                        // strona glowna
    NO_ACCESS: '/noaccess',           // brak dostępu
    LIBRARY: '/library',              // biblioteka, wyszukiwanie książek, statusy książek
    EVENTS: '/',                      
    ABOUT_US: '/',

    // Public routes
    USER_LOGIN: '/login',  
    REGISTER: '/register',
    ACCOUNT_CREATED: '/created_account',

    // User routes
    USER_PROFIL: '/user/:user_id',                // profil usera, zmiana hasła, zmiana emaila
    CHANGE_PASSWORD: '/user/password',              // zmiana hasła
    CHANGE_EMAIL: '/user/email',                    // zmiana email
    CHANGE_PHONE: '/user/phone',                    // zmiana nr tel
    USER_BOOKS: '/user/:user_id/books',           // rezerwacje, wypozyczone, zwroty
    USER_HISTORY: '/user/:user_id/history',       // books history
    USER_LIBRARY_BOOK: '/library/:book_id',         // wypożyczanie książki, szczegóły ksiązki, zwrot ksiązki



    // Admin routes
    ADD_BOOK: '/admin/library/addbook',                  // dodawanie książki do biblioteki
    ADMIN_LIBRARY_BOOK: '/admin/library/:book_id'       // szczegóły, edytowanie książki, usuwanie, zmiany statusu   
}