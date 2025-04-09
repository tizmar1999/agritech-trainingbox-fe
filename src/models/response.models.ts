import { Response } from 'express';

interface ResponseModel extends Response {
    caller?: string;
}

export interface AIExaminePicturesResponse extends ResponseModel {
    original_img_str: string,
    annotated_img_str: string,
    total_objects: number,
    freq: object,
    most_freq: string,
    pie_chart_div: string,
    detection_summary: string,
    size_counts: { Grande: number, Media: number, Piccola: number },
    color_counts: { Giallo: number, Rosso: number, Verde: number },
    quality_counts: {
        'Categoria Extra': number,
        'Categoria I': number,
        'Categoria II': number,
        Marcia: number
    },
}