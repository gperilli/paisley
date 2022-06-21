import { paisleyElementFlower } from '/jsm/paisleyBlocks/paisleyElementFlower.js'
import { paisleyElementDropOne } from '/jsm/paisleyBlocks/paisleyElementMSizeDrop01.js'
import { paisleyElementDropTwo } from '/jsm/paisleyBlocks/paisleyElementMSizeDrop02.js'
import { paisleyElementGroupOne } from '/jsm/paisleyBlocks/paisleyElementGroupOne.js'

import { pDOneSetLayout } from '/jsm/paisleyDesignOne.js'
import { pDOneUpdateLayout } from '/jsm/paisleyDesignOne.js'

import { pDTwoSetLayout } from '/jsm/paisleyDesignTwo.js'
import { pDTwoUpdateLayout } from '/jsm/paisleyDesignTwo.js'




window.addEventListener( 'load', pDTwoSetLayout );
window.addEventListener( 'resize', pDTwoUpdateLayout );