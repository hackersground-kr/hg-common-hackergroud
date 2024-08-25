import React, {useState} from "react";
import ScenePage from "@src/page/play/scene/ScenePage";
import {UserDictionary, UserType} from "@src/@types/types";
import {useLocation} from "react-router-dom";

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
                            message: '평소보다 더 잘 일어난 박병춘. 회사를 가기위해 가볍게 샤워를 하고 나온다.'
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
                            message: `${name}은 급하게 준비를 마치고 회사로 달려간다.`
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
                            message: '그래서 취준생으로 1년이란 시간이 흐르고… 개발감을 잊지 않기 위해 해커톤이라도 나가자 생각한 박병춘'
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
                            message: '낙심한채 박병춘은 잠에 들게 된다…'
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
        </>
    );
}