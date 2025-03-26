import React from "react";
import Button from "./button";
import AppLink from "./link";

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
      <Button
        title={buttonText}
        color={buttonColor}
        style="style2"
        href={buttonURL}
      />
      <AppLink
        title={footerText}
        href="mailto:cesium@di.uminho.pt"
        color={buttonColor}
      />
    </div>
  );
};

export default CallSubscribe;
