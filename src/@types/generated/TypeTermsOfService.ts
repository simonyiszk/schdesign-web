import type * as Contentful from "contentful";

export type TypeTermsOfServiceFields = {
    content: Contentful.EntryFields.Text;
}

export type TypeTermsOfService = Contentful.Entry<TypeTermsOfServiceFields>;
