import { Pane } from "evergreen-ui";
import { ReactNode } from "react";

interface PageCenterProps{
  children: ReactNode
}

const PageCenter = ({children}: PageCenterProps) => {
  return (
    <Pane display="grid" placeItems="center" height="100vh">
      {children}
    </Pane>
  );
};

export default PageCenter;
