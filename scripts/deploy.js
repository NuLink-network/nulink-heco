async function main() {

    const constructorArgs = ["0xca3D958f3c164353a27633d3a4b93Ccda969f2AF", "0xd3D4E1A73FEF7185860085aC8dB7C00De65e338d", 8000000]
    const [deployer] = await ethers.getSigners();

    console.log(
        "Deploying contracts with the account:",
        deployer.address
    );

    console.log("Account balance:", (await deployer.getBalance()).toString());

    const Staking = await ethers.getContractFactory("Staking");
    const staking = await Staking.deploy(...constructorArgs);
    // staking.constructor()

    console.log("Staking address:", staking.address);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });

