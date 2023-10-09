
$(function() {
  consoleInit(main)
});

const xFIRE_ABI = [{"inputs":[{"internalType":"address","name":"fire","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint8","name":"version","type":"uint8"}],"name":"Initialized","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"DOMAIN_SEPARATOR","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAX_WFIRE_SUPPLY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOfUnderlying","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"wfires","type":"uint256"}],"name":"burn","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"burnAll","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"burnAllTo","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"wfires","type":"uint256"}],"name":"burnTo","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"fires","type":"uint256"}],"name":"deposit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"fires","type":"uint256"}],"name":"depositFor","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"name_","type":"string"},{"internalType":"string","name":"symbol_","type":"string"}],"name":"init","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"wfires","type":"uint256"}],"name":"mint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"wfires","type":"uint256"}],"name":"mintFor","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"permit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalUnderlying","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"underlying","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"fires","type":"uint256"}],"name":"underlyingToWrapper","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"fires","type":"uint256"}],"name":"withdraw","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawAll","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"withdrawAllTo","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"fires","type":"uint256"}],"name":"withdrawTo","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"wfires","type":"uint256"}],"name":"wrapperToUnderlying","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]
const FIRE_ABI = [{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"totalSupply","type":"uint256"}],"name":"Burn","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"monetaryPolicy","type":"address"}],"name":"LogMonetaryPolicyUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"epoch","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"totalSupply","type":"uint256"}],"name":"LogRebase","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"totalSupply","type":"uint256"}],"name":"Mint","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"}],"name":"OwnershipRenounced","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"DOMAIN_SEPARATOR","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"EIP712_DOMAIN","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"EIP712_REVISION","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PERMIT_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner_","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"who","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"burn","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"symbol","type":"string"},{"internalType":"uint8","name":"decimals","type":"uint8"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner_","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"isOwner","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"mint","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"monetaryPolicy","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"who","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"permit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"epoch","type":"uint256"},{"internalType":"int256","name":"supplyDelta","type":"int256"}],"name":"rebase","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"who","type":"address"}],"name":"scaledBalanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"scaledTotalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"address","name":"monetaryPolicy_","type":"address"}],"name":"setMonetaryPolicy","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"supplyInternalDelta","outputs":[{"internalType":"int256","name":"","type":"int256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"transferAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"}],"name":"transferAllFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]
const MAIN_FIRE_ABI = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"wfireAmount","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"}],"name":"OwnershipRenounced","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"wfireAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"fireAmount","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[],"name":"FIRE","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"WFIRE","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"adminFIREWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"adminWFIREWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"airdropHelper","outputs":[{"internalType":"contract IAirdropHelper","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"endTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"isOwner","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"multiplier","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract IAirdropHelper","name":"_airdropHelper","type":"address"}],"name":"setAirdropHelper","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"time","type":"uint256"}],"name":"setEndTime","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_multiplier","type":"uint256"}],"name":"setMultiplier","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"time","type":"uint256"}],"name":"setStartTime","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract IERC20","name":"_FIRE","type":"address"},{"internalType":"contract IERC20","name":"_WFIRE","type":"address"}],"name":"setTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"startTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"userInfo","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]
const FIRE_TOKEN_ABI = [{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"totalSupply","type":"uint256"}],"name":"Burn","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"monetaryPolicy","type":"address"}],"name":"LogMonetaryPolicyUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"epoch","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"totalSupply","type":"uint256"}],"name":"LogRebase","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"totalSupply","type":"uint256"}],"name":"Mint","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"}],"name":"OwnershipRenounced","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"DOMAIN_SEPARATOR","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"EIP712_DOMAIN","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"EIP712_REVISION","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PERMIT_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner_","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"who","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"burn","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"symbol","type":"string"},{"internalType":"uint8","name":"decimals","type":"uint8"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner_","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"isOwner","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"mint","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"monetaryPolicy","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"who","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"permit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"epoch","type":"uint256"},{"internalType":"int256","name":"supplyDelta","type":"int256"}],"name":"rebase","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"who","type":"address"}],"name":"scaledBalanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"scaledTotalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"address","name":"monetaryPolicy_","type":"address"}],"name":"setMonetaryPolicy","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"supplyInternalDelta","outputs":[{"internalType":"int256","name":"","type":"int256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"transferAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"}],"name":"transferAllFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]
const AIRDROP_CONTRACT_ABI = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"}],"name":"OwnershipRenounced","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[],"name":"FIRE","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"WFIRE","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"fires","type":"uint256"}],"name":"fireToWfire","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"isOwner","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract IERC20","name":"_FIRE","type":"address"},{"internalType":"contract IERC20","name":"_WFIRE","type":"address"}],"name":"setTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"users","type":"address[]"},{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"name":"transferBatch","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"userAirdrop","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]
const FIRE_CHEF_ABI = [{"inputs":[{"internalType":"contract IERC20","name":"_token","type":"address"},{"internalType":"uint256","name":"_tokenPerSecond","type":"uint256"},{"internalType":"uint256","name":"_startTimestamp","type":"uint256"},{"internalType":"address","name":"_treasury","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Claim","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[],"name":"Pause","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"token","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"allocPoint","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"lockDuration","type":"uint256"}],"name":"PoolAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"allocPoint","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"lockDuration","type":"uint256"}],"name":"PoolUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"reward","type":"uint256"}],"name":"RewardPerSecondChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"startTimestamp","type":"uint256"}],"name":"TimeChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"token","type":"address"}],"name":"TokenSet","type":"event"},{"anonymous":false,"inputs":[],"name":"Unpause","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[],"name":"FEE_MULTIPLIER","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"SHARE_MULTIPLIER","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_allocPoint","type":"uint256"},{"internalType":"contract IERC20","name":"_lpToken","type":"address"},{"internalType":"bool","name":"_withUpdate","type":"bool"},{"internalType":"uint256","name":"_lockupDuration","type":"uint256"}],"name":"add","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"earlyWithdrawFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_from","type":"uint256"},{"internalType":"uint256","name":"_to","type":"uint256"}],"name":"getMultiplier","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"getPools","outputs":[{"components":[{"internalType":"contract IERC20","name":"lpToken","type":"address"},{"internalType":"uint256","name":"allocPoint","type":"uint256"},{"internalType":"uint256","name":"lastRewardTimestamp","type":"uint256"},{"internalType":"uint256","name":"accTokenPerShare","type":"uint256"},{"internalType":"uint256","name":"lockupDuration","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"}],"internalType":"struct Farming.PoolInfo[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"massUpdatePools","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"address","name":"_user","type":"address"}],"name":"pendingToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"poolInfo","outputs":[{"internalType":"contract IERC20","name":"lpToken","type":"address"},{"internalType":"uint256","name":"allocPoint","type":"uint256"},{"internalType":"uint256","name":"lastRewardTimestamp","type":"uint256"},{"internalType":"uint256","name":"accTokenPerShare","type":"uint256"},{"internalType":"uint256","name":"lockupDuration","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"poolLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_allocPoint","type":"uint256"},{"internalType":"uint256","name":"_lockupDuration","type":"uint256"},{"internalType":"bool","name":"_withUpdate","type":"bool"}],"name":"set","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_earlyWithdrawFee","type":"uint256"}],"name":"setEarlyWithdrawFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_startTime","type":"uint256"}],"name":"setStartTime","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenPerSecond","type":"uint256"}],"name":"setTokenPerSecond","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_treasury","type":"address"}],"name":"setTreasury","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"startTimestamp","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"token","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tokenPerSecond","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalAllocPoint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"treasury","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"unpause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"updatePool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"}],"name":"userInfo","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"rewardDebt","type":"uint256"},{"internalType":"uint256","name":"pendingRewards","type":"uint256"},{"internalType":"uint256","name":"lastClaim","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]

async function main() {
  const App = await init_ethers();

  _print(`Initialized ${App.YOUR_ADDRESS}\n`);
  _print("Reading smart contracts...\n");

  const FIRE_CHEF_ADDR = "0x44C696287E1FC316CAc9C34FbD9e0F64de41A02d"
  const FIRE_CHEF = new ethers.Contract(FIRE_CHEF_ADDR, FIRE_CHEF_ABI, App.provider);

  //const rewardTokenTicker = "FIRE";
  const rewardTokenTicker = "wFIRE";

  const rewardsPerWeek = await FIRE_CHEF.tokenPerSecond() / 1e18 * 604800;
  //let rewardsPerWeek = await FIRE_CHEF.tokenPerSecond();

  const tokens = {};
  const prices = await getArbitrumPrices();

  //load fire price from usdc/fire lp
  await loadSynthetixPoolInfoPrice(App, tokens, prices, App.YOUR_ADDRESS, "0x38d3f9f8539ee300575108d072c9bff7fa009cdf");

  await loadXFire(App, prices);

  _print("");
  _print_bold("Staking Contract\n");

  await loadFireChefContract(App, tokens, prices, FIRE_CHEF, FIRE_CHEF_ADDR, FIRE_CHEF_ABI, rewardTokenTicker,
    "token", null, rewardsPerWeek, "pendingToken", [], "arbitrum");

  hideLoading();
}

