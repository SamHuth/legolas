import { Pane } from "evergreen-ui";
import BrandLogo from "../BrandLogo/BrandLogo";

const PageHeader = () => {

  return (
    <Pane display="flex" padding={16} borderBottom>
      <Pane flex={1} alignItems="center" display="flex">
        <BrandLogo />
      </Pane>
    </Pane>
  );
};

export default PageHeader;
