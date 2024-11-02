export const ROUTER_PATH = {
    HOME: '/',
    NO_ACCESS: '/noaccess',
    EVENTS: '/events',
    LIBRARY: '/library',
    ABOUT_US: 'about_us',

    // Public routes
    USER_LOGIN: '/login',
    ADMIN_LOGIN: '/alogin',
    REGISTER: '/register',

    // User routes
    RENT: '/library/rent/:book_id',
    RETURN: '/library/return/:book_id',

    // Admin routes
    ADDBOOK: '/admin/addbook',
}