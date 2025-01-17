export default [
    {
        type: 'select',
        key: 'iconType',
        label: 'Icon Type',
        data: {
            values: [
                {
                    label: "SVG",
                    value: "svg"
                },
                {
                    label: "Font Awesome Icon",
                    value: "fontAwesomeIcon"
                }
            ]
        }
    },
    {
        type: 'number',
        key: 'numOfIcons',
        label: 'Number of Icons',
        input: 'true',
        tooltip: "The number of icons displayed in the form"
    },
    {
        type: 'textfield',
        key: 'filledColor',
        label: 'Filled Color',
        input: 'true',
        tooltip: 'This is the color that will fill the icons when an icon is clicked'
    },
    {
        type: 'textfield',
        key: 'unfilledColor',
        label: 'UnFilled Color',
        input: 'true',
        tooltip: 'This is the color that the icons will be when not filled'
    },
    {
        type: 'textfield',
        key: 'iconHeight',
        label: 'Icon Height',
        input: 'true',
        tooltip: 'The amount of vertical space the icon will take'
    },
    {
        type: 'textfield',
        key: 'iconWidth',
        label: 'Icon Width',
        input: 'true',
        tooltip: 'The amount of horizontal space the icon will take'
    },
    {
        type: 'textarea',
        key: 'svgIcon',
        label: 'SVG Icon',
        input: true,
        tooltip: "Paste an svg tag that will be used as an icon",
        customConditional: "show = data.iconType === \"svg\";",
    },
    {

    },
    {
        type: 'textfield',
        key: 'fontAwesomeIcon',
        label: 'Font Awesome Icon',
        tooltip: 'Paste an i tag that will be used as an icon',
        customConditional: "show = data.iconType === \"fontAwesomeIcon\";"
    },
    {
        key: 'placeholder',
        ignore: true
    }
]
