import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  min-width: 100%;
`;
export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
`;
export const ImgLog = styled.img`
  width: 150px;
  height: 80px;
  cursor: pointer;
`;
export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  overflow-y: auto;
  height: 450px;
  max-width: 1400px;
  padding: 10px;
  border-top: 1.75px solid #ffffff;

  a:-webkit-any-link {
    text-decoration: none;
  }
  @media (max-width: 567px) {
    width: 350px;
  }
  @media (max-width: 985px) {
    width: 400px;
    border: none;
  }
`;
export const Data = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 250px;
  min-height: 150px;
  padding: 10px;
  transition: 0.75s;

  @media (max-width: 985px) {
    min-width: 120px;
  }

  h3 {
    background-color: #fff;
    min-width: 150px;
    height: 100%;
    text-align: center;
    text-transform: capitalize;
    color: black;
    border-radius: 20px;
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  }
  :hover {
    transform: scale(1.1);
  }
  img {
    width: 100px;
  }
`;
export const BtnContainer = styled.footer`
  display: flex;
  justify-content: flex-end;
  width: 85%;
  margin-bottom: 30px;

  @media (max-width: 985px) {
    justify-content: center;
  }
`;
export const Btn = styled.button`
  padding: 15px;
  cursor: pointer;
  background-color: red;
  border: none;
  color: #fff;
  border-radius: 50px;
  font-size: 20px;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  font-family: -apple-system- ;
  transition: 0.75s;

:hover{
    color: black;
    transform: scale(1.1);
`;
