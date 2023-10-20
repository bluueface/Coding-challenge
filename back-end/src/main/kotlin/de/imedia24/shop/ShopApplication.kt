package de.imedia24.shop

import de.imedia24.shop.domain.model.Product
import de.imedia24.shop.domain.model.Stock
import de.imedia24.shop.domain.repository.ProductRepository
import de.imedia24.shop.service.ProductService
import org.springframework.boot.CommandLineRunner
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.autoconfigure.domain.EntityScan
import org.springframework.boot.runApplication
import org.springframework.context.ApplicationContext
import org.springframework.context.annotation.Bean
import java.math.BigDecimal
import java.time.ZonedDateTime

@SpringBootApplication
@EntityScan(basePackages = ["de.imedia24.shop"])
class ShopApplication{
	@Bean
	fun init(ctx: ApplicationContext) = CommandLineRunner {
		val productService = ctx.getBean(ProductService::class.java)

		val product1 = Product(
				sku = "1",
				name = "Sample Product",
				description = "A sample product description",
				price = BigDecimal("49.99"),
				createdAt = ZonedDateTime.now(),
				updatedAt = ZonedDateTime.now(),
		)
		val product2 = Product(
				sku = "2",
				name = "Sample Product",
				description = "A sample product description",
				price = BigDecimal("49.99"),
				createdAt = ZonedDateTime.now(),
				updatedAt = ZonedDateTime.now()
		)
		val product3 = Product(
				sku = "3",
				name = "Sample Product",
				description = "A sample product description",
				price = BigDecimal("49.99"),
				createdAt = ZonedDateTime.now(),
				updatedAt = ZonedDateTime.now()
		)

		val p1 = productService.addProduct(product1)
		val p2 = productService.addProduct(product2)
		val p3 = productService.addProduct(product3)

		println(p1.sku)
		println(p2.sku)
		println(p3.sku)
	}
}

fun main(args: Array<String>) {
	runApplication<ShopApplication>(*args)
}
