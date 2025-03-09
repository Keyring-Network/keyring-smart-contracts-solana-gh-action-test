use anchor_lang::prelude::*;

declare_id!("2jSp5Yi6LjGN55tN1kdVKDkLJbo8moCHWkqhRekdJ4er");

#[program]
pub mod hello_world_extended {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}
