import * as anchor from "@coral-xyz/anchor";
import { Program } from "@coral-xyz/anchor";
import { HelloWorld } from "../../target/types/hello_world";

import { getHello } from "../utils/utils";
import { assert } from "chai";

describe("HelloWorld", () => {
    const provider = anchor.AnchorProvider.env();
    anchor.setProvider(provider);

    const program = anchor.workspace.HelloWorld as Program<HelloWorld>;

    const user = provider.wallet as anchor.Wallet;

    it("Is initialized!", async () => {
        const helloAccountPubkey = getHello(user.publicKey, program.programId);

        await program.methods
            .initialize()
            .accounts({
                user: user.publicKey,
                helloAccount: helloAccountPubkey,
                systemProgram: anchor.web3.SystemProgram.programId,
            })
            .rpc();

        const helloAccount = await program.account.hello.fetch(helloAccountPubkey);

        assert.equal(helloAccount.message, "hello world");
    });
});
