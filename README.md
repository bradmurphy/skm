# SKM | Scott Kendall Music

## Project Requirements

* [nodejs](https://nodejs.org/en/)
* [Gatsby](https://www.gatsbyjs.org/)
* [React](https://reactjs.org)

First install gatsby:

#### `npm install --global gatsby-cli`

Then install the project requirements:

#### `npm install`

## Commands

#### `gatsby develop`

Gatsby will start a hot-reloading development environment accessible at localhost:8000
Try editing the javascript pages in src/pages. Saved changes will live reload in the browser.

#### `gatsby build`

Gatsby will perform an optimized production build for your site generating static HTML and per-route JavaScript code bundles.

#### `gatsby serve`

Gatsby starts a local HTML server for testing your built site.

#### `gatsby --help`
To see detailed documentation for the CLI commands.

## Deploy

Gatsby is a static site generator.  In order for WordPress data to refresh once content is updated, I've used [netlify](https://www.netlify.com/) to handle deployment.  It's a free service and pretty nice to use.  It does take a little set up in WordPress and Netlify to work, however.

First, in your Wordpress Install, download [HookPress](https://wordpress.org/plugins/hookpress/).  Then you're going to want to make a webhook for the following actions: `save_post`, `delete_post`, `edit_post`, `publish_post`, `publish_page`.
