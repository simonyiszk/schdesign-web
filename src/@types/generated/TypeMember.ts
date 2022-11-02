import type * as Contentful from "contentful";

export type TypeMemberFields = {
    name: Contentful.EntryFields.Symbol;
    email?: Contentful.EntryFields.Symbol;
    title?: Contentful.EntryFields.Symbol;
    isCurrentLeadership: Contentful.EntryFields.Boolean;
    isOld: Contentful.EntryFields.Boolean;
    image?: Contentful.Asset;
}

export type TypeMember = Contentful.Entry<TypeMemberFields>;
