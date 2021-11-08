import React from 'react'
import { Container, Text, Icon, Form, FormContent, FormWrap, FormH1, FormLabel, FormInput, FormButton } from './SigninElements'

export default function SigniN() {
    return (
        <Container>
            <FormWrap>
                <Icon to="/"> dolla </Icon>
                <FormContent>
                    <Form action="#">
                        <FormH1>
                            Sign in to your account
                        </FormH1>
                        <FormLabel htmlFor="email"> Email</FormLabel>
                        <FormInput type="email" required/>

                        <FormLabel htmlFor="password"> Password</FormLabel>
                        <FormInput type="password" required/>

                        <FormButton type="submit"> Continue</FormButton>
                        <Text> Forgot password</Text>
                    </Form>
                </FormContent>
            </FormWrap>
        </Container>
    )
}
