import * as anchor from "@coral-xyz/anchor";
import { Program } from "@coral-xyz/anchor";
import { HelloWorldExtended } from "../../target/types/hello_world_extended";

import { getHello } from "../utils/utils";
import { assert } from "chai";

describe("HelloWorldExtended", () => {
    const provider = anchor.AnchorProvider.env();
    anchor.setProvider(provider);

    const program = anchor.workspace.HelloWorldExtended as Program<HelloWorldExtended>;

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

    it("Can be initialized with a custom name", async () => {
        const helloAccountPubkey = getHello(user.publicKey, program.programId);
        const name = "John";

        await program.methods
            .initialize2(name)
            .accounts({
                user: user.publicKey,
                helloAccount: helloAccountPubkey,
                systemProgram: anchor.web3.SystemProgram.programId,
            })
            .rpc();

        const helloAccount = await program.account.hello.fetch(helloAccountPubkey);

        assert.equal(helloAccount.message, `hello world from ${name}`);
    });
});
