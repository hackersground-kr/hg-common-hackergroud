package com.server

import com.azure.core.annotation.Get
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestParam
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/store")
class StoreController (
    private val store: StoreService
) {

    @PostMapping
    fun add(req: Sin4Request) {
        store.add(req)
    }

    @GetMapping("/{id}")
    fun get(@PathVariable id: Int): Sin4Request? {
        return store.get(id)
    }

    @GetMapping("/all")
    fun getAll(): List<Sin4Request> {
        return store.getAll()
    }

}