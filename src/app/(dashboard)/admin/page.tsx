import UserCard from "@/components/UserCard"

const AdminPage = () => {
  return (
    <div className='p-4 flex flex-col md:flex-row'>
      <div className="w-full md:w-2/3">
      {/* userCards */}
      <div className="flex gap-4 justify-between flex-wrap">
        <UserCard type="student"/>
        <UserCard type="teacher"/>
        <UserCard type="parent"/>
        <UserCard type="staff"/>
      </div>
      </div>
      <div className="w-full md:w-1/3">f</div>

    </div>
  )
}

export default AdminPage