"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = [
    { key: 'optionsLabelPosition', ignore: true },
    { key: 'inline', ignore: true },
    {
        type: 'select',
        input: true,
        label: 'Max Columns (Wide)',
        key: 'cardColumns',
        tooltip: 'Max columns when container >= 600px.',
        weight: 40,
        defaultValue: 3,
        dataSrc: 'values',
        data: {
            values: [
                { label: '2 Columns', value: 2 },
                { label: '3 Columns', value: 3 },
                { label: '4 Columns', value: 4 },
            ],
        },
    },
    {
        type: 'select',
        input: true,
        label: 'Columns (Medium)',
        key: 'cardColumnsSmall',
        tooltip: 'Columns when container < 600px.',
        weight: 41,
        defaultValue: 2,
        dataSrc: 'values',
        data: {
            values: [
                { label: '1 Column', value: 1 },
                { label: '2 Columns', value: 2 },
                { label: '3 Columns', value: 3 },
            ],
        },
    },
    {
        type: 'select',
        input: true,
        label: 'Image Fit',
        key: 'imageFit',
        tooltip: 'How images fit within card area.',
        weight: 42,
        defaultValue: 'cover',
        dataSrc: 'values',
        data: {
            values: [
                { label: 'Cover (fill, crop if needed)', value: 'cover' },
                { label: 'Contain (show full image)', value: 'contain' },
            ],
        },
    },
];
