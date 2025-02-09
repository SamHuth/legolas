import { routes } from "@redwoodjs/router";
import { MenuItem } from "./types";
import { CalendarIcon, TimelineAreaChartIcon } from "evergreen-ui";

const MENU_ITEMS:MenuItem[] = [
  {
    name: 'Calendar',
    url: routes.calendar(),
    icon: CalendarIcon,
  },
  {
    name: 'Projections',
    url: routes.projections(),
    icon: TimelineAreaChartIcon,
  },
]

const BRAND_NAME = "Finance Tracking"

export { MENU_ITEMS, BRAND_NAME }
