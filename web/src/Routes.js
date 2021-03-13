// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route } from '@redwoodjs/router'

const Routes = () => {
  return (
    <Router>
      <Route path="/user-examples/new" page={NewUserExamplePage} name="newUserExample" />
      <Route path="/user-examples/{id:Int}/edit" page={EditUserExamplePage} name="editUserExample" />
      <Route path="/user-examples/{id:Int}" page={UserExamplePage} name="userExample" />
      <Route path="/user-examples" page={UserExamplesPage} name="userExamples" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
