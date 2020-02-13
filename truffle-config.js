require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace person bone tooth figure render remember snake good knee outer settle'; 
let testAccounts = [
"0x92d9befdc7b974daabf1220e958765a77e1a008daf879d32bf16966bef452118",
"0x299de01e329c92b74d3cb653069e8537b3344ac9388c0a42c3d5a58b9e3eca58",
"0x79c06ca6ccdda5263e67cae14658efb0f744bd8c65da6fc9203fca8fe3637758",
"0x04adb78785b3cd1f1e75b91472476189a9bee979ef18b6767321b12b9d671ef0",
"0xb86b7a55513b16e4cb8f8066b9e76c44227081eb009644404a8b24102366c17e",
"0x24f0a8fad601b838f8fa800a5c9feacb87d7dfcff94a828d76fc5bd4b54ba0a9",
"0xf8a18b26b0ac4435804b178753de43f6ee8a626f223a2afa6d26e38ff8d23cff",
"0xf1875e073a0bfc26a4b93c07ab4f894f086c2d8eb2beb71f93b09ec24de130dd",
"0x44ae8c13235fdbe0d0cdd81e314194fac8d388f92090186ae0cf346bdc0255bd",
"0xa4341b2651e2d87e9fc4478c2786571f11d7933e75b830f1c01545ccbdd8d554"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                testAccounts,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
