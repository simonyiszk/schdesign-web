import { Chip } from "@mui/material";
import { useState } from "react";

import type { DivisionProjectTypeUnion } from "./formTypes";

export function CustomChip({
	e,
	toggleChip,
}: {
	e: DivisionProjectTypeUnion;
	toggleChip: (v: DivisionProjectTypeUnion) => void;
}) {
	const [selected, setSelected] = useState(false);
	return (
		<Chip
			clickable
			label={e}
			color={selected ? "primary" : "default"}
			variant={selected ? "filled" : "outlined"}
			key={e}
			onClick={() => {
				toggleChip(e);
				setSelected(!selected);
			}}
		/>
	);
}
