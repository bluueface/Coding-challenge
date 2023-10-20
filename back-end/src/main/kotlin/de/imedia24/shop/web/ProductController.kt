package de.imedia24.shop.web

import de.imedia24.shop.domain.dto.ProductDto
import de.imedia24.shop.service.ProductService
import org.slf4j.LoggerFactory
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.RequestParam
import org.springframework.web.bind.annotation.RestController

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
            ResponseEntity.ok(product)
        }
    }

    @GetMapping("/products", produces = ["application/json;charset=utf-8"])
    fun findProductsBySkus(
            @RequestParam("skus") skus: List<String>
    ): ResponseEntity<List<ProductDto>> {
        logger.info("Request for products with SKUs: $skus")

        val products = productService.findProductsBySkus(skus)

        return ResponseEntity.ok(products)
    }
}
