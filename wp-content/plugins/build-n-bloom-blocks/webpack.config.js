const defaultConfig = require('@wordpress/scripts/config/webpack.config');

module.exports = {
	...defaultConfig,
	entry: {
		'image-background': './includes/block-editor/blocks/image-background',
		'block-two': './includes/block-editor/blocks/block-two',
		'block-three': './includes/block-editor/blocks/block-three',
	},
};