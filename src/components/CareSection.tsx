import {
  BookOpen,
  Briefcase,
  Coffee,
  Heart,
  Shield,
  Users,
} from "lucide-react";
import Card from "../UI/Card";

const cardItems = [
  {
    title: "Performance bonus",
    icon: <Briefcase className="text-blue-500" size={20} />,
  },
  {
    title: "Health benefits",
    icon: <Heart className="text-red-500" size={20} />,
  },
  {
    title: "Paid leave policy",
    icon: <Shield className="text-green-500" size={20} />,
  },
  {
    title: "Learning and development",
    icon: <BookOpen className="text-purple-500" size={20} />,
  },
  {
    title: "Gym credits",
    icon: <Coffee className="text-yellow-500" size={20} />,
  },
  {
    title: "Team activities",
    icon: <Users className="text-orange-500" size={20} />,
  },
];

export default function CareSection() {
  return (
    <section className="py-20 bg-[#f6f8ff]">
      <div className="container mx-auto px-4">
        <div>
          <h3 className="text-2xl font-bold mb-4">MetaLogic Cares For You</h3>
          <p className="max-w-2xl text-gray-600 mb-12 font-semibold">
            Here's how about what benefits we care about in our people -
            competitive benefits that are meaningful. Take a look at what we
            offer at MetaLogic.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cardItems.map((item) => (
            <Card key={item.title} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
