import { ReactNode, createContext, useState } from "react"

export type LoaderContextProviderType = {
    children: ReactNode;
}

export type LoaderContextType = {
    isLoading: boolean,
    setIsLoading: (loading: boolean) => void;
}

export const LoaderContext = createContext({} as LoaderContextType)

export function LoaderContextProvider(props: LoaderContextProviderType) {
    const [isLoading, setIsLoading] = useState(false)

    return (
        <LoaderContext.Provider value={{ isLoading, setIsLoading }}>
            {props.children}
        </LoaderContext.Provider>
    )
}