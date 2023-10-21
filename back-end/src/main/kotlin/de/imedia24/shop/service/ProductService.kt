package de.imedia24.shop.service

import de.imedia24.shop.domain.model.Product

interface ProductService {

    fun findProductBySku(sku: String): Product?
    fun findProductsBySkus(skus: List<String>): List<Product>
    fun addProduct(product:Product) : Product

}