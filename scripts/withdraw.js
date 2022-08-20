const { getNamedAccounts, ethers } = require("hardhat")

async function main() {
    const { deployer } = getNamedAccounts()
    const fundMe = await ethers.getContract("FundMe", deployer)

    console.log("Withdrawing...")
    const txResponse = await fundMe.withdraw()
    await txResponse.wait(1)
    console.log("Git it!")
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
