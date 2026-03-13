'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
    { linkText: 'Home', href: '/', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0h4' },
    { linkText: 'About Us', href: '/about', icon: 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
    { linkText: 'Menu', href: '/menu', icon: 'M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25' },
    { linkText: 'Book Table', href: '/book-table', icon: 'M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5' },
    { linkText: 'Contact', href: '/contact', icon: 'M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75' }
];

export function Sidebar() {
    const pathname = usePathname();

    return (
        <aside className="sidebar">
            <div className="sidebar-header">
                <Link href="/" className="sidebar-logo">
                    <span className="logo-icon">&#127860;</span>
                    <div>
                        <h1 className="logo-title">La Maison</h1>
                        <p className="logo-subtitle">Fine Dining</p>
                    </div>
                </Link>
            </div>
            <nav className="sidebar-nav">
                <ul>
                    {navItems.map((item, index) => {
                        const isActive = pathname === item.href;
                        return (
                            <li key={index}>
                                <Link
                                    href={item.href}
                                    className={`sidebar-link ${isActive ? 'sidebar-link-active' : ''}`}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="sidebar-icon"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                                    </svg>
                                    {item.linkText}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
            <div className="sidebar-footer">
                <p>Open Daily</p>
                <p className="sidebar-hours">11:00 AM - 10:00 PM</p>
            </div>
        </aside>
    );
}
