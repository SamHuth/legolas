import { Metadata } from "@redwoodjs/web";
import { EmptyState, minorScale, Pane, WidgetIcon } from "evergreen-ui";

import PageNavigation from "src/components/PageNavigation/PageNavigation";

const ProjectionsPage = () => {
  return (
    <>
      <Metadata title="Projections" description="Projections page" />
      <Pane className="flex flex-col w-100" height="100vh">
        <Pane flexGrow="1" display="flex">
          <PageNavigation />
          <Pane flexGrow="1" padding={minorScale(4)}>
            <EmptyState
              background="light"
              title="Nothing in Projections"
              orientation="vertical"
              icon={<WidgetIcon color="#C1C4D6" />}
              iconBgColor="#EDEFF5"
            />
          </Pane>
        </Pane>
      </Pane>
    </>
  )
};

export default ProjectionsPage;
