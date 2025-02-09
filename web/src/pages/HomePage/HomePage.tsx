import { Metadata } from '@redwoodjs/web'
import { EmptyState, minorScale, Pane, WidgetIcon } from 'evergreen-ui'
import PageHeader from 'src/components/PageHeader/PageHeader'
import PageNavigation from 'src/components/PageNavigation/PageNavigation'

const HomePage = () => {

  return (
    <>
      <Metadata title="Home" description="Home page" />
      <Pane className="flex flex-col w-100" height="100vh">
        <Pane>
          <PageHeader />
        </Pane>
        <Pane flexGrow="1" display="flex">
          <PageNavigation />
          <Pane flexGrow="1" display="grid" placeItems="center" padding={minorScale(4)}>
            <EmptyState
              background="light"
              title="Nothing here"
              orientation="vertical"
              icon={<WidgetIcon color="#C1C4D6" />}
              iconBgColor="#EDEFF5"
            />
          </Pane>
        </Pane>
      </Pane>
    </>
  )
}

export default HomePage
