# Tabbed based interface skeleton for VueJS

This is a little skeleton application for VueJS with dynamic tabs navigation.
You can add tabs with your custom made component (module A, B, C).

Tabs can be added from the navigation, the start page or from other tabs.
The start page itself can not be closed.

Since all modules are loaded in the Application.vue wrapper, you don't need a router. 
An advantage is that you can have work simultaneously on the same modules (with different ids), 
without reloading the information all the time. 
To be short, just like browser tabs...

Demo: https://koencaerels.github.io/tabs_skeleton/

By the way, you can change the order of the tabs, by dragging them.

Credits:

* Element UI — https://element.eleme.io/#/en-US
* And this little module with draggable tabs — https://github.com/viewweiwu/vue-tabs-chrome


## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
