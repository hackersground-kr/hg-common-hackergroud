import React, {useState} from "react";
import ScenePage from "@src/page/play/scene/ScenePage";
import {UserDictionary, UserType} from "@src/@types/types";
import {useLocation} from "react-router-dom";
import {josa} from "es-hangul";

export default function PlayPage() {

    const [scene, setScene] = useState(0);
    const location = useLocation();
    const name = location.state.name;

    function nextScene() {
        setScene(scene + 1);
    }

    return (
        <>
            {scene === 0 && (
                <ScenePage
                    backgroundUrl={'image/bg3.png'}
                    chats={[
                        {
                            userType: UserType.Hero,
                            message: '흠... 오늘따라 왜 이렇게 상쾌하지?',
                            vibration: true,
                        },
                        {
                            userType: UserType.Narration,
                            message: `평소보다 더 잘 일어난 ${josa(name, '은/는')} 회사를 가기위해 가볍게 샤워를 하고 나온다.`
                        },
                        {
                            userType: UserType.Narration,
                            message: '그러고는 귀찮은듯 업무 확인을 하기위해 폰을 본다.'
                        },
                        {
                            userType: UserType.Hero,
                            message: '오늘은 무슨 재밌는 일이 일어날까?.......???????? 아니 이게 뭐야!!!!!!!!!!!!!!!!!!!!!!!!!!!!!',
                        },
                        {
                            userType: UserType.Narration,
                            message: '탁자 위에 놓인 휴대폰의 알림을 확인하자 밤새 부재중 전화 69통, 슬랙 알림 74개가 쌓여있었다.'
                        },
                        {
                            userType: UserType.Narration,
                            message: '이메일로는 DB 인스턴스 3개 중에 무려 3개 모두 삭제가 되었다고 7시간 전에 도착해있었다.'
                        },
                        {
                            userType: UserType.Hero,
                            message: '아... 이런 이게 뭐야 하... 내 인생.. (대충 신세한탄)'
                        },
                        {
                            userType: UserType.Narration,
                            message: `${josa(name, '은/는')} 급하게 준비를 마치고 회사로 달려간다.`
                        }
                    ]}
                    onEnded={() => {
                        nextScene();
                    }}
                />
            )}
            {scene === 1 && (
                <ScenePage
                    backgroundUrl={'image/bg4.png'}
                    chats={[
                        {
                            userType: UserType.KangSeongMin,
                            message: `${name}씨 당신이 지금 무슨일을 한지 알아?????`
                        },
                        {
                            userType: UserType.Hero,
                            message: '죄송합니다...'
                        },
                        {
                            userType: UserType.KangSeongMin,
                            message: '이거 죄송하다고 해결될 문제가 아니야 니가 어제 서버를 초기화 하고 잠수를 타 우리 신안 은행이 배상해야하는 금액이 100억이야!!!!!!'
                        },
                        {
                            userType: UserType.Hero,
                            message: '죄송합니다...'
                        },
                        {
                            userType: UserType.KangSeongMin,
                            message: '나가! 넌 오늘부터 해고야'
                        }
                    ]}
                    onEnded={() => {
                        nextScene();
                    }}
                />
            )}
            {scene === 2 && (
                <ScenePage
                    backgroundUrl={'image/bg5.png'}
                    chats={[
                        {
                            userType: UserType.Narration,
                            message: "그렇게 고등학교 부터 열심히 공부해 신안은행을 들어갔지만 2년만에 서버를 날려버리고 백수로 돌아가게 된다."
                        }
                    ]}
                    onEnded={() => {
                        nextScene();
                    }}
                />
            )}
            {scene === 3 && (
                <ScenePage
                    backgroundUrl={'image/bg3.png'}
                    chats={[
                        {
                            userType: UserType.Hero,
                            message: '이대로 포기하고 백수로 살순 없어! 취업준비를 할꺼야!!'
                        },
                        {
                            userType: UserType.Narration,
                            message: '하지만 서버를 날려먹은 실수를 한 서버 개발자를 누가 뽑아주겠는가?'
                        },
                        {
                            userType: UserType.Narration,
                            message: `그래서 취준생으로 1년이란 시간이 흐르고… 개발감을 잊지 않기 위해 해커톤이라도 나가자 생각한 ${name}`
                        },
                        {
                            userType: UserType.Narration,
                            message: '의성에서 진행하는 해커그라운드 해커톤에 지원하게 되는데…'
                        },
                        {
                            userType: UserType.Narration,
                            message: '결과는 탈락...'
                        },
                        {
                            userType: UserType.Narration,
                            message: `낙심한채 ${josa(name, '은/는')} 잠에 들게 된다…`
                        }
                    ]}
                    onEnded={() => {
                        nextScene();
                    }}
                />
            )}
            {scene === 4 && (
                <ScenePage
                    backgroundUrl={'image/bg3.png'}
                    chats={[
                        {
                            userType: UserType.Hero,
                            message: '흑…머리가 왜이렇게 아프지….?'
                        },
                        {
                            userType: UserType.Hero,
                            message: '(거울을 본다)'
                        },
                        {
                            userType: UserType.Hero,
                            message: '뭐야!!!!!!!!!!!!! 누구야 이거 아니 아니 * 80000'
                        },
                        {
                            userType: UserType.Hero,
                            message: '아니 뭐야 여긴 또 어디야'
                        },
                        {
                            userType: UserType.Narration,
                            message: '믿을 수 없다는듯 거울을 보고 소리친다'
                        },
                        {
                            userType: UserType.Hero,
                            message: '아니 이 못생긴 아저씬 누구야!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!'
                        },
                        {
                            userType: UserType.Narration,
                            message: '이때 큰 소리를 듣고 누군가 방문을 두들인다',
                            music: 'music/knock.mp3'
                        },
                        {
                            userType: UserType.Unknown,
                            message: '시장님 괜찮으세요?'
                        },
                        {
                            userType: UserType.Narration,
                            message: '누군가 방으로 들어왔다'
                        },
                        {
                            userType: UserType.KimMinji,
                            message: '시장님 어디 아프신가요?'
                        },
                        {
                            userType: UserType.Hero,
                            message: '당신 누구야!?'
                        },
                        {
                            userType: UserType.KimMinji,
                            message: `에이 시장님 왜 또 장난치세요.. 저 ${UserDictionary[UserType.KimMinji].name}잖아요 시장님 비서`
                        },
                        {
                            userType: UserType.Hero,
                            message: '시장..? 비서..?? 뭔소리야'
                        },
                        {
                            userType: UserType.KimMinji,
                            message: '장난 그만하세요 재미없어요 ㅡ.ㅡ'
                        },
                        {
                            userType: UserType.Hero,
                            message: '그니까 내가 시장이다..?'
                        },
                        {
                            userType: UserType.KimMinji,
                            message: '네.. 의성 시.장.님.'
                        },
                        {
                            userType: UserType.Hero,
                            message: '의성시장..? (내가 의성시장이 된거야?)'
                        },
                        {
                            userType: UserType.KimMinji,
                            message: '시장님!!!!! 장난 그만치세요!!!!!!!!! 오늘 일정이 바빠요.. 장난칠 시간이 없다고요!!'
                        },
                        {
                            userType: UserType.Hero,
                            message: '그래 알겠어 일정이 뭔데?'
                        },
                        {
                            userType: UserType.KimMinji,
                            message: '오늘 일정 브리핑 해드리겠습니다.'
                        },
                        {
                            userType: UserType.KimMinji,
                            message: '1시에 마을 이장님이랑 면담 있으시고요 3시에 청년 농부 홍길동님과 청년들을 위한 시장 만남회가 있습니다. 그리고 5시에 농업 관계자 박진수님과 지역특산물 판매전략미팅이 잡혀있습니다.'
                        },
                        {
                            userType: UserType.Hero,
                            message: '(시장이 생각보다 바쁘게 사는구나…)'
                        },
                        {
                            userType: UserType.Hero,
                            message: '일단 출발하자'
                        },
                        {
                            userType: UserType.KimMinji,
                            message: '차량 대기시켜두겠습니다.'
                        }
                    ]}
                    onEnded={() => {
                        nextScene();
                    }}
                />
            )}
            {scene === 5 && (
                <ScenePage
                    backgroundUrl={'image/bg6.webp'}
                    chats={[
                        {
                            userType: UserType.KimMinji,
                            message: '시장님 마을이장 김춘배씨 입니다.'
                        },
                        {
                            userType: UserType.KimChunBae,
                            message: '(격앙된 목소리로) 안녕하세요, 시장님! 저는 이 마을의 이장, 김춘배입니다.'
                        },
                        {
                            userType: UserType.KimChunBae,
                            message: '제발 도와주십시오! 요즘 마을이 정말 말라 비틀어지고 있어요! 다들 도망가듯 떠나고 있어요! 인구소멸을 해결하기 위한 시장님의 특출난 아이디어가 필요합니다…',
                            vibration: true
                        },
                        {
                            userType: UserType.KimChunBae,
                            message: '이렇게 점점 시간이 지나다보면 저희 마을이 사라질 수도 있을 것 같습니다…..'
                        },
                        {
                            userType: UserType.Hero,
                            message: '(뭔가 의성의 인구소멸을 해결하기 위한 좋은 아이디어가 없을까…?)'
                            // TODO: Add Input
                        },
                        {
                            userType: UserType.KimChunBae,
                            message: 'GPT의 답변... ex. 와 지존 쩌는 아이디어 입니다 행님 ㄷㄷ'
                        },
                        {
                            userType: UserType.KimMinji,
                            message: '시장님 역시 최고에요!!'
                        }
                    ]}
                    onEnded={() => {
                        nextScene();
                    }}
                />
            )}
            {scene === 6 && (
                <ScenePage
                    backgroundUrl={'image/bg7.png'}
                    chats={[
                        {
                            userType: UserType.KimMinji,
                            message: '시장님 의성군의 청년들입니다. 오늘 시장님에게 듣고싶은 이야기가 많은걸로 알고 있어요.'
                        },
                        {
                            userType: UserType.Hero,
                            message: '(살짝 부담을 가지고 컨퍼런스홀로 들어간다)'
                        },
                        {
                            userType: UserType.Narration,
                            message: '청년 농부 홍길동과 몇명의 청년들이 앉아있다'
                        },
                        {
                            userType: UserType.Hero,
                            message: '청년 여러분 안녕하세요 반갑습니다. 이시간은 여러분들과 제가 만나서 저희 의성군을 더 좋은 의성으로 만들기 위해 모인자리입니다.'
                        },
                        {
                            userType: UserType.Hero,
                            message: '여러분들의 의견을 편하게 말해주시면 제가 최대한 반영할 수 있도록 돕겠습니다.'
                        },
                        {
                            userType: UserType.Narration,
                            message: '(박수소리)',
                            music: 'music/clap.mp3'
                        },
                        {
                            userType: UserType.HongGilDong,
                            message: '청년들이 저희 의성에 안오는 이유가 뭐라고 생각하십니까?'
                        },
                        {
                            userType: UserType.Hero,
                            message: '(의성이 고령화 1등이야..? 몰랐는데… 일단 아는척 하자)'
                        },
                        {
                            userType: UserType.Hero,
                            message: '아..알죠…ㅎㅎ'
                        },
                        {
                            userType: UserType.HongGilDong,
                            message: '청년들이 저희 의성에 안오는 이유가 뭐라고 생각하십니까?'
                        },
                        {
                            // TODO: Add Select form
                            userType: UserType.Hero,
                            message: '1. 의성이 너무 시골이여서 그렇죠…?\n' +
                                '2. 놀거리가 없어서 그렇죠…?\n' +
                                '3. 일자리가 없어서 그렇죠…?'
                        },
                        {
                            userType: UserType.HongGilDong,
                            message: '맞습니다.  {선택} 때문입니다.'
                        },
                        {
                            userType: UserType.HongGilDong,
                            message: '시장님은 문제를 인식하고 있는데 왜 개선을 하지 않습니까?',
                            vibration: true
                        },
                        {
                            userType: UserType.Narration,
                            message: '홍길동의 공격적인 발언으로 사람들이 웅성웅성거린다'
                        },
                        {
                            userType: UserType.Hero,
                            message: '아.....'
                        },
                        {
                            userType: UserType.KimMinji,
                            message: '(작게 속삭이며) 시장님 뭔가 대책이 있으신가요..?'
                        },
                        {
                            // TODO : Add Input form
                            userType: UserType.Hero,
                            message: ''
                        },
                        // TODO: Add GPT
                        {
                            userType: UserType.KimMinji,
                            message: '시장님 또 한건 처리하셨군요!!!'
                        },
                    ]}
                    onEnded={() => {
                        nextScene();
                    }}
                />
            )}
            {scene === 7 && (
                <ScenePage
                    backgroundUrl={'bg8.png'}
                    chats={[
                        {
                            userType: UserType.Narration,
                            message: '시장님 지역특산물 농업 관계자 박진수씨 입니다.'
                        },
                        {
                            userType: UserType.ParkJinSoo,
                            message: '안녕하세요, 시장님. 오늘 참가해주셔서 감사합니다.'
                        },
                        {
                            userType: UserType.Hero,
                            message: '반갑습니다, 박진수 씨. 현재 상황이 어떤가요?'
                        },
                        {
                            userType: UserType.ParkJinSoo,
                            message: '최근 기상 이변으로 인해 특산물인 납작 복숭아 등에서 못난이 과일의 비율이 무려 20%나 달하고 있습니다. 이로 인해 판매에 큰 어려움을 겪고 있습니다. '
                        },
                        {
                            userType: UserType.ParkJinSoo,
                            message: '이러한 문제점을 해결하려고 주말 농장 체험등을 진행했지만 여전히 못난이 과일이 잘 팔리지 않고 있습니다.'
                        },
                        {
                            userType: UserType.Hero,
                            message: '[어떻게 해결할 수 있을까..?]'
                        },
                        // TODO: - 못난이 과일을 잼 같은 가공식품으로 만들어 판매를 지시한다.
                        // TODO: - [의견 적기] (GPT)
                        // TODO: - more GPT
                        {
                            userType: UserType.KimMinji,
                            message: '수고하셨습니다, 시장님 오늘 모든 일정을 마치셨습니다!!'
                        },
                        {
                            userType: UserType.Hero,
                            message: '너도 수고했어'
                        }
                    ]}
                    onEnded={() => {
                        nextScene();
                    }}
                />
            )}
            {scene === 8 && (
                <ScenePage
                    backgroundUrl={'image/bg9.png'}
                    chats={[
                        {
                            userType: UserType.Narration,
                            message: '박병춘은 일정 내내 성실하게 의성군의 사회문제를 해결하려고 노력하는 모습을 본 모두. 박병춘은 의성군 시민들이 가장 존경하는 사람으로 거듭나게 된다.'
                        },
                        {
                            userType: UserType.Narration,
                            message: '하지만 박병춘은 집을 가던중 의문의 교통사고를 당하고….'
                        },
                        {
                            userType: UserType.Hero,
                            message: '멈춰!! 멈추라고!!!!!!!!!!!!!'
                        }
                    ]}
                    onEnded={() => {
                        nextScene();
                    }}
                />
            )}
            {scene === 9 && (
                <ScenePage
                    backgroundUrl={'image/bg5.png'}
                    chats={[
                        {
                            userType: UserType.Hero,
                            message: '뭐야...'
                        },
                        {
                            userType: UserType.Hero,
                            message: '여긴 어디지…? 천국인가'
                        }
                    ]}
                    onEnded={() => {
                        nextScene();
                    }}
                />
            )}
            {scene === 10 && (
                <ScenePage
                    backgroundUrl={'image/bg3.png'}
                    chats={[
                        {
                            userType: UserType.Hero,
                            message: '뭐야 집이잖아?'
                        },
                        {
                            userType: UserType.Hero,
                            message: '아니 꿈이였어'
                        },
                        {
                            userType: UserType.Hero,
                            message: '아니 현실이 아니라 꿈이였어!!!!!!!!!!',
                            vibration: true
                        },
                        {
                            userType: UserType.Hero,
                            message: '꿈이 뭐 이렇게 생생한거야…..'
                        },
                        {
                            userType: UserType.Hero,
                            message: '(머리를 감싸며) 무슨 일이 있었던거지….?'
                        }
                    ]}
                    onEnded={() => {
                        nextScene();
                    }}
                />
            )}
            {scene === 11 && (
                <ScenePage
                    backgroundUrl={'image/bg10.png'}
                    chats={[
                        {
                            userType: UserType.Narration,
                            message: '박병춘은 한참동안 생각에 잠겼다'
                        },
                        {
                            userType: UserType.Narration,
                            message: '그리고 끝내 결심했다'
                        },
                        {
                            userType: UserType.Narration,
                            message: '개발자로 취업을 하지 않기로'
                        },
                        {
                            userType: UserType.Narration,
                            message: '그리고 의성으로 떠나기로 결심했다'
                        }
                    ]}
                    onEnded={() => {
                        nextScene();
                    }}
                />
            )}
            {scene === 12 && (
                <ScenePage
                    backgroundUrl={'image/'}
                    chats={[
                        {
                            userType: UserType.Narration,
                            message: '의성으로 떠난지 5년뒤...'
                        },
                        {
                            userType: UserType.Narration,
                            message: '박병춘은 의성 시장으로 당선됐고 예전 꿈에서 자신이 답변한 공약을 바탕으로 의성의 사회문제를 해결해 나갔다.'
                        }
                        // TODO: (플레이어가 답변한 공략 3개 [서버 API호출])
                    ]}
                    onEnded={() => {
                        nextScene();
                    }}
                />
            )}
        </>
    );
}