async function getFirePoolInfo(app, chefContract, chefAddress, poolIndex, pendingRewardsFunction, wfireContract) {
const poolInfo = await chefContract.poolInfo(poolIndex);
if (poolInfo.allocPoint == 0) {
  return {
    address: poolInfo.lpToken ?? poolInfo.stakingToken ?? poolInfo.token,
    allocPoints: poolInfo.allocPoint ?? 1,
    poolToken: null,
    userStaked : 0,
    pendingRewardTokens : 0,
  };
}
const poolToken = await getArbitrumToken(app, poolInfo.lpToken ?? poolInfo.stakingToken ?? poolInfo.token, chefAddress);
const userInfo = await chefContract.userInfo(poolIndex, app.YOUR_ADDRESS);
const pendingRewardTokens = await chefContract.callStatic[pendingRewardsFunction](poolIndex, app.YOUR_ADDRESS);
// const _pendingRewardTokens = await chefContract.callStatic[pendingRewardsFunction](poolIndex, app.YOUR_ADDRESS);
// const pendingRewardTokens = await wfireContract.wrapperToUnderlying(_pendingRewardTokens);
const staked = userInfo.amount / 10 ** poolToken.decimals;
const earlyWithdrawFee = await chefContract.earlyWithdrawFee() / 100;
const currentEpoch = Date.now() / 1000;
const unlockEpoch = (userInfo.lastClaim / 1) + (poolInfo.lockupDuration / 1);
const locked = unlockEpoch > currentEpoch ? true : false;
const unlockedDate = new Date(unlockEpoch * 1000).toLocaleString();
//const unlockEpochToDays = Math.floor(poolInfo.lockupDuration / (3600*24));
const unlockEpochToDays = (poolInfo.lockupDuration / (3600*24)).toFixed(2); //needs Math.floor in order to show integer
//const wrapperToUnderlying = await wfireContract.wrapperToUnderlying(1e18) / 1e9;
const wrapperToUnderlying = await wfireContract.wrapperToUnderlying('1000000000000000000') / 1e9;
_print(`Please note there is a withdrawal fee of ${earlyWithdrawFee}% if withdrawing within ${unlockEpochToDays} days of your last deposit.\n`)
return {
    address: poolInfo.lpToken ?? poolInfo.stakingToken ?? poolInfo.token,
    allocPoints: poolInfo.allocPoint ?? 1,
    poolToken: poolToken,
    userStaked : staked,
    //pendingRewardTokens : pendingRewardTokens / 10 ** 9,
    pendingRewardTokens : pendingRewardTokens / 10 ** 18,
    depositFee : (poolInfo.depositFeeBP ?? poolInfo.depositFee ?? 0) / 100,
    withdrawFee : (poolInfo.withdrawFeeBP ?? 0) / 100,
    earlyWithdrawFee: earlyWithdrawFee,
    locked: locked,
    unlockedDate: unlockedDate,
    unlockEpoch: unlockEpoch,
    wrapperToUnderlying: wrapperToUnderlying
};
}

