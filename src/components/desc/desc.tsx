import React from "react";
interface DescriptionProps {
  description: string;
}
export const Description: React.FC<DescriptionProps> = ({ description }) => {
  return (
    <div className="mb-12">
      <p className="text-lg text-gray-300">{description}</p>
    </div>
  );
};