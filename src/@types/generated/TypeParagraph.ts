import type { Entry, EntryFields } from "contentful";

export type TypeParagraphFields = {
    title: EntryFields.Symbol;
    order: EntryFields.Integer;
    content: EntryFields.Text;
}

export type TypeParagraph = Entry<TypeParagraphFields>;
