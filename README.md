# Vision3.fr

###### Preprocessing
- [Slim](http://slim-lang.com) *[for html]*
- [Sass](http://sass-lang.com) *[for css]*
- [CoffeeScript](http://coffeescript.org) *[for js]*

###### Tools
- [Bower](http://bower.io) *[js package management]*
- [GitHub Pages](http://pages.github.com) *[deployment/hosting]*
- [Middleman Autoprefixer](https://github.com/middleman/middleman-autoprefixer) *[Automatically add vendor prefixes to CSS rules]*
- [Middleman Favicon Maker](https://github.com/follmann/middleman-favicon-maker) *[Generate favicon files in various sizes]*
- [Middleman Live Reload](https://github.com/middleman/middleman-livereload) *[Reloads the page when files change]*

## Getting Started
    
### Dependencies

You need [Bundler](http://bundler.io/) to install gems

    $ gem install bundler

Then, install them

    $ bundle install

### Bower

Find and install the packages you need…

    $ bower search package-name
    $ bower install package-name -S

Include the assets in your `js`/`css` files (paths relative to the root `bower_component` directory)

### Architecture

Stylesheets, fonts, images, and JavaScript files go in the `/source/assets/` directory.
Vendor stylesheets and JavaScripts should go in each of their `/bower_components/` directories.

    codeless/
    ├── bower_components/
    │    └── ...
    ├── source/
    │   ├── assets/
    │   └── ...

### Browser preview

    middleman server

### Deploying to GitHub Pages

    middleman build
    middleman deploy
    
Note :

- If you get an error with `middleman build`, make sure [Imagemagik](http://www.imagemagick.org/script/index.php) is installed `brew install imagemagick`

- If you deploy on Github pages, don't forget to uncomment these two lines in `config.rb` :

    activate :relative_assets
    set :relative_links, true

## Author

| [![twitter/_flexbox](https://gravatar.com/avatar/66ecc55f1bc2e5863eb516ee6f20794e?s=70)](https://twitter.com/_flexbox "Follow @_flexbox on Twitter") |
|---|
| [David Leuliette](http://davidl.fr/) |
