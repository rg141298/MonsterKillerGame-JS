const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 18;
const Monster_ATTACK_VALUE = 14;

let chosenMaxLife = 100;
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;

//Function is in vendor.js
adjustHealthBars(chosenMaxLife);

function attackHandler() {
  const damage = dealMonsterDamage(ATTACK_VALUE); /* Function is in vendor.js*/
  currentMonsterHealth -= damage;
  const playerDamage =
    dealPlayerDamage(Monster_ATTACK_VALUE); /*Function is in vendor.js */
  currentPlayerHealth -= playerDamage;

  if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
    alert("You won!");
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
    alert("You lost!");
  } else if (currentMonsterHealth <= 0 && currentPlayerHealth <= 0) {
    alert("You have a draw");
  }
}

function strongAttackHandler() {
  const damage =
    dealMonsterDamage(STRONG_ATTACK_VALUE); /* Function is in vendor.js*/
  currentMonsterHealth -= damage;
  const playerDamage =
    dealPlayerDamage(Monster_ATTACK_VALUE); /*Function is in vendor.js */
  currentPlayerHealth -= playerDamage;

  if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
    alert("You won!");
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
    alert("You lost!");
  } else if (currentMonsterHealth <= 0 && currentPlayerHealth <= 0) {
    alert("You have a draw");
  }
}

attackBtn.addEventListener("click", attackHandler);
strongAttackBtn.addEventListener("click", strongAttackHandler);
