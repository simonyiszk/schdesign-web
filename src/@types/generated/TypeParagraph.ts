import type * as Contentful from "contentful";

export type TypeParagraphFields = {
    title: Contentful.EntryFields.Symbol;
    order: Contentful.EntryFields.Integer;
    content: Contentful.EntryFields.Text;
}

export type TypeParagraph = Contentful.Entry<TypeParagraphFields>;
