"use client";

import React, { useState, useEffect } from "react";

interface IPhoto {
  id: number;
  albumId: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

interface IGalleryState {
  data: IPhoto[];
  isLoading: boolean;
  error: Error | string | null;
}

const Gallery: React.FC = () => {
  // Указываем тип возвращаемого значения
  const [state, setState] = useState<IGalleryState>({
    data: [],
    isLoading: true,
    error: null,
  });

  useEffect(() => {
    const getPhotos = async (): Promise<void> => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/photos"
        );
        const data = (await response.json()) as IPhoto[];
        setState((prevState) => ({ ...prevState, data, isLoading: false }));
      } catch (error: any) {
        // Тип переменной должен быть 'any' или 'unknown'
        console.error("Error fetching photos:", error);
        setState((prevState) => ({
          ...prevState,
          error: error.message,
          isLoading: false,
        }));
      }
    };
    getPhotos();
  }, []);

  if (state.isLoading) {
    return <p>Завантаження фото...</p>;
  }

  if (state.error) {
    <p>Помилка: {String(state.error)}</p>;
  }

  return (
    <div>
      <h2>Галерея</h2>
      <div className="flex flex-row flex-wrap gap-3">
        {state.data.map((photo) => (
          <img
            className="w-96 h-96"
            key={photo.id}
            src={photo.url}
            alt={photo.title}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery; // Экспортируем компонент
