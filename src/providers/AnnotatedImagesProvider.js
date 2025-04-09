import { createContext, useContext, useReducer } from 'react';
import { annotatedImagesReducer, initialAnnotatedState } from '../store/annotatedImages.store';

const AnnotatedImagesContext = createContext();

export function AnnotatedImagesProvider({ children }) {
    const [state, dispatch] = useReducer(annotatedImagesReducer, initialAnnotatedState);

    return (
        <AnnotatedImagesContext.Provider value={{ state, dispatch }}>
            {children}
        </AnnotatedImagesContext.Provider>
    );
}

// Custom hook to use the context easily
export function useAnnotatedImages() {
    const context = useContext(AnnotatedImagesContext);
    if (!context) {
        throw new Error("useAnnotatedImages must be used within an AnnotatedImagesProvider");
    }
    return context;
}
