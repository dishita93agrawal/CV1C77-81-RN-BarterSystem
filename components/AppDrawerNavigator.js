import { createDrawerNavigator } from "react-navigation-drawer";
import CustomSidebarMenu from "./CustomSidebarMenu";
import { AppTabNavigator } from "./AppTabNavigator";
import SettingScreen from '../Screens/SettingScreen'
export const AppDrawerNavigator = createDrawerNavigator(
  {
    Home: {
      screen: AppTabNavigator,
    },
    Settings: {
      screen: SettingScreen,
    },
  },
  { contentComponent: CustomSidebarMenu },
  { initialRouteName: "Home" }
);
