import Dashboard from "./Views/Dashboard";
import Profile from "./Views/Pages/Profile";
import ResetPassword from "./Views/Pages/ResetPass";
import Information from "./Views/Pages/Infor";
import DetailUser from "./Views/Pages/DetailUser";
import Settings from "./Views/Pages/Settings";
import Users from "./Views/Pages/Users";
// configs
import { URL_PAGE } from "./configs";

const Routes = [
  {
    path: URL_PAGE.DASHBOARD,
    name: "Dashboard",
    exact: true,
    component: Dashboard,
  },
  {
    path: URL_PAGE.INFORMATION,
    exact: true,
    name: "About Project",
    component: Information,
  },
  {
    path: URL_PAGE.SETTINGS,
    name: "Settings",
    component: Settings,
    exact: true,
  },
  { path: URL_PAGE.USERS, name: "Users", component: Users, exact: true },
  { path: URL_PAGE.PROFILE, name: "profile", component: Profile, exact: true },
  {
    path: `${URL_PAGE.USERS_DETAIL}/:id`,
    name: "Detail User",
    component: DetailUser,
    exact: true,
  },
  {
    path: URL_PAGE.RESETPASSWORD,
    name: "Reset Your Password",
    component: ResetPassword,
    exact: true,
  },
];
export default Routes;
