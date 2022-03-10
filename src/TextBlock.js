import styled from 'styled-components';

const Paragraph = styled.p `
    font-family: monospace;
    color: white;
    font-size: 25pt;
    text-align: center;
`;

const Name = styled.b `
    color: gold;
`;

function TextBlock(props) {
    return ( 
    <Paragraph> 
        {"Hi, I am "}
        <Name> 
            {props.name}
        </Name>
        {"."}<br></br> 
        {"Full Stack developer currently studying computer engineering at Linköping University."}
    </Paragraph>
    )
}

export default TextBlock