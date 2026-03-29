/**
 * Creates a styled DOM element for a MapLibre Marker.
 * MapLibre adopts this element and positions it on the map canvas.
 */
export function createMarkerElement(
  color = '#e74c3c',
  size = 24,
  icon = 'pin',
  label?: string,
): HTMLElement {
  const wrapper = document.createElement('div')
  wrapper.style.cssText = 'display:flex;flex-direction:column;align-items:center;cursor:pointer'

  const pin = document.createElement('div')

  if (icon !== 'pin' && icon.startsWith('http')) {
    // Custom image icon
    const img = document.createElement('img')
    img.src = icon
    img.style.cssText = `width:${size}px;height:${size}px;object-fit:contain`
    pin.appendChild(img)
  } else if (icon === 'dot') {
    pin.style.cssText = `
      width:${size / 2}px;height:${size / 2}px;
      border-radius:50%;background:${color};
      box-shadow:0 2px 6px rgba(0,0,0,0.4)
    `
  } else {
    // Default: teardrop pin shape using an SVG
    pin.innerHTML = `
      <svg width="${size}" height="${size * 1.4}" viewBox="0 0 24 34" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 9 12 22 12 22s12-13 12-22C24 5.37 18.63 0 12 0z" fill="${color}"/>
        <circle cx="12" cy="12" r="5" fill="white" opacity="0.6"/>
      </svg>
    `
  }

  wrapper.appendChild(pin)

  if (label) {
    const text = document.createElement('span')
    text.textContent = label
    text.style.cssText = `
      margin-top:2px;font-size:11px;font-weight:600;
      color:${color};text-shadow:0 1px 2px rgba(255,255,255,0.8);
      white-space:nowrap;pointer-events:none
    `
    wrapper.appendChild(text)
  }

  return wrapper
}
