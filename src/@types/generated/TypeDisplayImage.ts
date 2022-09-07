import type * as Contentful from "contentful";

export interface TypeDisplayImageFields {
    title: Contentful.EntryFields.Symbol;
    author: Contentful.EntryFields.Symbol;
    image: Contentful.Asset;
    createdAt: Contentful.EntryFields.Date;
}

export type TypeDisplayImage = Contentful.Entry<TypeDisplayImageFields>;
