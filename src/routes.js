import Dashboard from "./Views/Dashboard";
import Profile from "./Views/Pages/Profile";
import ResetPassword from "./Views/Pages/ResetPass";
import Information from "./Views/Pages/Infor";
import DetailUser from "./Views/Pages/DetailUser";
import Settings from "./Views/Pages/Settings";
import Users from "./Views/Pages/Users";
import ChangePass from "./Views/Pages/ChangePass";

// configs
import { URL_PAGE } from "./configs";

const routes = [
  { path: "/", exact: true, name: "Dashboard", component: Dashboard },
  {
    path: URL_PAGE.DASHBOARD,
    name: "Dashboard",
    component: Dashboard,
    exact: true,
  },
  {
    path: URL_PAGE.Users,
    name: "Users",
    component: Users,
    exact: true,
  },
  {
    path: URL_PAGE.CHANGE_PASSWORD,
    name: "Change Password",
    component: ChangePass,
    exact: true,
  },
  {
    path: URL_PAGE.INFO,
    name: "About Project",
    component: Information,
    exact: true,
  },
  {
    path: URL_PAGE.SETTINGS,
    name: "Settings",
    component: Settings,
    exact: true,
  },

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
export default routes;
