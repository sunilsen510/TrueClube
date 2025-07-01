
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
    to: '/admin/dashboard',
  },
  {
    label: 'Profile Settings',
    icon: userssImg,
    to: '/admin/profile',
  },
  {
    label: 'Webinar',
    icon: videoImg,
    to: '/admin/webinar',
  },
  {
    label: 'Notifications',
    icon: notifyImg,
    to: '/admin/notification',
  },
  {
    label: 'Rewards',
    icon: rewardsImg,
    to: '/admin/rewards',
  },
  {
    label: 'Logout',
    icon: logoutImg,
    to: '/logout',
  },
];

export default function SidebarNav() {

  return (
    <ul className="mt-[52px] gap-[20px] flex items-center justify-center flex-col">
      {navItems.map((item, index) => (
        <NavLink
          key={index}
          to={item.to}
          className={({ isActive }) =>
            `group px-[20px] py-[18px] rounded-[60px] cursor-pointer leading-[13px] tracking-[0] transition duration-200 text-center inline-flex items-center justify-start gap-[8px] w-auto xs:w-full sm:w-full lg:w-full text-[16px] font-semibold
            ${
              isActive
                ? 'bg-[#006AF2] text-white shadow-[var(--btn-shadow)]'
                : 'bg-[#F5F7F9] text-[#0A2540] hover:bg-[#006AF2] hover:text-white hover:shadow-[var(--btn-shadow)]'
            }`
          }
        >
          {({ isActive }) => (
            <>
              <img
                src={item.icon} 
                alt={item.label}
                className={`w-[18px] h-[18px] transition duration-200
                  ${
                    isActive
                      ? 'filter brightness-0 invert' 
                      : 'group-hover:brightness-0 group-hover:invert'
                  }`}
              />
              {item.label}
            </>
          )}
        </NavLink>
      ))}
    </ul>
  );
}
