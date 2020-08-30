import moment from "moment";

export const toHumanDuration = (due: Date) => moment.duration(moment(due).diff(moment())).humanize(true)

export const toDate = (date: string) => moment(date, "YYYY-MM-DD").toDate();

export const formatNumber = (amt: number) => new Intl.NumberFormat('default', {minimumFractionDigits: 2}).format(amt);
