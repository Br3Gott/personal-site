import styled from 'styled-components';

const OuterBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;

const Text = styled.p`
    color: white;
    font-size: 18pt;
    text-align: center;
    font-family: monospace;
`;

const Box = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 300px;
    filter: invert(1);
`;

const Img = styled.img`
    height: 48px;
    width: 48px;
`;

function Socials(props) {
    return(
    <OuterBox>
        <Text> Check these out 👇</Text>
        <Box>
            <a href="https://github.com/Br3Gott" target="_blank" rel="noreferrer"><Img src="./github.png" alt="GitHub" /></a>
            <a href="https://www.linkedin.com/in/davidsohl/" target="_blank" rel="noreferrer"><Img src="./linkedin.png" alt="LinkedIn" /></a>
            <a href="mailto:dawesohl@gmail.com" target="_blank" rel="noreferrer"><Img src="./email.png" alt="Email" /></a>
        </Box>
    </OuterBox>
    )
    
}

export default Socials