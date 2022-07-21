import { paisleyElementFlower } from '/jsm/paisleyBlocks/paisleyElementFlower.js'
import { paisleyElementDropOne } from '/jsm/paisleyBlocks/paisleyElementMSizeDrop01.js'
import { paisleyElementDropTwo } from '/jsm/paisleyBlocks/paisleyElementMSizeDrop02.js'
import { paisleyElementGroupOne } from '/jsm/paisleyBlocks/paisleyElementGroupOne.js'

import { pDOneSetLayout } from '/jsm/paisleyDesignOne.js'
import { pDOneUpdateLayout } from '/jsm/paisleyDesignOne.js'

import { pDThreeSetLayout } from '/jsm/paisleyDesignThree.js'
import { pDThreeUpdateLayout } from '/jsm/paisleyDesignThree.js'




window.addEventListener( 'load', pDThreeSetLayout );
window.addEventListener( 'resize', pDThreeUpdateLayout );