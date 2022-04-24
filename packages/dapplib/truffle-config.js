require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict roast fortune street name rice mad mistake hover end army gate'; 
let testAccounts = [
"0x1f1639b029132a2557a34ef02893993b5315a601050122956269266d0e117b47",
"0xdf3dde0f940dc0d7d0088870fa65be30667e22fd92fa1f19c65426987cb54830",
"0x37776c6fcdc4fa848cd01d395ebb26260535841827ad120485c9b5b7ece19794",
"0xa35de766a24bf98bc29b68c9219bd9188988dd786df01829ebff8d3912fe2031",
"0xc5d4e6462edbaea3ca0c7c911e210915242631dd5cbd854bd792e2ffa937a1c3",
"0xbd9053e19ec32f227c3db732f922dac5d7c5434518623de6ac19da68a006959b",
"0x7f06622df9c109a65748f41a58603c655d08cf3506187f12c41bd95c159374ac",
"0x7907f32e7ffd3a0c533d82f1f74e88fe1b55584e6d2bdd07bbea451d43abe91e",
"0x5f8e89457dfeb77ef3ebfd1304a6d16bc8c59a1a09b37056bd1562f6083616f7",
"0x53f1ed22616f72942818219a32295c7c7b1edc20783e5034a8ea17a20de4f271"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

