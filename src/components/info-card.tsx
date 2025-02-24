import React from 'react';

interface InfoCardProps {
    children: React.ReactNode;
}

const InfoCard: React.FC<InfoCardProps> = ({ children }) => {
    return (
        <div className='bg-white rounded-[20px] border-[1px] border-[#E8E8E8] min-w-[300px] overflow-hidden'>
            {children}
        </div>
    );
};

export default InfoCard;