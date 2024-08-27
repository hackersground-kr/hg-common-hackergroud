package com.server

import org.springframework.stereotype.Service

@Service
class StoreService {

    private val map: MutableMap<Int, Sin4Request> = HashMap()
    private var cnt: Int = 1

    fun add(dto: Sin4Request) {
        map[cnt++] = dto
    }

    fun get(id: Int): Sin4Request? {
        return map[id]
    }

    fun getAll(): List<Sin4Request> {
        return map.values.toList()
    }
}