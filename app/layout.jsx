import '../styles/globals.css';
import { Sidebar } from '../components/sidebar';

export const metadata = {
    title: {
        template: '%s | La Maison Restaurant',
        default: 'La Maison Restaurant'
    },
    description: 'Experience exquisite fine dining at La Maison. Explore our menu, book a table, and discover our story.'
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/favicon.svg" sizes="any" />
            </head>
            <body className="antialiased">
                <div className="app-layout">
                    <Sidebar />
                    <main className="main-content">
                        {children}
                    </main>
                </div>
            </body>
        </html>
    );
}
