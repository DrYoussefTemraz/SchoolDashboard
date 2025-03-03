import AttendanceChart from "@/components/AttendanceChart"
import CountChart from "@/components/CountChart"
import UserCard from "@/components/UserCard"

const AdminPage = () => {
  return (
    <div className='p-4 flex flex-col md:flex-row'>
      {/* Left */}
      <div className="w-full md:w-2/3 flex flex-col gap-8">
        {/* userCards */}
        <div className="flex gap-4 justify-between flex-wrap">
          <UserCard type="student" />
          <UserCard type="teacher" />
          <UserCard type="parent" />
          <UserCard type="staff" />
        </div>
        {/* Middle charts */}
        <div className="flex gap-4 flex-col lg:flex-row">
          {/* COUNT CHART */}
          <div className="w-full lg:w-1/3 h-[450px]">
            <CountChart />
          </div>
          {/* Attendance Chart */}
          <div className="w-full lg:w-2/3 h-[450px]">
          <AttendanceChart/>
          </div>
        </div>
        {/* Buttom charts */}
        <div className=""></div>
      </div>

      
      {/* right */}
      <div className="w-full md:w-1/3">f</div>

    </div>
  )
}

export default AdminPage