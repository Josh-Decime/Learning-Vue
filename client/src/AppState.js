import { reactive } from 'vue'
import { Upgrade } from './models/Upgrade.js'


// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({

  clickPower: 1,

  clickUpgrades: [
    new Upgrade({
      name: 'Bigger Bag',
      qty: 0,
      multiplier: 1,
      price: 20,
      picture: '💰'
    }),
    new Upgrade({
      name: 'Cart',
      qty: 0,
      multiplier: 3,
      price: 150,
      picture: '🛒'
    }),
    new Upgrade({
      name: 'Horse',
      qty: 0,
      multiplier: 5,
      price: 400,
      picture: '🐎'
    })
  ],

  autoUpgrades: [
    new Upgrade({
      name: 'Marching Gnomes',
      qty: 0,
      multiplier: 3,
      price: 500,
      picture: '🧑‍🎄'
    }),
    new Upgrade({
      name: 'Adventurers',
      qty: 0,
      multiplier: 10,
      price: 1000,
      picture: '⚔️'
    }),
    new Upgrade({
      name: 'Giant Magnet',
      qty: 0,
      multiplier: 25,
      price: 7000,
      picture: '🧲'
    })
  ]



})
