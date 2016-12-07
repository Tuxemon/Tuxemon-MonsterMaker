var config = require('../config/config');
var Q = require('q');

function submitMonsterPromise(body) {
   return Q.fcall(function() {
        return generateJson(
            body.name,
            body.description,
            body.category,
            body.hp,
            body.melee,
            body.armor,
            body.ranged,
            body.dodge,
            body.speed,
            body.weight,
            body.morphProgress,
            body.types,
            body.frontSprite,
            body.backSprite,
            body.faceSprite1,
            body.faceSprite2
        );
   })
}

// Generates valid Tuxemon JSON.
function generateJson(name, description, category, hp, melee, armor, ranged,
        dodge, speed, weight, morphProgress, types, frontSprite, backSprite,
        faceSprite1, faceSprite2) {

    var slug = "txmn_"+name.toLowerCase();
    var name_trans = "txmn_"+name.toLowerCase()+"_name";
    var description_trans = "txmn_"+name.toLowerCase()+"_descr";
    var category_trans = "txmn_"+name.toLowerCase()+"_category";

    var monsterJson = {
        slug: slug,
        name_trans: name_trans,
        description_trans: description_trans,
        category_trans: category_trans,

        attack_base: parseInt(melee),
        defense_base: parseInt(armor),
        hp_base: parseInt(hp),
        special_attack_base: parseInt(ranged),
        special_defense_base: parseInt(dodge),
        speed_base: parseInt(speed),

        weight: parseInt(weight),

        attack_mod: 1,
        defense_mod: 1,
        hp_mod: 1,
        special_attack_mod: 1,
        special_defense_mod: 1,
        speed_mod: 1,

        exp_give_mod: 3,
        exp_req_mod: 27,

        ai: "RandomAI",

        moveset: [],

        sprites: {
            "battle1": "gfx/sprites/battle/"+frontSprite,
            "battle2": "gfx/sprites/battle/"+backSprite,
            "menu1": "gfx/sprites/battle/"+faceSprite1,
            "menu2": "gfx/sprites/battle/"+faceSprite2
        },

        types: types
    };

    var localeJson = {};
    localeJson[name_trans] = name
    localeJson[description_trans] = description
    localeJson[category_trans] = category

    var jsonData = {
        monster: monsterJson,
        locale: localeJson
    }

    return jsonData
}

module.exports = {
    submitMonsterPromise: submitMonsterPromise
};
