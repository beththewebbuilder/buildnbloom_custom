
# Build'n'Bloom Block Plugins

This is a theme for designing custom gutenberg blocks for WordPress website to ease site creation.  It contains the following:

#### Image background

## Getting Started

When developing on this theme for the first time, follow these steps:

- Download the latest version of Wordpress from [WordPress.org](https://wordpress.org/download/)
- Clone this repo to the Mamp htdocs file inside the `wp-content` folder. This repo doesn't contain all the other WordPress files that are required for running
- Setup the database in the `wp-config.php` file and create new database in Mamp phpMyAdmin
- Within the `build-n-bloom-blocks` folder, install npm. Node modules should be excluded from being uploaded to git - confirm in the `.gitignore` file.
- Run `npm run build` initially to get the correct build, followed by `npm run start`

## Building in the plugin

It was decided that all the blocks would be contained within the one plugin so there aren't multiple types and versions. To start developing, go into the `plugins` > `build-n-bloom-blocks` folder.

The `build` folder is what is produced by running the npm package command using wp-scripts. This does not need to be touched.

The `includes` folder is where the development starts. All the blocks are listed in `block-editor` > `blocks`. Each block folder contains:
- block.json
- index.js
- save.js
- style.scss


#### block.json

This file contains the settings for the block, including all the attributes.