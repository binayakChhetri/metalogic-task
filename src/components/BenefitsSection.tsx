import { ChevronDown, Coffee, Eye, Smile, Users, Zap } from "lucide-react";
import type { cardItem } from "../UI/Card";
import SectionHeader from "../UI/SectionHeader";
import Card from "../UI/Card";

const cardItems: cardItem[] = [
  {
    title: "Flexibility at work",
    description:
      "Do your best work at a time and place that fits us and your work-life balance.",
    icon: <Coffee className="text-red-500" size={20} />,
  },
  {
    title: "Take Ownership",
    description:
      "Take responsibility to make customer satisfaction your top priority to win.",
    icon: <Users className="text-red-500" size={20} />,
  },
  {
    title: "Unlimited Growth",
    description:
      "We're here to help - regardless of role - to get the skills needed to achieve success.",
    icon: <ChevronDown className="text-red-500" size={20} />,
  },
  {
    title: "Make Yourself Heard",
    description:
      "Be always open-minded on experiences that help create a collaborative work environment.",
    icon: <Eye className="text-red-500" size={20} />,
  },
  {
    title: "Team Spirit",
    description:
      "Being together, learn as one, solve the challenges as a team, and celebrate results and outcomes.",
    icon: <Users className="text-red-500" size={20} />,
  },
  {
    title: "Inclusivity at Work",
    description:
      "Diverse involvement and insight to develop practices and programs for the talents who grow in all directions.",
    icon: <Smile className="text-red-500" size={20} />,
  },
  {
    title: "Transparent Environment",
    description:
      "Build relationships in a natural way while information is shared honestly and openly.",
    icon: <Eye className="text-red-500" size={20} />,
  },
  {
    title: "Fuel Your Passion",
    description:
      "Work on what you love, with the latest tech innovations to fulfill and inspire your life.",
    icon: <Zap className="text-red-500" size={20} />,
  },
];
export default function BenefitsSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <SectionHeader title="Life At MetaLogic" subtitle="Benefits" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {cardItems.map((item) => (
            <Card key={item.title} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
