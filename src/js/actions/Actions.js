import * as ActionConstants from "./ActionConstants";

export function increment(id) {
    return{
        type : ActionConstants.QUANTITY_INCREASES,
        id
    }
}

export function decrement(id){
    return{
        type : ActionConstants.QUANTITY_DECREASED,
        id
    }
}