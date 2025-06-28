import dashboardImg from '../assets/categ.svg';
import userssImg from '../assets/userss.svg';
import videoImg from '../assets/video.svg';
import notifyImg from '../assets/notification.svg';
import rewardsImg from '../assets/crownss.svg';
import logoutImg from '../assets/log-out.svg';
import { NavLink } from 'react-router-dom';

const navItems = [
  {
    label: 'Dashboard',
    icon: dashboardImg,
    to: 'dashboard',
    active: true,
  },
  {
    label: 'Profile Settings',
    icon: userssImg,
    to: 'profile',
  },
  {
    label: 'Webinar',
    icon: videoImg,
    to: 'webinar',
  },
  {
    label: 'Notifications',
    icon: notifyImg,
    to: 'notifications',
  },
  {
    label: 'Rewards',
    icon: rewardsImg,
    to: 'rewards',
  },
  {
    label: 'Logout',
    icon: logoutImg,
    to: 'logout',
  },
];



export default function SidebarNav() {
  return (
    <ul className="mt-[52px] gap-[20px] flex items-center justify-center flex-col">
        {navItems.map((item, index) => (
          <li
          key={index}
          className={`group px-[20px] py-[18px] rounded-[60px] cursor-pointer leading-[13px] tracking-[0] transition duration-200 text-center inline-flex items-center justify-start gap-[8px] w-auto xs:w-full sm:w-full lg:w-full !py-btn-y !px-btn-x !text-[16px] !font-semibold ${
            item.active
              ? 'bg-[#006AF2] text-white hover:!text-[#0A2540] shadow-[var(--btn-shadow)] hover:bg-[#F5F7F9] active'
              : 'bg-[#F5F7F9] text-[#0A2540] hover:bg-[#006AF2] hover:text-white hover:shadow-[var(--btn-shadow)]'
          }`}
        >
          <NavLink
            to={item.to}
            className={`inline-flex items-center gap-[8px] transition duration-200 font-semibold ${
              item.active
                ? 'hover:!text-[#0A2540]' // Active stays white
                : 'group-hover:!text-white text-[#0A2540]' // Hover white for non-active
            }`}
          >
            <img
              src={item.icon}
              alt={item.label}
              className={`w-[18px] h-[18px] transition duration-200 
                ${item.active
                  ? 'filter brightness-0 invert group-hover:filter-none' // active = white, hover = back to black
                  : 'group-hover:brightness-0 group-hover:invert' // non-active = white on hover
                }`}
            />
            {item.label}
          </NavLink>
        </li>

        ))}
    </ul>
  );
}


              