[package]
name = "spl-math"
version = "0.1.0"
description = "Solana Program Library Math"
authors = ["Solana Maintainers <maintainers@solana.foundation>"]
repository = "https://github.com/solana-labs/solana-program-library"
license = "Apache-2.0"
edition = "2018"

[features]
no-entrypoint = []
test-bpf = []

[dependencies]
borsh = "0.9"
borsh-derive = "0.9.0"
num-derive = "0.3"
num-traits = "0.2"
solana-program = "1.9.9"
thiserror = "1.0"
uint = "0.9"

[dev-dependencies]
proptest = "1.0.0"
solana-program-test = "1.9.9"
solana-sdk = "1.9.9"

[lib]
crate-type = ["cdylib", "lib"]

[package.metadata.docs.rs]
targets = ["x86_64-unknown-linux-gnu"]
