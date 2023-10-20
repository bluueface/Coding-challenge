package de.imedia24.shop.domain.model

import javax.persistence.*

@Entity
@Table(name = "stock")
@NoArg
data class Stock (
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long,

    @Column(name = "quantity", nullable = false)
    val quantity: Int
){

}