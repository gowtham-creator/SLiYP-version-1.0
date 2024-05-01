import {BsHouseFill,BsBellFill} from 'react-icons/bs';
import {FaUser} from 'react-icons/fa';
import {BiLogOut} from 'react-icons/bi';
import { GiCelebrationFire } from "react-icons/gi";

import SidebarLogo from './SidebarLogo';
import SidebarItem from './SidebarItem';
import { IoColorFilterOutline } from "react-icons/io5";

import SidebarTweetButton from './SidebarTweetButton';
import { TbCirclesRelation } from "react-icons/tb";

const Sidebar = () => {
    const items=[
        {
            label:'Home',
            href:'/',
            icon:BsHouseFill 
        },
        {
            label:'Circles',
            href:'/circles',
            icon:IoColorFilterOutline
        },
        {
            label:'Arena',
            href:'/Arena',
            icon:GiCelebrationFire
        },
        {
            label:'Notifications',
            href:'/notifications',
            icon:BsBellFill
        },
        {
            label:'Profile',
            href:'/users/123',
            icon:FaUser
        }
    ]
    return ( 
        <div className='col-span-1 h-full pr-4 md:pr-6'>
            <div className='flex flex-col items-end'></div>
            <div className='space-y-2 lg:w-[230px]'></div>
            <SidebarLogo/>
            {items.map((item)=>(
                <SidebarItem
                key={item.href}
                href={item.href}
                label={item.label}
                icon={item.icon}
                />

            ))}
            <SidebarItem href='/' icon={BiLogOut} label='Logut'/>
            <SidebarTweetButton/>
        </div>
     );
}
 
export default Sidebar;