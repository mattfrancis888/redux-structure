import { ActionTypes } from "./types";
import { store } from "..";

export function setCollectionName(collectionName: string) {
    return {
        type: ActionTypes.SET_COLLECTION_NAME,
        payload: {
            collectionName,
        },
    };
}

export function setTags(collectionTags: string[]) {
    return {
        type: ActionTypes.SET_COLLECTION_TAGS,
        payload: {
            collectionTags,
        },
    };
}
