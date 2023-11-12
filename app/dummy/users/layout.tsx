import React from 'react';

const LayoutUserPage = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <div>All User</div>
            {children}
        </div>
    );
};

export default LayoutUserPage;
