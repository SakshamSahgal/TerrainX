import type { PopupProps } from '../../types'

/**
 * Popup is a declarative props carrier — it renders nothing to the DOM itself.
 * The parent <Marker> reads this component's children and maxWidth via
 * React.Children, then renders them into a MapLibre Popup using createRoot.
 *
 * Usage:
 *   <Marker lat={28.6} lon={77.2}>
 *     <Popup>
 *       <strong>New Delhi</strong>
 *     </Popup>
 *   </Marker>
 */
export function Popup(_props: PopupProps) {
  return null
}
