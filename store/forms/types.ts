export interface CollectionState {
    collectionName: string;
    collectionTags: string[];
}

export interface SetCollectionNameAction {
    type: ActionTypes.SET_COLLECTION_NAME;
    payload: {
        collectionName: string;
    };
}
export interface SetCollectionTagsAction {
    type: ActionTypes.SET_COLLECTION_TAGS;
    payload: {
        collectionTags: string[];
    };
}

export type CollectionActionTypes =
    | SetCollectionNameAction
    | SetCollectionTagsAction;

export enum ActionTypes {
    SET_COLLECTION_NAME,
    SET_COLLECTION_TAGS,
}
