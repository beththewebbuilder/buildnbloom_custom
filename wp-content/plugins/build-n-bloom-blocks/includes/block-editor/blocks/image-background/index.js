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

/** TO DO: Add image 
 * Add image location (centre, top, bottom)
 * Add video text location (centre, bottom)
*/
 
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
	function onSetMobileContainerHeight( mobileContainerHeightValue ) {
		setAttributes( { mobileHeight: mobileContainerHeightValue } );
	}
	function onSetTopPadding( paddingTopValue ) {
		setAttributes( { paddingTop: paddingTopValue } );
	}
	function onSetBottomPadding( paddingBottomValue ) {
		setAttributes( { paddingBottom: paddingBottomValue } );
	}
	function onOpacityColourChange( newColour ) {
        setAttributes( { opacityColour: newColour } )
	}
	function onChangeOpacityPercent( newPercentage ) {
		setAttributes( { backgroundOpacityPercent: newPercentage } );
	}

	return (
		<div { ...useBlockProps() }>
			<InspectorControls group="position">
				<div className="full-width-control-wrapper">
					<RangeControl
						label="Padding top (rem)"
						value={ attributes.paddingTop }
						onChange={ onSetTopPadding }
						min={0}
						max={5}
						step={1} />
				</div>
				<div className="full-width-control-wrapper">
					<RangeControl
						label="Padding bottom (rem)"
						value={ attributes.paddingBottom }
						onChange={ onSetBottomPadding }
						min={0}
						max={5}
						step={1} />
				</div>
			</InspectorControls>
			<InspectorControls group="color">
				<div className="full-width-control-wrapper">
					<SelectControl
						label="Select opacity colour"
						value={ attributes.opacityColour }
						options={[
							{ label: 'White', value: 'white'},
							{ label: 'Black', value: 'black' }
						]}
						onChange={ onOpacityColourChange }/>
				</div>
				<div className="full-width-control-wrapper">
					<RangeControl
						label="Opacity %"
						value={ attributes.backgroundOpacityPercent }
						onChange={ onChangeOpacityPercent }
						min={0}
						max={100}
						step={5}/>
				</div>
			</InspectorControls>

			<InspectorControls group="dimensions">
				<div className="full-width-control-wrapper">
					<RangeControl
						label="Desktop height"
						value={ attributes.containerHeight }
						onChange={ onSetContainerHeight }
						min={5}
						max={100}
						step={5}/>
				</div>
				<div className="full-width-control-wrapper">
					<RangeControl
						label="Mobile height"
						value={ attributes.mobileHeight }
						onChange={ onSetMobileContainerHeight }
						min={5}
						max={100}
						step={5}/>
				</div>				
			</InspectorControls>
		
		{/* <InspectorControls style={ { marginBottom: '40px'} }>
			<PanelBody title={'Image Container Settings'}>
				
				
			</PanelBody>
		</InspectorControls>, */}

        <div class="image-background-block custom-block"
			data-container-height={attributes.containerHeight} 
			data-mobile-container-height={attributes.mobileHeight}
			data-background-opacity={attributes.opacityColour}
			data-top-padding={attributes.paddingTop}
			data-bottom-padding={attributes.paddingBottom}
			data-opacity-percentage={attributes.backgroundOpacityPercent}>
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