async function loadFireChefContract(App, tokens, prices, chef, chefAddress, chefAbi, rewardTokenTicker,
rewardTokenFunction, rewardsPerBlockFunction, _rewardsPerWeekFixed, pendingRewardsFunction,
deathPoolIndices, chain) {
const chefContract = chef ?? new ethers.Contract(chefAddress, chefAbi, App.provider);

const poolCount = parseInt(await chefContract.poolLength(), 10);
const totalAllocPoints = await chefContract.totalAllocPoint();

_print(`<a href='https://arbiscan.io/address/${chefAddress}' target='_blank'>Staking Contract</a>`);
_print(`Found ${poolCount} pools.\n`)

_print(`Showing incentivized pools only.\n`);

const rewardTokenAddress = await chefContract.callStatic[rewardTokenFunction]();
const rewardToken = await getArbitrumToken(App, rewardTokenAddress, chefAddress);
const WFIRE_ADDR = "0x1a7383700ee220c5efc0ffe5772fbd490c8614b7";
const WFIRE_CONTRACT = new ethers.Contract(WFIRE_ADDR, xFIRE_ABI, App.provider);
// const rewardsPerWeekFixed = await WFIRE_CONTRACT.wrapperToUnderlying(_rewardsPerWeekFixed);
// const rewardsPerWeek = rewardsPerWeekFixed / 10 ** rewardToken.decimals * 604800;
const rewardsPerWeek = _rewardsPerWeekFixed;

const poolInfos = await Promise.all([...Array(poolCount).keys()].map(async (x) =>
  await getFirePoolInfo(App, chefContract, chefAddress, x, pendingRewardsFunction, WFIRE_CONTRACT)));

var tokenAddresses = [].concat.apply([], poolInfos.filter(x => x.poolToken).map(x => x.poolToken.tokens));

await Promise.all(tokenAddresses.map(async (address) => {
    tokens[address] = await getArbitrumToken(App, address, chefAddress);
}));

if (deathPoolIndices) {   //load prices for the deathpool assets
  deathPoolIndices.map(i => poolInfos[i])
                   .map(poolInfo =>
    poolInfo.poolToken ? getPoolPrices(tokens, prices, poolInfo.poolToken, chain) : undefined);
}

const poolPrices = poolInfos.map(poolInfo => poolInfo.poolToken ? getPoolPrices(tokens, prices, poolInfo.poolToken, chain) : undefined);


_print("Finished reading smart contracts.\n");

let aprs = []
for (i = 0; i < poolCount; i++) {
  if (poolPrices[i]) {
    const apr = printFirePool(App, chefAbi, chefAddress, prices, tokens, poolInfos[i], i, poolPrices[i],
      totalAllocPoints, rewardsPerWeek, rewardTokenTicker, rewardTokenAddress,
      pendingRewardsFunction, null, null, chain, poolInfos[i].depositFee, poolInfos[i].withdrawFee, 
      poolInfos[i].earlyWithdrawFee, poolInfos[i].locked, poolInfos[i].unlockedDate, poolInfos[i].unlockEpoch,
      poolInfos[i].wrapperToUnderlying)
    aprs.push(apr);
  }
}
let totalUserStaked=0, totalStaked=0, averageApr=0;
for (const a of aprs) {
  if (!isNaN(a.totalStakedUsd)) {
    totalStaked += a.totalStakedUsd;
  }
  if (a.userStakedUsd > 0) {
    totalUserStaked += a.userStakedUsd;
    averageApr += a.userStakedUsd * a.yearlyAPR / 100;
  }
}
averageApr = averageApr / totalUserStaked;
_print_bold(`Total Staked: $${formatMoney(totalStaked)}`);
if (totalUserStaked > 0) {
  _print_bold(`\nYou are staking a total of $${formatMoney(totalUserStaked)} at an average APR of ${(averageApr * 100).toFixed(2)}%`)
  _print(`Estimated earnings:`
      + ` Day $${formatMoney(totalUserStaked*averageApr/365)}`
      + ` Week $${formatMoney(totalUserStaked*averageApr/52)}`
      + ` Year $${formatMoney(totalUserStaked*averageApr)}\n`);
}
return { prices, totalUserStaked, totalStaked, averageApr }
}

