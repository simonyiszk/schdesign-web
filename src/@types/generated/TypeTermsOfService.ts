import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeTermsOfServiceFields {
    content: EntryFieldTypes.Text;
}

export type TypeTermsOfServiceSkeleton = EntrySkeletonType<TypeTermsOfServiceFields, "termsOfService">;
export type TypeTermsOfService<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeTermsOfServiceSkeleton, Modifiers, Locales>;
export type TypeTermsOfServiceWithoutLinkResolutionResponse = TypeTermsOfService<"WITHOUT_LINK_RESOLUTION">;
export type TypeTermsOfServiceWithoutUnresolvableLinksResponse = TypeTermsOfService<"WITHOUT_UNRESOLVABLE_LINKS">;
export type TypeTermsOfServiceWithAllLocalesResponse<Locales extends LocaleCode = LocaleCode> = TypeTermsOfService<"WITH_ALL_LOCALES", Locales>;
export type TypeTermsOfServiceWithAllLocalesAndWithoutLinkResolutionResponse<Locales extends LocaleCode = LocaleCode> = TypeTermsOfService<"WITHOUT_LINK_RESOLUTION" | "WITH_ALL_LOCALES", Locales>;
export type TypeTermsOfServiceWithAllLocalesAndWithoutUnresolvableLinksResponse<Locales extends LocaleCode = LocaleCode> = TypeTermsOfService<"WITHOUT_UNRESOLVABLE_LINKS" | "WITH_ALL_LOCALES", Locales>;
