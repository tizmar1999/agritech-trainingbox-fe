import React, { useEffect, useReducer } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Camera from "../../components/Camera";
import Dashboard from "../../components/Dashboard";
import { useAnnotatedImages } from "../../providers/AnnotatedImagesProvider";

export default function Analysis() {

    const navigate = useNavigate()

    const { state, dispatch } = useAnnotatedImages();

    const { id } = useParams();
    const numericId = Number(id);

    const currentAnnotation = state.data.find(
        (item) => item.id === numericId
    );

    useEffect(() => {
        // optional: fetch or pre-fill state here
        console.log("Selected Annotation:", currentAnnotation);
    }, [currentAnnotation]);

    return (
        <div className="w-screen h-screen flex flex-row bg-gray-50 p-4">
            <button onClick={()=>{
                navigate('/dashboard')
            }}
            className="text-3xl text-rtlblue-dark font-bold"
            >
                Torna inidietro
            </button>
            <div className="flex flex-row w-full h-full justify-start items-center space-x-4">
                <Camera
                    streamedImage={currentAnnotation ? 'data:image/png;base64,' + currentAnnotation.annotated_img_str : ""}
                    className="w-full h-full bg-green-600"
                />
                {currentAnnotation && (
                    <Dashboard
                        total_count={currentAnnotation.total_objects}
                        color_counts={currentAnnotation.color_counts}
                        quality_counts={currentAnnotation.quality_counts}
                        size_counts={currentAnnotation.size_counts}
                    />
                )}
            </div>
        </div>
    );
}
