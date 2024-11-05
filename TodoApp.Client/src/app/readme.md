# Angular CLI
## list for me to remember

> Use the Angular CLI to generate components, modules, services, and more.

### Generate a new component
```bash
ng generate component component-name
```
#### Purpose:
- Creating a new component
- Creating a new component with a specific style extension
- Creating a new component with a specific view encapsulation
- Creating a new component with a specific change detection strategy
- Creating a new component with a specific prefix
- Creating a new component with a specific inline template
- Creating a new component with a specific inline 

### Generate a new module
```bash
ng generate module module-name
```
#### Purpose:
- Organizing the application into distinct features
- Grouping components, directives, and pipes into one cohesive unit
- Importing and exporting components, directives, and pipes
- Managing routing configuration
- Managing dependencies
- Managing services
- Managing guards
- Managing interceptors
- Managing resolvers

### Generate a new guard
```bash
ng generate guard guard-name [options]]
```
#### Purpose:
- Protecting routes
- Preventing users from navigating with unsaved changes
- Preloading lazy-loaded modules
- Resolving data before navigating
Options:
- flat: boolean [default: true]
- functional: boolean [default: true]
- implements/guardType: array
- project: string
- skip-tests: boolean [default: false]]