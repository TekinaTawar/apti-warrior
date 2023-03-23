# Main

- This is the APTI WARRIOR project.
- Current Stack
  - React
  - Next js
  - Styled Components
  - react-otp-input (https://www.npmjs.com/package/react-otp-input)
  - Redux rtk query.

## For Developers Who might work on this in future.

- These are some custom rules that are being used and need to be followed.

  - react should not be imported anywhere in the project at the top.
  - use these following convention for directory structure:
    - **global styles** : global styles will be also located in components/globals/ as Global.styles.js
    - **pages styles**: pages will have there styles either in page itself if not a lot of styling or in components/styles as page_name.styles.js
    - **components level styles**: top level components like layout can be put directly in component as a folder while for page level component use this directory structure: components/{page_name}/componentName and inside it you can make a jsx file and a styles.js file for styling.
    - **shared components styles** _(components that components use, like buttons, input box of some type, radio button etc typically small components)_ : shared components will have same directory structure as component but in components/shared folder rather then page_name.

- Design Constraints for now:
  - Design for desktop displays from 1024×768 through 1920×1080 (**max height: 1080px** minus header and footer height =**960px**)
  - Design for mobile displays from 360×640 through 414×896 (**min height: 640px** minus header and footer height =**~560px**)
  - Summary: **Width: 360px to 1920px, Height: 560px to 960px**.

### Naming Convention:

- **Components**: PascalCase
- **classNames**: camelCase
- **Image Names**: camelCase
- **folders in images** folder: camelCase
- **folders in components**: camelCase

## URLs

- auth
  - login
  - SignUp
  - otp
- Dashboard (todo modal)
- Settings
  - profile (accessible to public)
  - account (editing account detail)
  - achievements
  - settings
  - support
- training
  - learn
    - {course}/choose-module
    - {course}/{subjectName}/{moduleName}/lesson/video/{videoName}
    - {course}/{subjectName}/{moduleName}/lesson/quiz/{quizName} Todo
    - {course}/{subjectName}/{moduleName}/lesson/quiz/{quizName}/attempt
  - practice
