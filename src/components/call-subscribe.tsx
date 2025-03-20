import React from "react";

interface CallSubscribeProps {
  title: string;
  description: string;
  buttonText: string;
  buttonColor: string;
  footerText: string;
}

export const CallSubscribe = ({
  title,
  description,
  buttonText,
  buttonColor,
  footerText,
}: CallSubscribeProps) => {
  return (
    <div className="flex flex-col items-center justify-center text-center space-y-4 w-full">
      <h2 className="font-title text-2xl font-semibold">{title}</h2>
      <p className="max-w-[750px]">{description}</p>
      <a href="https://cesium.link/f/socios">
      <button
        className={`px-12 py-3 rounded-xl bg-${buttonColor} text-white font-semibold transition-all duration-300 hover:opacity-80`}
      >
        {buttonText}
      </button>
      </a>
      <a href="mailto:cesium@di.uminho.pt">
      <p className={`text-base text-${buttonColor} mt-4`}>{footerText}</p>
      </a>
    </div>
  );
};

export default CallSubscribe;
