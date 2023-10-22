package de.imedia24.shop.domain.model

import javax.persistence.*

@Entity
@Table(name = "stock")
@NoArg
data class Stock (
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "stock_id", nullable = false)
    var id: Long,

    @Column(name = "quantity", nullable = false)
    var quantity: Int
){
    // -1 is just a default value JPA will take care and generate new value
    constructor(quantity: Int) : this(-1,quantity = quantity)
}