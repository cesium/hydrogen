import React from "react";

interface InfoCardProps {
  children: React.ReactNode;
}

const InfoCard: React.FC<InfoCardProps> = ({ children }) => {
  return (
    <div className="min-w-[300px] overflow-hidden rounded-2xl border border-black/10 bg-white">
      {children}
    </div>
  );
};

export default InfoCard;
