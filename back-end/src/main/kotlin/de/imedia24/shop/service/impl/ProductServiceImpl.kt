package de.imedia24.shop.service.impl

import de.imedia24.shop.domain.dto.PartialProductDto
import de.imedia24.shop.domain.dto.ProductDto
import de.imedia24.shop.domain.dto.mapper.ProductMapper
import de.imedia24.shop.domain.repository.ProductRepository
import de.imedia24.shop.service.ProductService
import org.springframework.stereotype.Service
import java.time.ZonedDateTime

@Service
class ProductServiceImpl(private val productRepository: ProductRepository):ProductService {

    override fun findProductBySku(sku: String): ProductDto? {
        val existingProduct = productRepository.findBySku(sku) ?: return null
        return ProductMapper.toProductDto(existingProduct)
    }

    override fun findProductsBySkus(skus: List<String>): List<ProductDto> {
        val products = productRepository.findAllBySkus(skus)
        return products.map { ProductMapper.toProductDto(it) }
    }

    override fun addProduct(productDto: ProductDto): ProductDto? {
        if(productRepository.findBySku(productDto.sku) != null ){
            return null
        }
        val savedProduct = productRepository.save(ProductMapper.toProduct(productDto))
        return ProductMapper.toProductDto(savedProduct)
    }

    override fun updateProductPartially(sku: String, partialProductDto: PartialProductDto): ProductDto? {
        val existingProduct = productRepository.findBySku(sku)?: return null

        // Update only the fields that are provided in the partialProduct
        partialProductDto.name?.let { existingProduct.name = it }
        partialProductDto.description?.let { existingProduct.description = it }
        partialProductDto.price?.let { existingProduct.price = it }

        existingProduct.updatedAt = ZonedDateTime.now()

        return ProductMapper.toProductDto(productRepository.save(existingProduct))
    }

}
