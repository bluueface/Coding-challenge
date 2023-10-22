package de.imedia24.shop


import com.fasterxml.jackson.databind.ObjectMapper
import de.imedia24.shop.domain.dto.PartialProductDto
import de.imedia24.shop.domain.dto.ProductDto
import de.imedia24.shop.domain.dto.mapper.ProductMapper
import de.imedia24.shop.domain.model.Product
import de.imedia24.shop.domain.model.Stock
import de.imedia24.shop.service.ProductService
import org.hamcrest.Matchers
import org.junit.jupiter.api.Test
import org.mockito.Mockito
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest
import org.springframework.boot.test.mock.mockito.MockBean
import org.springframework.http.MediaType
import org.springframework.test.web.servlet.MockMvc
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders
import org.springframework.test.web.servlet.result.MockMvcResultMatchers
import org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath
import org.springframework.test.web.servlet.result.MockMvcResultMatchers.status
import java.math.BigDecimal
import java.time.ZonedDateTime

@WebMvcTest
class ProductControllerTests(@Autowired val mvc: MockMvc) {

    @MockBean
    lateinit var productService: ProductService
    private val mapper: ObjectMapper = ObjectMapper()


    @Test
    fun whenTheSkuExistReturnListContainingItsAssociatedProduct() {

        val product1 = Product(
                "1",
                "P1",
                "P1 product",
                BigDecimal(600),
                Stock(50),
                ZonedDateTime.now(),
                ZonedDateTime.now())

        val product2 = Product(
                "2",
                "P2",
                "P2 product",
                BigDecimal(10),
                Stock(122),
                ZonedDateTime.now(),
                ZonedDateTime.now())
        val product3 = Product(
                "3",
                "P3",
                "P3 product",
                BigDecimal(166),
                Stock(60),
                ZonedDateTime.now(),
                ZonedDateTime.now()
        )

        val products = listOf(
                ProductMapper.toProductDto(product2),
                ProductMapper.toProductDto(product3),
        )

        Mockito.`when`(productService.findProductsBySkus(listOf("1","2", "3"))).thenReturn(products)

        mvc.perform(MockMvcRequestBuilders.get("/products?skus=1,2,3"))
                .andExpect(status().isOk)
                .andExpect(jsonPath("$").isArray)
                .andExpect(jsonPath("$", Matchers.hasSize<ProductDto>(2)))
                .andExpect(MockMvcResultMatchers.content().json(mapper.writeValueAsString(products)))
    }

    @Test
    fun whenTheSkuExistTheProductUpdated(){

        val partialProduct = PartialProductDto("updated name", null, null);
        val updatedProduct = ProductDto("1", "updated name", "Desc", BigDecimal(165), 123)

        Mockito.`when`(productService.updateProductPartially("1", partialProduct)).thenReturn(updatedProduct)

        mvc.perform(MockMvcRequestBuilders.patch("/product/partial-update/1")
                .content(mapper.writeValueAsString(partialProduct)).contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk)
                .andExpect(jsonPath("$.sku").value(updatedProduct.sku))
                .andExpect(jsonPath("$.name").value(updatedProduct.name))
                .andExpect(jsonPath("$.description").value(updatedProduct.description))
                .andExpect(jsonPath("$.price").value(updatedProduct.price))
    }

    @Test
    fun whenTheSkuDoesNotExistTheProductShouldNotUpdated(){

        val partialProduct = PartialProductDto("updated name", "Desc", BigDecimal(555));

        Mockito.`when`(productService.updateProductPartially("1", partialProduct)).thenReturn(null)

        mvc.perform(MockMvcRequestBuilders.patch("/product/partial-update/1")
                .content(mapper.writeValueAsString(partialProduct)).contentType(MediaType.APPLICATION_JSON)
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isNotFound)
                .andExpect(jsonPath("$.message").value("Product with sku: 1 not found"))
    }

}