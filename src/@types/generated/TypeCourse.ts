import type { Asset, Entry, EntryFields } from "contentful";

export type TypeCourseFields = {
    order: EntryFields.Integer;
    title: EntryFields.Symbol;
    description?: EntryFields.Text;
    date?: EntryFields.Date;
    length?: EntryFields.Integer;
    location?: EntryFields.Symbol;
    image?: Asset;
    content?: EntryFields.Text;
}

export type TypeCourse = Entry<TypeCourseFields>;
