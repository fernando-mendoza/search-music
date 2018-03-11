import styled from 'styled-components'

export const Form = styled.form`
  display: grid;
  grid-template-columns: 10fr 1fr;
  padding: 3px;
  justify-content: center;
  box-sizing: border-box;
`
export const Input = styled.input`
  width: 100%;
  padding: 3px 6px 3px 6px;
  font-size: 18px;
  max-height: 100%;
  border-radius: 4px;
  border: 1px solid #000;
  &:focus {
    outline: none;
  }
`
export const ContainerForm = styled.div`
  width: 50%;
  text-align: center;
  margin: 6px auto 0 auto;
  transition: .3s;
  @media (max-width: 769px) {
    width: 80%;
  }
  @media(max-width: 620px) {
    width: 100%;
  }
`
export const ButtonSubmit = styled.button`
  background: #fff;
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  border-top: 1px solid #000;
  border-right: 1px solid #000;
  border-bottom: 1px solid #000;
  border-left: none;
  &:hover {
    cursor: pointer;
  }
  &:focus {
    outline: none;
  }
`
export const SearcherContainer = styled.div`
  max-width: 50%;
  text-align: center;
  margin: auto;
`
export const GridCard = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 250px));
  grid-gap: 12px;
  justify-content: center;
`
export const CardRow = styled.div`
  filter: ${props => props.blur === 'previewUrl' ?
'blur(3px)': null};
`
export const Figure = styled.figure`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const ImageContainer = styled.div`
  position: relative;
`
export const Icon = styled.div`
  border-radius: 50%;
  width: 40px;
  height: 40px;
  background: black;
  padding: 10px;
  box-sizing: border-box;
  cursor: pointer;
`
export const IconContainer = styled.div`
  position: absolute;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
`
