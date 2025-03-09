use anchor_lang::prelude::*;

pub mod seeds {
    use super::*;

    #[constant]
    pub const HELLO: &[u8] = b"hello";
}

pub mod general {
    use super::*;

    #[constant]
    pub const ANCHOR_DISCRIMINATOR_SIZE: usize = 8;
}
