/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./includes/block-editor/blocks/image-background/index.js":
/*!****************************************************************!*\
  !*** ./includes/block-editor/blocks/image-background/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.scss */ "./includes/block-editor/blocks/image-background/style.scss");
/* harmony import */ var _block_editor_group_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../block-editor-group.scss */ "./includes/block-editor/block-editor-group.scss");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./editor.scss */ "./includes/block-editor/blocks/image-background/editor.scss");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./save */ "./includes/block-editor/blocks/image-background/save.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./block.json */ "./includes/block-editor/blocks/image-background/block.json");










/**
 * Internal dependencies
 */


const {
  name,
  attributes,
  ...settings
} = _block_json__WEBPACK_IMPORTED_MODULE_9__;

/** TO DO: Add image 
 * Add video text location (centre, bottom)
*/

// inner content settings
const ALLLOWED_BLOCKS = ['core/group'];
const BLOCK_TEMPLATE = [['core/group', {}, [['core/group', {
  className: 'image-background-content'
}, [['core/group', {
  className: 'content-center-container'
}, [['core/group', {
  className: 'content-center'
}, [['core/heading', {
  level: 1,
  placeholder: 'Main heading...'
}], ['core/heading', {
  level: 2,
  placeholder: 'Subheading...'
}], ['core/button']]]]]]]]]];
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)(name, {
  ...settings,
  edit: ({
    attributes,
    setAttributes
  }) => {
    // custom functions
    function onSetContainerHeight(containerHeightValue) {
      setAttributes({
        containerHeight: containerHeightValue
      });
    }
    function onSetMobileContainerHeight(mobileContainerHeightValue) {
      setAttributes({
        mobileHeight: mobileContainerHeightValue
      });
    }
    function onSetTopPadding(paddingTopValue) {
      setAttributes({
        paddingTop: paddingTopValue
      });
    }
    function onSetBottomPadding(paddingBottomValue) {
      setAttributes({
        paddingBottom: paddingBottomValue
      });
    }
    function onOpacityColourChange(newColour) {
      setAttributes({
        opacityColour: newColour
      });
    }
    function onChangeOpacityPercent(newPercentage) {
      setAttributes({
        backgroundOpacityPercent: newPercentage
      });
    }
    function onChangeDesktopImagePosition(newDesktopPosition) {
      setAttributes({
        desktopImagePosition: newDesktopPosition
      });
    }
    function onChangeMobileImagePosition(newMobilePosition) {
      setAttributes({
        mobileImagePosition: newMobilePosition
      });
    }
    function onChangeDesktopContentPosition(newDesktopContentPosition) {
      setAttributes({
        desktopContentPosition: newDesktopContentPosition
      });
    }
    function onChangeMobileContentPosition(newMobileContentPosition) {
      setAttributes({
        mobileContentPosition: newMobileContentPosition
      });
    }
    function onSelectDesktopMedia(newImage) {
      setAttributes({
        desktopImageId: newImage.id,
        desktopImageTitle: newImage.title,
        desktopImageUrl: newImage.url
      });
    }
    function removeDesktopMedia() {
      setAttributes({
        desktopImageId: 0,
        desktopImageTitle: "",
        desktopImageUrl: ""
      });
    }
    function onSelectMobileMedia(newImage) {
      setAttributes({
        mobileImageId: newImage.id,
        mobileImageTitle: newImage.title,
        mobileImageUrl: newImage.url
      });
    }
    function removeMobileMedia() {
      setAttributes({
        mobileImageId: 0,
        mobileImageTitle: "",
        mobileImageUrl: ""
      });
    }
    const blockStyle = {
      backgroundImage: attributes.desktopImageUrl != '' ? 'url("' + attributes.desktopImageUrl + '")' : 'none'
    };
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps)(), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, {
      group: "position"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "full-width-control-wrapper"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      class: "custom-label"
    }, "Desktop background image"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("em", null, attributes.desktopImageTitle)), attributes.desktopImageId == 0 && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.MediaUpload, {
      title: "Select desktop background",
      value: attributes.desktopImageId,
      onSelect: onSelectDesktopMedia,
      allowedTypes: ['image', 'video'],
      render: ({
        open
      }) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
        onClick: open,
        variant: "primary",
        isLarge: true
      }, attributes.desktopImageId == 0 && (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Choose an image', 'awp'))
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      class: "flex-container"
    }, attributes.desktopImageId != 0 && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.MediaUpload, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Replace image', 'awp'),
      value: attributes.desktopImageId,
      onSelect: onSelectDesktopMedia,
      allowedTypes: ['image', 'video'],
      render: ({
        open
      }) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
        className: "flex-item",
        onClick: open,
        variant: "secondary",
        isLarge: true
      }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Replace', 'awp'))
    })), attributes.desktopImageId != 0 && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
      className: "flex-item",
      onClick: removeDesktopMedia,
      variant: "secondary",
      isDestructive: true
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Remove', 'awp'))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "full-width-control-wrapper"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      class: "custom-label"
    }, "Mobile background image"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("em", null, attributes.mobileImageTitle)), attributes.mobileImageId == 0 && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.MediaUpload, {
      title: "Select mobile background",
      value: attributes.mobileImageId,
      onSelect: onSelectMobileMedia,
      allowedTypes: ['image', 'video'],
      render: ({
        open
      }) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
        onClick: open,
        variant: "primary",
        isLarge: true
      }, attributes.mobileImageId == 0 && (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Choose an image', 'awp'))
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      class: "flex-container"
    }, attributes.mobileImageId != 0 && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.MediaUpload, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Replace image', 'awp'),
      value: attributes.mobileImageId,
      onSelect: onSelectMobileMedia,
      allowedTypes: ['image', 'video'],
      render: ({
        open
      }) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
        className: "flex-item",
        onClick: open,
        variant: "secondary",
        isLarge: true
      }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Replace', 'awp'))
    })), attributes.mobileImageId != 0 && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
      className: "flex-item",
      onClick: removeMobileMedia,
      variant: "secondary",
      isDestructive: true
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Remove', 'awp'))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "full-width-control-wrapper"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
      label: "Padding top (rem)",
      value: attributes.paddingTop,
      onChange: onSetTopPadding,
      min: 0,
      max: 5,
      step: 1
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "full-width-control-wrapper"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
      label: "Padding bottom (rem)",
      value: attributes.paddingBottom,
      onChange: onSetBottomPadding,
      min: 0,
      max: 5,
      step: 1
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "full-width-control-wrapper"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
      label: "Image postition (desktop)",
      value: attributes.desktopImagePosition,
      options: [{
        label: 'Top',
        value: 'top'
      }, {
        label: 'Middle',
        value: 'middle'
      }, {
        label: 'Bottom',
        value: 'bottom'
      }],
      onChange: onChangeDesktopImagePosition
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "full-width-control-wrapper"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
      label: "Image postition (mobile)",
      value: attributes.mobileImagePosition,
      options: [{
        label: 'Top',
        value: 'top'
      }, {
        label: 'Middle',
        value: 'middle'
      }, {
        label: 'Bottom',
        value: 'bottom'
      }],
      onChange: onChangeMobileImagePosition
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "full-width-control-wrapper"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
      label: "Content postition (desktop)",
      value: attributes.desktopContentPosition,
      options: [{
        label: 'Top',
        value: 'top'
      }, {
        label: 'Middle',
        value: 'middle'
      }, {
        label: 'Bottom',
        value: 'bottom'
      }],
      onChange: onChangeDesktopContentPosition
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "full-width-control-wrapper"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
      label: "Content postition (mobile)",
      value: attributes.mobileContentPosition,
      options: [{
        label: 'Top',
        value: 'top'
      }, {
        label: 'Middle',
        value: 'middle'
      }, {
        label: 'Bottom',
        value: 'bottom'
      }],
      onChange: onChangeMobileContentPosition
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, {
      group: "color"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "full-width-control-wrapper"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
      label: "Select opacity colour",
      value: attributes.opacityColour,
      options: [{
        label: 'White',
        value: 'white'
      }, {
        label: 'Black',
        value: 'black'
      }],
      onChange: onOpacityColourChange
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "full-width-control-wrapper"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
      label: "Opacity %",
      value: attributes.backgroundOpacityPercent,
      onChange: onChangeOpacityPercent,
      min: 0,
      max: 100,
      step: 5
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, {
      group: "dimensions"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "full-width-control-wrapper"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
      label: "Desktop height (%)",
      value: attributes.containerHeight,
      onChange: onSetContainerHeight,
      min: 5,
      max: 100,
      step: 5
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "full-width-control-wrapper"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
      label: "Mobile height (%)",
      value: attributes.mobileHeight,
      onChange: onSetMobileContainerHeight,
      min: 5,
      max: 100,
      step: 5
    })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      class: "image-background-block custom-block",
      "data-mobile-container-height": attributes.mobileHeight,
      "data-top-padding": attributes.paddingTop,
      "data-bottom-padding": attributes.paddingBottom,
      "data-mobile-image-position": attributes.mobileImagePosition,
      "data-desktop-content-position": attributes.desktopContentPosition,
      "data-mobile-content-position": attributes.mobileContentPosition
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: "https://buildnbloom.co.uk/wp-content/uploads/2023/08/TLF-Image-Button.png"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      class: "background-image",
      style: blockStyle,
      "data-container-height": attributes.containerHeight,
      "data-desktop-image-position": attributes.desktopImagePosition
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      class: "image-overlay",
      "data-background-opacity": attributes.opacityColour,
      "data-opacity-percentage": attributes.backgroundOpacityPercent
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InnerBlocks, {
      allowedBlocks: ALLLOWED_BLOCKS,
      template: BLOCK_TEMPLATE,
      templateLock: "all",
      templateInsertUpdatesSelection: false,
      renderAppender: _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InnerBlocks.DefaultBlockAppender
    }))));
  },
  save: _save__WEBPACK_IMPORTED_MODULE_8__["default"]
});

