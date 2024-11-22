export const ROUTER_PATH = {
    HOME: '/',                        // strona glowna
    NO_ACCESS: '/noaccess',           // brak dostępu
    LIBRARY: '/library',              // biblioteka, wyszukiwanie książek, statusy książek
    EVENTS: '/',                      
    ABOUT_US: '/',

    // Public routes
    USER_LOGIN: '/login',  
    ADMIN_LOGIN: '/alogin',
    REGISTER: '/register',

    // User routes
    PROFIL: '/profil/:user_id',                 // profil usera, zmiana hasła, zmiana emaila
    UBOOKS: '/profil/:user_id/books',           // rezerwacje, wypozyczone, zwroty
    UHISTORY: '/profil/:user_id/history',       // books history
    ULBOOK: '/library/:book_id',                // wypożyczanie książki, szczegóły ksiązki, zwrot ksiązki
    

    // Admin routes
    ADDBOOK: '/admin/library/addbook',         // dodawanie książki do biblioteki
    ALBOOK: '/admin/library/:book_id'          // szczegóły, edytowanie książki, usuwanie, zmiany statusu   
}