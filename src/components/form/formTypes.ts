import * as Yup from "yup";

const projectTypeValues = {
	web: ["UI/UX design", "webfejleszés"] as const,
	"3d": ["3D modellezés", "3D animáció"] as const,
	raster: ["raster grafika", "raster grafika"] as const,
	vector: ["vektor grafika", "plakát", "logó"] as const,
};

type WebProjectType = typeof projectTypeValues.web[number];
type ThreeDProjectType = typeof projectTypeValues["3d"][number];
type RasterProjectType = typeof projectTypeValues.raster[number];
type VectorProjectType = typeof projectTypeValues.vector[number];
type DivisionProjectTypeUnion =
	| WebProjectType
	| ThreeDProjectType
	| VectorProjectType
	| RasterProjectType
	| "egyéb";

// edit this first
type FormValuesType = {
	name: string;
	email: string;
	group: string;
	message: string;
	isFromBME: boolean | null;
	isFromSimonyi: boolean | null;
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
	group: Yup.string().required("Kötelező kitölteni"),
	message: Yup.string().required("Kötelező kitölteni"),
	isFromBME: Yup.boolean().required("Kötelező kitölteni"),
	isFromSimonyi: Yup.boolean().required("Kötelező kitölteni"),
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
	RasterProjectType,
	TemplatableFieldsType,
	ThreeDProjectType,
	VectorProjectType,
	WebProjectType,
};

export { initialValues, projectTypeValues, validationSchema };
