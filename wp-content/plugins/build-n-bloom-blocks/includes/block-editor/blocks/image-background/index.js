import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls, InnerBlocks } from '@wordpress/block-editor';
import { PanelBody, PanelRow, SelectControl, Button, ButtonGroup, ColorPalette, RangeControl, ToggleControl } from '@wordpress/components';
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
        ['core/group', { className: 'content-center-container' }, [
			['core/group', { className: 'content-center' }, [
				['core/heading', { level: 1, placeholder: 'Main large heading'}],
				['core/heading', { level: 2, placeholder: 'Subheading'}],
				['core/button'],
			]]
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
	function onOpacityColourChange( newColour ) {
        setAttributes( { opacityColour: newColour } )
	}
	function onChangeOpacityPercent( newPercentage ) {
		setAttributes( { backgroundOpacityPercent: newPercentage } );
	}

	return (
		<div {...useBlockProps()}>
		<InspectorControls style={ { marginBottom: '40px'} }>
			<PanelBody title={'Image Container Settings'}>
				<RangeControl
					label="Background screen size"
					value={ attributes.containerHeight }
					onChange={ onSetContainerHeight }
					min={5}
					max={100}
					step={5}/>
				<ToggleControl
					label="Padding top and bottom (3rem)"
					checked={ attributes.addPadding }
					onChange={ onSetPadding }
				/>
				<SelectControl
					label="White or Black opacity"
					value={ attributes.opacityColour }
					options={[
						{ label: 'White', value: 'white'},
						{ label: 'Black', value: 'black' }
					]}
					onChange={ onOpacityColourChange }
				/>
				<RangeControl
					label="Opacity"
					value={ attributes.backgroundOpacityPercent }
					onChange={ onChangeOpacityPercent }
					min={0}
					max={100}
					step={5}/>
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