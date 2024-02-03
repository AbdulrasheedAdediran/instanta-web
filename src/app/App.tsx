import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { DashboardLayout } from "@/app/Layout";
import { Home, NoMatch } from "@/pages";

const App: FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<Home />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;



// Website - https://boadmin.instanta.ca/admin/Login.aspx

// Login details:
// superadmin@Instanta.ca
// InsWelcome@2022$