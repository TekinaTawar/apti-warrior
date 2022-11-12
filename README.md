# Main 

- This is the APTI WARRIOR project.
- Current Stack
  - React
  - Next js
  - Styled Components
  - react-otp-input (https://www.npmjs.com/package/react-otp-input)


## For Developers Who might work on this in future.
- These are some custom rules that are bieng used and need to be followed.
  - avoid using npm i unless you are installing an individual package rather use ``npm ci``.
  - react should not be imported anywhere in the project at the top.
  - use these following convention for directory structure:
    - **global styles** : global styles will be also located in components/styles/ as Global.styles.js
    - **pages styles**: pages will have there styles either in page itself if not a lot of styling or in components/styles as page_name.styles.js 
    - **components level styles**: top level components like layout can be put directly in component as a folder while for page level component use this directory structure: components/{page_name}/componentName and inside it you can make a jsx file and a styles.js file for styling.
    - **shared components styles** *(components that components use, like buttons, input box of some type, raido button etc typicall small components)* : shared components will have same directory structure as component but in components/shared folder rather then page_name.

- Design Constraints for now:
  - Design for desktop displays from 1024×768 through 1920×1080 (**max height: 1080px** minus header and footer height =**960px**)
  - Design for mobile displays from 360×640 through 414×896 (**min height: 640px** minus header and footer height =**~560px**)
  - Summary: **Width: 360px to 1920px, Height: 560px to 960px**.



- Page Heirarchy (not mentioning absolute positioned things without no further heirarcy)
  - :root
    - html
      - body
        - _next
          - BgContainer (absolute)
          - mainContainer (height and width 100% always used to divide and align items in page) (unique to every page).

### Naming Covention:
- **Components**: PascalCase
- **classNames**: camelCase

- css style possible approachs:
  - inside out approach: use unit rem for everything (drawback content will overflow if screen size is smaller then sum of rem).
  (verdict: Very hard to implement.) 
  - outside in approach: give outside element width value with min/max/clamp and then use % values inside. Then use Media queries to manage things.
  - fluid utopian outside in.


# for enhancements
  - Design for tablet displays from 601×962 through 1280×800
  > possible breakpoints
    -  320px
    - 480px
    - 768px
    - 1024px
    - 1280px
    - 1440px
    - 1600px
    - 1920px (Desktop)
    - 2560px

https://utopia.fyi/space/calculator/?c=360,19,1.16,1920,24,1.21,5,3,1000&s=0.75|0.5|0.25|0.15,1.5|2|3|4|6|8|18,4xs-3xs