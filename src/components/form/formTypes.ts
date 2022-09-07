import * as Yup from "yup";

import divisionProjects from "@/data/divisionProjects.json";

const projectTypeValues = {
	web: [...new Set(divisionProjects.web)] as const,
	"3d": [...new Set(divisionProjects["3d"])] as const,
	grafika: [...new Set(divisionProjects.grafika)] as const,
};

type WebProjectType = typeof projectTypeValues.web[number];
type ThreeDProjectType = typeof projectTypeValues["3d"][number];
type GrafikaProjectType = typeof projectTypeValues.grafika[number];
type DivisionProjectTypeUnion =
	| WebProjectType
	| ThreeDProjectType
	| GrafikaProjectType
	| "egyéb";

// edit this first
type FormValuesType = {
	name: string;
	email: string;
	group: string;
	message: string;
	isFromBME: string | null;
	isFromSimonyi: string | null;
	projectType: DivisionProjectTypeUnion[];
	estimatedDeadline: string | null;
};

const validationSchema: Yup.SchemaOf<FormValuesType> = Yup.object({
	name: Yup.string()
		.required("Kötelező kitölteni")
		.min(3, "Legalább 3 karakter hosszú legyen"),
	email: Yup.string()
		.email("Érvénytelen email cím")
		.required("Kötelező kitölteni"),
	group: Yup.string()
		.required("Kötelező kitölteni")
		.min(2, "Legalább 2 karakter hosszú legyen"),
	message: Yup.string()
		.required("Kötelező kitölteni")
		.min(10, "Legalább 10 karakter hosszú legyen")
		.max(800, "Legfeljebb 800 karakter hosszú lehet"),
	isFromBME: Yup.string().required("Kötelező kitölteni").oneOf(["yes", "no"]),
	isFromSimonyi: Yup.string()
		.required("Kötelező kitölteni")
		.oneOf(["yes", "no"]),
	projectType: Yup.array(),
	estimatedDeadline: Yup.string().required("Kötelező kitölteni"),
});

const initialValues: FormValuesType = {
	name: "",
	email: "",
	group: "",
	message: "",
	isFromBME: null,
	isFromSimonyi: null,
	projectType: [],
	estimatedDeadline: null,
};

type TemplatableFieldsType = {
	name: keyof FormValuesType;
	label: string;
	multiline?: boolean;
};

export type {
	DivisionProjectTypeUnion,
	FormValuesType,
	TemplatableFieldsType,
	ThreeDProjectType,
	WebProjectType,
};

export { initialValues, projectTypeValues, validationSchema };
