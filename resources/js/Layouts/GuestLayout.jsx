import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';

export default function Guest({ children }) {
    return (
        <div className={`grid grid-cols-1 md:grid-cols-2 min-h-screen`}>
           
           {children}
        </div>
    );
}
