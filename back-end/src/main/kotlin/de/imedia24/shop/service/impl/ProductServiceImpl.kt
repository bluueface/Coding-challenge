package de.imedia24.shop.service.impl

import de.imedia24.shop.domain.model.Product
import de.imedia24.shop.domain.repository.ProductRepository
import de.imedia24.shop.service.ProductService
import org.springframework.stereotype.Service

@Service
class ProductServiceImpl(private val productRepository: ProductRepository):ProductService {

    override fun findProductBySku(sku: String): Product? {
        return productRepository.findBySku(sku)
    }

    override fun findProductsBySkus(skus: List<String>): List<Product> {
        return productRepository.findAllBySkus(skus)
    }

    override fun addProduct(product: Product): Product {
        return productRepository.save(product)
    }

}
