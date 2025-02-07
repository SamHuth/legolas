// import { Link, routes } from '@redwoodjs/router'
import { Metadata } from "@redwoodjs/web";
import { Pane } from "evergreen-ui";
import PageHeader from "src/components/PageHeader/PageHeader";
import PageNavigation from "src/components/PageNavigation/PageNavigation";

const CalendarPage = () => {
  return (
    <>
      <Metadata title="Home" description="Home page" />
      <Pane className="flex flex-col w-100" height="100vh">
        <Pane>
          <PageHeader />
        </Pane>
        <Pane flexGrow="1" display="flex">
          <PageNavigation />
          <Pane flexGrow="1">
            Calendar
          </Pane>
        </Pane>
      </Pane>
    </>
  )
};

export default CalendarPage;
