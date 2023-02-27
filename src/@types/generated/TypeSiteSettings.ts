import type { Entry, EntryFields } from "contentful";

export type TypeSiteSettingsFields = {
    showCourses?: EntryFields.Boolean;
}

export type TypeSiteSettings = Entry<TypeSiteSettingsFields>;
