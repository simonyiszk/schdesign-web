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
import Image from "next/image";

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
			<Box display="flex" gap="0.5rem" flexDirection="column">
				{Object.entries(projectTypeValues).map((cat) => {
					const [title, items] = cat;
					return (
						<Box key={title}>
							<Typography align="left" marginBottom="0.5rem">
								{title}
							</Typography>
							<Box
								display="grid"
								gridTemplateColumns={[
									"repeat(3,1fr)",
									"repeat(auto-fit,  130px)",
								]}
								flexDirection="column"
								gap={1}
							>
								{items.map((e) => (
									<CustomChip key={e} label={e} toggleChip={toggleChip} />
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
				style={{ margin: "1rem 0" }}
				InputProps={{
					inputProps: {
						min: moment().add(1, "days").format("YYYY-MM-DD"),
						max: moment().add(6, "month").format("YYYY-MM-DD"),
					},
				}}
			/>

			{formik.values.estimatedDeadline ===
				moment().add(1, "days").format("YYYY-MM-DD") && (
				<Box width="100%">
					<Typography>Szóval holnapra kéne, mi?</Typography>
					<Box position="relative" width="100%" height="400px">
						<Image
							layout="fill"
							objectFit="cover"
							src="/assets/images/mad_gif.webp"
						/>
					</Box>
				</Box>
			)}

			<Button type="submit" variant="text">
				Küldés
			</Button>
		</form>
	);
}
