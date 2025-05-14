export default function HeroSection() {
  return (
    <section className="bg-gray-100 py-16 h-[90vh] flex items-center">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold mb-3">
          Navigate Your Next
          <br />
          <span className="text-green-600">Career</span> Move
        </h1>
        <p className="max-w-md mx-auto text-gray-600 mb-8 font-semibold">
          We're continuously searching for the right talent. Check if you'll be
          a good match.
        </p>
        <button className="cursor-pointer bg-red-500  px-6 py-3 text-white rounded-sm hover:bg-white hover:border-red-500 hover:text-red-500 border-2 transition-all">
          Explore Opportunities
        </button>
      </div>
    </section>
  );
}
