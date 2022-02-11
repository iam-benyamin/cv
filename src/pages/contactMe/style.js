import styled from "styled-components";

export const AboutMeStyle = styled.div `
    padding-bottom: 60px;
    position: relative;
    min-height: 70vh;
    img {
        position: absolute;
        top: 15%;
        right: 30%;
        z-index: -1;
        overflow: hidden;
        width: 1000px;
    }
    .social {
        a {
            color: #333;
            font-size: 24px;
            display: inline-block;
            float: right;
            margin: 20px;
            padding: 5px;
            &:hover {
                color: #165858;
            }
        }
    }
    .mail {
        margin-top: 130px;
        clear: both;
        form {
            input {
                all: unset;
                border-bottom: 1px solid #333;
                display: block;
                margin: 25px 10px;
                width: 300px;
                padding: 10px;
                color: #333;
            }
            textarea {
                all: unset;
                border-bottom: 1px solid #333;
                display: block;
                margin: 25px 10px;
                width: 300px;
                padding: 10px;
                color: #333;
            }
            button {
                all: unset;
                padding: 10px 40px;
                margin: 10px;
                color: #333;
                box-shadow: 0 1px 4px rgba(0,0,0,.4);
                &:hover {
                    cursor: pointer;
                    box-shadow: inset 0 1px 4px rgba(0,0,0,.4);
                }
            }
        }
    }
`;