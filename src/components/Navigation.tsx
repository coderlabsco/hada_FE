'use client'
import { useLoginStore } from "@/store/zustand"
import navBarIcon from "../assets/navbarIcon.png"
import Image from "next/image"
import { DownOutlined, UserOutlined } from "@ant-design/icons"
const Navigation = () => {
  const { name } = useLoginStore()

  return (
    <nav className="flex items-center justify-between p-4 bg-[#fafafa] sticky top-0">
      <Image src={navBarIcon} alt="Logo" />

      <button className=" text-black py-2 px-4 rounded ease-in-out duration-300">
        <UserOutlined style={{ paddingRight: 8, fontSize: '14px' }} />{name} <DownOutlined style={{ fontSize: '10px' }} />
        {name}
      </button>

    </nav>
  )
}

export default Navigation
