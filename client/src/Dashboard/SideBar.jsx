import React from 'react'
import Imguser from '../assets/profile.jpg'
import { Sidebar } from "flowbite-react";
import { BiBuoy } from "react-icons/bi";
import { HiArrowSmRight, HiChartPie, HiInbox, HiOutlineCloudUpload, HiShoppingBag, HiTable, HiUser, HiViewBoards } from "react-icons/hi";
const SideBar = () => {
  return (
    <div className="min-h-screen">
    <Sidebar aria-label="Sidebar with content separator example" className="w-64 bg-orange-100 shadow-md">
    <Sidebar.Logo href="#" img={Imguser} imgAlt="Flowbite logo">
        User
      </Sidebar.Logo>
      <Sidebar.Items className="space-y-2">
        <Sidebar.ItemGroup>
          <Sidebar.Item href="#" icon={HiChartPie} className="hover:bg-gray-200">
            Dashboard
          </Sidebar.Item>
          <Sidebar.Item href="/admin/dashboard/upload" icon={HiOutlineCloudUpload} className="hover:bg-gray-200">
           Upload Books
          </Sidebar.Item>
          <Sidebar.Item href="/admin/dashboard/manage" icon={BiBuoy} className="hover:bg-gray-200">
           Manage Books
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiUser} className="hover:bg-gray-200">
            Users
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiShoppingBag} className="hover:bg-gray-200">
            Products
          </Sidebar.Item>
          <Sidebar.Item href="/login" icon={BiBuoy} className="hover:bg-gray-200">
           Sign In
          </Sidebar.Item>
          <Sidebar.Item href="/logout" icon={BiBuoy} className="hover:bg-gray-200">
           Log Out
          </Sidebar.Item>
         
        </Sidebar.ItemGroup>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="/admin/dashboard" icon={HiChartPie} className="hover:bg-gray-200">
            Help
          </Sidebar.Item>
          
         
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  </div>
  )
}

export default SideBar