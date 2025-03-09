#!/bin/bash

set -e

echo "Building..."

anchor build

echo -e "\n"

echo "Testing..."

anchor test tests/**/*.test.ts --skip-build

echo "Finished testing"