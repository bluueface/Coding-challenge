package de.imedia24.shop.web.exception.handler

import de.imedia24.shop.web.exception.ErrorResponse
import de.imedia24.shop.web.exception.ProductAlreadyExistsException
import de.imedia24.shop.web.exception.ProductNotFoundException
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.ExceptionHandler
import org.springframework.web.bind.annotation.RestControllerAdvice

@RestControllerAdvice
class ExceptionsHandler {
    @ExceptionHandler(ProductNotFoundException::class)
    fun handleProductNotFoundException(ex: ProductNotFoundException): ResponseEntity<ErrorResponse> {
        return ResponseEntity(ErrorResponse(ex.message), HttpStatus.NOT_FOUND)
    }

    @ExceptionHandler(ProductAlreadyExistsException::class)
    fun handleProductAlreadyExistsException(ex: ProductAlreadyExistsException): ResponseEntity<ErrorResponse> {
        return ResponseEntity(ErrorResponse(ex.message), HttpStatus.CONFLICT)
    }
}