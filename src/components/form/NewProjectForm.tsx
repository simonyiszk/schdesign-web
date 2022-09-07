import {
	Box,
	Button,
	Chip,
	FormControlLabel,
	FormLabel,
	Radio,
	RadioGroup,
	TextField,
} from "@mui/material";
import { useFormik } from "formik";

import {
	DivisionProjectTypeUnion,
	FormValuesType,
	initialValues,
	projectTypeValues,
	TemplatableFieldsType,
	validationSchema,
} from "./formTypes";

const templatableFields: TemplatableFieldsType[] = [
	{
		name: "name",
		label: "Név",
	},
	{
		name: "email",
		label: "Email cím",
	},
	{
		name: "group",
		label: "Kör / Cég / Kar neve",
	},
	{
		name: "message",
		label: "Üzenet",
		multiline: true,
	},
];

export function NewProjectForm() {
	const onSubmit = (values: FormValuesType) => {
		console.log(values);
	};

	const formik = useFormik({
		initialValues,
		validationSchema,
		onSubmit,
	});

	const toggleChip = (v: DivisionProjectTypeUnion) => {
		const arr = formik.values.projectType;
		const exists = arr.find((e) => v === e);

		const newArr = exists ? arr.filter((e) => e !== v) : [...arr, v];
		formik.setFieldValue("projectType", newArr);
	};

	console.log(formik.errors);

	return (
		<form onSubmit={formik.handleSubmit} className="flex flex-col gap-4">
			{templatableFields.map(({ name, label, multiline }) => (
				<TextField
					key={name}
					fullWidth
					id={name}
					name={name}
					label={label}
					multiline={multiline ?? false}
					rows={multiline ? 10 : 1}
					value={formik.values[name]}
					onChange={formik.handleChange}
					error={formik.touched[name] && Boolean(formik.errors[name])}
					helperText={formik.touched[name] && formik.errors[name]}
				/>
			))}
			<FormLabel>BME-hez köthető kör/cég/szervezet?</FormLabel>
			<RadioGroup row>
				<FormControlLabel
					name="isFromBME"
					label="Igen"
					value="yes"
					control={<Radio />}
				/>
				<FormControlLabel
					name="isFromBME"
					label="Nem"
					value="no"
					control={<Radio />}
				/>
			</RadioGroup>
			<FormLabel>Simonyi Szakkollégiumhoz köthető kör/cég/szervezet?</FormLabel>
			<RadioGroup row>
				<FormControlLabel
					name="isFromSimonyi"
					label="Igen"
					value="yes"
					control={<Radio />}
				/>
				<FormControlLabel
					name="isFromSimonyi"
					label="Nem"
					value="no"
					control={<Radio />}
				/>
			</RadioGroup>
			<FormLabel>Valami kérdés?</FormLabel>
			<Box
				display="grid"
				gridTemplateColumns="repeat( auto-fit, minmax(130px, 1fr) )"
				gap={1}
			>
				{[
					...new Set([
						...projectTypeValues["3d"],
						...projectTypeValues.web,
						...projectTypeValues.vector,
						...projectTypeValues.raster,
					] as DivisionProjectTypeUnion[]),
				]
					.sort((a, b) => a.localeCompare(b))
					.map((e) => (
						<Chip
							color={
								formik.values.projectType.find((x) => x === e)
									? "primary"
									: "default"
							}
							label={e}
							key={e}
							onClick={() => {
								toggleChip(e);
							}}
						/>
					))}
			</Box>
			<Button type="submit" variant="text">
				Küldés
			</Button>
		</form>
	);
}
