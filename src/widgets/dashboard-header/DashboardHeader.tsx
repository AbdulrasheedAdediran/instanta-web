import { useDashboard } from "@/contexts/DashboardContext";
import useToggle from "@/hooks/useToggle";
import { Sizes, ButtonVariants } from "@/utils/types";
import React, { forwardRef, useRef, useState } from "react";
import { Button, MenuButton } from "@/widgets";
import { useClickOutside } from "@/hooks/index";
import { PiCaretDownBold } from "react-icons/pi";
import { FaUser } from "react-icons/fa6";

export default function DashboardHeader() {
  const { isSidebarOpen, toggleSidebar, onCloseSidebar } = useDashboard();
  const [query, setQuery] = useState("");
  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };
  const {
    isOpen: isDropdownOpen,
    toggle: toggleDropdown,
    onClose: onCloseDropdown,
  } = useToggle();
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  useClickOutside(dropdownRef, onCloseDropdown);

  return (
    <header className="bg-lapisLazuli min-h-[4rem] h-16 sticky top-0 z-10">
      <div className="flex items-center justify-between px-4 lg:pl-0 h-full gap-x-4 w-full">
        <MenuButton
          isOpen={isSidebarOpen}
          toggle={toggleSidebar}
          className="max-z-index "
        />
        <div className="flex items-center justify-end w-full ">
    
          <div className="relative flex items-center justify-center gap-x-4 ">
      
            <div className="text-right text-xs hidden md:block ml-4">
              <p className="font-bold text-white">
          superadmin@instanta.ca
              </p>
           
            </div>

            <div className="relative z-50 ">
              <div
                onClick={toggleDropdown}
                className="flex items-center gap-x-2"
              >
             <FaUser />
                <PiCaretDownBold
                  className={`transitions ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </div>
              {isDropdownOpen && <Dropdown ref={dropdownRef} />}
            </div>
          </div>
        </div>
      </div>
      {isSidebarOpen ? (
        <span
          className={`lg:hidden ${isSidebarOpen ? "dark-overlay" : "hidden"}`}
          onClick={onCloseSidebar}
        ></span>
      ) : null}
    </header>
  ) ;
}

const Dropdown = forwardRef<HTMLDivElement>((props, ref) => {
  // const user = useAtomValue(currentUserAtom);
  // const ROLE = user?.role;
  // const router = useRouter();
  // const setUser = useSetAtom(currentUserAtom);
  // const setToken = useSetAtom(tokenAtom);
  // const logout = () => {
  //   setUser(null);
  //   setToken(null);
  //   router.push("/login").then(() => {
  //     router.reload();
  //   });
  // };
  return (
    <div
      ref={ref}
      className="flex flex-col items-start text-grey bg-white  border-[.5px] border-deepKaomaru p-2 rounded-lg w-[12.5rem] gap-y-2 top-[2.5rem] right-0 absolute z-20 text-left"
    >

      <div className="w-full">
 

          <Button
            variant={ButtonVariants.TEXT}
            size={Sizes.SM}
            // onClick={logout}
            className="w-full flex"
          >
            Profile
          </Button>
        <div className="border-0 border-t-[.5px] pt-1 border-deepKaomaru w-full flex justify-center items-center text-center">
          <Button
            variant={ButtonVariants.FILLED_RED}
            size={Sizes.SM}
            // onClick={logout}
            className="w-full flex rounded-full text-center justify-center"
          >
            Logout
          </Button>
        </div>
      </div>
    </div>
  );
});
