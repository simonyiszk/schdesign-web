import type { Asset, Entry, EntryFields } from "contentful";

export type TypeDisplayImageFields = {
    title: EntryFields.Symbol;
    author: EntryFields.Symbol;
    image: Asset;
    createdAt: EntryFields.Date;
}

export type TypeDisplayImage = Entry<TypeDisplayImageFields>;