/***/ }),

/***/ "./includes/block-editor/blocks/image-background/save.js":
/*!***************************************************************!*\
  !*** ./includes/block-editor/blocks/image-background/save.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block.json */ "./includes/block-editor/blocks/image-background/block.json");





const {
  name,
  attributes
} = _block_json__WEBPACK_IMPORTED_MODULE_4__;
function displayVideo(imageUrl) {
  if (imageUrl.endsWith('.mp4') || imageUrl.endsWith('.mov') || imageUrl.endsWith('.avi') || imageUrl.endsWith('.wmv') || imageUrl.endsWith('.avchd') || imageUrl.endsWith('.webm') || imageUrl.endsWith('.flv')) {
    return "";
  }
  return "display: none";
}
function save({
  attributes
}) {
  const blockStyle = {
    backgroundImage: attributes.desktopImageUrl != '' ? 'url("' + attributes.desktopImageUrl + '")' : 'none'
  };
  const mobileBlockStyle = {
    backgroundImage: attributes.mobileImageUrl != '' ? 'url("' + attributes.mobileImageUrl + '")' : 'none'
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps.save(), {
    "data-class": "user-display",
    "data-desktop-content-position": attributes.desktopContentPosition,
    "data-mobile-content-position": attributes.mobileContentPosition
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    class: "background-image",
    style: blockStyle,
    "data-container-height": attributes.containerHeight,
    "data-desktop-image-position": attributes.desktopImagePosition
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("video", {
    autoplay: true,
    muted: true,
    loop: true,
    style: displayVideo(attributes.desktopImageUrl)
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("source", {
    src: attributes.desktopImageUrl
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    class: "image-overlay",
    "data-background-opacity": attributes.opacityColour,
    "data-opacity-percentage": attributes.backgroundOpacityPercent,
    "data-top-padding": attributes.paddingTop,
    "data-bottom-padding": attributes.paddingBottom
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InnerBlocks.Content, null)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    class: "mobile-background-image",
    style: mobileBlockStyle,
    "data-mobile-container-height": attributes.mobileHeight,
    "data-mobile-image-position": attributes.mobileImagePosition
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("video", {
    autoplay: true,
    muted: true,
    loop: true,
    style: displayVideo(attributes.mobileImageUrl)
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("source", {
    src: attributes.mobileImageUrl
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    class: "image-overlay",
    "data-background-opacity": attributes.opacityColour,
    "data-opacity-percentage": attributes.backgroundOpacityPercent,
    "data-top-padding": attributes.paddingTop,
    "data-bottom-padding": attributes.paddingBottom
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InnerBlocks.Content, null)));
}

/***/ }),

/***/ "./includes/block-editor/block-editor-group.scss":
/*!*******************************************************!*\
  !*** ./includes/block-editor/block-editor-group.scss ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./includes/block-editor/blocks/image-background/editor.scss":
/*!*******************************************************************!*\
  !*** ./includes/block-editor/blocks/image-background/editor.scss ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./includes/block-editor/blocks/image-background/style.scss":
/*!******************************************************************!*\
  !*** ./includes/block-editor/blocks/image-background/style.scss ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _extends)
/* harmony export */ });
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./includes/block-editor/blocks/image-background/block.json":
/*!******************************************************************!*\
  !*** ./includes/block-editor/blocks/image-background/block.json ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"apiVersion":2,"name":"build-n-bloom-blocks/image-background","version":"0.1.0","title":"Image Background","category":"buildnbloom","icon":"format-image","description":"A full width image as background with an optional heading and button displayed on top.","supports":{"html":false},"attributes":{"containerHeight":{"type":"number","default":25},"mobileHeight":{"type":"number","default":25},"paddingTop":{"type":"number","default":3},"paddingBottom":{"type":"number","default":3},"opacityColour":{"type":"string","default":"white"},"backgroundOpacityPercent":{"type":"number","default":50},"desktopImagePosition":{"type":"string","default":"middle"},"mobileImagePosition":{"type":"string","default":"middle"},"desktopContentPosition":{"type":"string","default":"middle"},"mobileContentPosition":{"type":"string","default":"middle"},"desktopImageId":{"type":"number","default":0},"desktopImageUrl":{"type":"string","default":""},"desktopImageTitle":{"type":"string","default":""},"mobileImageId":{"type":"number","default":0},"mobileImageUrl":{"type":"string","default":""},"mobileImageTitle":{"type":"string","default":""}},"textdomain":"multiple-blocks","editorScript":"file:../../../../build/image-background.js","editorStyle":"file:../../../../build/image-background.css","style":"file:../../../../build/style-image-background.css"}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"image-background": 0,
/******/ 			"style-image-background": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunkbuild_n_bloom_blocks"] = globalThis["webpackChunkbuild_n_bloom_blocks"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["style-image-background"], () => (__webpack_require__("./includes/block-editor/blocks/image-background/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=image-background.js.map