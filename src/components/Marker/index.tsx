import { useEffect, useRef } from 'react'
import { createRoot } from 'react-dom/client'
import { Marker as MLMarker, Popup as MLPopup } from 'maplibre-gl'
import React from 'react'
import { useMapInstance } from '../../context/MapContext'
import { createMarkerElement } from './markerElement'
import { Popup } from '../Popup'
import type { MarkerProps, PopupProps } from '../../types'

export function Marker({ lat, lon, color = '#e74c3c', label, icon = 'pin', size = 24, children }: MarkerProps) {
  const map = useMapInstance()
  const markerRef = useRef<MLMarker | null>(null)

  useEffect(() => {
    if (!map) return

    const element = createMarkerElement(color, size, icon, label)
    const marker = new MLMarker({ element }).setLngLat([lon, lat]).addTo(map)
    markerRef.current = marker

    // Check if a <Popup> child exists and attach it to the marker
    const popupChild = React.Children.toArray(children).find(
      (child) => React.isValidElement(child) && child.type === Popup,
    )

    if (popupChild && React.isValidElement(popupChild)) {
      const { children: popupContent, maxWidth = '240px' } = popupChild.props as PopupProps
      const container = document.createElement('div')
      const root = createRoot(container)
      root.render(popupContent)

      const popup = new MLPopup({ maxWidth, closeButton: false, offset: [0, -(size * 1.4)] })
        .setDOMContent(container)

      marker.setPopup(popup)

      return () => {
        root.unmount()
        marker.remove()
      }
    }

    return () => marker.remove()
  }, [map, lat, lon, color, label, icon, size]) // eslint-disable-line react-hooks/exhaustive-deps

  // Sync position if lat/lon props change after mount
  useEffect(() => {
    if (markerRef.current) {
      markerRef.current.setLngLat([lon, lat])
    }
  }, [lat, lon])

  return null
}
