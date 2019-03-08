class Spacecraft {
  constructor(public propulsor: string) {}

  jumpIntoHyperspace() {
    console.log(`Entering hypersace with ${this.propulsor}`)
  }
}

interface Containership {
  cargoContainers: number
}

export {Spacecraft, Containership}
