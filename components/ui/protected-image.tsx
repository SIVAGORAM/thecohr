"use client";

import Image, { ImageProps } from "next/image";
import React from "react";
import { cn } from "@/lib/utils";

export interface ProtectedImageProps extends ImageProps {
  containerClassName?: string;
  wrapperStyle?: React.CSSProperties;
}

/**
 * ProtectedImage Component
 * 
 * Embeds Next.js `Image` with subtle, client-side protection:
 * - Prevents standard browser image drag-and-drop (`draggable={false}`)
 * - Intercepts image dragstart events
 * - Intercepts image right-click context menu events (`onContextMenu`)
 * - Applies `select-none` to avoid accidental image highlighting
 * - Preserves full LCP / SEO / next/image optimization and responsiveness
 */
export const ProtectedImage = React.forwardRef<HTMLImageElement, ProtectedImageProps>(
  (
    {
      className,
      containerClassName,
      wrapperStyle,
      alt,
      onContextMenu,
      onDragStart,
      draggable = false,
      fill,
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
        className={cn(
          "select-none pointer-events-auto transition-all duration-300",
          className
        )}
        {...props}
      />
    );

    // If fill is true, container must be relative & full sized
    if (fill || containerClassName || wrapperStyle) {
      return (
        <div
          className={cn(
            "relative overflow-hidden select-none",
            fill && "w-full h-full",
            containerClassName
          )}
          style={wrapperStyle}
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
