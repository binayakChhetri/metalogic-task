import { useState } from "react";

export default function NewsletterSection() {
  const [email, setEmail] = useState<string>("");

  interface EmailChangeEvent extends React.ChangeEvent<HTMLInputElement> {}

  const handleEmailChange = (e: EmailChangeEvent): void => {
    setEmail(e.target.value);
  };

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-2xl font-bold mb-4">
          Subscribe to our News Letters
        </h3>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Stay informed, inspired, and inspired with the latest news and
          breakthroughs in your field.
        </p>
        <div className="max-w-lg mx-auto flex flex-col md:flex-row gap-2">
          <input
            type="email"
            className="flex-1 px-4 py-2 border border-gray-300 rounded-md"
            placeholder="Email: Your Email"
            value={email}
            onChange={(e) => handleEmailChange(e)}
          />
          <button className="cursor-pointer bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600 transition">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
}
