import React from 'react';

const SizeDisplay = ({ label, count, color, range }) => (
    <div className="flex flex-col justify-between items-center">
        <p className={`text-5xl font-bold text-${color}`}>{count}</p>
        <p className={`font-semibold text-md text-${color}`}>{range}</p>
    </div>
);

const CategorySection = ({ quality_counts }) => (
    <div className="flex flex-col space-y-4">
        <p className="font-semibold text-lg">Categorie</p>
        <div>{`Categoria Extra: ${quality_counts['Categoria Extra']}`}</div>
        <div>{`Categoria I: ${quality_counts['Categoria I']}`}</div>
        <div>{`Categoria II: ${quality_counts['Categoria II']}`}</div>
        <div>{`Marce: ${quality_counts['Marcia']}`}</div>
    </div>
);

const ColorSection = ({ color_counts }) => (
    <div className="flex flex-col space-y-4">
        <p className="font-semibold text-lg">Colori dominanti</p>
        <div>{`Gialle: ${color_counts['Giallo']}`}</div>
        <div>{`Rosse: ${color_counts['Rosso']}`}</div>
        <div>{`Verdi: ${color_counts['Verde']}`}</div>
    </div>
);

export default function Dashboard({ total_count, color_counts, quality_counts, size_counts }) {
    if (!total_count) return null;

    return (
        <div className="p-8 rounded-lg bg-slate-100 shadow-md w-[800px] h-5/6">
            <div className="flex flex-row space-x-4">
                <div className="flex-1">
                    <p>Totale pere rilevate</p>
                    <p className="font-bold text-8xl text-secondary">{total_count}</p>
                </div>

                {size_counts && (
                    <div className="flex flex-col items-start justify-start">
                        <p>Dimensioni rilevate</p>
                        <div className="flex-1 flex flex-row space-x-4 mt-4">
                            <SizeDisplay
                                label="Piccola"
                                count={size_counts.Piccola}
                                color="green-600"
                                range="65-72 mm"
                            />
                            <SizeDisplay
                                label="Media"
                                count={size_counts.Media}
                                color="yellow-500"
                                range="73-79 mm"
                            />
                            <SizeDisplay
                                label="Grande"
                                count={size_counts.Grande}
                                color="red-600"
                                range="80-85 mm"
                            />
                        </div>
                    </div>
                )}
            </div>

            {quality_counts && color_counts && (
                <div className="flex flex-col space-y-4 max-w-[495px] mt-8">
                    <div className="flex flex-row space-x-10 justify-between">
                        <CategorySection quality_counts={quality_counts} />
                        <ColorSection color_counts={color_counts} />
                    </div>
                </div>
            )}
        </div>
    );
}