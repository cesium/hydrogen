import React from 'react';

interface LoadingSpinnerProps {
  color?: string;
  text?: string;
  className?: string;
}

export function LoadingSpinner({ color = "primary", text, className = "" }: LoadingSpinnerProps) {
  const spinnerColorClass = {
    primary: "border-primary",
  }[color] ?? `border-${color}`;

  const textColorClass = {
    primary: "text-primary",
  }[color] ?? `text-${color}`;

  return (
    <div className={`flex flex-col items-center justify-center p-4 ${className}`}>
      <div className={`animate-spin rounded-full border-2 border-t-transparent h-8 w-8 ${spinnerColorClass}`} />
      {text && (
        <p className={`mt-2 text-sm ${textColorClass}`}>
          {text}
        </p>
      )}
    </div>
  );
}