function printFirePool(App, chefAbi, chefAddr, prices, tokens, poolInfo, poolIndex, poolPrices,
                     totalAllocPoints, rewardsPerWeek, rewardTokenTicker, rewardTokenAddress,
                     pendingRewardsFunction, fixedDecimals, claimFunction, chain="eth", depositFee=0, withdrawFee=0,
                     earlyWithdrawFee, locked, unlockedDate, unlockEpoch, wrapperToUnderlying) {
fixedDecimals = fixedDecimals ?? 2;
const sp = (poolInfo.stakedToken == null) ? null : getPoolPrices(tokens, prices, poolInfo.stakedToken, chain);
var poolRewardsPerWeek = poolInfo.allocPoints / totalAllocPoints * rewardsPerWeek;
if (poolRewardsPerWeek == 0 && rewardsPerWeek != 0) return;
const userStaked = poolInfo.userLPStaked ?? poolInfo.userStaked;
const firePrice = getParameterCaseInsensitive(prices, "0xb25ea095997f5bbaa6cea962c4fbf3bfc3c09776")?.usd;
//const rewardPrice = getParameterCaseInsensitive(prices, rewardTokenAddress)?.usd;
const rewardPrice = firePrice * wrapperToUnderlying;
const staked_tvl = sp?.staked_tvl ?? poolPrices.staked_tvl;
_print_inline(`${poolIndex} - `);
poolPrices.print_price(chain);
sp?.print_price(chain);
const apr = printFireAPR(rewardTokenTicker, rewardPrice, poolRewardsPerWeek, poolPrices.stakeTokenTicker,
  staked_tvl, userStaked, poolPrices.price, fixedDecimals);
if (poolInfo.userLPStaked > 0) sp?.print_contained_price(userStaked);
if (poolInfo.userStaked > 0) poolPrices.print_contained_price(userStaked);
printFireContractLinks(App, chefAbi, chefAddr, poolIndex, poolInfo.address, pendingRewardsFunction,
  rewardTokenTicker, poolPrices.stakeTokenTicker, poolInfo.poolToken.unstaked,
  poolInfo.userStaked, poolInfo.pendingRewardTokens, fixedDecimals, claimFunction, rewardPrice, chain, depositFee, withdrawFee,
  earlyWithdrawFee, locked, unlockedDate, unlockEpoch);
return apr;
}

