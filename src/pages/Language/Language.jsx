import React from "react";

import { useTranslation } from "react-i18next";
import startOfMonth from "date-fns/startOfMonth";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function Language() {
	const { t, i18n } = useTranslation();

	const changeLanguage = (lng) => {
		i18n.changeLanguage(lng);
	};

	// The current date
	const date = new Date();

	return (
		<div className="App">
		   <Header />
		   <div className="mt-5 mb-5">
		   <div id="google_translate_element">aaaa</div>
			<h1>{t("welcome")}</h1>
			{t("selectLanguage")}{" "}
			<select onChange={(e) => changeLanguage(e.target.value)}>
				<option value="en">{t("language.en")}</option>
				<option value="nl">{t("language.nl")}</option>
			</select>
			<hr />
			<p>{t("dates.fullDate", { date })}</p>
			<p>{t("dates.localisedDate", { date })}</p>
			<p>{t("dates.weekDay", { date })}</p>
			<p>{t("dates.postedOn", { date: startOfMonth(date) })}</p>
			</div>
			<Footer />
		</div>
	);
}
