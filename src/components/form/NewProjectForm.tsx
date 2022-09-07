import {
	Box,
	Button,
	FormControlLabel,
	FormLabel,
	Radio,
	RadioGroup,
	TextField,
	Typography,
} from "@mui/material";
import { useFormik } from "formik";
import moment from "moment";

import { CustomChip } from "./CustomChip";
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
					required
				/>
			))}
			<FormLabel>BME-hez köthető kör/cég/szervezet?</FormLabel>
			<RadioGroup row onChange={formik.handleChange}>
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
			<RadioGroup
				row
				onChange={formik.handleChange}
				name="isFromSimonyi"
				id="isFromSimonyi"
			>
				<FormControlLabel
					name="isFromSimonyi"
					label="Igen"
					value="yes"
					control={<Radio name="isFromSimonyi" />}
				/>
				<FormControlLabel
					name="isFromSimonyi"
					label="Nem"
					value="no"
					control={<Radio name="isFromSimonyi" />}
				/>
			</RadioGroup>
			<FormLabel>Miben tudunk segíteni nektek?</FormLabel>
			<Box
				display="grid"
				gridTemplateColumns={["repeat(1,1fr)", "repeat(3,1fr)"]}
				gap={1}
			>
				{Object.entries(projectTypeValues).map((cat) => {
					const [title, items] = cat;
					return (
						<Box>
							<Typography align="center" variant="h6">
								{title}
							</Typography>
							<Box
								display={["grid", "flex"]}
								gridTemplateColumns="repeat(2,1fr)"
								flexDirection="column"
								gap={1}
							>
								{items.map((e) => (
									<CustomChip e={e} toggleChip={toggleChip} />
								))}
							</Box>
						</Box>
					);
				})}
			</Box>

			<TextField
				id="estimatedDeadline"
				label="Várható határídő"
				name="estimatedDeadline"
				type="date"
				onChange={formik.handleChange}
				InputLabelProps={{
					shrink: true,
				}}
				InputProps={{
					inputProps: {
						min: moment().add(2, "days").format("YYYY-MM-DD"),
						max: moment().add(6, "month").format("YYYY-MM-DD"),
					},
				}}
			/>

			<Button type="submit" variant="text">
				Küldés
			</Button>
		</form>
	);
}
