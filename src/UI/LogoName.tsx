export default function LogoName() {
  return (
    <div className="flex items-center mr-6 gap-1 cursor-pointer">
      <div className="bg-red-500 rounded-full w-8 h-8 flex items-center justify-center mr-1">
        <img src="./metalogo.png" alt="metalogic logo" />
      </div>
      <span className="font-bold text-lg">MetaLogic</span>
    </div>
  );
}
