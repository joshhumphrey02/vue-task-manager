interface IOptions {
	weekday: "short" | "long" | "narrow" | undefined;
	day: "2-digit" | "numeric" | undefined;
	month: "short" | "long" | "narrow" | undefined;
	year: "2-digit" | "numeric" | undefined;
}

export function FormatDate(date: Date): string {
	const options: IOptions = {
		weekday: "short",
		day: "2-digit",
		month: "long",
		year: "numeric",
	};
	const formatter = new Intl.DateTimeFormat("en-US", options);
	const parts = formatter.formatToParts(date);

	const day = parts.find((part) => part.type === "day")?.value;
	const month = parts.find((part) => part.type === "month")?.value;
	const year = parts.find((part) => part.type === "year")?.value;
	const weekday = parts.find((part) => part.type === "weekday")?.value;

	return `${weekday}, ${day} ${month} ${year}`;
}

export function GetTimeOfDay(): string {
	const hour = new Date().getHours();
	if (hour >= 5 && hour < 12) {
		return "morning";
	} else if (hour >= 12 && hour < 18) {
		return "afternoon";
	} else {
		return "evening";
	}
}
