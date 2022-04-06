import * as yup from 'yup'

export const assetSchema = yup.object().shape({
	title: yup.string().required(),
	owners: yup.array().of(yup.number()).min(1).required(),
	inventors: yup.array().of(yup.number()).optional(),
	patent_numbers: yup.array().of(yup.string()).optional(),
	family_id: yup.string().required(),
	publication_date: yup.date().required(),
	priority_date: yup.date().required(),
	expiry_date: yup.date().required(),
	technology_types: yup.array().of(yup.number()).min(1).required(),
	status: yup.number().required(),
	workflow: yup.array().of(yup.number()).min(1).required(),
	abstract: yup.string().required(),
	description: yup.string().required(),
	claims: yup.string().required(),
})

export const assetEditSchema = yup.object().shape({
	status: yup.number().required(),
	technology_types: yup.array().of(yup.number()).min(1).required(),
	workflow: yup.array().of(yup.number()).min(1).required(),
})
