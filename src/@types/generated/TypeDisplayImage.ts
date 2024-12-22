import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeDisplayImageFields {
    title: EntryFieldTypes.Symbol;
    author: EntryFieldTypes.Symbol;
    image: EntryFieldTypes.AssetLink;
    createdAt: EntryFieldTypes.Date;
}

export type TypeDisplayImageSkeleton = EntrySkeletonType<TypeDisplayImageFields, "displayImage">;
export type TypeDisplayImage<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeDisplayImageSkeleton, Modifiers, Locales>;
export type TypeDisplayImageWithoutLinkResolutionResponse = TypeDisplayImage<"WITHOUT_LINK_RESOLUTION">;
export type TypeDisplayImageWithoutUnresolvableLinksResponse = TypeDisplayImage<"WITHOUT_UNRESOLVABLE_LINKS">;
export type TypeDisplayImageWithAllLocalesResponse<Locales extends LocaleCode = LocaleCode> = TypeDisplayImage<"WITH_ALL_LOCALES", Locales>;
export type TypeDisplayImageWithAllLocalesAndWithoutLinkResolutionResponse<Locales extends LocaleCode = LocaleCode> = TypeDisplayImage<"WITHOUT_LINK_RESOLUTION" | "WITH_ALL_LOCALES", Locales>;
export type TypeDisplayImageWithAllLocalesAndWithoutUnresolvableLinksResponse<Locales extends LocaleCode = LocaleCode> = TypeDisplayImage<"WITHOUT_UNRESOLVABLE_LINKS" | "WITH_ALL_LOCALES", Locales>;
