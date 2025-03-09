use anchor_lang::prelude::*;

pub mod constants;

pub use constants::*;

declare_id!("CFcEae71dUQ8sbhu7U7h4gJSAuqGUiQ3xSqDNLCk44J");

#[program]
pub mod hello_world {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        let hello_account = &mut ctx.accounts.hello_account;
        let hello_world_message = "hello world";

        hello_account.message = hello_world_message.to_string();

        msg!("Message stored in PDA: {}", hello_account.message);

        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize<'info> {
    #[account(mut)]
    pub user: Signer<'info>,

    #[account(
        init_if_needed,
        payer = user,
        space = general::ANCHOR_DISCRIMINATOR_SIZE + Hello::INIT_SPACE,
        seeds = [seeds::HELLO, user.key().as_ref()],
        bump
    )]
    pub hello_account: Account<'info, Hello>,

    pub system_program: Program<'info, System>,
}

#[account]
#[derive(InitSpace)]
pub struct Hello {
    #[max_len(50)]
    pub message: String,
}
