import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeMemberFields {
    name: EntryFieldTypes.Symbol;
    email?: EntryFieldTypes.Symbol;
    title?: EntryFieldTypes.Symbol;
    isCurrentLeadership: EntryFieldTypes.Boolean;
    isOld: EntryFieldTypes.Boolean;
    image?: EntryFieldTypes.AssetLink;
}

export type TypeMemberSkeleton = EntrySkeletonType<TypeMemberFields, "member">;
export type TypeMember<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeMemberSkeleton, Modifiers, Locales>;
export type TypeMemberWithoutLinkResolutionResponse = TypeMember<"WITHOUT_LINK_RESOLUTION">;
export type TypeMemberWithoutUnresolvableLinksResponse = TypeMember<"WITHOUT_UNRESOLVABLE_LINKS">;
export type TypeMemberWithAllLocalesResponse<Locales extends LocaleCode = LocaleCode> = TypeMember<"WITH_ALL_LOCALES", Locales>;
export type TypeMemberWithAllLocalesAndWithoutLinkResolutionResponse<Locales extends LocaleCode = LocaleCode> = TypeMember<"WITHOUT_LINK_RESOLUTION" | "WITH_ALL_LOCALES", Locales>;
export type TypeMemberWithAllLocalesAndWithoutUnresolvableLinksResponse<Locales extends LocaleCode = LocaleCode> = TypeMember<"WITHOUT_UNRESOLVABLE_LINKS" | "WITH_ALL_LOCALES", Locales>;
