import { useContext } from "react";
import AppStateContext from "../contexts/AppStateContext";

export default function useFonts() {
  const { fonts } = useContext(AppStateContext);

  return fonts
}