function printFireAPR(rewardTokenTicker, rewardPrice, poolRewardsPerWeek,
                stakeTokenTicker, staked_tvl, userStaked, poolTokenPrice,
                fixedDecimals) {
var usdPerWeek = poolRewardsPerWeek * rewardPrice;
fixedDecimals = fixedDecimals ?? 2;
_print(`${rewardTokenTicker} Per Week: ${poolRewardsPerWeek.toFixed(fixedDecimals)} ($${formatMoney(usdPerWeek)})`);
var weeklyAPR = usdPerWeek / staked_tvl * 100;
var dailyAPR = weeklyAPR / 7;
var yearlyAPR = weeklyAPR * 52;
_print(`APR: Day ${dailyAPR.toFixed(2)}% Week ${weeklyAPR.toFixed(2)}% Year ${yearlyAPR.toFixed(2)}%`);
var userStakedUsd = userStaked * poolTokenPrice;
var userStakedPct = userStakedUsd / staked_tvl * 100;
_print(`You are staking ${userStaked.toFixed(9)} ${stakeTokenTicker} ($${formatMoney(userStakedUsd)}), ${userStakedPct.toFixed(2)}% of the pool.`);
var userWeeklyRewards = userStakedPct * poolRewardsPerWeek / 100;
var userDailyRewards = userWeeklyRewards / 7;
var userYearlyRewards = userWeeklyRewards * 52;
if (userStaked > 0) {
  _print(`Estimated ${rewardTokenTicker} earnings:`
      + ` Day ${userDailyRewards.toFixed(fixedDecimals)} ($${formatMoney(userDailyRewards*rewardPrice)})`
      + ` Week ${userWeeklyRewards.toFixed(fixedDecimals)} ($${formatMoney(userWeeklyRewards*rewardPrice)})`
      + ` Year ${userYearlyRewards.toFixed(fixedDecimals)} ($${formatMoney(userYearlyRewards*rewardPrice)})`);
}
return {
  userStakedUsd,
  totalStakedUsd : staked_tvl,
  userStakedPct,
  yearlyAPR,
  userYearlyUsd : userYearlyRewards * rewardPrice
}
}

function printFireContractLinks(App, chefAbi, chefAddr, poolIndex, poolAddress, pendingRewardsFunction,
  rewardTokenTicker, stakeTokenTicker, unstaked, userStaked, pendingRewardTokens, fixedDecimals,
  claimFunction, rewardTokenPrice, chain, depositFee, withdrawFee, earlyWithdrawFee, locked, unlockedDate, unlockEpoch) {
fixedDecimals = fixedDecimals ?? 2;
const approveAndStake = async function() {
  return chefArbitrumContract_stake(chefAbi, chefAddr, poolIndex, poolAddress, App)
}
const unstake = async function() {
  return chefArbitrumContract_unstake(chefAbi, chefAddr, poolIndex, App, pendingRewardsFunction)
}
const claim = async function() {
  return chefArbitrumContract_claim(chefAbi, chefAddr, poolIndex, App, pendingRewardsFunction, claimFunction)
}
if(depositFee > 0){
  _print_link(`Stake ${unstaked.toFixed(9)} ${stakeTokenTicker} - Fee ${depositFee}%`, approveAndStake)
}else{
  _print_link(`Stake ${unstaked.toFixed(9)} ${stakeTokenTicker}`, approveAndStake)
}
if(locked){
  _print_link(`Unstake ${userStaked.toFixed(9)} ${stakeTokenTicker} - Fee ${earlyWithdrawFee}% before ${unlockedDate}`, unstake)
}else{
  _print_link(`Unstake ${userStaked.toFixed(9)} ${stakeTokenTicker}`, unstake)
}
_print_link(`Claim ${pendingRewardTokens.toFixed(fixedDecimals)} ${rewardTokenTicker} ($${formatMoney(pendingRewardTokens*rewardTokenPrice)})`, claim)
_print(`Staking or unstaking also claims rewards.`)
_print("");
}

