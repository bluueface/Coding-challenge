package de.imedia24.shop.domain.dto.mapper

import de.imedia24.shop.domain.dto.ProductDto
import de.imedia24.shop.domain.model.Product
import de.imedia24.shop.domain.model.Stock
import java.time.ZonedDateTime

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

        fun toProduct(productDto: ProductDto): Product {
            return Product(
                    sku = productDto.sku,
                    name = productDto.name,
                    description = productDto.description,
                    price = productDto.price,
                    stock = Stock(productDto.quantity),
                    createdAt = ZonedDateTime.now(),
                    updatedAt =ZonedDateTime.now()
            )
        }
    }
}