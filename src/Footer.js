import styled from 'styled-components';

const OuterBox = styled.div`
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;

    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    color: white;
    font-family: monospace;

    margin-bottom: 0.5em;

    @media (max-width: 400px){ 
        font-size: 2.2vw;
    }
    font-size: 10pt;
`;

const Box = styled.div`
    display: flex;
    align-items: center;
    color: #777;
`;

const Img = styled.img`
    height: 24px;
    width: 24x;
`;

const Text = styled.div`
    display: inline;
    padding-right: 0.2em;
`;

function Footer(props) {
    return(
    <OuterBox>
        <Box>
            <Text title="Icons provided by Icons8">Made with ❤ in Linköping, Sweden using p5.js and React</Text>
            <Img src="./react.png" alt="React" />
        </Box>
    </OuterBox>
    )
    
}

export default Footer