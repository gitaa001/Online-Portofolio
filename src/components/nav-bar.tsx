
const NavBar = () => {
  return (
    <div className="flex flex-row justify-between bg-[#323232]/80 w-[1296px] py-4 rounded-full items-center">
        <div className="flex flex-row gap-4 pl-8">
            <div className="hover:bg-[#D4FFA9] hover:text-black transition p-2 rounded-full">Home</div>
            <div className="hover:bg-[#D4FFA9] hover:text-black transition p-2 rounded-full">Gallery</div>
            <div className="hover:bg-[#D4FFA9] hover:text-black transition p-2 rounded-full">Milestones</div>
        </div>
        <div className="bg-[#D4FFA9] text-black mr-8 px-8 py-2 rounded-full">Git's Portofolio</div>
    </div>
  )
}

export default NavBar