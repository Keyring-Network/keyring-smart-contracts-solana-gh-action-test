import * as anchor from "@coral-xyz/anchor";

import { seeds } from "./constants";

const getHello = (user: anchor.web3.PublicKey, programId: anchor.web3.PublicKey) => {
    return anchor.web3.PublicKey.findProgramAddressSync(
        [Buffer.from(seeds.hello), user.toBuffer()],
        programId
    )[0];
};

export { getHello };
