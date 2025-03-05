import Announcements from "@/components/Announcements"
import BigCalendar from "@/components/BigCalendar"

const ParentPage = () => {
  return (
    <div className=' flex-1 p-4 flex gap-4 flex-col xl:flex-row'>
      {/* LEFT */}
      <div className="w-full xl-w-[2/3]">
        <div className="h-full rounded-md bg-white p-4">
          <h1 className="text-xl font-semibold">Schedule (john Doe)</h1>
          <BigCalendar />
        </div>
      </div>
      {/* RIGHT */}
      <div className="w-full lg:w-1/3 flex flex-col gap-8">
        <Announcements />
      </div>

      StudentPage</div>
  )
}

export default ParentPage