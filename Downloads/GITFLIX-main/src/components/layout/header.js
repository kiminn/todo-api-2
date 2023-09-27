import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";
import { flexAlignCenter } from "../../styles/common.style";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {

    const [searchBox, setSearchBox] = useState(false);
    const onClickSearch = (prev) => {
        setSearchBox((prev) => !prev);
    };

    const navigate = useNavigate();

  const searchMovie = (e) => {
    if (e.key === "Enter") {
      let keyword = e.target.value;
      console.log(keyword);
      navigate(`/search/?q=${keyword}`);
    }
  };
  

  return (
    <S.Wrapper>
      <S.Container>
        <S.Logo src="img/githubicon.png"></S.Logo>
        <nav>
          <S.Ul>
            <li onClick={() => navigate('/now-playing')}>Now Playing</li>
            <li onClick={() => navigate('/popular')}>Popular</li>
            <li onClick={() => navigate('/top-rated')}>Top Rated</li>
            <li onClick={() => navigate('upcoming')}>Upcoming</li>
          </S.Ul>
        </nav>
        {searchBox ? (
          <S.SearchBox>
            <S.Input placeholder="제목을 입력하세요" onKeyPress={(e) => searchMovie(e)} />
            <S.Icon>
              <AiOutlineSearch onClick={onClickSearch} size={30} />
            </S.Icon>
          </S.SearchBox>
        ) : (
          <S.Icon>
            <AiOutlineSearch onClick={onClickSearch} size={30} />
          </S.Icon>
        )}
      </S.Container>
    </S.Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`

    width: 100%;
    position: fixed;
    z-index: 10;
    background-color: black;

`;

const Container = styled.div`
  ${flexAlignCenter}
  font-size: 1.2rem;
  margin: 20px 80px;
`;

const Logo = styled.img`
  cursor: pointer;
  width: 50px;
  margin-left: 50px;
  margin-right: 40px;
`;

const Ul = styled.div`
  display: flex;
  padding-right: 590px;
  li {
    padding: 10px;
    font-size: 1rem;
    font-weight: ${({theme}) => theme.FONT_WEIGHT.bold};
    cursor: pointer;
    ${flexAlignCenter}
    transition:color .2s ease;
    &:hover {
      color: ${({ theme }) => theme.COLORS.primary};
    }
  }
`;

const SearchBox = styled.div`

    border: 1px solid #fff;
    border-radius: 4px;
    display: flex;

`;

const Input = styled.input`
  border: none;
  outline: none;
  background-color: transparent;
  width: 200px;
  font-size: ${({ theme }) => theme.FONT_SIZE.middle};
`;

const Icon = styled.div`
  display: inline-block;
`;

const S = {
  Logo,
  Container,
  Wrapper,
  Ul,
  Input,
  SearchBox,
  Icon,
};
