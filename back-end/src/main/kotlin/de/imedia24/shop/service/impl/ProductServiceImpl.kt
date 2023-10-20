package de.imedia24.shop.service.impl

import de.imedia24.shop.domain.dto.ProductDto
import de.imedia24.shop.domain.dto.mapper.ProductMapper
import de.imedia24.shop.domain.model.Product
import de.imedia24.shop.domain.repository.ProductRepository
import de.imedia24.shop.service.ProductService
import org.springframework.stereotype.Service

@Service
class ProductServiceImpl(private val productRepository: ProductRepository):ProductService {

    override fun addProduct(product: Product): Product {
        return productRepository.save(product)
    }

    override fun findProductBySku(sku: String): ProductDto? {
        val product = productRepository.findBySku(sku)
        return product?.let { ProductMapper.toProductDto(it) }
    }

    override fun findProductsBySkus(skus: List<String>): List<ProductDto> {
        val products = productRepository.findAllBySkus(skus)
        return products.map { ProductMapper.toProductDto(it) }
    }

}
