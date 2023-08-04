/* 
    컴포넌트를 나눠야하는 이유
    1. 가독성
    2. 관심사 분리, 단일 책임 원칙 (유지보수)
    3. 랜더링 최적화
*/

import SYButton from 'components/Button';
import { styled } from 'styled-components';
import { flexAlignCenter, flexCenter } from 'styles/common.style';

const AddTodoModal = ({ onAddTodo, onClose }) => {
  
    return (
        <S.Wrapper>
            <S.Form onSubmit={onAddTodo}> 
            {/* e.target 을 form에 가져오려면 submit이벤트로 가져와야함 => form에 대한 성질이기 때문에 */}
                <S.Title>
                    <h1>ADD TODO LIST</h1>
                    <button type='button' onClick={onClose}>x</button>
                </S.Title>
                <S.Content>
                    <input placeholder="제목을 입력해주세요" name="title" />
                    <textarea placeholder="할 일을 입력해주세요" name="content" />
                </S.Content>
                <SYButton variant={'primary'} size={'full'}>
                    ADD
                </SYButton>
            </S.Form>
        </S.Wrapper>
    );
};
export default AddTodoModal;

const Wrapper = styled.div`
    position: fixed;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 1000;
`;

const Form = styled.form`
    width: 480px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: ${({ theme }) => theme.COLORS.white};
    border-radius: 8px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
    padding: 32px;
`;

const Title = styled.div`
    font-size: 24px;
    ${flexAlignCenter};
    justify-content: space-between;

    & > button {
        border: none;
        cursor: pointer;
        &:hover {
            transform: scale(1.2);
        }
    }
`;

const Content = styled.div`
    ${flexCenter};
    margin-top: 16px;
    flex-direction: column;

    & > input {
        width: 100%;
        height: 40px;
        border: none;
        outline: none;
        border-radius: 8px;
        padding: 0 16px;
        margin-bottom: 16px;
    }

    & > textarea {
        width: 100%;
        height: 200px;
        border: none;
        outline: none;
        border-radius: 8px;
        padding: 16px;
    }
`;

const Button = styled.button`
    display: block;
    width: 64px;
    height: 64px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.COLORS.primary[300]};
    color: ${({ theme }) => theme.COLORS.fontColor};
    margin: 0 auto;
    cursor: pointer;
    :hover {
        background-color: transparent;
        color: ${({ theme }) => theme.COLORS.primary[300]};
    }
`;

const S = {
    Wrapper,
    Form,
    Content,
    Title,
    Button,
};
