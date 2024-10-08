package com.server

import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController


@RestController
@RequestMapping("/ai")
@CrossOrigin(origins = ["*"])
class AIController(
    private val store: StoreService,
    private val aiService: AiService
) {

    @PostMapping("/1")
    fun sin1(
        @RequestBody request: Request
    ): Any{
        return aiService.sin1(request.text)
    }

    @PostMapping("/2")
    fun sin2(
        @RequestBody request: Sin2Request
    ): Any{
        return aiService.sin2(request)
    }


    @PostMapping("/3")
    fun sin3(
        @RequestBody request: Request
    ): Any{
        return aiService.sin3(request.text)
    }

    @PostMapping("/4")
    fun sin4(
        @RequestBody sin4Request: Sin4Request
    ): Any {
        store.add(sin4Request)
        return aiService.sin4(sin4Request)
    }


}