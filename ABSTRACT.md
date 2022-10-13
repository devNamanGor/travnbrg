# Abstract for TravNbrg project

## Introduction

### Teck Stack Used:
* Firebase (BaAS)
    
  1) Provides Authentication, Database, Storage, Hosting.
  2) Use of Database and Storage Security rules denys unauthorized access.
  3) Hosting provides ways to hose multiple sites in a single project. Hence, sub sites like Admin can be hosted using the same project, enabling the sharing of project data.
  
* SvelteKit (Web-App Framework)
  1) Helps in making code readable with less-boilerplate code.
  2) SvelteKit is Reactive, hence changes to variable values automatically sync across the app.
  3) SvelteKit has excellent support for SSR (Server Side Rendering), which in-turn increase SEO.
  
* Prettier
  1) Used for Formating HTML, CSS, Javascript Code.
  
* TailwindCSS with PostCSS
  1) TailwindCSS reduces the need to write common, boilerplate css and provided excellent support across browsers.
  2) PostCSS comes with a purge option, which removes the unused CSS styles from TailwindCSS, making the CSS bundle of the site smaller.
  
* DaisyUI
  1) DaisyUI is a highly customizable UI Component library, which provides basic components.
  2) These components help in reducing boilerplate code, while still being customizable.
  3) Provides Several Themes.
  
* Theme-Change
  1) Provides an easier way to change themes using a typescript based package.
  
## Concept
  
  The concept of this website is to be a travel website which is primarily going to be used for booking tickets (Air/Train), Hotel Stays and Discover new Destinations to travel to.
  
## Future Goals

  1) Add a wallet feature.
  2) Suggest pre-made trips and packages.
