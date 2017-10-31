# jquery.slideinmenu.js
JQuery plugin for mobile menu slide in from left/right base on bootstrap navigation.

The slide in can be overlay or push the content.

## Installation

Simply download and include in the <head>

~~~~html
 <script src="distribute/jquery.slideinmenu.js"></script>
~~~~

## Getting Start

~~~~js
  $('#slide-nav').slideInMenu({
    desktophideselector: '.search-panel.show-mobile',
    desktopshowselector: '.centerNav .nav',
  }); 
~~~~

## Options & Defaults

- **mainselector**: '#slide-nav' 
  - main selector for the nav bar
- **navbarselector**: '#navbar' 
  - navbar selector
- **toggler**: '.navbar-toggle'
  - toggler selector to bind to click event
- **pagewrapper**: '.main-container'
  - main page wrapper to slide
- **navigationwrapper**: '.navbar-header'  
  - navigation wrapper to slide
- **footerwrapper**: '.footer-container'
  - Footer wrapper to slide
- **direction**: 'lef' 
  - 'left' or 'right' to slide in
- **desktophideselector**: ''
  - selector to hide in desktop mode
- **desktopshowselector**: ''
  - selector to show in desktop mode
- **slidewidth**: '300px'
  - slide in menu width (a px value or percentage) of the menu
- **menuneg**: '-100%'
  - normally -100% will guarantee off the view
- **breakpoint**: 767
  - breakpoint of mobile menuneg
- **fixmobilenavigation**: true
  - True - top navigation menu did not slide
- **slidermode**: 'hover'
  - slide in mode : hover or push

## Demo

Download the repository and use the *demo.html* to see the plugin in action.
