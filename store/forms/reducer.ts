import { ActionTypes, CollectionActionTypes, CollectionState } from "./types";

const initialState: CollectionState = {
    collectionName: "",
    collectionTags: [""],
};

export function formsReducer(
    state = initialState,
    action: CollectionActionTypes
): CollectionState {
    switch (action.type) {
        case ActionTypes.SET_COLLECTION_NAME:
            return { ...state, collectionName: action.payload.collectionName };
        case ActionTypes.SET_COLLECTION_TAGS:
            return { ...state, collectionTags: action.payload.collectionTags };
        default:
            return state;
    }
}
