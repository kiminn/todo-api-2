import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faBan, faCheck } from '@fortawesome/free-solid-svg-icons';

import { styled } from 'styled-components';
import { flexAlignCenter, flexCenter } from 'styles/common.style';
import { useRef, useState } from 'react';

const OneTodo = ({ todo, setTodoList, todoList }) => {
    const [isEditMode, setIsEditMode] = useState(false);
    // const [editTodoContent, setEditTodoContent] = useState(todo.content);
    // todo.content는 editTodoContent의 기본값
    // state바뀔때마다 랜더링 된다는 단점!

    // const onChangeTodoContent = (e) => {
    //     setEditTodoContent(e.target.value);
    // };
    // 얘는 UI가 바뀌지 않음, 랜더링 시킬 필요가 있는가? (X)
    // ref 로 접근하여 데이터 가져와보기

    const todoContentInput = useRef(null);
    const onEditTodo = () => {
        if (!isEditMode) return setIsEditMode(true);
        if (window.confirm('정말 수정하시겠습니까?')) {
            // setTodoLIst( 내가 특정한 수정값이 적용된 todoList 배열 )
            // setTodoList((todoList) => {
            //     const updateTodo = todoList.find((el) => el.id === todo.id )
            //     updateTodo.content = todoContentInput.current.value;
            //     console.log(todoList)
            //     return todoList;
            // });
            // setIsEditMode(false);

            const _todoList = [...todoList];
            const updateTodo = _todoList.find((el) => el.id === todo.id);
            updateTodo.content = todoContentInput.current.value;
            setTodoList(_todoList);
            setIsEditMode(false);
        }
    }; 

    /* delete구현: todo.id , filter */
    const onDeleteTodo = () => {

    }

    return (
        <S.Wrapper>
            <S.Header>
                <S.StateBox>
                    <FontAwesomeIcon icon={faCheck} onClick={onEditTodo} />
                </S.StateBox>
                <S.Title>
                    <div>{todo.title}</div>
                    <div>
                        <FontAwesomeIcon icon={faPen} onClick={onEditTodo} />
                        <FontAwesomeIcon icon={faBan} onClick={onDeleteTodo} />
                    </div>
                </S.Title>
            </S.Header>
            <S.Content>
                {/* editmode가 true면 수정가능한 textarea를, 아니면 todo.content보여주기 */}
                {/* value로 고정시킴 아무리수정되어도 고정돼서 안바뀜 -> onChange이벤트를 넣어서 변화감지 */}
                {isEditMode ? (
                    // 아래 state불필요한 랜더링 발생하지않도록 최적화시킨 것
                    <textarea
                        defaultValue={todo.content}
                        ref={todoContentInput}
                        // value={editTodoContent} onChange={onChangeTodoContent}
                    ></textarea>
                ) : (
                    todo.content
                )}
            </S.Content>
        </S.Wrapper>
    );
};
export default OneTodo;

const Wrapper = styled.li`
    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.white};
    border: 1px solid #999;
    margin: 16px 0;
    border-radius: 8px;
    background-color: ${({ state, theme }) => (state ? theme.COLORS.gray[100] : theme.COLORS.white)};
`;

const Header = styled.div`
    border-bottom: 1px dotted #999;
    ${flexAlignCenter};
    padding: 8px 16px;
    height: 48px;
`;

const Title = styled.h1`
    width: 100%;
    display: flex;
    justify-content: space-between;
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
    text-decoration: ${({ state }) => (state ? 'line-through' : 'none')};
    & svg {
        cursor: pointer;
        margin-left: 16px;
        :hover {
            transform: scale(1.2);
        }
    }
`;

const StateBox = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    margin-right: 8px;
    ${flexCenter};
    color: ${({ state }) => (state ? '#3CB371' : '#999')};
    cursor: pointer;
    :hover {
        transform: scale(1.2);
    }
`;

const Content = styled.div`
    padding: 16px;
    text-decoration: ${({ state }) => (state ? 'line-through' : 'none')};
    & textarea {
        width: 100%;
        height: 100%;
        border: 1px dotted #999;
        outline: none;
        resize: none;
    }
`;

const S = {
    Wrapper,
    Header,
    StateBox,
    Title,
    Content,
};