async function loadXFire(App, prices){

let eligible = false;
function reqListener() {
  const resp = this.responseText;
  const _data = resp.split();
  const data = _data[0].split('\n');
  eligible = data.includes(App.YOUR_ADDRESS);
  console.log(eligible);
}

const req = new XMLHttpRequest();
req.addEventListener("load", reqListener);
req.open("GET", "https://raw.githubusercontent.com/ltj866/airdrop-0/main/addresses", false);
req.send();

const FIRE_ADDR = "0xb25ea095997f5bbaa6cea962c4fbf3bfc3c09776";
const WFIRE_ADDR = "0x1a7383700ee220c5efc0ffe5772fbd490c8614b7";
const MAIN_CONTRACT_ADDR = "0x7B195EF8d0F1D244f4bFf52339F95DCED670cDB1";

const FIRE_CONTRACT = new ethers.Contract(FIRE_ADDR, FIRE_ABI, App.provider);
const WFIRE_CONTRACT = new ethers.Contract(WFIRE_ADDR, xFIRE_ABI, App.provider);
const MAIN_CONTRACT = new ethers.Contract(MAIN_CONTRACT_ADDR, MAIN_FIRE_ABI, App.provider);

const airdropHelperAddr = await MAIN_CONTRACT.airdropHelper();
const startTime = await MAIN_CONTRACT.startTime() / 1;
const endTime = await MAIN_CONTRACT.endTime() / 1;
const multiplier = await MAIN_CONTRACT.multiplier() / 1e18;
const wFireAmount = await MAIN_CONTRACT.userInfo(App.YOUR_ADDRESS);

const AIRDROP_CONTRACT = new ethers.Contract(airdropHelperAddr, AIRDROP_CONTRACT_ABI, App.provider);
const fireAmount = await FIRE_CONTRACT.balanceOf(App.YOUR_ADDRESS);
const fireAmountUi = await FIRE_CONTRACT.balanceOf(App.YOUR_ADDRESS) / 1e9;
const wFireAirdropAmount = await AIRDROP_CONTRACT.userAirdrop(App.YOUR_ADDRESS);

const fireAirdropAmountUi = await WFIRE_CONTRACT.wrapperToUnderlying(wFireAirdropAmount) / 1e9;
const fireAirdropAmount = await WFIRE_CONTRACT.wrapperToUnderlying(wFireAirdropAmount);

const firePrice = getParameterCaseInsensitive(prices, FIRE_ADDR)?.usd;

const startDate = new Date(startTime * 1000).toLocaleString();
const endDate = new Date(endTime * 1000).toLocaleString();

const usersStakedAmount = await WFIRE_CONTRACT.wrapperToUnderlying(wFireAmount) / 1e9;
const usersStakedAmountForCalc = await WFIRE_CONTRACT.wrapperToUnderlying(wFireAmount);

const fireRemainAmountUi = Math.min(fireAmountUi, fireAirdropAmountUi - usersStakedAmount);
const fireRemainAmount = Math.min(fireAmount, fireAirdropAmount - usersStakedAmountForCalc);

_print(`Starting date : ${startDate}\n`);
_print(`Ending date : ${endDate}\n`);

if(fireAirdropAmountUi > 0){
  _print("My brother in flames, you received Airdrop 0 and are eligible to 3x your FIRE in 3 weeks.\n");

  _print(`Currently staking ${usersStakedAmount.toFixed(4)} FIRE $${((usersStakedAmount) * firePrice).toFixed(4)} (To receive multiplied 3x = ${(usersStakedAmount * multiplier).toFixed(4)})\n`);

  _print(`Your total airdrop was: ${fireAirdropAmountUi.toFixed(4)}\n`)

  _print(`Your current FIRE balance is: ${fireAmountUi.toFixed(4)}\n`)    

  const approveAndStake = async function() {
    return contract_stake(MAIN_CONTRACT_ADDR, App, FIRE_ADDR, fireRemainAmount)
  }
  const unstake = async function() {
    return contract_unstake(MAIN_CONTRACT_ADDR, App)
  }
  if(Date.now() / 1000 < startTime){
    _print_link(`Stake ${fireRemainAmountUi.toFixed(4)} FIRE`, approveAndStake);
  }else{
    _print("The deposit period has closed");
  }
  if(Date.now() / 1000 > endTime){
    _print_link(`Unstake ${(usersStakedAmount * multiplier).toFixed(2)} and claime your FIRE (Multiplied 3x = ${(usersStakedAmount * multiplier).toFixed(4)})`, unstake);
  }else{
    _print(`Withdraw your FIRE after ${endDate}`);
  }
}else{
  _print("My brother in flames, you did not receive Airdrop 0 and are ineligible for this contract.");
  _print("Stay tuned for information on depositing for LP Rewards.");
  _print("https://t.me/promethios_main");
}
}

