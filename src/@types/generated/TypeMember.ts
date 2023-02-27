import type { Asset, Entry, EntryFields } from "contentful";

export type TypeMemberFields = {
    name: EntryFields.Symbol;
    email?: EntryFields.Symbol;
    title?: EntryFields.Symbol;
    isCurrentLeadership: EntryFields.Boolean;
    isOld: EntryFields.Boolean;
    image?: Asset;
}

export type TypeMember = Entry<TypeMemberFields>;
