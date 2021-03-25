import React, {useState} from 'react'
import styled from 'styled-components'
import SendIcon from '@material-ui/icons/Send'
import FormatBoldIcon from '@material-ui/icons/FormatBold';
import FormatItalicIcon from '@material-ui/icons/FormatItalic';
import StrikethroughSIcon from '@material-ui/icons/StrikethroughS';
import CodeIcon from '@material-ui/icons/Code';
import TextFormatIcon from '@material-ui/icons/TextFormat';
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import FormatIndentIncreaseIcon from '@material-ui/icons/FormatIndentIncrease';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import ReorderIcon from '@material-ui/icons/Reorder';
import SortIcon from '@material-ui/icons/Sort';
import MessageIcon from '@material-ui/icons/Message';
import LinkIcon from '@material-ui/icons/Link';
import FormatSizeIcon from '@material-ui/icons/FormatSize';
import DeleteIcon from '@material-ui/icons/Delete';
import AttachFileIcon from '@material-ui/icons/AttachFile';
function ChatInput( {sendMessage}) {

    const[input, setInput] = useState("");

    const send = (e) => {
        e.preventDefault();
        if(!input) return;
        sendMessage(input)
        setInput("")
    }
    return (
        <Container>
          <InputContainer>
          <form>
              <input onChange={(e) => setInput(e.target.value)}type="text" value={input} placeholder="Message here..." />
              <SendButton type="submit" onClick={send}>
                  <Send />
              </SendButton>
          </form>
          </InputContainer>
          <Content>
            <FormatBoldIcon style={{cursor:"pointer"}}/>
            <FormatSizeIcon style={{cursor:"pointer"}}/>
            <TextFormatIcon style={{cursor:"pointer"}}/>
            <FormatItalicIcon style={{cursor:"pointer"}}/>
            <StrikethroughSIcon style={{cursor:"pointer"}}/>
            <CodeIcon style={{cursor:"pointer"}}/>
            <FormatListNumberedIcon style={{cursor:"pointer"}}/>
            <FormatListBulletedIcon style={{cursor:"pointer"}}/>
            <FormatIndentIncreaseIcon style={{cursor:"pointer"}}/>
            <Main>
                <ReorderIcon style={{cursor:"pointer"}}/>
                <SortIcon style={{cursor:"pointer"}}/>
                <MessageIcon style={{cursor:"pointer"}}/>
                <SentimentVerySatisfiedIcon style={{cursor:"pointer"}}/>
                <LinkIcon style={{cursor:"pointer"}}/>
                <AttachFileIcon style={{cursor:"pointer"}}/>
                <DeleteIcon style={{cursor:"pointer"}}/>
            </Main>
          </Content>
        </Container>
    )
}

export default ChatInput

const Container = styled.div`
    padding-left:20px;
    padding-right:20px;
    padding-bottom:24px;
`
const Content = styled.div`
background: white;
padding: 10px;
border-radius: 5px;
box-shadow: 0 1px 3px rgb( 0 0 0 / 12%), 0 1px 2px rgb(0 0 0 / 24%);
display: flex;
`
const Main = styled.div`
display: flex;
align-items: center;
padding-right: 30px;
position: absolute;
right: 0;
`

const InputContainer = styled.div`
    border: 1px solid #8D8D8E;
    border-radius: 4px;

    form{
        display: flex;
        height: 42px;
        align-items: center;
        padding-left: 20px;
        
        input {
            flex: 1;
            border: none;
            font-size: 13px;
        }
        input: focus{
            outline: none;
        }
    }
`

const SendButton = styled.button`
    background: #007a5a;
    border-radius: 2px;
    width: 32px;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 5px;
    cursor: pointer;
    border:none;

    .MuiSvgIcon-root{
        width: 18px;
    }
    :hover{
        background: #148567;
    }

`
const Send = styled(SendIcon)`
    color: #D9D9D9;

`

