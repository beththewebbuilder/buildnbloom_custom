import { __ } from '@wordpress/i18n';
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import json from './block.json';

const { name, attributes} = json;

export default function save({attributes}) {

	return (
		<div {...useBlockProps.save()} 
		data-class={"image-background"} 
		data-container-height={attributes.containerHeight} 
		data-background-opacity={attributes.opacityColour}
		data-top-bottom-padding={attributes.addPadding}
		data-opacity-percentage={attributes.backgroundOpacityPercent}>
			<InnerBlocks.Content/>
		</div>
	);
}