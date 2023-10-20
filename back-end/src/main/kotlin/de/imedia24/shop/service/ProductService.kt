package de.imedia24.shop.service

import de.imedia24.shop.domain.dto.ProductDto
import de.imedia24.shop.domain.model.Product

interface ProductService {
    fun addProduct(product:Product) : Product
    fun findProductBySku(sku: String): ProductDto?
    fun findProductsBySkus(skus: List<String>): List<ProductDto>
}