import {Formio} from "@formio/js";

const baseEditForm = Formio.Components.baseEditForm
import RatingEditDisplay from "./editForm/Rating.edit.display.js";
export default function (...extend){
    return baseEditForm([
        {
            key: 'display',
            components: RatingEditDisplay
        },
        {
            key: 'layout',
            ignore: true
        }
    ], ... extend)
}
