export const formatCurrency = (amount: number, currency: string = 'en-US') =>
	new Intl.NumberFormat(currency, {
		style: 'currency',
		currency: 'USD',
	}).format(amount);

export const toBoolean = (str: string) => str.toLowerCase() === 'true';
