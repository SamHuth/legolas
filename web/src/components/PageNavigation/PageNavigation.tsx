import { navigate, routes, useLocation } from "@redwoodjs/router";
import { Button, CogIcon, DrawerRightIcon, minorScale, Pane } from "evergreen-ui";
import { useAuth } from "src/auth";
import { MENU_ITEMS } from "src/lib/constants";

const PageNavigation = () => {

  const { logOut } = useAuth()

  const { pathname } = useLocation()

  return (
    <Pane borderRight className='w-64 !border-gray-300 bg-slate-200'>
      <Pane display="flex" flexDirection="column" justifyContent="space-between" height="100%" flexGrow="1" padding={minorScale(4)}>
        <Pane display="flex" flexDirection="column" gap={minorScale(1)}>
          {MENU_ITEMS.map((item) => {
            return (
              <Button appearance={ pathname === item.url ? "primary" : "minimal" } className={` ${pathname === item.url ? "" : "hover:!bg-sky-200"}`} justifyContent="start" key={item.name} iconBefore={item.icon} onClick={()=> navigate(item.url)}>{item.name}</Button>
            )
          })}
        </Pane>

        <div>
          <Button className={` ${pathname === routes.settings() ? "" : "hover:!bg-blue-200"}`} appearance={ pathname === routes.settings() ? "primary" : "minimal" } marginBottom={minorScale(1)} justifyContent="start" iconBefore={CogIcon} width="100%" onClick={() => navigate(routes.settings())}>Settings</Button>
          <Button className={`hover:!bg-red-200`} appearance={ "minimal" } intent="danger" justifyContent="start" iconBefore={DrawerRightIcon} width="100%" onClick={logOut}>Logout</Button>
        </div>
      </Pane>
    </Pane>
  )

};

export default PageNavigation;
