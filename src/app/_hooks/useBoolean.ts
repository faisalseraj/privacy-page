import { useState } from "react";

export const useBoolean = ()  => {
    const [state, setState] = useState(false);
    const on = () => setState(true);
    const off = () => setState(false);
    return [state, { on, off }] as const
}