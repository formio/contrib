export default [
    {
        type: 'number',
        key: 'numberOfIcons',
        label: 'Number of Icons',
        input: 'true',
        tooltip: "The number of icons displayed in the form"
    },
    {
        type: 'textfield',
        key: 'icon',
        label: 'Icon',
        input: 'true',
        tooltip: 'The bootstrap icon class that will go in the <i> tag'
    },
    {
        type: 'textfield',
        key: 'color',
        label: 'Color',
        input: 'true',
        tooltip: 'The color of the icons'
    },
    {
        type: 'textfield',
        key: 'iconSize',
        label: 'Icon Size',
        tooltip: 'The size of the icon'
    },
    {
        key: 'placeholder',
        ignore: true
    }
]
