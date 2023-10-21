package de.imedia24.shop.domain.dto.mapper

import de.imedia24.shop.domain.dto.ProductDto
import de.imedia24.shop.domain.model.Product

class ProductMapper {
    companion object {
        fun toProductDto(product: Product): ProductDto {
            return ProductDto(
                    sku = product.sku,
                    name = product.name,
                    description = product.description ?: "",
                    price = product.price,
                    quantity = product.stock?.quantity ?: 0
            )
        }
    }
}