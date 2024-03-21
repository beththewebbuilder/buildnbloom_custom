const defaultConfig = require('@wordpress/scripts/config/webpack.config');

module.exports = {
	...defaultConfig,
	entry: {
		'image-background': './includes/block-editor/blocks/image-background',
		'youtube-video': './includes/block-editor/blocks/youtube-video',
		'block-two': './includes/block-editor/blocks/block-two',
	},
};