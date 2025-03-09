use anchor_lang::prelude::*;

declare_id!("GkUVBKTUKJ5Ab31fVbFtXwpXBuSmyQBNUCJWAbgherws");

#[program]
pub mod hello_world {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}
