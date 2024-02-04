import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { DashboardLayout } from "@/app/Layout";
import { Home, NoMatch ,Dashboard,ServiceFee,CurrencyRates,Limits} from "@/pages";

const App: FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/service-fee' element={<ServiceFee />} />
          <Route path='/currency-rates' element={<CurrencyRates />} />
          <Route path='/limits' element={<Limits />} />
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