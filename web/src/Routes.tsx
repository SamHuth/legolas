// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Set, Router, Route } from '@redwoodjs/router'

import ScaffoldLayout from 'src/layouts/ScaffoldLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={ScaffoldLayout} title="Countries" titleTo="countries" buttonLabel="New Country" buttonTo="newCountry">
        <Route path="/countries/new" page={CountryNewCountryPage} name="newCountry" />
        <Route path="/countries/{id:Int}/edit" page={CountryEditCountryPage} name="editCountry" />
        <Route path="/countries/{id:Int}" page={CountryCountryPage} name="country" />
        <Route path="/countries" page={CountryCountriesPage} name="countries" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
