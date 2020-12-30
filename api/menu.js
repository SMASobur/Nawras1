const menu = [

    { header: 'Menu' },
    { divider: true },
    {
        action: 'mdi-book-open-page-variant',
        title: 'Items',
        active: true,
        items: [
            { title: 'Create New Item', to:'/admin/menu/create_menu' },
            { title: 'Show all items', to:'/admin/menu/show_menu' },
        ],
    },
    // {
    //     action: 'mdi-table-chair',
    //     title: 'Reservation',
    //     active: true,
    //     items: [
    //             { title: 'All Reservations', to:'/admin/reservation/all_reservations' }
    //         ],
    // },
    // {
    //     action: 'mdi-moped',
    //     title: 'Orders',
    //     active: true,
    //     items: [
    //         { title: 'All Orders', to:'/admin/order/all_orders' }
    //     ],
    // },
    {
        action: 'mdi-format-list-bulleted-type',
        title: 'Category',
        active: true,
        items: [
            { title: 'Create New Category', to:'/admin/category/create_category' },
            { title: 'Show all categories', to:'/admin/category/show_category' },
        ],
    }

]

export default menu;