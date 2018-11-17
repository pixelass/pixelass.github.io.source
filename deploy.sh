#!/bin/bash
git clone git@github.com:pixelass/pixelass.github.io
pushd pixelass.github.io
git config --global user.email "greg@pixelass.com"
git config --global user.name "Gregor Adams (via Circle CI)"
git config --global push.default simple
cp -r ./public/* .
git add -u
git add *
git commit -m "chore: deploy page"
git push
popd
rm -rf pixelass.github.io
