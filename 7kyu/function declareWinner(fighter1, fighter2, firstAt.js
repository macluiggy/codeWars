function Fighter(name, health, damagePerAttack) {
        this.name = name;
        this.health = health;
        this.damagePerAttack = damagePerAttack;
        this.toString = function() { return this.name; }
}

function declareWinner(fighter1, fighter2, firstAttacker) {
  let currentAttacker = firstAttacker;
  while (fighter1.health > 0 && fighter2.health > 0) {
    if (currentAttacker === fighter1.name) {
      fighter2.health -= fighter1.damagePerAttack;
    } else {
      fighter1.health -= fighter2.damagePerAttack;
    }
    currentAttacker = currentAttacker === fighter1.name
    ? fighter2.name
    : fighter1.name
  }
  console.log(fighter1.health, fighter2.health)
  return fighter1.health > fighter2.health
  ? fighter1.name
  : fighter2.name
}

console.log(declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Harry"))