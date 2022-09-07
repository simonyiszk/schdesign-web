import type * as Contentful from "contentful";

export interface TypeMemberFields {
    name: Contentful.EntryFields.Symbol;
    email?: Contentful.EntryFields.Symbol;
    title?: Contentful.EntryFields.Symbol;
    isCurrentLeadership: Contentful.EntryFields.Boolean;
    isOld: Contentful.EntryFields.Boolean;
    image?: Contentful.Asset;
}

export type TypeMember = Contentful.Entry<TypeMemberFields>;
