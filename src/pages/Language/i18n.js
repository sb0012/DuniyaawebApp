import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import resources from "./translation.json";

// import {
// 	format as formatDate,
// 	formatRelative,
// 	formatDistance,
// 	isDate
// } from "date-fns";
//import { en, nl } from "date-fns/locale";
const fallbackLng= ['en'];
// const locales = [ 'mr', 'en',];

//const locales = { en, nl };

i18n.use(initReactI18next) // passes i18n down to react-i18next
	.init({
		resources,
		lng: "en",

		// interpolation: {
			
		// 	escapeValue: false,

		// 	format: (value, format, lng) => {
		// 		if (isDate(value)) {
		// 			const locale = locales[lng];

		// 			if (format === "short")
		// 				return formatDate(value, "P", { locale });
		// 			if (format === "long")
		// 				return formatDate(value, "PPPP", { locale });
		// 			if (format === "relative")
		// 				return formatRelative(value, new Date(), { locale });
		// 			if (format === "ago")
		// 				return formatDistance(value, new Date(), {
		// 					locale,
		// 					addSuffix: true
		// 				});

		// 			return formatDate(value, format, { locale });
		// 		}

		// 		return value;
		// 	}
		// }
	});

export default i18n;
