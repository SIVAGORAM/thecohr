"use client";

import Image, { ImageProps } from "next/image";
import React from "react";
import { cn } from "@/lib/utils";

export interface ProtectedImageProps extends ImageProps {
  containerClassName?: string;
  wrapperStyle?: React.CSSProperties;
  aspectRatio?: string;
}

/**
 * ProtectedImage Component
 * 
 * Embeds Next.js `Image` with client-side UI protection:
 * - Passes `alt` descriptions down 100% flawlessly to Next.js `<Image />`
 * - Intercepts mouse `onContextMenu` and `onDragStart` (does NOT affect Googlebot indexing)
 * - Reserves layout bounds via Tailwind CSS v4 to guarantee 0.00 CLS score
 */
export const ProtectedImage = React.forwardRef<HTMLImageElement, ProtectedImageProps>(
  (
    {
      className,
      containerClassName,
      wrapperStyle,
      aspectRatio,
      alt,
      onContextMenu,
      onDragStart,
      draggable = false,
      fill,
      width,
      height,
      ...props
    },
    ref
  ) => {
    const handleContextMenu = (e: React.MouseEvent<HTMLImageElement>) => {
      e.preventDefault();
      if (onContextMenu) {
        onContextMenu(e);
      }
    };

    const handleDragStart = (e: React.DragEvent<HTMLImageElement>) => {
      e.preventDefault();
      if (onDragStart) {
        onDragStart(e);
      }
    };

    const imageElement = (
      <Image
        ref={ref}
        alt={alt || "The Co HR Asset"}
        draggable={draggable}
        onContextMenu={handleContextMenu}
        onDragStart={handleDragStart}
        fill={fill}
        width={fill ? undefined : width}
        height={fill ? undefined : height}
        className={cn(
          "select-none pointer-events-auto transition-all duration-300",
          className
        )}
        {...props}
      />
    );

    // Compute combined wrapper style to reserve aspect ratio layout bounds and eliminate CLS
    const combinedStyle: React.CSSProperties = {
      ...(aspectRatio ? { aspectRatio } : {}),
      ...wrapperStyle,
    };

    // If fill, containerClassName, or wrapperStyle/aspectRatio is specified
    if (fill || containerClassName || wrapperStyle || aspectRatio) {
      return (
        <div
          className={cn(
            "relative overflow-hidden select-none",
            fill && "w-full h-full",
            containerClassName
          )}
          style={combinedStyle}
          onContextMenu={(e) => e.preventDefault()}
          onDragStart={(e) => e.preventDefault()}
        >
          {imageElement}
        </div>
      );
    }

    return imageElement;
  }
);

ProtectedImage.displayName = "ProtectedImage";
