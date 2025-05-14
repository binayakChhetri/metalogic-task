import type { ReactElement } from "react";

interface cardItem {
  title: string;
  description?: string;
  icon: ReactElement;
}
const Card = ({ item }: { item: cardItem }) => {
  return (
    <div className="bg-white p-6 border-gray-200  rounded-lg shadow-sm hover:shadow-sm hover:scale-105 transition-all duration-200 ease-in-out cursor-pointer text-center">
      <div className="bg-blue-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4 mx-auto">
        {item.icon}
      </div>
      <h4 className="font-bold text-lg mb-2">{item.title}</h4>
      <p className="text-gray-600">{item.description}</p>
    </div>
  );
};

export default Card;
export type { cardItem };
