import React, { useState } from 'react'

interface SideDrawerProps {
    // Props go here
}

export const SideDrawer: React.FC<SideDrawerProps> = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <aside
            className={`fixed inset-0 z-50 transform transition-all duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'
                }`}
        >
            Heyo
        </aside>
    );
};