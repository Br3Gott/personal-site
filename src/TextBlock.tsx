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

function TextBlock(props: { name: string, role: string }) {
    return ( 
    <Paragraph> 
        {"Hi, I am "}
        <Name> 
            {props.name}
        </Name>
        {"."}<br/>
        {props.role}
    </Paragraph>
    )
}

export default TextBlock