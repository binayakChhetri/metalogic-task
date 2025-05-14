import { Award, BookOpen, Heart, Shield, Users, Zap } from "lucide-react";
import type { cardItem } from "../UI/Card";
import Card from "../UI/Card";
import SectionHeader from "../UI/SectionHeader";

const cardItems: cardItem[] = [
  {
    title: "Continuous Learning",
    description:
      "We invest in our team's growth through ongoing training, mentorship, and opportunities to expand your skill set. We're dedicated to your professional development journey.",
    icon: <BookOpen className="text-blue-500" size={20} />,
  },
  {
    title: "Team Work",
    description:
      "We believe that best solutions comes from diverse perspective and collaborative efforts.",
    icon: <Users className="text-orange-500" size={20} />,
  },
  {
    title: "Innovation",
    description:
      "Whether it's the quality of our work, the impact we make, or the relationships we build, we consistently strive for the highest standards.",
    icon: <Zap className="text-yellow-500" size={20} />,
  },
  {
    title: "Mentorship",
    description:
      "We embrace change, learn from challenges, and remain resilient in the face of obstacles, always seeking opportunities for improvement.",
    icon: <Award className="text-purple-500" size={20} />,
  },
  {
    title: "Tangible Impact Mindset",
    description:
      "We're committed to delivering solutions that not only meet but exceed their expectations.",
    icon: <Heart className="text-red-500" size={20} />,
  },
  {
    title: "Adaptability",
    description:
      "Thrive in a fast-paced world with resilience as your ally, valuing and cultivating adaptability in your career journey.",
    icon: <Shield className="text-green-500" size={20} />,
  },
];

export default function ValuesSection() {
  return (
    <section className="py-16 mx-auto bg-[#f6f8ff]">
      <div className="max-w-[1366px] mx-auto">
        <div className="container mx-auto px-4 ">
          <SectionHeader
            title="We Believe in"
            subtitle="Values"
            description="We believe in creating an environment where individuals can thrive and make a meaningful impact."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {cardItems.map((item) => (
              <Card key={item.title} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
