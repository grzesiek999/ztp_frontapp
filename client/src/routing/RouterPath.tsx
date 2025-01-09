export const ROUTER_PATH = {
    HOME: '/',                                              // strona glowna wstępne informacje
    NO_ACCESS: '/noaccess',                                 // brak dostępu do danego zasobu
    LIBRARY: '/library',                                    // biblioteka, wyszukiwanie książek
    EVENTS: '/events',                                            // przyszłościowo jakieś wydarzenia etc.
    ABOUT_US: '/about_us',                                          // przyszłościowo informacje o serwisie etc.

    // Public routes
    USER_LOGIN: '/login',                                   // logowanie
    REGISTER: '/register',                                  // tworzenie użytkownika
    ACCOUNT_CREATED: '/created_account',                    // pomyślnie stworzone konto

    // User routes
    USER_PROFIL: '/user/:user_id',                          // profil usera, podgląd informacji
    USER_CHANGE_PASSWORD: '/user/:user_id/password',        // zmiana hasła
    USER_CHANGE_EMAIL: '/user/:user_id/email',              // zmiana email
    USER_CHANGE_PHONE: '/user/:user_id/phone',              // zmiana nr tel
    USER_BOOKS: '/user/:user_id/books',                     // książki rezerwacje, wypozyczone 
    USER_HISTORY: '/user/:user_id/history',                 // books history
    USER_LIBRARY_BOOK: '/library/:book_id',                 // podgląd szczegółów książki dla usera
                                                            // rezerwacja, wypożyczanie, zwrot książki ksiązki

    // Admin / Worker routes
    ADMIN_PROFIL: '/admin/:admin_id',                       // profil admina / workera
    ADMIN_CHANGE_PASSWORD: '/admin/:admin_id/password',     // zmiana hasła
    ADMIN_CHANGE_EMAIL: '/admin/:admin_id/email',           // zmiana email
    ADMIN_CHANGE_PHONE: '/admin/:admin_id/phone',           // zmiana nr tel
    ADD_BOOK: '/admin/library/addbook',                     // dodawanie książki do biblioteki
    ADMIN_LIBRARY_BOOK: '/admin/library/:book_id',          // podgląd szczegółów książki dla admin / worker
                                                            // edytowanie, usuwanie, książki
    ADMIN_PUBLISHERS: '/admin/publishers',                  // podglad wszystkich publishers
    ADD_PUBLISHER: '/admin/publisher/addpublisher',         // dodawanie publishers
    ADMIN_PUBLISHER: '/admin/publisher/:publisher_id',      // podgląd szczegółów publisher dla admin / worker
                                                            // edytowanie, usuwanie, publishera
    ADMIN_PERSONS: '/admin/persons',                        // podglad wszystkich persons   
    ADD_PERSON: '/admin/person/addperson',                  // dodawanie person   
    ADMIN_PERSON: '/admin/person/:person_id',               // podgląd szczegółów person dla admin / worker
                                                            // edytowanie, usuwanie, person\
    ADMIN_LANGUAGES: '/admin/languages',                    // podglad wszystkich languages 
    ADD_LANGUAGE: '/admin/language/addlanguage',            // dodawanie języka
    ADMIN_LANGUAGE: '/admin/language/:language_id',         // edytowanie, usuwanie, language
    ADMIN_FORMS: '/admin/forms',                            // podglad wszystkich forms
    ADD_FORM: '/admin/form/addform',                        // dodawanie formy  do bazy
    ADMIN_FORM: '/admin/form/:form_id',                     // edytowanie, usuwanie form
    ADMIN_USERS: '/admin/users',                            // podglad wszystkich users
    ADMIN_USER: '/admin/user/:user_id',                     // podgląd szczegółów form dla admin / worker
                                                            // edytowanie, usuwanie, language                                                    
}



// 1) dokończyc user books history
// 2) dokonczyc user books reserved
// 3) dokonczyc user books rented
// 4) dokonczyc zwrot ksiazki

// 5) Edycja danych ksiązki przez adm
// 6) Usuwanie ksiązki przez adm
// 7) Dodawanie nowej ksiazki przez adm
// 8) Languages dodawanie, edytowanie, podglad, usuwanie
// 9) Persons dodawanie, podglad, edytowanie, usuwanie
// 10) Forms dodawanie, edytowanie, uswanie, podlgad
// 11) Publisher dodawanie, podglad, edytowanie, usuwanie
// 12) Users pogląd
// 13) Admin layout nav  (library, persons, publisher, users)
// 14) Admin panel nav   (books, languages, persons, forms, publisher, users)