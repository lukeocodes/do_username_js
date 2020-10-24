const seaCreatures = "walrus seal fish shark clam coral whale crab lobster starfish eel dolphin squid jellyfish ray shrimp mantaRay angler snorkler scubaDiver urchin anemone morel axolotl".split(" ")
const seaObjects = "boat ship submarine yacht dinghy raft kelp seaweed anchor".split(" ")
const adjectiveDescriptors = "cute adorable lovable happy sandy bubbly friendly floating drifting".split(" ")
const sizeDescriptors = "large big small giant massive tiny little yuge".split(" ")
const creatureDescriptors = "swimming sleeping eating hiding".split(" ")

const seaList = seaObjects.concat(seaCreatures)
const descriptors = adjectiveDescriptors.concat(sizeDescriptors)

const colors = "blue blueGreen darkCyan electricBlue greenBlue lightCyan lightSeaGreen seaGreen turquoise aqua aquamarine teal cyan gray darkBlue cerulean azure lapis navy".split(" ")

const random = (arr) => arr[Math.floor(Math.random()*arr.length)]

const generate = (maxSize = 30) => {
  const noun = randomNoun()
  const descriptor = randomDescriptor(noun)
  const color = randomColor()

  if ((descriptor + color + noun).length <= maxSize) {
    return format([descriptor, color, noun])
  } else if ((descriptor + noun).length <= maxSize) {
    return format([descriptor, noun])
  } else if ((color + noun).length <= maxSize) {
    return format([color, noun])
  } else {
    return format([noun])
  }
}

const randomNoun = () => {
  return random(seaList)
}

const randomDescriptor = (noun) => {
  if (!seaCreatures.includes(noun)) {
    return random(descriptors)
  }

  return random(descriptors.concat(creatureDescriptors))
}

const randomColor = () => {
  return random(colors)
}

const format = (arr) => {
  return arr.map(s => capitalize(s)).join("")
}

const capitalize = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

module.exports = generate
