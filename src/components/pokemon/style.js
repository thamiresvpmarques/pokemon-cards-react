import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  min-width: 100%;
  gap: 40px;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 100%;
  padding: 30px;

  a {
    text-align: center;
    color: #fff;
    font-size: 30px;
    background-color: red;
    font-family: -apple-system-;
    width: 100px;
    height: 30px;
    text-decoration: none;
    border-radius: 20px;
    transition: 0.75s;
  }
  a:hover {
    color: black;
  }
`;
export const InfoPoke = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 450px;
  min-width: 550px;
  padding: 30px;
  gap: 20px;
  border: 1.75px solid #ffffff;

  @media (max-width: 985px) {
    flex-direction: column;
    border: none;
  }
`;

export const Poke = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 90%;
  min-width: 350px;
  gap: 30px;
  border-right: 1.75px solid #ffffff;

  @media (max-width: 985px) {
    border: none;
    min-height: 250px;
    img {
      width: 150px;
    }
  }
`;
export const H3 = styled.h3`
  text-transform: uppercase;
  font-size: 20px;
  text-align: center;
  background-color: #fff;
  min-width: 150px;
  padding: 10px;
  border-radius: 15px;

  @media (max-width: 985px) {
    font-size: 25px;
  }
`;
export const Data = styled.div`
  display: flex;
  text-align: center;
  padding: 10px;
  flex-direction: column;
  gap: 20px;
  font-family: -apple-system-;
  font-size: 20px;

  @media (max-width: 985px) {
    width: 300px;
  }
`;
export const Abilities = styled.div`
  ul {
    list-style-type: none;
  }
`;
export const H4 = styled.h4`
  text-transform: uppercase;
  background-color: #fff;
  min-width: 100px;
  text-align: center;
  border-radius: 15px;
`;
export const Type = styled.div`
  text-transform: uppercase;
  ul {
    list-style-type: none;
  }
`;
export const Moves = styled.div`
  height: 150px;
  overflow-y: auto;
  text-align: center;
`;
