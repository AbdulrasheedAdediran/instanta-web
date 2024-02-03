import { useDashboard } from "@/contexts/DashboardContext";
import useToggle from "@/hooks/useToggle";
import { Sizes, ButtonVariants } from "@/utils/types";
import React, { forwardRef, useRef, useState } from "react";
import { Button, MenuButton } from "@/widgets";
import { useClickOutside } from "@/hooks/index";
import { PiCaretDownBold } from "react-icons/pi";

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
          {/* <SearchField
            onChange={handleSearchInput}
            value={query}
            containerClassName="w-[50%] max-w-[50%] md:max-w-[20rem]"
          /> */}

          <div className="relative flex items-center justify-center gap-x-4">
            {/* <Button
              applyBaseClassName={false}
              className="bg-white/10 backdrop-blur-md w-8 h-8 rounded-full grid place-items-center"
            >
              <span className="bg-red w-2 h-2 rounded-full animate-pulse transition-all duration-500 absolute top-[-1px] right-1" />
              <IoMdNotificationsOutline className="w-5 h-5" />
            </Button>
            <Button
              applyBaseClassName={false}
              className="relative bg-white/10 backdrop-blur-md w-8 h-8 rounded-full grid place-items-center"
            >
              <span className="bg-red w-2 h-2 rounded-full animate-pulse transition-all duration-500 absolute top-[-1px] right-1" />
              <BsChatDots className="w-4 h-4" />
            </Button> */}
            <div className="text-right text-xs hidden md:block ml-4">
              <p className="font-bold text-white">
            John Doe
              </p>
              <p className="font-bold">
              Admin
              </p>
            </div>

            <div className="relative">
              <div
                onClick={toggleDropdown}
                className="flex items-center gap-x-2"
              >
                {/* <Avatar src={user?.avatar?.url} /> */}
                Avatar
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
      className="flex flex-col items-start bg-foregroundMaastrichtBlue  border-[.5px] border-deepKaomaru p-2 rounded-lg w-[17.5rem] gap-y-2 top-[3.5rem] right-0 absolute z-20 text-left"
    >
      <div className="border-0 border-b-[.5px] border-deepKaomaru pb-1 flex items-center gap-x-2 w-full">
        {/* <Avatar size={Sizes.LG} src={user?.avatar?.url} /> */}
        Avatar
        <div className="text-xs space-y-1">
          <p className="font-bold text-white">
            {/* {`${user?.firstName} ${user?.lastName}`.trim()} */} Firstname
          </p>
          <p className="font-bold">
            {/* {user?.role.replace("_", " ").toLocaleUpperCase()} */} Admin
          </p>
         
        </div>
      </div>
      <div className="w-full">
        <Button
          variant={ButtonVariants.TEXT}
          size={Sizes.SM}
          href="/properties"
          className="w-full flex"
        >
          Properties
        </Button>
        <Button
          variant={ButtonVariants.TEXT}
          size={Sizes.SM}
          href="/dashboard/profile"
          className="w-full flex"
        >
          Profile
        </Button>

        <div className="border-0 border-t-[.5px] pt-1 border-deepKaomaru w-full">
          <Button
            variant={ButtonVariants.TEXT}
            size={Sizes.SM}
            // onClick={logout}
            className="w-full flex"
          >
            Logout
          </Button>
        </div>
      </div>
    </div>
  );
});
