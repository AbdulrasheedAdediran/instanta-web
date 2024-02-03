import { useDashboard } from "@/contexts/DashboardContext";
import { useClickOutside } from "@/hooks/index";
import { Sizes } from "@/utils/types";
import { Button } from "@/widgets";
import { useRef, useState } from "react";
import {
  MdArrowBack
} from "react-icons/md";
import { PiCaretRightBold } from "react-icons/pi";
import { useLocation, useNavigate } from "react-router-dom";

export default function DashboardSidebar() {
  const { isSidebarOpen, onCloseSidebar } = useDashboard();
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const sidebarRef = useRef<HTMLElement | null>(null);
  // const [user, setUser] = useAtom(currentUserAtom);
  // const setToken = useSetAtom(tokenAtom);

  // const logout = () => {
  //   setUser(null);
  //   setToken(null);
  //   router.push("/login").then(() => {
  //     router.reload();
  //   });
  // };
  // const router = useRouter();
   const location = useLocation();
   const navigate = useNavigate();
  const currentPath = location.pathname;

  useClickOutside(sidebarRef, onCloseSidebar);

console.log({location})
  console.log({ currentPath })
  console.log({ openSubmenu })
  

  const handleToggleSubmenu = (id: string) => {
    setOpenSubmenu((prev) => (prev === id ? null : id));
  };

  return (
    <aside
      className={`bg-red backdrop-blur-[10px] overflow-auto transitions grid content-start h-screen absolute lg:relative top-0 lg:top-[unset] left-0 lg:left-[unset] bottom-0 lg:bottom-[unset] w-[16rem] lg:w-[unset] max-z-index lg:z-[10] lg:opacity-100 lg:translate-x-0  ${
        isSidebarOpen
          ? "translate-x-0 opacity-100"
          : " translate-x-[-250%] opacity-0"
      } `}
    >
      <div className="flex items-center justify-between h-[4rem] px-2 sm:px-4 bg-white">
        <button onClick={()=>navigate('/')} className="w-[8rem] h-[2.5rem]">

   <img
              src="/images/instanta-logo.png"
              className="max-w-xs rounded-lg shadow-2xl aspect-video h-full w-full"
            />
        </button>
        <Button
          onClick={onCloseSidebar}
          size={Sizes.XS}
          className="text-white lg:hidden"
        >
          <MdArrowBack className="w-5 h-5" />
        </Button>
      </div>

      <div className="grid gap-1 py-4 lg:py-0">
        {sidebarMenuList?.map(({ title, href, icon, subMenuList, id }) => (
          <div className="grid">
          <Button
            key={title}
              // href={href}
              onClick={() => {
                if (subMenuList) {
                  handleToggleSubmenu(id);
                } else {
                  navigate(href);
                  onCloseSidebar();
                }
              }}
            applyBaseClassName={false}
            isActive={currentPath.split("/")[1] === href?.split("/")[1]}
            className={`w-full transitions px-4 text-lg py-2 relative before:bg-white before:absolute before:inline-block before:bottom-0 before:left-0 before:transitions grid grid-flow-col items-center justify-between gap-x-2 hover:bg-blueGrey/10  ${
              currentPath.split("/")[1] === href?.split("/")[1]
                ? "bg-batteryChargedBlue hover:bg-batteryChargedBlue text-white  "
                : "before:w-0 before:h-0 "
            }`}
          >
            <span>

            {title}
            </span>
            {subMenuList && <span>{icon}</span>}
          </Button>
    <ul className={`bg-lapisLazuli transition-all duration-300 ease-in-out overflow-hidden ${subMenuList &&   openSubmenu ===  id ? 'h-full':'h-0'}`}>
              {subMenuList?.map(subMenu => (
                       <Button
            key={subMenu.title}
            href={subMenu.href}
            applyBaseClassName={false}
            isActive={currentPath.split("/")[1] === subMenu?.href?.split("/")[1]}
            className={`w-full transitions px-4 text-lg py-2 relative before:bg-white before:absolute before:inline-block before:bottom-0 before:left-0 before:transitions grid grid-flow-col items-center justify-between gap-x-2 hover:bg-blueGrey/10  ${
              currentPath.split("/")[1] === subMenu?.href?.split("/")[1]
                ? "bg-batteryChargedBlue hover:bg-batteryChargedBlue text-white  "
                : "before:w-0 before:h-0 "
            }`}
          >
            <span>

            {subMenu.title}
            </span>
        
          </Button>
              ))}
</ul>
          </div>
        ))}
        
       
    
      </div>
    </aside>
  );
}

const sidebarMenuList = [
  {
    id: "@@001",
    title: "Dashboard",
    href: "/dashboard",
    icon: <PiCaretRightBold />,
  },
  {
    id: "@@002",
    title: "Customers",
    href: "/customers",
    icon: <PiCaretRightBold />,
  },

  {
    id: "@@003",
    title: "Transactions",
    icon: <PiCaretRightBold />,
    subMenuList: [
      {
        title: "All Transactions",
        href: "/transactions"
      },
      {
        title: "Pending Transactions",
        href: "/pending-transactions"
      },
      {
        title: "Processing Transactions",
        href: "/processing-transactions"
      },
      {
        title: "Completed Transactions",
        href: "/completed-transactions"
      },
      {
        title: "Cancelled Transactions",
        href: "/cancelled-transactions"
      },
    ]
  },
  {
    id: "@@004",
    title: "Settings",
    icon: <PiCaretRightBold />,
     subMenuList: [
      {
        title: "Service Fee",
        href: "/service-fee"
      },
      {
        title: "Currency Rates",
        href: "/currency-rates"
      },
      {
        title: "Limits",
        href: "/limits"
      },
    ]
  },
  {
    id: "@@005",
    title: "Accounts and Security",
    icon: <PiCaretRightBold />,
     subMenuList: [
      {
        title: "System Users",
        href: "/system-users"
      },
      {
        title: "Change Password",
        href: "/change-password"
      },
      {
        title: "Login History",
        href: "/login-history"
      },
      {
        title: "Ip Restriction",
        href: "/ip-restrictions"
      },

    ]
  },
  {
    id: "@@006",
    title: "Reports",
    icon: <PiCaretRightBold />,
     subMenuList: [
      {
        title: "API Response",
        href: "/transactions"
      },
      {
        title: "Transactions Summary",
        href: "/transactions-summary"
      },
      {
        title: "General Report",
        href: "/general-report"
      },
      {
        title: "KYC Report",
        href: "/kyc-report"
      },
   
    ]
  },


];

