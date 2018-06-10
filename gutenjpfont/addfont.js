

var el = wp.element.createElement,
    registerBlockType = wp.blocks.registerBlockType,
    RichText = wp.editor.RichText;

registerBlockType( 'gutenjpfont/noto', {
    title: 'Noto Sans Japanese フォント',

    icon: 'dashicons-editor-textcolor',

    category: 'layout',

    attributes: {
        content: {
            type: 'array',
            source: 'children',
            selector: 'p',
        }
    },

    edit: function( props ) {
        var content = props.attributes.content;

        function onChangeContent( newContent ) {
            props.setAttributes( { content: newContent } );
        }

        return el(
            RichText,
            {
                tagName: 'p',
                className: props.className,
                onChange: onChangeContent,
                value: content,
            }
        );
    },

    save: function( props ) {
        var content = props.attributes.content;

        return el( RichText.Content, {
            tagName: 'p',
            className: props.className,
            value: content
        } );
    },
} );
