package de.imedia24.shop.domain.dto

import java.math.BigDecimal

data class ProductDto(
    val sku: String,
    val name: String,
    val description: String,
    val price: BigDecimal
)
