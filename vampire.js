class Vampire {
  constructor(name, yearConverted) {
    this.name = name;
    this.yearConverted = yearConverted;
    this.offspring = [];
    // offsoring 部下（下）
    this.creator = null;
    // creator トップ
  }

  /** Simple tree methods **/

  // Adds the vampire as an offspring of this vampire
  addOffspring(vampire) {
    // vampire = offsoring 部下（下）
    this.offspring.push(vampire);
    vampire.creator = this;
    // console.log(vampire.creator);
    // ボスは vampire.creator　でいつでも(　vampire　は個人名　)確認んできる like console.log(craig.creator);
  }

  // Returns the total number of vampires created by that vampire
  get numberOfOffspring() {
    return this.offspring.length;
    //部下の数は、部下の名前に numberOfOffspring を追加すれば確認できる
    //console.log(craig.numberOfOffspring);
  }

  // Returns the number of vampires away from the original vampire this vampire is
  get numberOfVampiresFromOriginal() {
    // creatorまでのレベル
    // vampire = offsoring 部下とcreatorの間にいる人の数
    // console.log(craig.numberOfVampiresFromOriginal); craig から上司までの人数
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
    // 上司が同じかどうか
    // 2人の従業員が同じ上司を持つ場合はtrueを、そうでない場合はfalseを返す関数
    // return this.creator === vampire.creator;
    if (
      this.numberOfVampiresFromOriginal > vampire.numberOfVampiresFromOriginal
    ) {
      return false;
    } else {
      return true;
    }
    // console.log('Morethan of This', this);
    // console.log('Vampire at MoreThan', vampire);
  }

  /** Stretch **/

  // Returns the closest common ancestor of two vampires.
  // The closest common anscestor should be the more senior vampire if a direct ancestor is used.
  // For example:
  // * when comparing Ansel and Sarah, Ansel is the closest common anscestor.
  // * when comparing Ansel and Andrew, Ansel is the closest common anscestor.
  closestCommonAncestor(vampire) {
    // console.log('Vampire at Closest: ', vampire.creator);
    // console.log('Closest of This: ', this.creator);
    // console.log('Vampire at Closest: ', vampire.numberOfVampiresFromOriginal);
    // console.log('Closest of This: ', this.numberOfVampiresFromOriginal);
    console.log('Vampire at Closest: ', vampire.numberOfVampiresFromOriginal);
    console.log('Closest of This: ', this.numberOfVampiresFromOriginal);
  }
}

module.exports = Vampire;
