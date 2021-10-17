import { useContext } from "react";
import AppStateContext from "../contexts/AppStateContext";

export default function useSelect() {
  const { select } = useContext(AppStateContext);

  return select;
}