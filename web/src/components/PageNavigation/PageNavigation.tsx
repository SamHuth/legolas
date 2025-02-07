import { navigate, routes, useLocation } from "@redwoodjs/router";
import { Button, CogIcon, DrawerRightIcon, minorScale, Pane } from "evergreen-ui";
import { useAuth } from "src/auth";
import { MENU_ITEMS } from "src/lib/constants";

const PageNavigation = () => {

  const { logOut } = useAuth()

  const { pathname } = useLocation()

  return (
    <Pane borderRight className='w-48'>
      <Pane display="flex" flexDirection="column" justifyContent="space-between" height="100%" flexGrow="1" padding={minorScale(3)}>
        <Pane display="flex" flexDirection="column" gap={minorScale(1)}>
          {MENU_ITEMS.map((item) => {
            return (
              <Button appearance={ pathname === item.url ? "primary" : "minimal" } justifyContent="start" key={item.name} iconBefore={item.icon} onClick={()=> navigate(item.url)}>{item.name}</Button>
            )
          })}
        </Pane>

        <div>
          <Button appearance={ "minimal" } marginBottom={minorScale(1)} justifyContent="start" iconBefore={CogIcon} width="100%" onClick={() => navigate(routes.settings())}>Settings</Button>
          <Button appearance={ "minimal" } intent="danger" justifyContent="start" iconBefore={DrawerRightIcon} width="100%" onClick={logOut}>Logout</Button>
          <Pane borderBottom marginBottom={minorScale(4)} paddingBottom={minorScale(2)}/>
          <div className="p-20 bg-slate-300 rounded">
          </div>
        </div>
      </Pane>
    </Pane>
  )

};

export default PageNavigation;
