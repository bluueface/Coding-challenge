package de.imedia24.shop.domain.dto

import java.math.BigDecimal

data class PartialProductDto(
        val name: String?,
        val description: String?,
        val price: BigDecimal?
)