nest g module modules/products
git clone https://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@github.com/hoank97/product-module.git
rm -rf src/modules/products
mv product-module/products src/modules
rm -rf product-module
