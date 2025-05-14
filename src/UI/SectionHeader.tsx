export default function SectionHeader({
  title,
  subtitle,
  description,
}: {
  title: string;
  subtitle: string;
  description?: string;
}) {
  return (
    <>
      <h5 className="uppercase text-[16px] tracking-[2px] mb-[0.5rem] text-center text-red-500 font-bold">
        {subtitle}
      </h5>
      <h2 className="text-center text-4xl font-bold mb-4">{title}</h2>
      <p className="text-center max-w-2xl mx-auto text-gray-600 mb-12 font-semibold">
        {description}
      </p>
    </>
  );
}
