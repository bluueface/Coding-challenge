package de.imedia24.shop.web

import de.imedia24.shop.domain.dto.PartialProductDto
import de.imedia24.shop.domain.dto.ProductDto
import de.imedia24.shop.domain.dto.mapper.ProductMapper
import de.imedia24.shop.domain.model.Product
import de.imedia24.shop.service.ProductService
import org.slf4j.LoggerFactory
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PatchMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestParam
import org.springframework.web.bind.annotation.RestController
import java.time.ZonedDateTime

@RestController
class ProductController(private val productService: ProductService){

    private val logger = LoggerFactory.getLogger(ProductController::class.java)!!


    @GetMapping("/product/{sku}", produces = ["application/json;charset=utf-8"])
    fun findProductBySku(
            @PathVariable("sku") sku: String
    ): ResponseEntity<ProductDto> {
        logger.info("Request for product $sku")

        val product = productService.findProductBySku(sku)
        return if(product == null) {
            ResponseEntity.notFound().build()
        } else {
            ResponseEntity.ok(ProductMapper.toProductDto(product))
        }
    }

    @GetMapping("/products", produces = ["application/json;charset=utf-8"])
    fun findProductsBySkus(
            @RequestParam("skus") skus: List<String>
    ): ResponseEntity<List<ProductDto>> {
        logger.info("Request for products with SKUs: $skus")

        val products = productService.findProductsBySkus(skus)

        return ResponseEntity.ok(products.map { ProductMapper.toProductDto(it) })
    }

    @PostMapping("/product/add", produces = ["application/json;charset=utf-8"])
    fun addProduct(
            @RequestBody product: Product
    ): ResponseEntity<Product> {
        logger.info("Adding a new product")

        val addedProduct = productService.addProduct(product)

        return ResponseEntity.status(HttpStatus.CREATED).body(addedProduct)
    }

    @PatchMapping("/product/partial-update/{sku}", produces = ["application/json;charset=utf-8"])
    fun partialUpdateProduct(
            @PathVariable("sku") sku: String,
            @RequestBody partialProduct: PartialProductDto
    ): ResponseEntity<ProductDto> {
        logger.info("Partial update for product $sku")

        val existingProduct = productService.findProductBySku(sku) ?: return ResponseEntity.notFound().build()

        // Update only the fields that are provided in the partialProduct
        partialProduct.name?.let { existingProduct.name = it }
        partialProduct.description?.let { existingProduct.description = it }
        partialProduct.price?.let { existingProduct.price = it }

        existingProduct.updatedAt = ZonedDateTime.now()

        val updatedProduct = productService.addProduct(existingProduct)

        return ResponseEntity.ok(ProductMapper.toProductDto(updatedProduct))
    }
}
