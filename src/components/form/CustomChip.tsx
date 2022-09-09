import { Chip } from "@mui/material";
import { useState } from "react";

import type { DivisionProjectTypeUnion } from "./formTypes";

export function CustomChip({
	label,
	toggleChip,
}: {
	label: DivisionProjectTypeUnion;
	toggleChip: (v: DivisionProjectTypeUnion) => void;
}) {
	const [selected, setSelected] = useState(false);
	return (
		<Chip
			clickable
			label={label}
			color={selected ? "primary" : "default"}
			variant={selected ? "filled" : "outlined"}
			key={label}
			onClick={() => {
				toggleChip(label);
				setSelected(!selected);
			}}
		/>
	);
}
