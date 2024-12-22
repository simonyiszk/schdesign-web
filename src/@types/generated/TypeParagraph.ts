import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeParagraphFields {
    title: EntryFieldTypes.Symbol;
    order: EntryFieldTypes.Integer;
    content: EntryFieldTypes.Text;
}

export type TypeParagraphSkeleton = EntrySkeletonType<TypeParagraphFields, "paragraph">;
export type TypeParagraph<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeParagraphSkeleton, Modifiers, Locales>;
export type TypeParagraphWithoutLinkResolutionResponse = TypeParagraph<"WITHOUT_LINK_RESOLUTION">;
export type TypeParagraphWithoutUnresolvableLinksResponse = TypeParagraph<"WITHOUT_UNRESOLVABLE_LINKS">;
export type TypeParagraphWithAllLocalesResponse<Locales extends LocaleCode = LocaleCode> = TypeParagraph<"WITH_ALL_LOCALES", Locales>;
export type TypeParagraphWithAllLocalesAndWithoutLinkResolutionResponse<Locales extends LocaleCode = LocaleCode> = TypeParagraph<"WITHOUT_LINK_RESOLUTION" | "WITH_ALL_LOCALES", Locales>;
export type TypeParagraphWithAllLocalesAndWithoutUnresolvableLinksResponse<Locales extends LocaleCode = LocaleCode> = TypeParagraph<"WITHOUT_UNRESOLVABLE_LINKS" | "WITH_ALL_LOCALES", Locales>;
