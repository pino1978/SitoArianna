const imageModules = import.meta.glob("../assets/images/*", { eager: true });
const iconModules = import.meta.glob("../assets/svg/*.svg", { eager: true });

export function imageAsset(fileName) {
  const asset = imageModules[`../assets/images/${fileName}`]?.default;

  if (!asset) {
    throw new Error(`Missing image asset: src/assets/images/${fileName}`);
  }

  return asset;
}

export function svgAsset(fileName) {
  const asset = iconModules[`../assets/svg/${fileName}`]?.default;

  if (!asset) {
    throw new Error(`Missing SVG asset: src/assets/svg/${fileName}`);
  }

  return asset;
}
