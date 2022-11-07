# Main 

- This is the APTI WARRIOR project.
- Current Stack
  - React
  - Next js
  - Styled Components


## For Developers
- These are some custom rules that are bieng used and need to be followed.
  - avoid using npm i unless you are installing an individual package rather use ``npm ci``.
  - react should not be imported anywhere in the project at the top.
  - use these following convention for directory structure:
    - **global styles** : global styles will be also located in components/styles/ as Global.styles.js
    - **pages styles**: pages will have there styles either in page itself if not a lot of styling or in components/styles as page_name.styles.js 
    - **components level styles**: top level components like layout can be put directly in component as a folder while for page level component use this directory structure: components/{page_name}/componentName and inside it you can make a jsx file and a styles.js file for styling.
    - **shared components styles** *(components that components use, like buttons, input box of some type, raido button etc typicall small components)* : shared components will have same directory structure as component but in components/shared folder rather then page_name.
