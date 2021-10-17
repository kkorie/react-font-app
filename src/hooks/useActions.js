import { useContext } from "react";
import AppStateContext from "../contexts/AppStateContext";

export default function useActions() {
  const { addFont } = useContext(AppStateContext);

  return { addFont };
}