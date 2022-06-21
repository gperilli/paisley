import { paisleyElementFlower } from '/jsm/paisleyElementFlower.js'
import { paisleyElementDropOne } from '/jsm/paisleyElementMSizeDrop01.js'
import { paisleyElementDropTwo } from '/jsm/paisleyElementMSizeDrop02.js'

import { paisleyElementGroupOne } from '/jsm/paisleyElementGroupOne.js'

import { pDOneSetLayout } from '/jsm/paisleyDesignOne.js'
import { pDOneUpdateLayout } from '/jsm/paisleyDesignOne.js'

import { pDTwoSetLayout } from '/jsm/paisleyDesignTwo.js'
import { pDTwoUpdateLayout } from '/jsm/paisleyDesignTwo.js'




window.addEventListener( 'load', pDTwoSetLayout );
window.addEventListener( 'resize', pDTwoUpdateLayout );