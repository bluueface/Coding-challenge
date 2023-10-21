package de.imedia24.shop.web.controller

import de.imedia24.shop.domain.dto.PartialProductDto
import de.imedia24.shop.domain.dto.ProductDto
import de.imedia24.shop.service.ProductService
import de.imedia24.shop.web.exception.ProductAlreadyExistsException
import de.imedia24.shop.web.exception.ProductNotFoundException
import org.slf4j.LoggerFactory
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
class ProductController(private val productService: ProductService){

    private val logger = LoggerFactory.getLogger(ProductController::class.java)!!


    @GetMapping("/product/{sku}", produces = ["application/json;charset=utf-8"])
    fun findProductBySku(
            @PathVariable("sku") sku: String
    ): ResponseEntity<ProductDto> {
        logger.info("Request for product $sku")

        val productDto = productService.findProductBySku(sku) ?:
            throw ProductNotFoundException("Product with sku: $sku not found")

        return ResponseEntity.ok(productDto)
    }

    @GetMapping("/products", produces = ["application/json;charset=utf-8"])
    fun findProductsBySkus(
            @RequestParam("skus") skus: List<String>
    ): ResponseEntity<List<ProductDto>> {
        logger.info("Request for products with SKUs: $skus")

        val products = productService.findProductsBySkus(skus)

        return ResponseEntity.ok(products)
    }

    @PostMapping("/product/add", produces = ["application/json;charset=utf-8"])
    fun addProduct(
            @RequestBody productDto: ProductDto
    ): ResponseEntity<ProductDto> {
        logger.info("Adding a new product")

        val addedProduct = productService.addProduct(productDto) ?:
           throw ProductAlreadyExistsException("Product with sku: ${productDto.sku} already exists")

        return ResponseEntity.status(HttpStatus.CREATED).body(addedProduct)
    }

    @PatchMapping("/product/partial-update/{sku}", produces = ["application/json;charset=utf-8"])
    fun partialUpdateProduct(
            @PathVariable("sku") sku: String,
            @RequestBody partialProduct: PartialProductDto
    ): ResponseEntity<ProductDto> {
        logger.info("Update product with sku: $sku  partially")

        val productUpdated = productService.updateProductPartially(sku, partialProduct) ?:
            throw ProductNotFoundException("Product with sku: $sku not found")

        return ResponseEntity.ok(productUpdated)
    }
}
