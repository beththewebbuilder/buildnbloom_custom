import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls, InnerBlocks } from '@wordpress/block-editor';
import { PanelBody, PanelRow, SelectControl, CheckboxControl } from '@wordpress/components';
import './style.scss';
import '../../block-editor-group.scss';

/**
 * Internal dependencies
 */
import save from './save';
import json from './block.json';

const { name, attributes, ...settings } = json;

// inner content settings
const ALLLOWED_BLOCKS = ['core/group'];
const BLOCK_TEMPLATE = [
  ['core/group', {}, [
    ['core/image', { className: 'no-padding' }],
    ['core/group', { className: 'image-background-content absolute-cover' }, [
        ['core/group', { className: 'content-center center-transform' }, [
            ['core/heading'],
            ['core/button'],
        ]]
    ]]
]]];

registerBlockType(name, {
	...settings,
	edit: ({ attributes, setAttributes }) => {

	// custom functions
	function onSetContainerHeight( containerHeightValue ) {
	setAttributes( { containerHeight: containerHeightValue } );
	}
	function onSetPadding( addPaddingValue ) {
	setAttributes( { addPadding: addPaddingValue } );
	}

	return (
		<div {...useBlockProps()}>
		<InspectorControls style={ { marginBottom: '40px'} }>
			<PanelBody title={'Image Container Settings'}>
				<PanelRow>
					<SelectControl
					label="Media size"
					value={ attributes.containerHeight }
					options={[
						{ label: 'Full screen', value: 'full-screen' },
						{ label: '3/4 height', value: 'three-quarter-height' },
						{ label: '1/2 height', value: 'half-height' },
						{ label: '1/4 height', value: 'one-quarter-height' },
					]}
					onChange={ onSetContainerHeight }
					/>
				</PanelRow>
				<PanelRow>
					<CheckboxControl
					label="Add gap/padding top and bottom"
					checked={ attributes.addPadding }
					onChange={ onSetPadding }/>
				</PanelRow>
			</PanelBody>
		</InspectorControls>,

        <div class="image-background-block custom-block">
          <img src="https://buildnbloom.co.uk/wp-content/uploads/2023/08/TLF-Image-Button.png"/>
          <InnerBlocks 
            allowedBlocks={ ALLLOWED_BLOCKS } 
            template={ BLOCK_TEMPLATE } 
            templateLock="all"
            templateInsertUpdatesSelection={false}
            renderAppender={ InnerBlocks.DefaultBlockAppender }
          />
        </div>
		</div>
	);
	},
	save
});