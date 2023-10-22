package de.imedia24.shop.domain.model

import org.hibernate.annotations.UpdateTimestamp
import java.math.BigDecimal
import java.time.ZonedDateTime
import javax.persistence.*

@Entity
@Table(name = "product")
@NoArg
data class Product(
    @Id
    @Column(name = "product_id", nullable = false)
    var sku: String,

    @Column(name = "name", nullable = false)
    var name: String,

    @Column(name = "description")
    var description: String? = null,

    @Column(name = "price", nullable = false)
    var price: BigDecimal,

    @OneToOne(cascade = [CascadeType.ALL], orphanRemoval = true)
    @JoinColumn(name = "stock_id")
    var stock: Stock? = null,

    @UpdateTimestamp
    @Column(name = "created_at", nullable = false)
    var createdAt: ZonedDateTime,

    @UpdateTimestamp
    @Column(name = "updated_at", nullable = false)
    var updatedAt: ZonedDateTime,
)

