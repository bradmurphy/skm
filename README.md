# SKM | Scott Kendall Music

## Project Requirements

- [Gatsby](https://www.gatsbyjs.org/)
  - _plugins:_
    - [gatsby-plugin-react-helmet](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-react-helmet)
    - [gatsby-plugin-sharp](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-sharp)
    - [gatsby-plugin-typography](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-typography)
    - [gatsby-source-wordpress](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-source-wordpress)
    - [gatsby-transformer-sharp](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-transformer-sharp)
- [Netlify](https://www.netlify.com/)
- [nodejs](https://nodejs.org/en/)
- [React](https://reactjs.org/)
  - _plugins:_
    - [emotion](https://github.com/emotion-js/emotion)
    - [redux](https://github.com/reduxjs/redux)
    - [redux-devtools](https://github.com/reduxjs/redux-devtools)
    - [react-redux](https://github.com/reduxjs/react-redux)
    - [Typography.js](https://kyleamathews.github.io/typography.js/)
- [WordPress](https://wordpress.com/)
  - _plugins:_
    - [HookPress](https://wordpress.org/plugins/hookpress/)


## Installation

First, make sure the gatsby client is installed:

**`npm install -g gatsby-cli`**

Then install the project:

`npm install`

## Commands

| Command | Description |
| :--- | :--- |
| `gatsby develop` | Starts a hot-reloading development environment accessible at localhost:8000. |
| `gatsby build`   | Builds optimized production build, generating static HTML and per-route JavaScript code bundles. |
| `gatsby serve`   | Starts a local HTML server for testing your built site. |
| `gatsby --help`  | To see detailed documentation for the CLI commands. |

## Deploy

Gatsby is a static site generator.  In order for [WordPress](https://wordpress.com/) data to refresh once content is updated, I've used [Netlify](https://www.netlify.com/) to handle deployment.  It's a free service and pretty nice to use.  It does take a little set up in WordPress and Netlify to work, however.

1. In Netlify : **Deploy Settings** >  **Continious Deployment** > _Add a new build hook_.

2. In your [WordPress](https://wordpress.com/) backend, download [HookPress](https://wordpress.org/plugins/hookpress/).  Attach the new webhook to the following actions:

- `save_post`
- `delete_post`
- `edit_post`
- `publish_post`
- `publish_page`.

_Voila_:grey_exclamation:
