import SYButton from 'components/Button';
import * as S from './style';

const SignUpForm = ({ setIsFormLogin }) => {
    const onSubmitSignUp = (e) => {
        e.preventDefault();
        //로그인으로 어떻게 보내지?
        alert('회원가입되었습니다 축하합니다');
        setIsFormLogin(true);
    };

    return (
        <S.Form onSubmit={onSubmitSignUp}>
            <S.InputBox>
                <label>이메일</label>
                <input type="text" placeholder="이메일을 입력해주세요" />
            </S.InputBox>
            <S.InputBox>
                <label>비밀번호</label>
                <input type="password" placeholder="비밀번호를 입력해주세요" />
            </S.InputBox>
            <S.InputBox>
                <label>비밀번호 확인</label>
                <input type="password" placeholder="비밀번호 확인" />
            </S.InputBox>
            <SYButton shape={'shape'} size={'full'} variant={'primary'}>
                회원가입
            </SYButton>
        </S.Form>
    );
};
export default SignUpForm;
