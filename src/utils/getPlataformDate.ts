import { addDays } from "date-fns";
import { Platform } from "react-native";

function getPlataformDate(date: Date) {
  if (Platform.OS === "ios") {
    return addDays(date, 1);
  } else {
    return date;
  }
}

export { getPlataformDate };
