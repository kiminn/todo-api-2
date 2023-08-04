import SYButton from 'components/Button';
import * as S from './style';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const SignInForm = () => {
    // 링크 이동
    const navigate = useNavigate();

    // 상태관리
    const [email, setEmail] = useState('');
    const [pw, setPw] = useState('');

    // 오류메세지
    const [emailMessage, setEmailMessage] = useState('');
    const [pwMessage, setPwMessage] = useState('');

    // 유효성검사 세팅
    const [isEmail, setIsEmail] = useState(false);
    const [isPw, setIsPw] = useState(false);

    // disabled
    const [notAllow, setNotAllow] = useState(true);

    // event
    const onChangeEmail = (e) => {
        const currentEmail = e.target.value;
        setEmail(currentEmail);
        // 유효성검사
        const emailRegExp =
            /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;

        if (!emailRegExp.test(currentEmail)) {
            setEmailMessage('이메일을 올바른 형식으로 작성해주세요');
            setIsEmail(false);
        } else {
            setEmailMessage('');
            setIsEmail(true);
        }
    };

    const onChangePw = (e) => {
        const currentPw = e.target.value;
        setPw(currentPw);
        //유효성검사 (영문자, 대소문자만 사용가능하고 최소 4 최대 14)
        const PwRegExp = /^[a-zA-z0-9]{8,14}$/;
        if (!PwRegExp.test(currentPw)) {
            setPwMessage('비밀번호는 8자리 이상 14자리 이하입니다');
            setIsPw(false);
        } else {
            setPwMessage('');
            setIsPw(true);
        }
    };

    // f12 요소가져오기 (useRef로 접근할 필요X)
    const onSubmitSignIn = (e) => {
        e.preventDefault();
        console.log(e.target.userEmail, e.target.userPw);
        const { userEmail, userPw } = e.target; // 구조분해할당
        if (userEmail.value === 'test@test.com' && userPw.value === 'test') {
            return navigate('/todo');
        }
        alert('아이디와 비밀번호를 다시 한 번 확인해주세요');
    };

    // disabled 유효성검사하며 isEmail과 isPW값에 변화가 일어날 때마다 state가 실행되게 됨
    useEffect(() => {
        if(isEmail && isPw) {
            setNotAllow(false);
            return;
        }
        setNotAllow(true)

    },[isEmail, isPw])
    

    return (
        <S.Form onSubmit={onSubmitSignIn}>
            <S.InputBox>
                <label>이메일</label>
                <input
                    type="text"
                    name="userEmail"
                    value={email}
                    placeholder="이메일을 입력해주세요"
                    onChange={onChangeEmail}
                />
            </S.InputBox>
            {/* 이메일 양식을 지키면 사라지고 아니면 떠있어야함 */}
            <p className="message" style={{ color: 'red', fontSize: 12 }}>
                {emailMessage}
            </p>
            <S.InputBox>
                <label>비밀번호</label>
                <input
                    type="password"
                    name="userPw"
                    value={pw}
                    placeholder="비밀번호를 입력해주세요"
                    onChange={onChangePw}
                />
            </S.InputBox>
            <p className="message" style={{ color: 'red', fontSize: 12 }}>
                {pwMessage}
            </p>
            <SYButton
                disabled={notAllow}
                variant={'primary'}
                size={'full'}
                shape={'shape'}
            >
                로그인
            </SYButton>
        </S.Form>
    );
};

export default SignInForm;