const contract_stake = async function(contractAddress, App, stakeTokenAddr, currentTokens) {
const signer = App.provider.getSigner()

const STAKING_TOKEN = new ethers.Contract(stakeTokenAddr, FIRE_TOKEN_ABI, signer)
const STAKING_CONTRACT = new ethers.Contract(contractAddress, MAIN_FIRE_ABI, signer)
const allowedTokens = await STAKING_TOKEN.allowance(App.YOUR_ADDRESS, contractAddress)

let allow = Promise.resolve()

if (allowedTokens / 1e9 < currentTokens) {
  showLoading()
  allow = STAKING_TOKEN.approve(contractAddress, ethers.constants.MaxUint256)
    .then(function(t) {
      return App.provider.waitForTransaction(t.hash)
    })
    .catch(function() {
      hideLoading()
      alert('Try resetting your approval to 0 first')
    })
}

if (currentTokens > 0) {
  showLoading()
  allow
    .then(async function() {
      STAKING_CONTRACT.deposit(currentTokens)
        .then(function(t) {
          App.provider.waitForTransaction(t.hash).then(function() {
            hideLoading()
          })
        })
        .catch(function() {
          hideLoading()
          _print('Something went wrong.')
        })
    })
    .catch(function() {
      hideLoading()
      _print('Something went wrong.')
    })
} else {
  alert('You have no tokens to stake!!')
}
}

const contract_unstake = async function(contractAddress, App) {
const signer = App.provider.getSigner()
const MAIN_FIRE_WRITE_CONTRACT = new ethers.Contract(contractAddress, MAIN_FIRE_ABI, signer)
showLoading()
MAIN_FIRE_WRITE_CONTRACT.withdraw()
    .then(function(t) {
      return App.provider.waitForTransaction(t.hash)
    })
    .catch(function() {
      hideLoading()
    })
}

async function loadSynthetixPoolInfoPrice(App, tokens, prices, stakingAddress, stakeTokenAddress) {
var stakeToken = await getArbitrumToken(App, stakeTokenAddress, stakingAddress);
var newPriceAddresses = stakeToken.tokens.filter(x =>
  !getParameterCaseInsensitive(prices, x));
var newPrices = await lookUpTokenPrices(newPriceAddresses);
for (const key in newPrices) {
  if (newPrices[key]?.usd)
      prices[key] = newPrices[key];
}
var newTokenAddresses = stakeToken.tokens.filter(x =>
  !getParameterCaseInsensitive(tokens,x));
for (const address of newTokenAddresses) {
    tokens[address] = await getArbitrumToken(App, address, stakingAddress);
}
const poolPrices = getPoolPrices(tokens, prices, stakeToken, "arbitrum");

if (!poolPrices)
{
  console.log(`Couldn't calculate prices for pool ${stakeTokenAddress}`);
  return null;
}

const stakeTokenTicker = poolPrices.stakeTokenTicker;

const stakeTokenPrice =
    prices[stakeTokenAddress]?.usd ?? getParameterCaseInsensitive(prices, stakeTokenAddress)?.usd;

const staked_tvl = poolPrices.staked_tvl;

return  {
  stakingAddress,
  poolPrices,
  stakeTokenAddress,
  stakeTokenTicker,
  stakeTokenPrice,
  staked_tvl,
}
}
