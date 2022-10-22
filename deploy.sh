yarn build
cp ./CNAME ./dist/
git add --all
git commit -am "Publish"
git push origin main
git subtree push --prefix dist origin gh-pages