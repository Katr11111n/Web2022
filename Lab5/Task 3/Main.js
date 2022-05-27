  function VolumeAndSquare() {
    let template = document.querySelector('#template')
    let templateClone = template.content.cloneNode(true)
    let radius = prompt('Введіть значення радіуса циліндра', '')
    let height = prompt('Введіть цілочисельне висоти циліндра', '')
    if (radius < 0) radius = -radius
    if (height < 0) height = -height
    templateClone.querySelector('#radius').textContent = radius
    templateClone.querySelector('#height').textContent = height

    let Volume =Math.round(Math.PI * Math.pow(radius, 2) * height).toFixed(2)
    let Square = Math.round(2 * Math.PI * (radius + height)).toFixed(2)
    templateClone.querySelector('#volume').textContent = Volume
    templateClone.querySelector('#square').textContent = Square
    document.body.appendChild(templateClone)
  }
  VolumeAndSquare()
