import { dataset } from "./mockedData";

export function getByMatch(match) {
  return dataset.filter((item) =>
    item.toLowerCase().includes(match.toLowerCase())
  );
}
