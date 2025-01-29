export default function formatMoney(amount, currency = "BDT", locale = "en-US") {
    return new Intl.NumberFormat(locale, { style: "currency", currency }).format(amount);
}