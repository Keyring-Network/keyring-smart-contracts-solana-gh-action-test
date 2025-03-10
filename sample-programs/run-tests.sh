#!/bin/bash

set -e

echo "Building..."

anchor build

echo -e "\n"

echo "Testing..."

anchor test --skip-build

echo "Finished testing"