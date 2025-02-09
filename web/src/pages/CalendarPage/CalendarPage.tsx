import { Metadata } from "@redwoodjs/web";
import { minorScale, Pane } from "evergreen-ui";

import PageNavigation from "src/components/PageNavigation/PageNavigation";
import TransactionCell from "src/components/TransactionCell";

const CalendarPage = () => {
  return (
    <>
      <Metadata title="Calendar" description="Calendar page" />
      <Pane className="flex flex-col w-100" height="100vh">
        <Pane flexGrow="1" display="flex">
          <PageNavigation />
          <Pane flexGrow="1" padding={minorScale(4)}>
            <TransactionCell type={['INCOME', 'EXPENSE']}/>
          </Pane>
        </Pane>
      </Pane>
    </>
  )
};

export default CalendarPage;
