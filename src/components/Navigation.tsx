import navBarIcon from "../assets/navbarIcon.png"
import Image from "next/image"
const Navigation = () => {
  return (
    <nav className="flex items-center justify-between p-4 bg-[#fafafa]">
      <Image src={navBarIcon} alt="Logo"/>
      <button className=" text-black py-2 px-4 rounded ease-in-out duration-300">
        Name
      </button>
    </nav>
  )
}

export default Navigation
