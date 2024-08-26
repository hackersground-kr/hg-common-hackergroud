package com.server

import org.springframework.ai.azure.openai.AzureOpenAiChatModel
import org.springframework.ai.azure.openai.AzureOpenAiImageModel
import org.springframework.ai.azure.openai.AzureOpenAiImageOptions
import org.springframework.ai.image.ImagePrompt
import org.springframework.ai.image.ImageResponse
import org.springframework.stereotype.Service
import org.springframework.web.bind.annotation.CrossOrigin

@Service
@CrossOrigin(origins = ["*"])
class AiService(
    private val chatModel: AzureOpenAiChatModel,
    private val openaiImageOpenAiChatModel: AzureOpenAiImageModel
) {



    fun sin1(text: String) : Any{
        val promptTemplate = (
            "너는 비주얼 노벨에서 김춘배라는 마을이장 역활을 맡고있어\n" +
                    "너의 방금전의 대사는 \"{안녕하세요, 시장님! 저는 이 마을의 이장, 김춘배입니다. 제발 도와주십시오! 요즘 마을이 정말 말라 비틀어지고 있어요! 다들 도망가듯 떠나고 있어요!\n" +
                    "\n" +
                    "인구소멸을 해결하기 위한 시장님의 특출난 아이디어가 필요합니다…\n" +
                    "이렇게 점점 시간이 지나다보면 저희 마을이 사라질 수도 있을 것 같습니다…..}\"\n" +
                    "시장님이 인구소멸에 대한 좋은 아이디어를 입력할꺼야.\n" +
                    "입력값을 바탕으로 인구소멸 문제를 해결할 수 있는지 판단해주고 만약 인구소멸을 해결할 수 있다 하면 \"{\"state\" : \"true\", \"message\" : \"좋은 아이디어에 대한 반응 랜덤으로 생성해줘\"}\" 형식의 json으로 반환을 고정해서 해줘\n" +
                    "```json```로 안감싸줘도돼 그냥 json만 반환해줘" +
                    "```json```로 안감싸줘도돼 그냥 json 만 반환해줘" +
                    "```json```로 안감싸줘도돼 그냥 json 만 반환해줘" +
                    "김춘배씨 이름은 안반환해줘도돼"+
                    "======================================\n" +
                    "사용자 입력 : {$text}"
        )

        return chatModel.call(promptTemplate)
    }

    fun sin2(text: String): Any{

        val promptTemplate = (
                "너는 비주얼 노벨에서 청년 농부 홍길동 역활을 맡고있어\n" +

                        "너의 방금전의 대사는 \"{시장님은 문제를 인식하고 있는데 왜 개선을 하지 않습니까?}이야\n" +
                        "의성군의 고령화에 대하여 불만을 가진 청년이지\n" +
                        "시장님은 고령화에 대한 좋은 아이디어를 입력할꺼야.\n" +

                        "입력값을 바탕으로 고령화 문제를 해결할 수 있는지 판단해주고 만약 고령화를 해결할 수 있다 하면 \"{\"state\" : \"true\", \"message\" : \"아이디어가 좋으면 긍정적으로 시장님은 대단해요! 이런느낌 아이디어가 안좋으면 화내면서 진짜 짜증을 내줘\"}\" 형식의 json으로 반환을 고정해서 해줘\n" +
                        "```json```로 안감싸줘도돼 그냥 json으로만 반환해줘" +
                        "```json```로 안감싸줘도돼 그냥 json 만 반환해줘" +
                        "```json```로 안감싸줘도돼 그냥 json 만 반환해줘" +
                        "홍길동씨 이름은 안반환해줘도돼"+
                        "======================================\n" +
                        "사용자 입력 : {$text}"
                )


        return chatModel.call(promptTemplate)
    }

    fun sin3(text: String): Any{

        val promptTemplate = (
                "너는 비주얼 노벨에서 지역특산물 농업 관계자 박진수의 역활을 맡고있어\n" +


                        "너의 방금전의 대사는 \"{박진수 : 최근 기상 이변으로 인해 특산물인 납작 복숭아 등에서 못난이 과일의 비율이 무려 20%나 달하고 있습니다. 이로 인해 판매에 큰 어려움을 겪고 있습니다. \n" +
                        "\n" +
                        "박진수 : 이러한 문제점을 해결하려고 주말 농장 체험등을 진행했지만 여전히 못난이 과일이 잘 팔리지 않고 있습니다.}\"\n" +


                        "시장님이 못난이 과일문제에 대한 좋은 아이디어를 입력할꺼야.\n" +
                        "입력값을 바탕으로 못난이 과일 문제를 해결할 수 있는지 판단해주고 만약 못난이 과일문제를 해결할 수 있다 하면 \"{\"state\" : \"true\", \"message\" : \"좋은 경우 흥분한 반응을 랜덤으로 생성해주고 적합하지 않은경우엔 경악하며 실망한 답변을 해줘\"}\" 형식의 json으로 반환을 고정해서 해줘\n" +
                        "```json```로 안감싸줘도돼 그냥 json 만 반환해줘" +
                        "```json```로 안감싸줘도돼 그냥 json 만 반환해줘" +
                        "```json```로 안감싸줘도돼 그냥 json 만 반환해줘" +
                        "박진수씨 이름은 안반환해줘도돼"+
                        "경악하며 실망한 답변: 이런거 하지마"+
                        "======================================\n" +
                        "사용자 입력 : {$text}"
                )

        return chatModel.call(promptTemplate)
    }

    fun sin4(sin4Request: Sin4Request): Any {

        val prompt = (
                "의성의 여러 정책들인데 이 정책들을 바탕으로 대한민국 의성이 변화하는 모습의 그림을 하나를 만들어줘  표현해줘" +
                "${sin4Request.sin1}\n" + "${sin4Request.sin2}\n" + "${sin4Request.sin3}\n"
                )

        val imgPrompt =  ImagePrompt(prompt, AzureOpenAiImageOptions())
        return openaiImageOpenAiChatModel.call(imgPrompt).result.output.url
    }

}