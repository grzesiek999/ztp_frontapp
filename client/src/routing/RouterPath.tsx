export const ROUTER_PATH = {
    HOME: '/',
    NO_ACCESS: '/noaccess',
    LIBRARY: '/library',
    EVENTS: '/',
    ABOUT_US: '/',

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