# Clear Core

[![Build Status](https://travis-ci.org/FreeElephants/clean-core.svg?branch=master)](https://travis-ci.org/FreeElephants/clean-core)


[![codecov](https://codecov.io/gh/FreeElephants/clean-core/branch/master/graph/badge.svg)](https://codecov.io/gh/FreeElephants/clean-core)


Core interfaces and classes for html applications.  

## Architecture

### Page 

Every page is html file in public directory. It includes:
- common html elements (`html`, `head`, `body`) 
- mark-up (for template engine or raw html)

Advantages of this approach:
- Client-side rendering and raw html can be used
- Real URI for every page

### Application 

Application handle entry point in app (e.g. main.ts): 
- Execute global hooks
- Check requested route for current page
- Run Route Handler

### Router

Contains map of URI -> Route Handler.

### Route Handlers

Route Handler known how handle specific URI with given params. Route handling cases:
- instantiate and execute Page Object with given Window context
- redirection (based on URI params, Window context, etc)

Route inject all external Page Object dependencies.  

### Page Objects

Page Object instantiate html components (forms, widgets) and handle events. 
