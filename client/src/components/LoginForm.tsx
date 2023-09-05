import { styled } from "styled-components"

const Container = styled.div`
    display: flex;
    height: 100vh;

    > * {
        flex-grow: 1
    }

    .image {
        background-color: #9bc9b6;
        color: #FFFFFF
    }

    .container-login-form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        form {
            font-size: 1.5rem;
            padding: 2rem;

            div {
                margin-bottom: 1rem;

                label {
                    display: block;
                    color: #5b5b5b;
                }

                input {
                    font-size: 1.5rem;
                    padding: .5rem;
                    border: 0 none;
                    border-bottom: 1px solid black;
                    outline: none;
                }

                button {
                    border: 0 none;
                    border-radius: 12px;
                    padding: .5rem;
                    font-size: 1.25rem;
                    background: #5e5e5e;
                    color: #FFFFFF;
                }
            }
        }
    }
`

const MyForm = styled.form`
    @import url('https://fonts.googleapis.com/css2?family=Hind+Madurai:wght@300&display=swap');

    border: 1px solid #d4d4d4;
    box-shadow: 2px 2px 2px -1px #0000007d;
    padding: 2rem;
    font-size: 1.5re;
    display: inline-block;
    color: #lflflf;

    .container {
        padding: 2rem;
        
        .title {
            margin-bottom: 2rem;

            h1, h2 {
                line-height: 1em;
                margin: 0;
                padding: 0;
            }

            h2 {
                font-size: 60%;
                color: #323232;
                font-weight: 300;
            }
        }

        label {
            line-height: 1rem;
            margin: 0;
        }
        
        .sign-up {

        }

    }
`

const AccentButton = styled.button`
    border: 3px solid #ec017e;

    `

// const 

export default () => <>
    <MyForm>
        <div className="containers">
            <div className="title">
                <h1>Welcome</h1>
                <h2>Willkommen сука блядь</h2>
            </div>
            <form>
                <div className="input">
                    <label>Login</label>
                    <input name="login" />
                </div>
                <div>
                    <label>Senha</label>
                    <input type="password" name="password" />
                </div>
                <div>
                    <button>entrar</button>
                    <button>recuperar senha</button>
                </div>
            </form>
        </div>
    </MyForm>

</>