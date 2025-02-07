import { routes } from "@redwoodjs/router";
import { MenuItem } from "./types";
import { CalendarIcon, DollarIcon, ExchangeIcon, GridViewIcon } from "evergreen-ui";

const MENU_ITEMS:MenuItem[] = [
  {
    name: 'Dashboard',
    url: routes.home(),
    icon: GridViewIcon,
  },
  {
    name: 'Calendar',
    url: routes.calendar(),
    icon: CalendarIcon,
  },
  {
    name: 'Income',
    url: routes.income(),
    icon: DollarIcon,
  },
  {
    name: 'Expenses',
    url: routes.expenses(),
    icon: ExchangeIcon,
  },
]


export { MENU_ITEMS }
