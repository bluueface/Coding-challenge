package de.imedia24.shop.domain.repository

import de.imedia24.shop.domain.model.Stock
import org.springframework.data.repository.CrudRepository
import org.springframework.stereotype.Repository

@Repository
interface StockRepository : CrudRepository<Stock, Long>