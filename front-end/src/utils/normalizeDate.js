import { format, parseISO } from "date-fns";

export default function normalizeDate(date) {
  let dateNormalized = "";

  if (date && date !== "0000-00-00") {
    return format(parseISO(date), "yyyy-MM-dd");
  }

  return dateNormalized;
}
