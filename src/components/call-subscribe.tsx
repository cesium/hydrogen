import React from "react";

interface CallSubscribeProps {
  title: string;
  description: string;
  buttonText: string;
  buttonURL: string;
  buttonColor: string;
  footerText: string;
}

export const CallSubscribe = ({
  title,
  description,
  buttonText,
  buttonURL,
  buttonColor,
  footerText,
}: CallSubscribeProps) => {
  return (
    <div className="flex w-full flex-col items-center justify-center space-y-6 text-center">
      <h2 className="font-title text-2xl font-semibold">{title}</h2>
      <p className="max-w-[750px]">{description}</p>
      <a href={buttonURL}>
        <button
          className={`rounded-xl px-12 py-3 bg-${buttonColor} font-semibold text-white transition-all duration-300 hover:opacity-80`}
        >
          {buttonText}
        </button>
      </a>
      <a href="mailto:cesium@di.uminho.pt">
        <p className={`text-base text-${buttonColor} font-medium select-none`}>
          {footerText}
        </p>
      </a>
    </div>
  );
};

export default CallSubscribe;
