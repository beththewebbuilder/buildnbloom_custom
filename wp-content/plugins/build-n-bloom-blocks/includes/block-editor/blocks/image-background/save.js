import { __ } from '@wordpress/i18n';
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

export default function save({attributes}) {
	const { containerHeight, addPadding } = attributes;

	return (
		<div {...useBlockProps.save()} data-class={"image-background" + (attributes.addPadding ? " background-top-bottom-padding" : "")} data-container-height={attributes.containerHeight}>
			<InnerBlocks.Content />
		</div>
	);
}