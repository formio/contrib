import baseEditForm from 'formiojs/components/_classes/component/Component.form.js';
import RatingEditDisplay from "./editForm/Rating.edit.display.js";
export default function (...extend){
    return baseEditForm([
        {
            key: 'data',
            ignore: true,
        },
        {
            key: 'display',
            components: RatingEditDisplay
        },
        {
            key: 'validation',
            ignore: true
        }
    ], ... extend)
}
