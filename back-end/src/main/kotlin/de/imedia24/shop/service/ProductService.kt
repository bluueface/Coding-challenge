package de.imedia24.shop.service

import de.imedia24.shop.domain.dto.PartialProductDto
import de.imedia24.shop.domain.dto.ProductDto

interface ProductService {

    fun findProductBySku(sku: String): ProductDto?
    fun findProductsBySkus(skus: List<String>): List<ProductDto>
    fun addProduct(productDto: ProductDto) : ProductDto?
    fun updateProductPartially(sku: String, partialProductDto: PartialProductDto): ProductDto?

}