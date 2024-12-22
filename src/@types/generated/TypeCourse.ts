import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeCourseFields {
    order: EntryFieldTypes.Integer;
    title: EntryFieldTypes.Symbol;
    description?: EntryFieldTypes.Text;
    date?: EntryFieldTypes.Date;
    length?: EntryFieldTypes.Integer;
    location?: EntryFieldTypes.Symbol;
    image?: EntryFieldTypes.AssetLink;
    content?: EntryFieldTypes.Text;
}

export type TypeCourseSkeleton = EntrySkeletonType<TypeCourseFields, "course">;
export type TypeCourse<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeCourseSkeleton, Modifiers, Locales>;
export type TypeCourseWithoutLinkResolutionResponse = TypeCourse<"WITHOUT_LINK_RESOLUTION">;
export type TypeCourseWithoutUnresolvableLinksResponse = TypeCourse<"WITHOUT_UNRESOLVABLE_LINKS">;
export type TypeCourseWithAllLocalesResponse<Locales extends LocaleCode = LocaleCode> = TypeCourse<"WITH_ALL_LOCALES", Locales>;
export type TypeCourseWithAllLocalesAndWithoutLinkResolutionResponse<Locales extends LocaleCode = LocaleCode> = TypeCourse<"WITHOUT_LINK_RESOLUTION" | "WITH_ALL_LOCALES", Locales>;
export type TypeCourseWithAllLocalesAndWithoutUnresolvableLinksResponse<Locales extends LocaleCode = LocaleCode> = TypeCourse<"WITHOUT_UNRESOLVABLE_LINKS" | "WITH_ALL_LOCALES", Locales>;
