import Image from "next/image"

const Navbar = () => {
  return (
    <div className='flex items-center justify-between'>
      {/* SEARCH BAR */}
      <div className='hidden md:flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2'>
        <Image src="/search.png" alt="" width={14} height={14}/>
        <input type="text" placeholder="Search..." className="w-[200px] p-2 bg-transparent outline-none"/>
      </div>
      {/* ICONS AND USERS */}
      <div className="">
        <div className="">
          <Image src="/message.png" alt="" width={20} height={20} />
        </div>

      </div>
    </div>
  )
}

export default Navbar