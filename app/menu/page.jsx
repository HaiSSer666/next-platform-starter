export const metadata = {
    title: 'Menu'
};

const menuCategories = [
    {
        name: 'Starters',
        items: [
            {
                name: 'French Onion Soup',
                description: 'Classic slow-cooked onion soup with Gruyere crouton',
                price: '$14'
            },
            {
                name: 'Tuna Tartare',
                description: 'Fresh ahi tuna with avocado, sesame, and citrus ponzu',
                price: '$18'
            },
            {
                name: 'Caesar Salad',
                description: 'Crisp romaine, house-made dressing, Parmigiano, and garlic croutons',
                price: '$13'
            },
            {
                name: 'Burrata & Heirloom Tomatoes',
                description: 'Creamy burrata, vine-ripened tomatoes, basil oil, and aged balsamic',
                price: '$16'
            }
        ]
    },
    {
        name: 'Main Courses',
        items: [
            {
                name: 'Filet Mignon',
                description: 'Prime 8oz beef tenderloin with truffle butter, roasted potatoes, and seasonal vegetables',
                price: '$48'
            },
            {
                name: 'Pan-Seared Salmon',
                description: 'Atlantic salmon with lemon beurre blanc, asparagus, and wild rice',
                price: '$36'
            },
            {
                name: 'Duck Confit',
                description: 'Slow-cooked duck leg with cherry gastrique, parsnip puree, and braised greens',
                price: '$38'
            },
            {
                name: 'Mushroom Risotto',
                description: 'Arborio rice with wild mushrooms, white truffle oil, and Parmigiano-Reggiano',
                price: '$28'
            },
            {
                name: 'Rack of Lamb',
                description: 'Herb-crusted New Zealand lamb with ratatouille and rosemary jus',
                price: '$44'
            }
        ]
    },
    {
        name: 'Desserts',
        items: [
            {
                name: 'Crème Brûlée',
                description: 'Classic vanilla bean custard with caramelized sugar',
                price: '$12'
            },
            {
                name: 'Chocolate Fondant',
                description: 'Warm dark chocolate cake with a molten center, served with vanilla ice cream',
                price: '$14'
            },
            {
                name: 'Tarte Tatin',
                description: 'Caramelized apple tart with Calvados cream',
                price: '$13'
            },
            {
                name: 'Cheese Selection',
                description: 'Curated artisanal cheese board with accompaniments',
                price: '$18'
            }
        ]
    },
    {
        name: 'Beverages',
        items: [
            {
                name: 'House Red Wine',
                description: 'Château Margaux Bordeaux, glass',
                price: '$16'
            },
            {
                name: 'House White Wine',
                description: 'Chablis Premier Cru, glass',
                price: '$14'
            },
            {
                name: 'Craft Cocktails',
                description: 'Ask your server about our seasonal cocktail menu',
                price: '$15'
            },
            {
                name: 'Espresso & Coffee',
                description: 'Freshly brewed single-origin coffee or espresso',
                price: '$5'
            }
        ]
    }
];

export default function MenuPage() {
    return (
        <div className="page-container">
            <div className="page-header">
                <h1 className="page-title">Our Menu</h1>
                <p className="page-subtitle">Crafted with passion, served with elegance</p>
            </div>

            <div className="menu-container">
                {menuCategories.map((category, idx) => (
                    <section key={idx} className="menu-category">
                        <h2 className="menu-category-title">{category.name}</h2>
                        <div className="menu-items">
                            {category.items.map((item, itemIdx) => (
                                <div key={itemIdx} className="menu-item">
                                    <div className="menu-item-header">
                                        <h3 className="menu-item-name">{item.name}</h3>
                                        <span className="menu-item-price">{item.price}</span>
                                    </div>
                                    <p className="menu-item-description">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                ))}
            </div>
        </div>
    );
}
