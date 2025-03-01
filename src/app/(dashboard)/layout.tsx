

export default function Dashboardlayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <div className="h-screen flex">
      {/* left */}
      <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] bg-red-200"> L </div>
      {/* right */}
      <div className="w-[86%] md:w-[92%] lg:w-[84%]xl:w-[86%] bg-blue-200"> R </div>
    </div>

  );
}