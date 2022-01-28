class Vampire {
  constructor(name, yearConverted) {
    this.name = name;
    this.yearConverted = yearConverted;
    this.offspring = [];
    this.creator = null;
  }

  /** Simple tree methods **/

  // Adds the vampire as an offspring of this vampire
  addOffspring(vampire) {
    this.offspring.push(vampire);
    vampire.creator = this;
  }

  // Returns the total number of vampires created by that vampire
  get numberOfOffspring() {
    return this.offspring.length;
  }

  // Returns the number of vampires away from the original vampire this vampire is
  get numberOfVampiresFromOriginal() {
    let numberOfVampires = 0;
    let currentVampires = this;

    // climb "up" the tree (using iteration), counting nodes, until no creator is found
    while (currentVampires.creator) {
      currentVampires = currentVampires.creator;
      numberOfVampires++;
    }

    return numberOfVampires;
  }

  // Returns true if this vampire is more senior than the other vampire. (Who is closer to the original vampire)
  isMoreSeniorThan(vampire) {
    if (
      this.numberOfVampiresFromOriginal > vampire.numberOfVampiresFromOriginal
    ) {
      return false;
    } else {
      return true;
    }
  }

  /** Tree traversal methods **/

  // Returns the vampire object with that name, or null if no vampire exists with that name
  vampireWithName(name) {}

  // Returns the total number of vampires that exist
  get totalDescendents() {}

  // Returns an array of all the vampires that were converted after 1980
  get allMillennialVampires() {}

  /** Stretch **/

  // Returns the closest common ancestor of two vampires.
  // The closest common anscestor should be the more senior vampire if a direct ancestor is used.
  // For example:
  // * when comparing Ansel and Sarah, Ansel is the closest common anscestor.
  // * when comparing Ansel and Andrew, Ansel is the closest common anscestor.
  closestCommonAncestor(vampire) {
    let thisAncestor = this.creator;
    let thisAncestorArrs = [this];
    while (thisAncestor) {
      thisAncestorArrs.push(thisAncestor);
      thisAncestor = thisAncestor.creator;
    }

    let otherAncestor = vampire.creator;
    let otherAncestorArrs = [vampire];
    while (otherAncestor) {
      otherAncestorArrs.push(otherAncestor);
      otherAncestor = otherAncestor.creator;
    }

    for (let thisAncestorArr of thisAncestorArrs) {
      for (let otherAncestorArr of otherAncestorArrs) {
        if (thisAncestorArr.name === otherAncestorArr.name) {
          return thisAncestorArr;
        }
      }
    }
  }

  vampireWithName(name) {
    if (this.name === name) {
      return this;
    }

    for (let vampire of this.offspring) {
      if (vampire.vampireWithName(name)) {
        return vampire.vampireWithName(name);
      }
    }

    return null;
  }

  get totalDescendents() {
    let descendents = 0;

    for (let descendent of this.offspring) {
      descendents++;
      if (descendent.offspring.length > 0) {
        descendents += descendent.totalDescendents;
      }
    }
    return descendents;
  }

  get allMillennialVampires() {
    let millenials = [];

    for (let descendent of this.offspring) {
      if (descendent.yearConverted > 1980) {
        millenials.push(descendent);
      }
      if (descendent.offspring.length > 0) {
        millenials.push(...descendent.allMillennialVampires);
      }
    }
    return millenials;
  }
}

module.exports = Vampire;
