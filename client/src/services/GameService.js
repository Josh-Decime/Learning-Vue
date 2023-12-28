import { AppState } from "../AppState.js";
import { Upgrade } from "../models/Upgrade.js";
import { logger } from "../utils/Logger.js";
import Pop from "../utils/Pop.js";

class GameService {

    mine() {
        let upgradesPower = 0
        AppState.clickUpgrades.forEach(upgrade => {
            upgradesPower += upgrade.multiplier * upgrade.qty
        })
        AppState.power += upgradesPower
    }




}

export const gameService = new GameService()