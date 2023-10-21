package de.imedia24.shop.domain.repository

import de.imedia24.shop.domain.model.Product
import org.springframework.data.jpa.repository.Query
import org.springframework.data.repository.CrudRepository
import org.springframework.data.repository.query.Param
import org.springframework.stereotype.Repository

@Repository
interface ProductRepository : CrudRepository<Product, String> {
    fun findBySku(sku: String): Product?

    @Query("SELECT p FROM Product p WHERE p.sku IN :skus")
    fun findAllBySkus(@Param("skus") sku: List<String>): List<Product>
}