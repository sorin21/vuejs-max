new Vue({
  el: "#app",
  data: {
    playerHealth: 100,
    monsterHealth: 100,
    gameIsRunning: false,
    turns: []
  },
  methods: {
    startGame() {
      this.gameIsRunning = true;
      // reset player health to 100
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.turns = [];
    },

    attack() {
      const damage = this.calculateDamage(3, 10);
      this.monsterHealth -= damage;

      this.turns.unshift({
        isPlayer: true,
        text: "Player hists Friend for " + damage
      });

      // if we return true
      if (this.checkWin()) {
        // exit the function
        return;
      }

      this.monsterAttacks();
    },

    specialAttack() {
      const damage = this.calculateDamage(10, 20);
      this.monsterHealth -= damage;

      this.turns.unshift({
        isPlayer: true,
        text: "Player Special Attack hists Friend for " + damage
      });

      if (this.checkWin()) {
        return;
      }
      this.monsterAttacks();
    },

    heal() {
      if (this.playerHealth <= 90) {
        this.playerHealth += 10;
      } else {
        this.playerHealth = 100;
      }

      this.turns.unshift({
        isPlayer: true,
        text: "Player healed with 10"
      });

      this.monsterAttacks();
    },

    giveUp() {
      this.gameIsRunning = false;
      this.playerHealth = 100;
      this.monsterHealth = 100;
    },

    calculateDamage(min, max) {
      // math random is between 0 and 1
      // we have from 1 to 9, and + 1 we have from 1 to 10
      // so in the end we have the random nr or the min
      return Math.max(Math.floor(Math.random() * max) + 1, min);
    },

    checkWin() {
      if (this.monsterHealth <= 0) {
        if (confirm("You won! New Game?")) {
          this.startGame();
        } else {
          this.gameIsRunning = false;
        }
        // if neither this is satisfait
        // we used a bool, true, because we need to check a bool
        return true;
      } else if (this.playerHealth <= 0) {
        if (confirm("You lost! New Game?")) {
          this.startGame();
        } else {
          this.gameIsRunning = false;
        }
        //  or this
        return true;
      }
      // then return false, game over
      return false;
    },

    monsterAttacks() {
      const damage = this.calculateDamage(3, 10);
      this.playerHealth -= damage;

      this.turns.unshift({
        isPlayer: false,
        text: "Friend hists Player for " + damage
      });

      this.checkWin();
    }
  }
});
