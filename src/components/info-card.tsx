import React from 'react';

interface InfoCardProps {
    children: React.ReactNode;
}

const InfoCard: React.FC<InfoCardProps> = ({ children }) => {
    return (
        <div className='bg-white rounded-2xl border border-black/10 min-w-[300px] overflow-hidden'>
            {children}
        </div>
    );
};

export default InfoCard;