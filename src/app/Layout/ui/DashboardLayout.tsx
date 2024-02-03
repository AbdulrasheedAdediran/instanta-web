// import { FC } from "react";
// import { LayoutFooter, LayoutHeader } from "@/widgets";
import { Outlet } from "react-router-dom";


import React from "react";
import {
  DashboardHeader,
  DashboardSidebar,
  DashboardFooter,
  // ProtectedRoute,
} from "@/widgets";
import { DashboardContextProvider } from "@/contexts/index";


// const Layout: FC = () => {
//   return (
//     <div className="h-screen overflow-x-hidden">
//       <LayoutHeader />
//       <main>
//         <Outlet />
//       </main>
//       <LayoutFooter />
//     </div>
//   );
// };

// export default Layout;





export default function DashboardLayout() {
  return (
    // <ProtectedRoute>
      <DashboardContextProvider>
        <div className="grid lg:grid-cols-[16rem,auto] min-h-screen lg:h-screen overflow-hidden relative">
          <DashboardSidebar />
          <div className="flex flex-col overflow-y-auto h-screen">
            <DashboardHeader />
            <main className="flex-1 max-width pb-8">  <Outlet/></main>
        <DashboardFooter className="px-4" />
          </div>
        </div>
      </DashboardContextProvider>
    // </ProtectedRoute>
  );
}
